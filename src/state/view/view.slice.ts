import { createSlice } from '@reduxjs/toolkit';
import {IViewState} from './view.types';

const initialState: IViewState = {
    isSidebarOpen: false,
};

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
    },
});

export const {
    sidebarClose,
    sidebarOpen,
} = viewSlice.actions;

export default viewSlice.reducer;
