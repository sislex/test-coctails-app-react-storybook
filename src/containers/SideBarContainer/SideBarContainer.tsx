import './SideBarContainer.scss';
import {SideBarComponent} from "../../components/SideBarComponent/SideBarComponent";
import {useAppDispatch, useAppSelector} from "../../state/hooks";
import {sidebarClose} from '../../state/view/view.slice';
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect} from "react";

export function SideBarContainer() {
    const navigate = useNavigate();
    const itemsList = useAppSelector((state) => state.cocktails.cocktailsTypesList);
    const dispatch = useAppDispatch();
    const { cocktailType } = useParams();

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
