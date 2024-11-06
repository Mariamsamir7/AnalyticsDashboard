import React from 'react';
import { Box,  Divider,Grid } from '@mui/material';
import InfoCards from '../components/InfoCards';
import Waiting from '../assets/images/waiting.png';
import Welcome from '../components/WelcomeHeader';
import MapComponent from '../components/Map';
import BarChart from '../components/BarChart';
import WeeklySalesChart from '../components/WeeklySalesChart';
import ProjectsTable from '../components/ProjectsTable';


const DefaultDashboard: React.FC = () => {
  const cardData = [
    {
      title: 'Income',
      value: '$37.500',
      percentage: '+14%',
      percentageColor: 'green',
      period: 'Since last month',
      badgeText: 'Monthly',
    },
    {
      title: 'Visitors',
      value: '150.121',
      percentage: '-12%',
      percentageColor: 'red',
      period: 'Since last month',
      badgeText: 'Annual',
    },
    {
      title: 'Complete Orders',
      value: '12.432',
      percentage: '+24%',
      percentageColor: 'green',
      period: 'Since last month',
      badgeText: 'Weekly',
    },
    {
      title: 'Pending Orders',
      value: '22',
      percentage: '-6%',
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
      <Welcome title="SaaS "/>
      <Divider />

      {/* Info Cards */}
      <Box my={3} mt={3}>
        <InfoCards data={cardData} lg={3}/>
      </Box>
     
      {/* <Box sx={{ padding: 4 }}> */}
      <Grid container spacing={4} sx={{ marginTop: 1 }}>
        <Grid item xs={12} md={5}>
          <MapComponent />
        </Grid>
        <Grid item xs={12} md={7}>
          <BarChart title='Sales / Revenue' height={350}/>
        </Grid>
      </Grid>
      {/* //// */}
      <Box sx={{ marginTop: 2 }}>
       <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <WeeklySalesChart title="Weekly Sales"/>
        </Grid>
        <Grid item xs={12} md={8}>
          <ProjectsTable />
        </Grid>
      </Grid>
      </Box>
      
    </Box>
  );
};

export default DefaultDashboard;