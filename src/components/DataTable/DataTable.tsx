import {
  Paper,
  Stack,
  Table,
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
  CircularProgress,
  Typography,
  LinearProgress,
} from '@mui/material';
import TableHeader from '../TableHeader/TableHeader';
import ScrollToTopBtn from '../ScrollToTopBtn/ScrollToTopBtn';
import ErrorIcon from '@mui/icons-material/Error';

interface DataTableProps<T extends { id: string | number }> {
  data: T[] | undefined;
  isPending: boolean;
  isError: boolean;
  isPlaceholderData: boolean;
  sort: string;
  order: Order;
  onSortChange: (property: string) => void;
  tableFields: TableField[];
}

export default function DataTable<T extends { id: string | number }>({
  data,
  isPending,
  isError,
  isPlaceholderData,
  sort,
  order,
  onSortChange,
  tableFields,
}: DataTableProps<T>) {
  if (isPending)
    return (
      <Stack direction="column" spacing={3} alignItems="center">
        <Typography
          variant="h5"
          color="textSecondary"
          style={{ marginLeft: 10 }}
        >
          {' '}
          Loading data...
        </Typography>
        <CircularProgress />
      </Stack>
    );
  if (isError)
    return (
      <Paper
        elevation={3}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px',
          width: '300px',
          margin: 'auto',
          marginTop: '20px',
        }}
      >
        <ErrorIcon
          color="error"
          style={{ fontSize: '32px', marginRight: '10px' }}
        />
        <Typography variant="body1">
          Coludn&apos;t load data due to network error.
        </Typography>
      </Paper>
    );

  return (
    <Stack
      direction={'column'}
      alignItems={'center'}
      spacing={3}
      sx={{ paddingBottom: 3 }}
    >
      <Typography
        style={{ visibility: isPlaceholderData ? 'visible' : 'hidden' }}
      >
        Loading new page...
      </Typography>

      <TableContainer component={Paper}>
        <LinearProgress
          style={{ visibility: isPlaceholderData ? 'visible' : 'hidden' }}
        />

        <Table>
          <TableHeader
            sort={sort}
            order={order}
            onSortChange={onSortChange}
            tableFields={tableFields}
          />

          <TableBody>
            {data?.map((item: T) => (
              <TableRow key={item.id}>
                {Object.entries(item).map(([key, value]) => {
                  if (key !== 'id')
                    return (
                      <TableCell key={`${item.id}-${key}`}>{value}</TableCell>
                    );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ScrollToTopBtn />
    </Stack>
  );
}
