import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button, Card, CardContent } from '@mui/material';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  height:95%;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const statusColors: { Done: 'success'; 'In Progress': 'warning'; Cancelled: 'error' } = {
  Done: 'success',
  'In Progress': 'warning',
  Cancelled: 'error',
};

const projects = [
  { name: 'Project Aurora', startDate: '01/01/2023', endDate: '31/06/2023', state: 'Done', assignee: 'James Dalton' },
  { name: 'Project Eagle', startDate: '01/01/2023', endDate: '31/06/2023', state: 'In Progress', assignee: 'Tracy Mack' },
  { name: 'Project Fireball', startDate: '01/01/2023', endDate: '31/06/2023', state: 'Done', assignee: 'Sallie Love' },
  { name: 'Project Omega', startDate: '01/01/2023', endDate: '31/06/2023', state: 'Cancelled', assignee: 'Glenda Jang' },
  { name: 'Project Yoda', startDate: '01/01/2023', endDate: '31/06/2023', state: 'Done', assignee: 'Raymond Ennis' },
  { name: 'Project Zulu', startDate: '01/01/2023', endDate: '31/06/2023', state: 'Done', assignee: 'Matthew Winters' },
];

const ProjectsTable = () => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Latest Projects
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Start Date</TableCell>
                <TableCell>End Date</TableCell>
                <TableCell>State</TableCell>
                <TableCell>Assignee</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.map((project, index) => (
                <TableRow key={index}>
                  <TableCell>{project.name}</TableCell>
                  <TableCell>{project.startDate}</TableCell>
                  <TableCell>{project.endDate}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color={statusColors[project.state as keyof typeof statusColors]}
                      size="small"
                      sx={{ fontSize:"0.7rem" ,textTransform: 'none' }}
                    >
                      {project.state}
                    </Button>
                  </TableCell>
                  <TableCell>{project.assignee}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </StyledCard>
  );
};

export default ProjectsTable;