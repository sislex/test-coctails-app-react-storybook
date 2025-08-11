import { createSlice } from '@reduxjs/toolkit';
import {IInternalLogicState} from "./internalLogicType";

const initialState: IInternalLogicState = {
    sidebar: false,
    activePage: 'margarita',
};

const internalLogicSlice = createSlice({
    name: 'internalLogic',
    initialState,
    reducers: {
        sidebarClose: (state) => {
            state.sidebar = false;
        },
        sidebarOpen: (state) => {
            state.sidebar = true;
        },
        setActivePage: (state, activePage) => {
            state.activePage = activePage.payload;
        },
    },
});

export const {
    sidebarClose,
    sidebarOpen,
    setActivePage,
} = internalLogicSlice.actions;
export default internalLogicSlice.reducer;