import './CocktailsContainer.scss';

import {CardListComponent} from "../../components/CardListComponent/CardListComponent";
import {SideBarContainer} from "../SideBarContainer/SideBarContainer";
import {useAppDispatch} from "../../state/hooks";
import {sidebarOpen} from '../../state/view/view.slice';
import {ICocktail} from "../../state/cocktails/cocktails.types";
import {selectIsSidebarOpen} from '../../state/view/view.selectors';
import {useSelector} from 'react-redux';
import React, {useCallback} from 'react';
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent';
import clsx from 'clsx';


function CocktailsContainer() {
  const cocktailsData: ICocktail[] = [];
  const dispatch = useAppDispatch();

  const isSidebarOpen = useSelector(selectIsSidebarOpen);

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
