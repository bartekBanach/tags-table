import type { Meta, StoryObj } from '@storybook/react';
import TableHeader from './TableHeader';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/TableHeader',
  component: TableHeader,
  args: {
    onSortChange: fn(),
    tableFields: [
      { id: 0, label: 'Name', value: 'name' },
      { id: 1, label: 'Count', value: 'popular' },
    ],
  },
  argTypes: {
    order: {
      control: { type: 'radio' },
      options: ['asc', 'dsc'],
    },
    sort: {
      control: { type: 'select' },
      options: ['name', 'popular'],
    },
  },
} satisfies Meta<typeof TableHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sort: 'name',
    order: 'asc',
  },
};

export const SortByNameDesc: Story = {
  args: {
    sort: 'name',
    order: 'desc',
  },
};

export const SortByPopularAsc: Story = {
  args: {
    sort: 'popular',
    order: 'asc',
  },
};

export const SortByPopularDesc: Story = {
  args: {
    sort: 'popular',
    order: 'desc',
  },
};
