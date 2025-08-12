import {RootState} from '../store';

export const selectViewState = (state: RootState) => state.view;

export const selectIsSidebarOpen = (state: RootState) => selectViewState(state).isSidebarOpen;
export const selectPopupIds = (state: RootState) => selectViewState(state).errorPopups.map(p => p.id);
export const selectedNotificationList = (state: RootState) => selectViewState(state).errorPopups;
