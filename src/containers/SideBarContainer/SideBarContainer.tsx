import './SideBarContainer.scss';
import {SideBarComponent} from "../../components/SideBarComponent/SideBarComponent";
import {useAppDispatch, useAppSelector} from "../../state/hooks";
import {sidebarClose} from '../../state/view/view.slice';
import {setSelectedCocktail} from "../../state/cocktails/cocktails.slice";

export function SideBarContainer() {
    const itemsList = useAppSelector((state) => state.cocktails.cocktailsTypesList);
    const activeItem = useAppSelector((state) => state.cocktails.selectedCocktailType);
    const dispatch = useAppDispatch();

    const handleSidebarItemClick = (itemKey: string) => {
        dispatch(setSelectedCocktail(itemKey.toLowerCase()));
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
