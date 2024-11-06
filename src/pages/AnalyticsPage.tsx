import React from 'react';
import { Box, Divider,Grid} from '@mui/material';
import Welcome from '../components/WelcomeHeader';
import InfoCards from '../components/InfoCards';
import Waiting from '../assets/images/waiting.png';
import BarChart from '../components/BarChart';
import MapComponent from '../components/Map';
import WeeklySalesChart from '../components/WeeklySalesChart';
import Languages from '../components/Languages';
import TrafficSources from '../components/TrafficSources';

const DefaultDashboard: React.FC = () => {
  const cardData = [
    {
      title: 'Sales Today',
      value: '2.532',
      percentage: '+26%',
      percentageColor: 'green',
      period: 'Since last month',
      badgeText: 'Today',
    },
    {
      title: 'Visitors',
      value: '170.212',
      percentage: '-14%',
      percentageColor: 'red',
      period: 'Since last month',
      badgeText: 'Annual',
    },
    {
      title: 'Total Earnings',
      value: '$24.300',
      percentage: '+18%',
      percentageColor: 'green',
      period: 'Since last month',
      badgeText: 'Monthly',
    },
    {
      title: 'Pending Orders',
      value: '45',
      percentage: '-9%',
      percentageColor: 'red',
      period: 'Since last month',
      backgroundColor: "#DFE8F6",
      textColor: "#1976D2",
      image: (
        <img
          src={Waiting}
          alt="Waiting"
          style={{
            width: 100,
            height: 100,
          }}
        />
      )
    },
    
  ];

  return (
    <Box sx={{ padding: 3,  minHeight: '100vh' }}>
      {/* Header */}
      <Welcome title="Analytics "/>
      <Divider />

      {/* Info Cards */}
      <Grid container spacing={4}  mt={2}>
        <Grid item xs={12} md={5} >
          <InfoCards data={cardData} lg={6}/> 
        </Grid>
       
      <Grid item xs={12} md={7}>
      <BarChart title='Mobile / Desktop' height={215}/>
      </Grid>
      </Grid>
      {/* sec2 */}
      <Grid container spacing={4} sx={{ marginTop: 1 }}>
        <Grid item xs={12} md={8}>
          <MapComponent />
        </Grid>
        <Grid item xs={12} md={4}>
          <WeeklySalesChart  title='Source / Medium'/>
        </Grid>
      </Grid>
      {/* sec3 */}
      <Box sx={{ marginTop: 2 }}>
       <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Languages />
        </Grid>
        <Grid item xs={12} md={8}>
          <TrafficSources />
        </Grid>
      </Grid>
      </Box>
    </Box>
  );
};

export default DefaultDashboard;