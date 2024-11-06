import React from 'react';
import { Box,  Divider, Grid } from '@mui/material';
import InfoCards from '../components/InfoCards';
import Waiting from '../assets/images/waiting.png';
import Welcome from '../components/WelcomeHeader';
import TotalRevenueChart from '../components/TotalRevenueChart';
import WeeklySalesChart from '../components/WeeklySalesChart';
import BarChart from '../components/BarChart';
import ProjectsTable from '../components/ProjectsTable';


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
      <Welcome title="Default "/>
      <Divider />

      {/* Info Cards */}
      <Box my={3}>
        <InfoCards data={cardData} lg={3}/>
      </Box>

      {/* Charts Section */}
      <Grid container spacing={2} sx={{ marginTop: 1 }}>
        <Grid item xs={12} md={8}>
            <TotalRevenueChart />
        </Grid>
        <Grid item xs={12} md={4}>
            <WeeklySalesChart title='Weekly Sales'/>
        </Grid>
      </Grid>
      {/* BarChar and ProjectTable */}
      <Box sx={{ marginTop: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <BarChart title='Mobile / Desktop' height={370}/>
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