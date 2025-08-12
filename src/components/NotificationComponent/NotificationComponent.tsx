import './NotificationComponent.scss';
import React from "react";

export interface NotificationComponentProps {
    notificationText?: string;
}

function NotificationComponent({notificationText}: NotificationComponentProps) {
    return (
        <div className="notification">
            <div className="notification-panel" role="alert">
                <div className="notification-text">
                    <svg fill="CurrentColor" className="notification-icon">
                        <path d="M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"/>
                    </svg>
                    <span>{notificationText}</span>
                </div>
            </div>
        </div>
    );
}

export default React.memo(NotificationComponent);