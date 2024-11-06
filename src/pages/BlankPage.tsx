import React from 'react';
import { Grid, Box, Card, CardContent, Typography,Divider } from '@mui/material';
import PageHeader from '../components/PagesHeader';


const BlankPage: React.FC = () => {
    return(
        <Box sx={{ padding: 3,  minHeight: '100vh' }}>
        {/* Header */}
        <PageHeader title="Blank"/>
        <Divider />
        {/* //// */}
        <Grid  xs={12} md={3} mt={3}>
          {/* Profile Details */}
          <Card>
            <CardContent>
            <Typography variant='h6'> Empty card</Typography>
            <Typography>Empty card</Typography>
            </CardContent>
          </Card>
        </Grid>
        </Box>
    )
}

export default BlankPage;