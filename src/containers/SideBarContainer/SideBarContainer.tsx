import './SideBarContainer.scss';
import {SideBarComponent} from "../../components/SideBarComponent/SideBarComponent";
import {useAppDispatch, useAppSelector} from "../../state/hooks";
import {setActivePage, sidebarClose} from "../../state/internalLogic/internalLogicSlice";

export function SideBarContainer() {
    const itemsList = useAppSelector((state) => state.cocktailsData.cocktailsList);
    const activeItem = useAppSelector((state) => state.internalLogic.activePage);
    const dispatch = useAppDispatch();

    const handleSidebarItemClick = (itemKey: string) => {
        dispatch(setActivePage(itemKey.toLowerCase()));
        console.log('Выбран элемент:', itemKey.toLowerCase());
    };

    const handleSidebarCloseClick = () => {
        dispatch(sidebarClose());
    };

    return (
        <div>
            <SideBarComponent
                itemsList={itemsList}
                activeItem={activeItem}
                onItemClick={handleSidebarItemClick}
                onCloseClick={handleSidebarCloseClick}
            ></SideBarComponent>
        </div>
    );
}