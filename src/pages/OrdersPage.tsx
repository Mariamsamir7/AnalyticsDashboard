import React from 'react';
import PageHeader from '../components/PagesHeader';
import {
    Box, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox,  IconButton, Chip, Paper,
  } from '@mui/material';
  import FilterListIcon from '@mui/icons-material/FilterList';
  import VisibilityIcon from '@mui/icons-material/Visibility';
  import DownloadIcon from '@mui/icons-material/Download';

  const orders = [
    { id: '#000253', product: 'Salt & Pepper Grinder', date: '2023-01-02', total: '$32,00', status: 'Shipped', paymentMethod: 'Visa' },
    { id: '#000254', product: 'Backpack', date: '2023-01-04', total: '$130,00', status: 'Shipped', paymentMethod: 'PayPal' },
    { id: '#000255', product: 'Pocket Speaker', date: '2023-01-04', total: '$80,00', status: 'Cancelled', paymentMethod: 'Mastercard' },
    { id: '#000256', product: 'Glass Teapot', date: '2023-01-08', total: '$45,00', status: 'Shipped', paymentMethod: 'Visa' },
    { id: '#000257', product: 'Unbreakable Water Bottle', date: '2023-01-09', total: '$40,00', status: 'Shipped', paymentMethod: 'PayPal' },
    { id: '#000258', product: 'Spoon Saver', date: '2023-01-14', total: '$15,00', status: 'Shipped', paymentMethod: 'Mastercard' },
    { id: '#000259', product: 'Hip Flash', date: '2023-01-16', total: '$25,00', status: 'Processing', paymentMethod: 'Visa' },
    { id: '#000260', product: 'Woven Slippers', date: '2023-01-22', total: '$20,00', status: 'Shipped', paymentMethod: 'PayPal' },
    { id: '#000261', product: 'Womens Watch', date: '2023-01-22', total: '$65,00', status: 'Cancelled', paymentMethod: 'Visa' },
    { id: '#000262', product: 'Over-Ear Headphones', date: '2023-01-23', total: '$210,00', status: 'Shipped', paymentMethod: 'Mastercard' },
  ];
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Shipped':
        return 'success';
      case 'Cancelled':
        return 'error';
      case 'Processing':
        return 'warning';
      default:
        return 'default';
    }
  };
  
const OrdersPage: React.FC = () => {
return(
    <Box sx={{ padding: 3, minHeight: '100vh' }}>
      {/* Header */}
      <PageHeader title="Orders" />
      <Divider sx={{ marginBottom: 3 }} />
      {/* /// */}
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>Order ID</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell align="right">
                <IconButton>
                  <FilterListIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>
                  <Chip label={order.status} color={getStatusColor(order.status)} />
                </TableCell>
                <TableCell>{order.paymentMethod}</TableCell>
                <TableCell align="right">
                  <IconButton>
                    <DownloadIcon />
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
    </Paper>

    </Box>
)
}
export default OrdersPage;