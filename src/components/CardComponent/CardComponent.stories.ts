import type { Meta, StoryObj } from '@storybook/react-webpack5';
import {CardComponent} from './CardComponent';
import './CardComponent.scss';
import '../../index.css';

const meta = {
  title: 'Components/CardComponent',
  component: CardComponent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: [],
  argTypes: {
  },
  args: {},
} satisfies Meta<typeof CardComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    cocktailsData: [
      {
        strDrink: "Margarita",
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg",
        strCategory: "Cocktail",
        strAlcoholic: "Alcoholic",
        strGlass: "Cocktail glass",
        strInstructions: "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten..",
        measureList: ["1 1/2 oz", "1/2 oz", "1 oz"],
        ingredientList: ["Tequila", "Triple sec", "Lime juice"],
      },
      {
        strDrink: "Mojito",
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg",
        strCategory: "Cocktail",
        strAlcoholic: "Alcoholic",
        strGlass: "Highball glass",
        strInstructions: "Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...",
        measureList: ["2-3 oz", "2 tsp", "1 oz"],
        ingredientList: ["White rum", "Sugar", "Lime juice", "Mint", "Soda water"],
      },
      {
        strDrink: "Mojito",
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg",
        strCategory: "Cocktail",
        strAlcoholic: "Alcoholic",
        strGlass: "Highball glass",
        strInstructions: "Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...",
        measureList: ["2-3 oz", "2 tsp", "1 oz"],
        ingredientList: ["White rum", "Sugar", "Lime juice", "Mint", "Soda water"],
      },
      {
        strDrink: "Mojito",
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg",
        strCategory: "Cocktail",
        strAlcoholic: "Alcoholic",
        strGlass: "Highball glass",
        strInstructions: "Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with ice...",
        measureList: ["2-3 oz", "2 tsp", "1 oz"],
        ingredientList: ["White rum", "Sugar", "Lime juice", "Mint", "Soda water"],
      }
    ]

  },
};