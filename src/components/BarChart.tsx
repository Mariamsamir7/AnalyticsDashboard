import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
  title: string;
  height:number;
}

const BarChart: React.FC<BarChartProps> = ({ title,height }) => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Mobile',
        data: [50, 60, 80, 70, 90, 100, 120, 110, 130, 70, 40, 70],
        backgroundColor: 'rgba(71, 130, 218, 0.8)',
        barPercentage: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        grid: { display: false },
        beginAtZero: true,
        max: 160,
      },
    },
  };

  return (
    <Card sx={{ borderRadius: '8px', boxShadow: 1, height: '95%' }}>
      <CardContent sx={{ height: '90%' }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            {title}
          </Typography>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
        <Box sx={{ paddingBottom: '16px' ,height:{height}}} >
          <Bar data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default BarChart;