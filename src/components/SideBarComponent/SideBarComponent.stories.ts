import type { Meta, StoryObj } from '@storybook/react-webpack5';
import {SideBarComponent} from './SideBarComponent';
import './SideBarComponent.scss';
import '../../index.css';
import {fn} from "storybook/test";

const meta = {
  title: 'Components/SideBarComponent',
  component: SideBarComponent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: [],
  argTypes: {
    activeId: {
      control: 'select',
      options: ['a', 'b', 'c', 'd', 'other'],
      description: 'Currently active item ID'
    },
    onItemClick: {
      action: 'itemClicked',
      description: 'Callback when item is clicked'
    }
  },
  args: {
    onItemClick: fn(),
    onCloseClick: fn(),
  },
} satisfies Meta<typeof SideBarComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    itemsList: ['a', 'b', 'c', 'd'],
    activeId: 'c',
  },
};