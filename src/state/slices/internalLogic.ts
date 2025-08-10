import { createSlice } from '@reduxjs/toolkit';
import {IInternalLogicState} from "../type";

const initialState: IInternalLogicState = {
    sidebar: false,
    activePage: null,
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
    },
});

export const {
    sidebarClose,
    sidebarOpen,
} = internalLogicSlice.actions;
export default internalLogicSlice.reducer;