export interface ICocktailsState {
    cocktailsTypesList: string[],
    cocktails: {
        [cocktailsType: string]: ICocktail[];
    };
    selectedCocktailType: string;
    cocktailsAPI: API;
}

export interface ICocktail {
    strDrink: string;
    strCategory: string;
    strAlcoholic: string;
    strGlass: string;
    strInstructions: string;
    measureList: string[];
    ingredientList: string[];
    strDrinkThumb: string;
}

export interface API {
    startTime: number | null;
    loadingTime: number | null;
    isLoading: boolean;
    isLoaded: boolean;
    error?: any;
}