import React from 'react';
import PageHeader from '../components/PagesHeader';
import {
  useTheme,
  Box,
  Typography,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Button,
} from '@mui/material';

const receiptData = {
  client: {
    name: 'Anna Walley',
    address: '4183 Forest Avenue, New York City, 10011, USA',
    email: 'anna@walley.com',
  },
  payment: {
    number: '741037024',
    date: 'January 2, 2023 - 03:45 pm',
    to: {
      name: 'Mira LLC',
      address: '354 Roy Alley, Denver, 80202, USA',
      email: 'info@mira.com',
    },
  },
  items: [
    { description: 'Mira Theme Customization', quantity: 2, amount: 150.0 },
    { description: 'Monthly Subscription', quantity: 3, amount: 25.0 },
    { description: 'Additional Service', quantity: 2, amount: 100.0 },
  ],
  subtotal: 275.0,
  shipping: 8.0,
  discount: '5%',
};
const DetailPage: React.FC = () => {
    const theme=useTheme();
    const handlePrint = () => {
        window.print();
      };
    
return(
    <Box sx={{ padding: 3, minHeight: '100vh' }}>
      {/* Header */}
      <PageHeader title="Details" />
      <Divider sx={{ marginBottom: 4 }} />
      {/* /// */}
      <Box sx={{ backgroundColor:theme.palette.background.paper,  borderRadius: 2, boxShadow: 1, padding: 4,maxWidth: 1100, margin: 'auto'}}>
      {/* Header */}
      <Typography variant="h6" gutterBottom>
        Hello {receiptData.client.name},
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is the receipt for a payment of $268.85 (USD) you made to Mira.
      </Typography>

      {/* Payment and Client Info */}
      <Box display="flex" justifyContent="space-between" mt={2}>
        <Box>
          <Typography variant="subtitle2">Payment No.</Typography>
          <Typography variant="body2">{receiptData.payment.number}</Typography>
        </Box>
        <Box textAlign="right">
          <Typography variant="subtitle2">Payment Date</Typography>
          <Typography variant="body2">{receiptData.payment.date}</Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Client and Payment To Info */}
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography variant="subtitle2">Client</Typography>
          <Typography variant="body2">{receiptData.client.name}</Typography>
          <Typography variant="body2">{receiptData.client.address}</Typography>
          <Typography variant="body2">{receiptData.client.email}</Typography>
        </Box>
        <Box textAlign="right">
          <Typography variant="subtitle2">Payment To</Typography>
          <Typography variant="body2">{receiptData.payment.to.name}</Typography>
          <Typography variant="body2">{receiptData.payment.to.address}</Typography>
          <Typography variant="body2">{receiptData.payment.to.email}</Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Items Table */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {receiptData.items.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.description}</TableCell>
                <TableCell align="center">{item.quantity}</TableCell>
                <TableCell align="right">${item.amount.toFixed(2)}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell>Subtotal</TableCell>
              <TableCell align="right">${receiptData.subtotal.toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Shipping</TableCell>
              <TableCell align="right">${receiptData.shipping.toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Discount</TableCell>
              <TableCell align="right">{receiptData.discount}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Print Button */}
      <Box mt={3} textAlign="center">
        <Button variant="contained" color="primary" onClick={handlePrint}>
          Print Receipt
        </Button>
      </Box>
    </Box>


    </Box>
)
}
export default DetailPage;