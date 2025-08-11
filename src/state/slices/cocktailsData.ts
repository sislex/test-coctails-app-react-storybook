import { createSlice } from '@reduxjs/toolkit';
import {ICocktailsState} from "../type";

const initialState: ICocktailsState = {
    cocktailsData: [],
    cocktailsList: ['Margarita', 'Mojito', 'A1', 'Kir',],
};

const internalLogicSlice = createSlice({
    name: 'internalLogic',
    initialState,
    reducers: {

    },
});

// export const {
//     sidebarClose,
//     sidebarOpen,
// } = internalLogicSlice.actions;
export default internalLogicSlice.reducer;