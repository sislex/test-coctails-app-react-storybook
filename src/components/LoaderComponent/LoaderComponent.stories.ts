import type { Meta, StoryObj } from '@storybook/react-webpack5';
import {LoaderComponent} from './LoaderComponent';
import './LoaderComponent.scss';
import '../../index.scss';

const meta = {
  title: 'Components/LoaderComponent',
  component: LoaderComponent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: [],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {},
} satisfies Meta<typeof LoaderComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
