import './CardListComponent.scss';
import {CardComponent} from "../CardComponent/CardComponent";
import {ICocktail} from "../../state/cocktails/cocktails.types";

export interface CardComponentProps {
    cocktailsData: ICocktail[];
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
