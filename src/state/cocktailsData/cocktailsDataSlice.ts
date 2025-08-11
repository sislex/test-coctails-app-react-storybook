import { createSlice } from '@reduxjs/toolkit';
import {ICocktailsState} from "./coctailsDataType";

const initialState: ICocktailsState = {
    cocktailsData: [],
    cocktailsList: ['Margarita', 'Mojito', 'A1', 'Kir',],
};

const cocktailsDataSlice = createSlice({
    name: 'cocktailsDataLogic',
    initialState,
    reducers: {

    },
});

// export const {
//     sidebarClose,
//     sidebarOpen,
// } = internalLogicSlice.actions;
export default cocktailsDataSlice.reducer;