import type { Meta, StoryObj } from '@storybook/react-webpack5';
import NavBarComponent from './NavBarComponent';
import './NavBarComponent.scss';
import '../../index.scss';
import {fn} from "storybook/test";

const meta = {
  title: 'Components/NavBarComponent',
  component: NavBarComponent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: [],
  argTypes: {
  },
  args: {
    onMenuButtonClick: fn()
  },
} satisfies Meta<typeof NavBarComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
