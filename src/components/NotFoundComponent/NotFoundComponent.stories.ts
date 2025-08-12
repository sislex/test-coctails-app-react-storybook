import type { Meta, StoryObj } from '@storybook/react-webpack5';
import {NotFoundComponent} from './NotFoundComponent';
import './NotFoundComponent.scss';
import '../../index.scss';

const meta = {
  title: 'Components/NotFoundComponent',
  component: NotFoundComponent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: [],
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof NotFoundComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
