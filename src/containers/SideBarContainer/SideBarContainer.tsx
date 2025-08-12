import './SideBarContainer.scss';
import {useAppDispatch} from "../../state/hooks";
import {sidebarClose} from '../../state/view/view.slice';
import {useNavigate, useParams} from 'react-router-dom';
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {selectCocktailsTypesList} from "../../state/cocktails/cocktails.selectrors";
import SideBarComponent from "../../components/SideBarComponent/SideBarComponent";

function SideBarContainer() {
    const dispatch = useAppDispatch();
    const { cocktailType } = useParams();
    const navigate = useNavigate();
    const itemsList = useSelector(selectCocktailsTypesList);

    useEffect(() => {
        if (!cocktailType && itemsList.length > 0) {
            navigate(`/${itemsList[0]}`, { replace: true });
        }
    }, [cocktailType, itemsList, navigate]);

    const handleSidebarItemClick = (itemKey: string) => {
        navigate('/' + itemKey);
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
