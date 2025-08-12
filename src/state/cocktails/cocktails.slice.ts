import { createSlice } from '@reduxjs/toolkit';
import {ICocktailsState} from "./cocktails.types";

const initialState: ICocktailsState = {
    cocktails: {},
    cocktailsTypesList: ['Margarita', 'Mojito', 'A1', 'Kir', 'Test Error'],
    selectedCocktailType: 'Margarita',
    cocktailsAPI: {
        startTime: null,
        loadingTime: null,
        isLoading: false,
        isLoaded: false,
    }
};

const cocktailsSlice = createSlice({
    name: 'cocktailsDataLogic',
    initialState,
    reducers: {
        setSelectedCocktail: (state, {payload}) => {
            state.selectedCocktailType = payload;
        },
        startLoadApi: (state, ) => {
            state.cocktailsAPI = {
                startTime: Date.now(),
                loadingTime: null,
                isLoading: true,
                isLoaded: false,
            };
        },
        stopLoadApi: (state,) => {
            const endTime = Date.now();
            const duration = endTime - (state.cocktailsAPI.startTime || endTime);
            state.cocktailsAPI = {
                ...state.cocktailsAPI,
                loadingTime: duration,
                isLoading: false,
                isLoaded: true,
            };
        },
        addCocktails: (state, action) => {
            const { cocktailType, data } = action.payload;
            state.cocktails[cocktailType] = data.drinks;
        },
    },
});

export const {
    setSelectedCocktail,
    addCocktails,
    startLoadApi,
    stopLoadApi,
} = cocktailsSlice.actions;
export default cocktailsSlice.reducer;
