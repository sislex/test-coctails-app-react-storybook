import './SideBarContainer.scss';
import {SideBarComponent} from "../../components/SideBarComponent/SideBarComponent";
// import { useParams } from 'react-router-dom';

export function SideBarContainer() {
    const activeId = 'g'
    const itemsList = ['a', 'b', 'c'];


    // const { activeId } = useParams();

    const handleSidebarItemClick = (itemKey: string) => {
        console.log('Выбран элемент:', itemKey);
    };

    return (
        <div>
            <SideBarComponent
                itemsList={itemsList}
                activeId={activeId}
                onItemClick={handleSidebarItemClick}
            ></SideBarComponent>
        </div>
    );
}