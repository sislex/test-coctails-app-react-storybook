import './CardListComponent.scss';
import {ICocktail} from "../../state/cocktails/cocktails.types";
import React from "react";
import CardComponent from "../CardComponent/CardComponent";
import {NotFoundComponent} from '../NotFoundComponent/NotFoundComponent';

export interface CardComponentProps {
    cocktailsData: ICocktail[];
}

function CardListComponent({cocktailsData}: CardComponentProps) {
    return (
        <>
            {!cocktailsData.length && <NotFoundComponent />}
            {!!cocktailsData.length && cocktailsData.map((cocktail, index) => (
                <div
                    key={index}
                    className="card"
                >
                    <CardComponent
                        cocktailsData={cocktail}
                    ></CardComponent>
                </div>
            ))}
        </>
    );
}

export default React.memo(CardListComponent);
