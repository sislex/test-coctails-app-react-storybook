import type { Meta, StoryObj } from '@storybook/react-webpack5';
import './CardListComponent.scss';
import '../../index.scss';
import CardListComponent from "./CardListComponent";

const meta = {
  title: 'Components/CardListComponent',
  component: CardListComponent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: [],
  argTypes: {
  },
  args: {},
} satisfies Meta<typeof CardListComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    cocktailsData: [
      {
        measureList: ["2-3 oz", "Juice of 1", "2 tsp", "2-4"],
        ingredientList: ["Light rum", "Lime", "Sugar", "Mint", "Soda water"],
        strDrink: "Mojito",
        strCategory: "Cocktail",
        strAlcoholic: "Alcoholic",
        strGlass: "Highball glass",
        strInstructions: "Muddle mint leaves with sugar and lime juice...",
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg"
      },
      {
        measureList: ["2-3 oz", "Juice of 1", "2 tsp", "2-4"],
        ingredientList: ["Light rum", "Lime", "Sugar", "Mint", "Soda water"],
        strDrink: "Mojito",
        strCategory: "Cocktail",
        strAlcoholic: "Alcoholic",
        strGlass: "Highball glass",
        strInstructions: "Muddle mint leaves with sugar and lime juice...",
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg"
      },
      {
        measureList: ["2-3 oz", "Juice of 1", "2 tsp", "2-4"],
        ingredientList: ["Light rum", "Lime", "Sugar", "Mint", "Soda water"],
        strDrink: "Mojito",
        strCategory: "Cocktail",
        strAlcoholic: "Alcoholic",
        strGlass: "Highball glass",
        strInstructions: "Muddle mint leaves with sugar and lime juice...",
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg"
      },
      {
        measureList: ["2-3 oz", "Juice of 1", "2 tsp", "2-4"],
        ingredientList: ["Light rum", "Lime", "Sugar", "Mint", "Soda water"],
        strDrink: "Mojito",
        strCategory: "Cocktail",
        strAlcoholic: "Alcoholic",
        strGlass: "Highball glass",
        strInstructions: "Muddle mint leaves with sugar and lime juice...",
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg"
      },
      {
        measureList: ["2-3 oz", "Juice of 1", "2 tsp", "2-4"],
        ingredientList: ["Light rum", "Lime", "Sugar", "Mint", "Soda water"],
        strDrink: "Mojito",
        strCategory: "Cocktail",
        strAlcoholic: "Alcoholic",
        strGlass: "Highball glass",
        strInstructions: "Muddle mint leaves with sugar and lime juice... LongInstructions LongInstructions LongInstructions LongInstructions LongInstructions LongInstructions LongInstructions LongInstructions LongInstructions LongInstructions LongInstructions LongInstructions LongInstructions LongInstructions LongInstructions LongInstructions LongInstructions LongInstructions LongInstructions LongInstructions ",
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg"
      },
    ]

  },
};
