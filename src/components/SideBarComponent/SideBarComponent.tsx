import './SideBarComponent.scss';
import React from "react";

export interface SideBarComponentProps {
    itemsList?: string[];
    activeItem?: string;
    onItemClick?: (key: string) => void;
    onCloseClick?: () => void;
}

function SideBarComponent({ itemsList, activeItem, onItemClick, onCloseClick }: SideBarComponentProps) {

    return (
        <div className="sidebar">

            <header className="sidebar-header sidebar-static">
                <div className="sidebar-logo">
                    Cocktails
                </div>
                <div className="sidebar-close-button">
                    <button aria-label="Open menu" className="icon" onClick={() => onCloseClick?.()}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
                        </svg>
                    </button>
                </div>
            </header>

            <div className="sidebar-content">
                {itemsList?.map((item) => (
                    <div
                        key={item}
                        className={`sidebar-item ${activeItem === item ? 'active' : ''}`}
                        onClick={() => onItemClick?.(item)}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default React.memo(SideBarComponent);