import './CardListComponent.scss';
import {ICocktail} from "../../state/cocktails/cocktails.types";
import React from "react";
import CardComponent from "../CardComponent/CardComponent";

export interface CardComponentProps {
    cocktailsData: ICocktail[];
}

function CardListComponent({cocktailsData}: CardComponentProps) {
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

export default React.memo(CardListComponent);