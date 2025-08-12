import { ICocktail } from '../../state/cocktails/cocktails.types';
import './CardComponent.scss';
import React from "react";

export interface CardComponentProps {
    cocktailsData: ICocktail;
}

function CardComponent({cocktailsData}: CardComponentProps) {

    const ingredientList = Array.from({ length: 15 }, (_, i) =>
        cocktailsData[`strIngredient${i + 1}` as keyof ICocktail]
    )
        .filter((item): item is string =>
            typeof item === 'string' && item.trim() !== ''
        );

    const measureList = Array.from({ length: 15 }, (_, i) =>
        cocktailsData[`strMeasure${i + 1}` as keyof ICocktail]
    )
        .filter((item): item is string =>
            typeof item === 'string' && item.trim() !== ''
        );

    return (
        <div className="card-container">
            <div className="card-body">
                <img
                    src={cocktailsData.strDrinkThumb}
                    alt="Cocktail"
                    loading="lazy"
                />

                <div className="card-text">
                    <h3>{cocktailsData.strDrink}</h3>
                    <h5>{cocktailsData.strCategory}</h5>
                    <h5>{cocktailsData.strAlcoholic}</h5>
                    <h5>{cocktailsData.strGlass}</h5>

                    <h4>Instructions</h4>
                    <p>
                        {cocktailsData.strInstructions}
                    </p>

                    <h4>List of ingredients</h4>
                    <div className="card-ingredients-list">
                        {ingredientList.map((ingredient, index) => (
                            <div key={index} className="card-ingredient">
                                <span className="measure">{measureList[index] || ''}</span>
                                <span className="ingredient">{ingredient}</span>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
}

export default React.memo(CardComponent);

