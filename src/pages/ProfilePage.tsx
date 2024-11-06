import React from 'react';
import { Grid, Box, Card, CardContent, Typography, Avatar, Button, Chip, Link, Table, TableBody, TableCell, TableHead, TableRow, Divider,LinearProgress } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import PageHeader from '../components/PagesHeader';
import UserAccount from '../assets/images/user.png';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
const ProfilePage: React.FC = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Mobile',
            data: [50, 70, 30, 60, 80, 40, 50, 10, 20, 70, 40, 30],
            backgroundColor: 'rgba(71, 130, 218, 0.8)',
            barPercentage: 0.4,
           
          },
          {
            label: 'Revenue',
            backgroundColor: 'rgba(71, 130, 218, 0.2)',
            barPercentage: 0.4,
            data: [20, 35, 25, 45, 30, 25, 50, 40, 30, 55, 45, 60],
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
            max: 80,
          },
        },
      };
    
      const skills = ['HTML', 'JavaScript', 'Sass', 'React', 'Redux', 'Next.js', 'Material UI', 'UI', 'UX'];
    
      const statistics = [
        { label: 'Total Earnings', value: '$2,405', icon: <AttachMoneyOutlinedIcon/> },
        { label: 'Orders Today', value: '30', icon: <ShoppingBagOutlinedIcon/> },
        { label: 'Total Revenue', value: '$1,224', icon: <AttachMoneyOutlinedIcon/> },
      ];
  
      const products = [
        { name: 'AppStack', tech: 'HTML', license: 'Single License', sales: 76 },
        { name: 'Mira', tech: 'React', license: 'Single License', sales: 38 },
        { name: 'Milo', tech: 'HTML', license: 'Single License', sales: 43 },
        { name: 'Robust UI Kit', tech: 'Angular', license: 'Single License', sales: 27 },
        { name: 'Spark', tech: 'React', license: 'Single License', sales: 12 },
      ];
      const statusColors: { "React": 'success'; "Angular": 'error'; "HTML": 'primary' } = {
        "React": 'success',
        "Angular": 'error',
        "HTML": 'primary',
      };
    
return (
    <Box sx={{ padding: 3,  minHeight: '100vh' }}>
      {/* Header */}
      <PageHeader title="Profile"/>
      <Divider />
     
      <Grid container spacing={3} mt={2}>
        {/* Left Column (Sidebar) */}
        <Grid item xs={12} md={3}>
          {/* Profile Details */}
          <Card>
            <CardContent>
            <Typography> Profile Details</Typography>
              <Avatar
                alt="Lucy Lavender"
                src={UserAccount}
                sx={{ width: 100, height: 100, margin: 'auto' }}
              />
              <Typography variant="h6" align="center">Lucy Lavender</Typography>
              <Typography variant="body2" color="textSecondary" align="center">Lead Developer</Typography>
              <Box mt={2} display="flex" justifyContent="center">
                <Button variant="contained" color="primary" sx={{ mr: 1 }}>Follow</Button>
                <Button variant="outlined" color="primary">Message</Button>
              </Box>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography>Skills</Typography>
              <Box mt={1}>
                {skills.map((skill, index) => (
                  <Chip key={index} label={skill} sx={{ mr: 1, mb: 1 }} size="small"/>
                ))}
              </Box>
            </CardContent>
          </Card>

          {/* About */}
          <Card sx={{ mt: 2 }}>
            <CardContent>
             
              <Typography sx={{mb:1}}>About</Typography>
              <Typography variant="body2"  gutterBottom>
              <OtherHousesOutlinedIcon sx={{fontSize:"18px"}}/>  Lives in <Link href="#">San Francisco, SA</Link>
              </Typography>
              <Typography variant="body2" gutterBottom>
               <WorkOutlineOutlinedIcon sx={{fontSize:"18px"}} /> Works at <Link href="#">Material UI</Link>
              </Typography>
              <Typography variant="body2">
               <LocationOnOutlinedIcon sx={{fontSize:"18px"}} /> Lives in <Link href="#">Boston</Link>
              </Typography>
            </CardContent>
          </Card>
          {/* Elsewhere */}
          <Card sx={{ mt: 2 }}>
            <CardContent>
             
              <Typography sx={{mb:1}}>Elsewhere</Typography>
              <Typography variant="body2"  gutterBottom>
              <OpenInNewIcon sx={{fontSize:"18px",mr:1}}/><Link href="#" underline='none'>lucylavender.io</Link>
              </Typography>
              <Typography variant="body2" gutterBottom>
               <FacebookOutlinedIcon sx={{fontSize:"18px",mr:1}} /><Link href="#" underline='none'>Material UI</Link>
              </Typography>
              <Typography variant="body2">
               <InstagramIcon sx={{fontSize:"18px",mr:1}} /><Link href="#" underline='none'>Boston</Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Column (Main Content) */}
        <Grid item xs={12} md={9}>
          {/* Sales / Revenue Chart */}
          <Card >
            <CardContent sx={{height:"380px" ,mb:1}}>
              <Typography variant="h6">Sales / Revenue</Typography>
              <Bar data={data} options={options} />
              </CardContent>
          </Card>

          {/* Statistics */}
          <Grid container spacing={2} mt={2}>
            {statistics.map((stat, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" gutterBottom sx={{display:"flex", justifyContent:"space-between"}}>
                      {stat.value}   
                      <Typography sx={{color:"#3787FF"}}>{stat.icon}</Typography>
    
                    </Typography>
                    <Typography color="textSecondary">{stat.label}</Typography>
                    <LinearProgress variant="determinate" value={50} sx={{mt:2,height: 5, borderRadius: 5,}}/>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Products */}
          <Card sx={{ mt: 2 ,height:400}}>
            <CardContent>
              <Typography variant="h5">Products</Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Tech</TableCell>
                    <TableCell>License</TableCell>
                    <TableCell>Sales</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((product, index) => (
                    <TableRow key={index}>
                      <TableCell>{product.name}</TableCell>
                      <TableCell><Button  variant="contained"
                      color={statusColors[product.tech as keyof typeof statusColors]}
                      size="small"
                      sx={{ fontSize:"0.7rem" ,textTransform: 'none' }}>{product.tech}</Button> </TableCell>
                      <TableCell>{product.license}</TableCell>
                      <TableCell>{product.sales}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>

      );
    }
export default ProfilePage;