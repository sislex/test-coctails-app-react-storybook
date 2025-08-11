import './CocktailsContainer.scss';

import {CardListComponent} from "../../components/CardListComponent/CardListComponent";
import {SideBarContainer} from "../SideBarContainer/SideBarContainer";
import {useAppDispatch} from "../../state/hooks";
import {sidebarOpen} from '../../state/view/view.slice';
import {ICocktail} from "../../state/cocktails/cocktails.types";
import {selectIsSidebarOpen} from '../../state/view/view.selectors';
import {useSelector} from 'react-redux';
import React, {useCallback, useEffect} from 'react';
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent';
import clsx from 'clsx';
import {useParams} from 'react-router-dom';
import { setSelectedCocktail } from '../../state/cocktails/cocktails.slice';


function CocktailsContainer() {
  const dispatch = useAppDispatch();
  const { cocktailType } = useParams<{ cocktailType: string }>();
  const cocktailsData: ICocktail[] = [];

  const isSidebarOpen = useSelector(selectIsSidebarOpen);

  useEffect(() => {
    if (cocktailType) {
      dispatch(setSelectedCocktail(cocktailType));
    }
  }, [cocktailType, dispatch]);


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
