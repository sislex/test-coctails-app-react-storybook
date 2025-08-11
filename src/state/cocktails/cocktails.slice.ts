import { createSlice } from '@reduxjs/toolkit';
import {ICocktailsState} from "./cocktails.types";

const initialState: ICocktailsState = {
    cocktails: {},
    cocktailsTypesList: ['Margarita', 'Mojito', 'A1', 'Kir',],
    selectedCocktailType: 'Margarita',
};

const cocktailsSlice = createSlice({
    name: 'cocktailsDataLogic',
    initialState,
    reducers: {
        setSelectedCocktail: (state, {payload}) => {
            state.selectedCocktailType = payload;
        },
        addCocktails: (state, action) => {
            const { cocktailType, data } = action.payload;
            state.cocktails[cocktailType] = data.drinks;
        },
    },
});

export const {
    setSelectedCocktail,
    addCocktails
} = cocktailsSlice.actions;
export default cocktailsSlice.reducer;