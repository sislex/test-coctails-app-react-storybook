import './SideBarContainer.scss';
import {useAppDispatch} from "../../state/hooks";
import {sidebarClose} from '../../state/view/view.slice';
import {useNavigate} from 'react-router-dom';
import React  from "react";
import {useSelector} from "react-redux";
import {selectCocktailsTypesList, selectedCocktailType} from '../../state/cocktails/cocktails.selectrors';
import SideBarComponent from "../../components/SideBarComponent/SideBarComponent";

function SideBarContainer() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const cocktailType = useSelector(selectedCocktailType);
    const itemsList = useSelector(selectCocktailsTypesList);

    const handleSidebarItemClick = (itemKey: string) => {
        navigate('/' + itemKey);
        handleSidebarCloseClick();
    };

    const handleSidebarCloseClick = () => {
        dispatch(sidebarClose());
    };

    return (
        <SideBarComponent
            itemsList={itemsList}
            activeItem={cocktailType}
            onItemClick={handleSidebarItemClick}
            onCloseClick={handleSidebarCloseClick}
        ></SideBarComponent>
    );
}

export default React.memo(SideBarContainer);
