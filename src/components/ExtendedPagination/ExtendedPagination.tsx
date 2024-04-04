import {
  Stack,
  Pagination,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material';

interface ExtendedPaginationProps {
  page: number;
  totalPages: number;
  pageSize: number;
  pageSizeOptions: number[];
  isDisabled: boolean;
  onChangePageSize: (value: number) => void;
  onChangePage: (value: number) => void;
}
const ExtendedPagination = ({
  page,
  totalPages,
  pageSize,
  pageSizeOptions,
  onChangePage,
  onChangePageSize,
  isDisabled,
}: ExtendedPaginationProps) => {
  const handleChangePage = (e: React.ChangeEvent<unknown>, value: number) => {
    onChangePage(value);
  };

  const handleChangePageSize = (e: SelectChangeEvent<number>) => {
    onChangePageSize(Number(e.target.value));
  };

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 3, md: 4 }}
      alignItems="center"
      justifyContent="center"
    >
      <Pagination
        shape="rounded"
        variant="outlined"
        count={totalPages}
        onChange={handleChangePage}
        disabled={isDisabled}
        size="large"
        page={page}
      />

      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">page size</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={pageSize}
          label="page size"
          onChange={handleChangePageSize}
          placeholder="page size"
          disabled={isDisabled}
        >
          {pageSizeOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default ExtendedPagination;
