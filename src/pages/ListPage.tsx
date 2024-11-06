import React, { useState } from 'react';
import PageHeader from '../components/PagesHeader';
import {
  useTheme,
  Avatar,
  Box,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  TablePagination,
  Chip,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface Invoice {
  id: string;
  customerName: string;
  customerEmail: string;
  status: 'Sent' | 'Paid' | 'Void';
  amount: string;
  issueDate: string;
}

const data: Invoice[] = [
  { id: '#000112', customerName: 'Anna Walley', customerEmail: 'anna@walley.com', status: 'Sent', amount: '$530,00', issueDate: '2023-01-02' },
  { id: '#000114', customerName: 'Doris Fritz', customerEmail: 'doris@fritz.com', status: 'Void', amount: '$209,00', issueDate: '2023-02-13' },
  { id: '#000117', customerName: 'Edward Adkins', customerEmail: 'edward@adkins.com', status: 'Paid', amount: '$535,00', issueDate: '2023-03-04' },
  { id: '#000115', customerName: 'Edwin Baker', customerEmail: 'edwin@baker.com', status: 'Paid', amount: '$678,00', issueDate: '2023-02-17' },
  { id: '#000119', customerName: 'Gordon Workman', customerEmail: 'gordan@workman.com', status: 'Sent', amount: '$314,00', issueDate: '2023-03-28' },
];

const statusColors: { [key in Invoice['status']]: 'default' | 'success' | 'warning' } = {
  Sent: 'warning',
  Paid: 'success',
  Void: 'default',
};

const ListPage: React.FC = () => {
  const theme=useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ padding: 3, minHeight: '100vh'}}>
      {/* Header */}
      <PageHeader title="Invoices" />
      <Divider sx={{ marginBottom: 3 }} />
      <Box sx={{overflow:"hidden", backgroundColor:theme.palette.background.paper,  borderRadius: 2, boxShadow: 1, padding: 3,height:"95%"}}>
      <TableContainer >
        <Table >
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <input type="checkbox" />
              </TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Issue Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((invoice, index) => (
              <TableRow key={index} hover>
                <TableCell padding="checkbox">
                  <input type="checkbox" />
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar sx={{ bgcolor: '#1976D2', mr: 2 }}>
                      {invoice.customerName.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography variant="body2" fontWeight="bold">
                        {invoice.customerName}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {invoice.customerEmail}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Chip label={invoice.status} color={statusColors[invoice.status]} />
                </TableCell>
                <TableCell>{invoice.id}</TableCell>
                <TableCell>{invoice.amount}</TableCell>
                <TableCell>{invoice.issueDate}</TableCell>
                <TableCell>
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                  <IconButton>
                    <VisibilityIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </Box>

    </Box>
  );
};

export default ListPage;