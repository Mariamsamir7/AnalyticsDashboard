import { Line } from 'react-chartjs-2';
import {  CardContent,Typography,Box ,useTheme} from '@mui/material';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const theme=useTheme();

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Total Revenue',
        data: [2000, 1500, 1800, 2200, 1500, 2200, 3000, 2500, 2900, 3900, 2900, 3700],
        borderColor: '#4782DA',
        backgroundColor: 'rgba(71, 130, 218, 0.2)',
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Expenses',
        data: [1000, 800, 900, 1100, 1000, 1200, 1300, 1500, 1400, 1700, 1600, 1800],
        borderDash: [5, 5],
        backgroundColor: 'rgba(170, 170, 170, 0.2)',
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: 4000,
        ticks: {
          stepSize: 500,
        },
      },
    },
  };

  return (
    <Box sx={{ backgroundColor:theme.palette.background.paper,  borderRadius: 2, boxShadow: 1, padding: 2,height:"95%" }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Total Revenue
            </Typography>
      <CardContent>
        <Line data={data} options={options} />
      </CardContent>
    </Box>
  );
};

export default LineChart;