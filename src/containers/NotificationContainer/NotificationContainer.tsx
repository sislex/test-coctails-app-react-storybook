import './NotificationContainer.scss';
import NotificationComponent from "../../components/NotificationComponent/NotificationComponent";
import {IPopupError} from "../../state/view/view.types";
import React from "react";
import {useSelector} from "react-redux";
import {selectedNotificationList} from "../../state/view/view.selectors";

export function NotificationContainer() {

    const notificationList = useSelector(selectedNotificationList);

    return (
        <div className="notification-container">
            {notificationList && notificationList.map((popup: IPopupError) => (
                <div key={popup.id} className="notification-component">
                    <NotificationComponent notificationText={popup.message} />
                </div>
            ))}
        </div>
    );
}