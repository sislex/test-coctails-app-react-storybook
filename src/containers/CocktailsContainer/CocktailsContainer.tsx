import './CocktailsContainer.scss';
import {NavBarComponent} from "../../components/NavBarComponent/NavBarComponent";
import {SideBarComponent} from "../../components/SideBarComponent/SideBarComponent";
// import { useParams } from 'react-router-dom';

export function CocktailsContainer() {
    const activeId = 'g'
    const itemsList = ['a', 'b', 'c'];


    // const { activeId } = useParams();

    const handleSidebarItemClick = (itemKey: string) => {
        console.log('Выбран элемент:', itemKey);
    };

    return (
        <div>
            <header className="cocktails-navbar">
                <NavBarComponent></NavBarComponent>
            </header>
            <div className="cocktails-content">
                <SideBarComponent
                    itemsList={itemsList}
                    activeId={activeId}
                    onItemClick={handleSidebarItemClick}
                ></SideBarComponent>
                <div className="coctails-main-content">

                </div>
            </div>
        </div>
    );
}