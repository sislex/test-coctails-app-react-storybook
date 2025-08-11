import { ICocktail } from '../../state/cocktails/cocktails.types';
import './CardComponent.scss';

export interface CardComponentProps {
    cocktailsData: ICocktail;
}

export function CardComponent({cocktailsData}: CardComponentProps) {
    return (
        <div className="card-container">
            <div className="card-body">
                <img
                    src={cocktailsData.strDrinkThumb}
                    alt="Cocktail"
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
                        {cocktailsData.measureList?.map((measure, index) => (
                            <div key={index} className="card-ingredient">
                                <span className="measure">{measure}</span>
                                <span className="ingredient">
                                    {cocktailsData.ingredientList?.[index]}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
}
