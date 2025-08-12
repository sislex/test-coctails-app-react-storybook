import type { Meta, StoryObj } from '@storybook/react-webpack5';
import './NotificationComponent.scss';
import '../../index.scss';
import NotificationComponent from "./NotificationComponent";

const meta = {
  title: 'Components/NotificationComponent',
  component: NotificationComponent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: [],
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof NotificationComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    notificationText: 'NotificationText'
  },
};

export const BigText: Story = {
  args: {
    notificationText: 'NotificationText - 1 notificationText - 1 NotificationText - 1 notificationText - 1 NotificationText - 1 notificationText - 1 NotificationText - 1 notificationText - 1 NotificationText - 1 notificationText - 1'
  },
};
