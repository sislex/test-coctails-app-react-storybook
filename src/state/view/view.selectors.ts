import {RootState} from '../store';

export const selectViewState = (state: RootState) => state.view;

export const selectIsSidebarOpen = (state: RootState) => selectViewState(state).isSidebarOpen;
