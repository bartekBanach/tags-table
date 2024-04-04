import type { Meta, StoryObj } from '@storybook/react';
import ExtendedPagination from './ExtendedPagination';
import { fn } from '@storybook/test';

const meta: Meta = {
  title: 'Components/ExtendedPagination',
  component: ExtendedPagination,
  argTypes: {
    isDisabled: {
      control: { type: 'boolean' },
    },
  },
  args: {
    page: 1,
    totalPages: 25,
    pageSize: 15,
    pageSizeOptions: [15, 25, 50, 100],
    onChangePage: fn(),
    onChangePageSize: fn(),
    isDisabled: false,
  },
} satisfies Meta<typeof ExtendedPagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const LastPage: Story = {
  args: { page: 25 },
};

export const Disabled: Story = {
  args: { isDisabled: true },
};
