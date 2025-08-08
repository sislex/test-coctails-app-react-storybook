import './CardComponent.scss';

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

export function CardComponent({cocktailsData}: CardComponentProps) {
    return (
        <div className="card-container">
            {cocktailsData.map((cocktail, index) => (
                <div
                    key={index}
                    className="card"
                >
                    <div className="card-body">
                        <img
                            src={cocktail.strDrinkThumb}
                            alt="Cocktail"
                        />

                        <div className="card-text">
                            <h3>{cocktail.strDrink}</h3>
                            <h5>{cocktail.strCategory}</h5>
                            <h5>{cocktail.strAlcoholic}</h5>
                            <h5>{cocktail.strGlass}</h5>

                            <h4>Instructions</h4>
                            <p>
                                {cocktail.strInstructions}
                            </p>

                            <h4>List of ingredients</h4>
                            <div className="card-ingredients-list">
                                {cocktail.measureList?.map((measure, index) => (
                                    <div key={index} className="card-ingredient">
                                        <span className="measure">{measure}</span>
                                        <span className="ingredient">
                                            {cocktail.ingredientList?.[index]}
                                        </span>
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
}
