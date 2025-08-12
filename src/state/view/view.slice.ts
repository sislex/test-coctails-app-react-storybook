import {createAction, createSlice} from '@reduxjs/toolkit';
import {IViewState} from './view.types';

const initialState: IViewState = {
    isSidebarOpen: false,
    errorPopups: [],
};

export const requestShowError = createAction<{ message: string }>('view/requestShowError');

const viewSlice = createSlice({
    name: 'view',
    initialState,
    reducers: {
        sidebarClose: (state) => {
            state.isSidebarOpen = false;
        },
        sidebarOpen: (state) => {
            state.isSidebarOpen = true;
        },
        showErrorPopup : (state, action) => {
            state.errorPopups.push(action.payload);
        },
        hideErrorPopup  : (state, action) => {
            state.errorPopups = state.errorPopups.filter(popup => popup.id !== action.payload);
        },
    },
});

export const {
    sidebarClose,
    sidebarOpen,
    showErrorPopup,
    hideErrorPopup
} = viewSlice.actions;

export default viewSlice.reducer;
