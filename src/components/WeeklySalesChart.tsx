import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { Box, Typography, Table, TableBody, TableCell, TableRow,useTheme } from '@mui/material';

const data = [
  { name: 'Social', value: 260, color: '#1976D2' },
  { name: 'Search Engines', value: 125, color: '#FF7043' },
  { name: 'Direct', value: 54, color: '#66BB6A' },
  { name: 'Other', value: 146, color: '#FFA726' },
];

const COLORS = ['#1976D2', '#FF7043', '#66BB6A', '#FFA726'];
interface WeeklySalesChartprops {
  title: string;
}
const WeeklySalesChart: React.FC<WeeklySalesChartprops> = ({title}) => {
  const theme=useTheme();
  return (
       <Box sx={{overflow:"hidden", backgroundColor:theme.palette.background.paper,  borderRadius: 2, boxShadow: 1, padding: 2 ,height:"95%"}}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
             {title}
            </Typography>
         
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie data={data} dataKey="value" innerRadius={70} outerRadius={90} fill="#8884d8" paddingAngle={5}>
            {data.map((_entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      <Table>
        <TableBody>
          {data.map((entry, index) => (
            <TableRow key={index}>
              <TableCell>
                <Box
                  component="span"
                  sx={{
                    display: 'inline-block',
                    width: 12,
                    height: 12,
                    backgroundColor: entry.color,
                    borderRadius: '50%',
                    mr: 1,
                  }}
                />
                <Typography variant="body2" component="span">
                  {entry.name}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body2">{entry.value}</Typography>
              </TableCell>
              <TableCell align="right" sx={{ color: entry.value > 0 ? 'green' : 'red' }}>
                <Typography variant="body2">{entry.value > 0 ? `+${entry.value}%` : `${entry.value}%`}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default WeeklySalesChart;