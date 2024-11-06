import React from 'react';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Box } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';

interface TrafficSourceData {
  source: string;
  users: number;
  sessions: number;
  bounceRate: number;
  avgSessionDuration: string;
}

const trafficSourcesData: TrafficSourceData[] = [
  { source: 'Google', users: 1023, sessions: 1265, bounceRate: 30, avgSessionDuration: '00:06:25' },
  { source: 'Direct', users: 872, sessions: 1077, bounceRate: 63, avgSessionDuration: '00:09:18' },
  { source: 'X', users: 812, sessions: 1003, bounceRate: 28, avgSessionDuration: '00:05:56' },
  { source: 'GitHub', users: 713, sessions: 881, bounceRate: 22, avgSessionDuration: '00:06:19' },
  { source: 'DuckDuckGo', users: 693, sessions: 856, bounceRate: 56, avgSessionDuration: '00:09:12' },
  { source: 'Facebook', users: 623, sessions: 770, bounceRate: 20, avgSessionDuration: '00:04:42' },
];

const TrafficSources: React.FC = () => {
  return (
    <Card sx={{ borderRadius: '8px', boxShadow: 1 ,height:"100%"}}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" >
          <Typography variant="h6">Traffic Sources</Typography>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Source</TableCell>
                <TableCell>Users</TableCell>
                <TableCell>Sessions</TableCell>
                <TableCell>Bounce Rate</TableCell>
                <TableCell>Avg. Session Duration</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {trafficSourcesData.map((row) => (
                <TableRow key={row.source}>
                  <TableCell>{row.source}</TableCell>
                  <TableCell>{row.users}</TableCell>
                  <TableCell>{row.sessions}</TableCell>
                  <TableCell>
                  <Button
                      variant="contained"
                      color={row.bounceRate > 50 ? 'error' : 'success'}
                      size="small"
                      sx={{ color: '#fff', fontWeight: 'bold',fontSize:"0.7rem",padding:"1px" }}
                    >
                      {row.bounceRate}%
                    </Button>
                  </TableCell>
                  <TableCell>{row.avgSessionDuration}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default TrafficSources;