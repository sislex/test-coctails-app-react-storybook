export interface ICocktailsState {
    cocktailsTypesList: string[],
    cocktails: {
        [cocktailsType: string]: ICocktail[];
    };
    selectedCocktailType: string;
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
    isLoading: boolean;
    isLoaded: boolean;
}