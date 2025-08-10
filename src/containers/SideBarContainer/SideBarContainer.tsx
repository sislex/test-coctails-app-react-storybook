import './SideBarContainer.scss';
import {SideBarComponent} from "../../components/SideBarComponent/SideBarComponent";
import {useAppDispatch} from "../../state/hooks";
import {sidebarClose} from "../../state/slices/internalLogic";

// import { useParams } from 'react-router-dom';

export function SideBarContainer() {
    const activeId = 'g'
    const itemsList = ['a', 'b', 'c'];

    const dispatch = useAppDispatch();

    // const { activeId } = useParams();

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
                activeId={activeId}
                onItemClick={handleSidebarItemClick}
                onCloseClick={handleSidebarCloseClick}
            ></SideBarComponent>
        </div>
    );
}