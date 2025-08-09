import './CardListComponent.scss';
import {CardComponent} from "../CardComponent/CardComponent";

export interface CardComponentProps {
    cocktailsData: ICocktailsData[];
}
export interface ICocktailsData {
    measureList: string[];
    ingredientList: string[];
    strDrink: string;
    strCategory: string;
    strAlcoholic: string;
    strGlass: string;
    strInstructions: string;
    strDrinkThumb: string;
}

export function CardListComponent({cocktailsData}: CardComponentProps) {
    return (
        <div>
            {cocktailsData.map((cocktail, index) => (
                <div
                    key={index}
                    className="card"
                >
                    <CardComponent
                        cocktailsData={cocktail}
                    ></CardComponent>
                </div>
            ))}
        </div>
    );
}
