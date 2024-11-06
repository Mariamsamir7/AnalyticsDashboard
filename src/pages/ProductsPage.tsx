import React from 'react';
import PageHeader from '../components/PagesHeader';
import {
    Box, Divider ,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Typography, IconButton,  TableFooter, TablePagination, Paper} from '@mui/material';
  import FilterListIcon from '@mui/icons-material/FilterList';
  import VisibilityIcon from '@mui/icons-material/Visibility';
  import DownloadIcon from '@mui/icons-material/Download';
  import StarIcon from '@mui/icons-material/Star';
  import product1 from "../assets/images/product1.png";
  import product2 from "../assets/images/product2.png";
  import product3 from "../assets/images/product3.png";
  import product4 from "../assets/images/product4.png";
  import product5 from "../assets/images/product5.png";

  const products = [
    { id: 1, name: 'Apple iPad Pro', variant: 'Silver', price: 1399, stock: 48, category: 'Tablets', rating: 4.6, reviews: 55, image: product1},
    { id: 2, name: 'Apple iPad Pro', variant: 'Space Gray', price: 1399, stock: 48, category: 'Tablets', rating: 4.3, reviews: 25, image: product2 },
    { id: 3, name: 'Apple iPhone 15 Pro Max', variant: 'Blue Titanium', price: 1499, stock: 38, category: 'Smartphones', rating: 4.6, reviews: 40, image: product3},
    { id: 4, name: 'Apple iPhone 15 Pro Max', variant: 'Natural Titanium', price: 1499, stock: 30, category: 'Smartphones', rating: 4.8, reviews: 50, image:product4},
    { id: 5, name: 'Apple iPhone 15 Pro Max', variant: 'White Titanium', price: 1499, stock: 45, category: 'Smartphones', rating: 4.9, reviews: 60, image: product3 },
    { id: 6, name: 'Apple MacBook Pro 16"', variant: 'Silver', price: 2399, stock: 55, category: 'Notebooks', rating: 4.7, reviews: 45, image: product5 },
  ];
  

const ProductsPage: React.FC = () => {
return(
    <Box sx={{ padding: 3, minHeight: '100vh' }}>
      {/* Header */}
      <PageHeader title="Projects" />
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
              <TableCell>Item Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell align="right">
                <IconButton>
                  <FilterListIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>
                <img src={product.image} alt={product.name} style={{ width: 40, height: 40, marginRight: 2 }} />
                <Typography variant="body1" component="div" >
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" >
                    {product.variant}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1" component="div">
                    ${product.price.toFixed(2)}
                  </Typography>
                </TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>
                <Box display="flex" alignItems="center">
                                            <StarIcon sx={{ color: "orange", marginRight: 0.5 }} />
                                            <Typography variant="body2">{product.rating}</Typography>
                                            <Typography variant="body2" color="textSecondary" sx={{ marginLeft: 1 }}>
                                                of {product.reviews} Reviews
                                            </Typography>
                                        </Box>                
                </TableCell>
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
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[6, 12, 24]}
                count={products.length}
                rowsPerPage={6}
                page={0}
                onPageChange={() => {}}
                onRowsPerPageChange={() => {}}
                labelRowsPerPage="Rows per page:"
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Paper>

    </Box>
)
}
export default ProductsPage;