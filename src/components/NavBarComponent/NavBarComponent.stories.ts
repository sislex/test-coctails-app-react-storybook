import type { Meta, StoryObj } from '@storybook/react-webpack5';
import {NavBarComponent} from './NavBarComponent';
import './NavBarComponent.scss';
import '../../index.css';

const meta = {
  title: 'Components/NavBarComponent',
  component: NavBarComponent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: [],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {},
} satisfies Meta<typeof NavBarComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};