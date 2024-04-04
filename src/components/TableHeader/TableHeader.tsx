import { TableCell, TableHead, TableSortLabel } from '@mui/material';
import { TableRow, Box } from '@mui/material';
import { visuallyHidden } from '@mui/utils';

export interface TableHeaderProps {
  sort: string;
  order: Order;
  onSortChange: (property: string) => void;
  tableFields: TableField[];
}

export default function TableHeader({
  tableFields,
  sort,
  order,
  onSortChange,
}: TableHeaderProps) {
  return (
    <TableHead>
      <TableRow>
        {tableFields.map((field) => (
          <TableCell key={field.id}>
            <TableSortLabel
              active={sort === field.value}
              direction={order}
              onClick={() => onSortChange(field.value)}
            >
              {field.label}
              {sort === field.value ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
