import './SideBarContainer.scss';
import {SideBarComponent} from "../../components/SideBarComponent/SideBarComponent";
import {useAppDispatch, useAppSelector} from "../../state/hooks";
import {sidebarClose} from '../../state/view/view.slice';
import { useNavigate } from 'react-router-dom';

export function SideBarContainer() {
    const navigate = useNavigate();
    const itemsList = useAppSelector((state) => state.cocktails.cocktailsTypesList);
    const activeItem = useAppSelector((state) => state.cocktails.selectedCocktailType);
    const dispatch = useAppDispatch();

    const handleSidebarItemClick = (itemKey: string) => {
        navigate('/' + itemKey);
    };

    const handleSidebarCloseClick = () => {
        dispatch(sidebarClose());
    };

    return (
      <SideBarComponent
        itemsList={itemsList}
        activeItem={activeItem}
        onItemClick={handleSidebarItemClick}
        onCloseClick={handleSidebarCloseClick}
      ></SideBarComponent>
    );
}
