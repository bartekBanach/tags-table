import './App.css';
import { Typography, Stack } from '@mui/material';
import DataTable from './components/DataTable/DataTable';
import { useState } from 'react';

import { useTags } from './services/queries';
import ExtendedPagination from './components/ExtendedPagination/ExtendedPagination';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const [sort, setSort] = useState('name');
  const [order, setOrder] = useState<Order>('asc');
  const { data, isPending, isError, isPlaceholderData } = useTags(
    page,
    pageSize,
    sort,
    order
  );

  const { items, total } = data ?? {};
  const totalPages = total ? Math.min(Math.floor(total / pageSize), 25) : 0;
  const tableFields = [
    { id: 0, label: 'Name', value: 'name' },
    { id: 1, label: 'Count', value: 'popular' },
  ];

  const tableData = items?.map((item) => ({
    id: uuidv4(),
    name: item.name,
    count: item.count,
  }));

  const changePageSize = (value: number) => {
    setPage(1);
    setPageSize(value);
  };

  const changePage = (value: number) => {
    setPage(value);
  };

  const handleSortChange = (property: string) => {
    if (sort === property) setOrder(order === 'desc' ? 'asc' : 'desc');
    setSort(property);
  };

  return (
    <Stack spacing={5}>
      <Typography
        variant="h4"
        component="div"
        fontWeight="bold"
        letterSpacing={2}
      >
        StackExchange Tags
      </Typography>
      {!isError && !isPending && (
        <ExtendedPagination
          page={page}
          totalPages={totalPages}
          pageSize={pageSize}
          pageSizeOptions={[15, 25, 50, 100]}
          onChangePage={changePage}
          onChangePageSize={changePageSize}
          isDisabled={isPlaceholderData}
        />
      )}
      <DataTable
        data={tableData}
        isPending={isPending}
        isError={isError}
        isPlaceholderData={isPlaceholderData}
        sort={sort}
        order={order}
        onSortChange={handleSortChange}
        tableFields={tableFields}
      />
    </Stack>
  );
}

export default App;
