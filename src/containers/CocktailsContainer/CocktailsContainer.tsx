import './CocktailsContainer.scss';

import {CardListComponent} from "../../components/CardListComponent/CardListComponent";
import {SideBarContainer} from "../SideBarContainer/SideBarContainer";
import {useAppDispatch} from "../../state/hooks";
import {sidebarOpen} from '../../state/view/view.slice';
import {selectIsSidebarOpen} from '../../state/view/view.selectors';
import {useSelector} from 'react-redux';
import React, {useCallback, useEffect} from 'react';
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent';
import clsx from 'clsx';
import {useNavigate, useParams} from 'react-router-dom';
import { setSelectedCocktail } from '../../state/cocktails/cocktails.slice';
import {
  selectCocktailsForSelectedType,
  selectCocktailsTypesList
} from "../../state/cocktails/cocktails.selectrors";

function CocktailsContainer() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { cocktailType } = useParams<{ cocktailType: string }>();
  const isSidebarOpen = useSelector(selectIsSidebarOpen);
  const cocktailsData = useSelector(selectCocktailsForSelectedType);
  const cocktailsList = useSelector(selectCocktailsTypesList);

  useEffect(() => {
    if (cocktailType) {
      dispatch(setSelectedCocktail(cocktailType));
    }
    if (cocktailType && !cocktailsList.includes(cocktailType)) {
      navigate(`/not-found`)
    }
  }, [cocktailType, dispatch, navigate, cocktailsList]);


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
            <CardListComponent cocktailsData={cocktailsData} />
          </div>
        </div>
      </div>
  );
}

export default React.memo(CocktailsContainer);
