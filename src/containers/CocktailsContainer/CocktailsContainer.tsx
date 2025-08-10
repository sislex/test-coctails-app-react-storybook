import './CocktailsContainer.scss';
import {NavBarComponent} from "../../components/NavBarComponent/NavBarComponent";
import {ICocktailsData} from "../../components/CardComponent/CardComponent";
import {CardListComponent} from "../../components/CardListComponent/CardListComponent";
import {SideBarContainer} from "../SideBarContainer/SideBarContainer";
import {useAppDispatch, useAppSelector} from "../../state/hooks";
import {sidebarOpen} from "../../state/slices/internalLogic";

export function CocktailsContainer() {
    const cocktailsData: ICocktailsData[] = [];

    const sidebarState = useAppSelector((state) => state.internalLogic.sidebar);
    const dispatch = useAppDispatch();

    const handleSidebarOpenClick = () => {
        dispatch(sidebarOpen());
    };

    return (
        <div className={`cocktails-container ${sidebarState ? 'sidebar-open' : ''}`}>
            <header className="cocktails-navbar">
                <NavBarComponent onMenuButtonClick={handleSidebarOpenClick} />
            </header>
            <div className="cocktails-content">
                <div className={`cocktails-sidebar-content ${sidebarState ? 'sidebar--open' : ''}`}>
                    <SideBarContainer />
                </div>
                <div className="cocktails-main-content">
                    <CardListComponent cocktailsData={cocktailsData} />
                </div>
            </div>
        </div>
    );
}