import type { Meta, StoryObj } from '@storybook/react-webpack5';
import {CocktailsContainer} from './CocktailsContainer';
import './CocktailsContainer.scss';
import '../../index.css';

const meta = {
  title: 'Components/CocktailsContainer',
  component: CocktailsContainer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: [],
  argTypes: {
  },
  args: {},
} satisfies Meta<typeof CocktailsContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};