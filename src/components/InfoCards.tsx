import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Chip } from '@mui/material';

interface CardData {
  title: string;
  value: string;
  percentage: string;
  percentageColor: string;
  period: string;
  badgeText?: string;
  backgroundColor?: string;
  textColor?: string;
  image?: JSX.Element;
}

interface InfoCardsProps {
  data: CardData[];
  lg:number;
}

const InfoCards: React.FC<InfoCardsProps> = ({ data ,lg}) => {
  return (
    <Grid container spacing={2} >
      {data.map((item, index) => (
        <Grid item xs={12} sm={6} md={6} lg={lg} key={index}>
          <Card
            sx={{
              boxShadow: 1,
              borderRadius: 2,
              position: 'relative',
              overflow: 'visible',
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" sx={{fontSize:"16px",fontWeight:"bold" ,color: item.textColor || 'textSecondary'}}>
                  {item.title}
                </Typography>

                {item.badgeText && (
                  <Chip
                    label={item.badgeText}
                    color="primary"
                    size="small"
                    
                  />
                )}
              </Box>

              <Typography variant="h6" my={1} sx={{ color: item.textColor || 'textSecondary' }}>
                {item.value}
              </Typography>

              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: item.percentageColor === 'green' ? 'green' : 'red',
                }}
              >
                <Box
                  component="span"
                  sx={{
                    backgroundColor: item.percentageColor === 'green' ? '#C8E6C9' : '#FFCDD2',
                    color: item.percentageColor === 'green' ? '#388E3C' : '#D32F2F',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    marginRight: 1,
                    fontSize: '0.875rem',
                  }}
                >
                  {item.percentage}
                </Box>
                <Typography color="textSecondary" component="span">
                  {item.period}
                </Typography>
              </Typography>

              {item.image && (
                <Box
                  sx={{
                    position: 'absolute',
                    bottom:0,
                    right: -3,
                    
                  }}
                >
                  {item.image}
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default InfoCards;

