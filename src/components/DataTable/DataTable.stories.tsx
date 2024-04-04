import { Meta } from '@storybook/react';
import DataTable from './DataTable';
import { StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const mockupData = [
  {
    id: 0,
    name: 'John',
    surname: 'Doe',
    age: 34,
  },
  {
    id: 1,
    name: 'Alice',
    surname: 'Smith',
    age: 25,
  },
  {
    id: 3,
    name: 'Bob',
    surname: 'Johnson',
    age: 40,
  },
];

const mockupTableFields = [
  { id: 0, label: 'Name', value: 'name' },
  { id: 1, label: 'Surname', value: 'surname' },
  { id: 2, label: 'Age', value: 'age' },
];

const meta = {
  title: 'Components/DataTable',
  component: DataTable,
  args: {
    data: mockupData,
    isPending: false,
    isPlaceholderData: false,
    isError: false,
    sort: 'name',
    order: 'desc',
    tableFields: mockupTableFields,
    onSortChange: fn(),
  },
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Loading: Story = {
  args: {
    isPending: true,
  },
};

export const Error: Story = {
  args: { isError: true },
};

export const LoadingNewPage: Story = {
  args: { isPlaceholderData: true },
};
