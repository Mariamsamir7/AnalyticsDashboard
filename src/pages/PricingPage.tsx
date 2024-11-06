import React from 'react';
import { Box, Divider,Card, CardContent, Button, Typography, Grid} from '@mui/material';
  import PageHeader from '../components/PagesHeader';

const plans = [
  {
    title: 'Free',
    price: '$0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Free',
    subtitle: 'Most popular',
    price: '$15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '$30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];
const PricingPage: React.FC = () => {
    return(
      <Box sx={{ padding: 3, minHeight: '100vh' }}>
      {/* Header */}
      <PageHeader title="Pricing" />
      <Divider sx={{ marginBottom: 3 }} />
      {/* PricingPlans */}
      <Box sx={{ py: 4}}>
      <Typography variant="h5" align="center" gutterBottom>
        We have a plan for everyone
      </Typography>
      <Typography variant="body1" align="center" color="textSecondary" mb={4}>
        Whether you're a business or an individual, 14-day trial no credit card required.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {plans.map((plan, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                padding: 3,
                boxShadow: 3,
                borderRadius: 2,
              
              }}
            >
              <CardContent>
                <Typography
                  component="h6"
                  variant="h6"
                  align="center"
                  fontWeight="bold"
                >
                  {plan.title}
                </Typography>
                {plan.subtitle && (
                  <Typography
                    variant="subtitle1"
                    align="center"
                    color="textSecondary"
                    fontWeight="bold"
                    gutterBottom
                  >
                    {plan.subtitle}
                  </Typography>
                )}
                <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
                  {plan.price}
                  <Typography variant="body2" component="span">
                    /mo
                  </Typography>
                </Typography>
                <ul style={{ listStyleType: 'none', padding: 0, margin: '16px 0' }}>
                  {plan.description.map((line) => (
                    <Typography
                      component="li"
                      variant="body2"
                      align="center"
                      color="textSecondary"
                      key={line}
                    >
                      {line}
                    </Typography>
                  ))}
                </ul>
                <Button
                  fullWidth
                  variant={plan.buttonVariant as 'contained' | 'outlined'}
                  color="primary"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
      </Box>
    )
}
export default PricingPage;