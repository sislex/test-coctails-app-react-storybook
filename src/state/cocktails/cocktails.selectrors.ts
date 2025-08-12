import {RootState} from '../store';
import {createSelector} from '@reduxjs/toolkit';

export const selectCocktailsState = (state: RootState) => state.cocktails;

export const selectCocktails = (state: RootState) => selectCocktailsState(state).cocktails;
export const selectCocktailsTypesList = (state: RootState) => selectCocktailsState(state).cocktailsTypesList;
export const selectedCocktailType = (state: RootState) => selectCocktailsState(state).selectedCocktailType;
export const selectedCocktailsDataIsLoaded = (state: RootState) => selectCocktailsState(state).cocktailsAPI.isLoaded;
export const selectedCocktailsDataIsLoading = (state: RootState) => selectCocktailsState(state).cocktailsAPI.isLoading;

export const selectCocktailsForSelectedType = createSelector(
  [selectCocktailsState],
  (cocktailsState) => {
      const selectedType = cocktailsState.selectedCocktailType;
      return cocktailsState.cocktails[selectedType] || [];
  }
);
