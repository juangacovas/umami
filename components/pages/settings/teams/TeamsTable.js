import Link from 'next/link';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableColumn,
  Button,
  Icon,
  Flexbox,
  Icons,
  Text,
} from 'react-basics';
import { useIntl } from 'react-intl';
import { labels } from 'components/messages';

export default function TeamsTable({ data = [] }) {
  const { formatMessage } = useIntl();

  const columns = [
    { name: 'name', label: formatMessage(labels.name), style: { flex: 2 } },
    { name: 'action', label: ' ' },
  ];

  return (
    <Table columns={columns} rows={data}>
      <TableHeader>
        {(column, index) => {
          return (
            <TableColumn key={index} style={{ ...column.style }}>
              {column.label}
            </TableColumn>
          );
        }}
      </TableHeader>
      <TableBody>
        {(row, keys, rowIndex) => {
          const { id } = row;

          row.action = (
            <Flexbox flex={1} justifyContent="end">
              <Link href={`/settings/teams/${id}`}>
                <a>
                  <Button>
                    <Icon>
                      <Icons.ArrowRight />
                    </Icon>
                    <Text>{formatMessage(labels.settings)}</Text>
                  </Button>
                </a>
              </Link>
            </Flexbox>
          );

          return (
            <TableRow key={rowIndex} data={row} keys={keys}>
              {(data, key, colIndex) => {
                return (
                  <TableCell key={colIndex} style={{ ...columns[colIndex]?.style }}>
                    <Flexbox flex={1} alignItems="center">
                      {data[key]}
                    </Flexbox>
                  </TableCell>
                );
              }}
            </TableRow>
          );
        }}
      </TableBody>
    </Table>
  );
}