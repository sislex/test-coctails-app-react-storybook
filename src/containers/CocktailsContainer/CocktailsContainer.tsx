import './CocktailsContainer.scss';
import {useAppDispatch} from "../../state/hooks";
import {sidebarOpen} from '../../state/view/view.slice';
import {selectedNotificationList, selectIsSidebarOpen} from '../../state/view/view.selectors';
import {useSelector} from 'react-redux';
import React, {useCallback, useEffect} from 'react';
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent';
import clsx from 'clsx';
import {useNavigate, useParams} from 'react-router-dom';
import { setSelectedCocktail } from '../../state/cocktails/cocktails.slice';
import {
  selectCocktailsForSelectedType,
  selectCocktailsTypesList,
  selectedCocktailsDataIsLoaded,
  selectedCocktailsDataIsLoading,
} from "../../state/cocktails/cocktails.selectrors";
import {LoaderComponent} from "../../components/LoaderComponent/LoaderComponent";
import SideBarContainer from "../SideBarContainer/SideBarContainer";
import CardListComponent from "../../components/CardListComponent/CardListComponent";
import {NotificationContainer} from "../NotificationContainer/NotificationContainer";

function CocktailsContainer() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { cocktailType } = useParams<{ cocktailType: string }>();
  const isSidebarOpen = useSelector(selectIsSidebarOpen);
  const cocktailsData = useSelector(selectCocktailsForSelectedType);
  const cocktailsList = useSelector(selectCocktailsTypesList);
  const cocktailsDataIsLoaded = useSelector(selectedCocktailsDataIsLoaded);
  const cocktailsDataIsLoading = useSelector(selectedCocktailsDataIsLoading);
  const notificationList = useSelector(selectedNotificationList);


  useEffect(() => {
    if (cocktailType) {
      if (cocktailType && !cocktailsList.includes(cocktailType)) {
        navigate(`/not-found`)
      } else {
        dispatch(setSelectedCocktail(cocktailType));
      }
    } else if (!cocktailType && cocktailsList.length > 0) {
      navigate(`/${cocktailsList[0]}`, { replace: true });
    }
  }, [cocktailType, cocktailsList, navigate, dispatch]);

  const handleSidebarOpenClick = useCallback(() => {
    dispatch(sidebarOpen());
  }, [dispatch]);

  return (
      <div className="cocktails-container">
        <header className="cocktails-navbar">
          <NavBarComponent onMenuButtonClick={handleSidebarOpenClick} />
        </header>

        <div className={clsx(
            'cocktails-content',
            { 'sidebar-open': isSidebarOpen},
        )}>
          <div className="cocktails-sidebar-content">
            <SideBarContainer />
          </div>
          <div className="cocktails-main-content">
            {cocktailsDataIsLoaded && <CardListComponent cocktailsData={cocktailsData} />}
            {cocktailsDataIsLoading && <LoaderComponent />}
          </div>
        </div>
        {notificationList && <NotificationContainer />}
      </div>
  );
}

export default React.memo(CocktailsContainer);
