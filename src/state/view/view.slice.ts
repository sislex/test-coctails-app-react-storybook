import { createSlice } from '@reduxjs/toolkit';
import {IViewState} from './view.types';

const initialState: IViewState = {
    sidebar: false,
    activePage: 'margarita',
};

const viewSlice = createSlice({
    name: 'view',
    initialState,
    reducers: {
        sidebarClose: (state) => {
            state.sidebar = false;
        },
        sidebarOpen: (state) => {
            state.sidebar = true;
        },
        setActivePage: (state, {payload}) => {
            state.activePage = payload;
        },
    },
});

export const {
    sidebarClose,
    sidebarOpen,
    setActivePage,
} = viewSlice.actions;

export default viewSlice.reducer;
