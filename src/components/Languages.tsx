import React from 'react';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, LinearProgress, Box } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';

interface LanguageData {
  language: string;
  users: number;
  percentage: number;
}

const languagesData: LanguageData[] = [
  { language: 'en-us', users: 865, percentage: 80 },
  { language: 'en-gb', users: 240, percentage: 60 },
  { language: 'fr-fr', users: 220, percentage: 55 },
  { language: 'es-es', users: 162, percentage: 40 },
  { language: 'de-de', users: 86, percentage: 25 },
  { language: 'ru-ru', users: 32, percentage: 10 },
];

const Languages: React.FC = () => {
  return (
    <Card sx={{  borderRadius: '8px', boxShadow: 1 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6">Languages</Typography>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Language</TableCell>
                <TableCell>Users</TableCell>
                <TableCell>% Users</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {languagesData.map((row) => (
                <TableRow key={row.language}>
                  <TableCell>{row.language}</TableCell>
                  <TableCell>{row.users}</TableCell>
                  <TableCell>
                    <Box display="flex" >
                      <LinearProgress
                        variant="determinate"
                        value={row.percentage}
                        sx={{
                          width: '100%',
                          height: 12,
                          backgroundColor: '#E0E0E0',
                          '& .MuiLinearProgress-bar': { backgroundColor: '#4782DA' },
                        }}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default Languages;