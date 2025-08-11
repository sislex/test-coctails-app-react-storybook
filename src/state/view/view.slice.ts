import { createSlice } from '@reduxjs/toolkit';
import {IViewState} from './view.types';

const initialState: IViewState = {
    sidebar: false,
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
    },
});

export const {
    sidebarClose,
    sidebarOpen,
} = viewSlice.actions;

export default viewSlice.reducer;
