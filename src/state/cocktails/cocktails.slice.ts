import { createSlice } from '@reduxjs/toolkit';
import {ICocktailsState} from "./cocktails.types";

const initialState: ICocktailsState = {
    cocktails: {},
    cocktailsTypesList: ['Margarita', 'Mojito', 'A1', 'Kir',],
    selectedCocktailType: 'margarita',
};

const cocktailsSlice = createSlice({
    name: 'cocktailsDataLogic',
    initialState,
    reducers: {
        setSelectedCocktail: (state, {payload}) => {
            state.selectedCocktailType = payload;
        },
    },
});

export const {
    setSelectedCocktail,
} = cocktailsSlice.actions;
export default cocktailsSlice.reducer;