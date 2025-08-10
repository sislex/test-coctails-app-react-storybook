import './SideBarContainer.scss';
import {SideBarComponent} from "../../components/SideBarComponent/SideBarComponent";
import {useAppDispatch, useAppSelector} from "../../state/hooks";
import {sidebarClose} from "../../state/slices/internalLogic";

export function SideBarContainer() {
    const itemsList = useAppSelector((state) => state.cocktailsData.cocktailsList);
    const activeItem = useAppSelector((state) => state.internalLogic.activePage);
    const dispatch = useAppDispatch();

    const handleSidebarItemClick = (itemKey: string) => {
        console.log('Выбран элемент:', itemKey);
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