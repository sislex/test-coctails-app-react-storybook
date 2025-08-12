import type { Meta, StoryObj } from '@storybook/react-webpack5';
import './CardComponent.scss';
import '../../index.scss';
import CardComponent from "./CardComponent";

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
    cocktailsData: {
        strDrink: "Margarita",
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg",
        strCategory: "Cocktail",
        strAlcoholic: "Alcoholic",
        strGlass: "Cocktail glass",
        strInstructions: "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten..",
        measureList: ["1 1/2 oz", "1/2 oz", "1 oz"],
        ingredientList: ["Tequila", "Triple sec", "Lime juice"],
      },

  },
};
