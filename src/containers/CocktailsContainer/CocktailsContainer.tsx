import './CocktailsContainer.scss';
import {NavBarComponent} from "../../components/NavBarComponent/NavBarComponent";
import {SideBarComponent} from "../../components/SideBarComponent/SideBarComponent";
import {CardComponent, ICocktailsData} from "../../components/CardComponent/CardComponent";
// import { useParams } from 'react-router-dom';

export function CocktailsContainer() {
    const activeId = 'g'
    const itemsList = ['a', 'b', 'c'];
    const cocktailsData: ICocktailsData[] = [];

    // const { activeId } = useParams();

    const handleSidebarItemClick = (itemKey: string) => {
        console.log('Выбран элемент:', itemKey);
    };

    return (
        <div className="cocktails-container">
            <header className="cocktails-navbar">
                <NavBarComponent></NavBarComponent>
            </header>
            <div className="cocktails-content">
                <div className="cocktails-sidebar-content">
                    <SideBarComponent
                        itemsList={itemsList}
                        activeId={activeId}
                        onItemClick={handleSidebarItemClick}
                        mainPage={true}
                    ></SideBarComponent>
                </div>

                <div className="cocktails-main-content">
                    <CardComponent
                        cocktailsData={cocktailsData}
                    ></CardComponent>
                </div>
            </div>
        </div>
    );
}