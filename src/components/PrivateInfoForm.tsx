import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Card, CardContent } from '@mui/material';

const PrivateInfoForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: 'Lucy',
    lastName: 'Lavender',
    email: 'lucylavender@gmail.com',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zip: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = () => {
    console.log('Form Data:', formData);
  };

  return (
    <Card sx={{ mt:3,padding: 2, borderRadius: 2}}>
    <CardContent sx={{ flex: 1 }}>
      <Typography variant="h6" gutterBottom>Private info</Typography>
          <Box
            component="form"
            sx={{
              mt:2,
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}
          >
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                fullWidth
                label="First name"
                name="firstName"
                variant="outlined"
                value={formData.firstName}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                variant="outlined"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Box>

            <TextField
              fullWidth
              label="Email"
              name="email"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              label="Address"
              name="address"
              variant="outlined"
              value={formData.address}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              label="Apartment, studio, or floor"
              name="apartment"
              variant="outlined"
              value={formData.apartment}
              onChange={handleChange}
            />

            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                fullWidth
                label="City"
                name="city"
                variant="outlined"
                value={formData.city}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="State"
                name="state"
                variant="outlined"
                value={formData.state}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Zip"
                name="zip"
                variant="outlined"
                value={formData.zip}
                onChange={handleChange}
              />
            </Box>

            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveChanges}
              sx={{ alignSelf: 'flex-start', marginTop: 2 }}
            >
              Save changes
            </Button>
          </Box>
        </CardContent>
      </Card>
  );
};

export default PrivateInfoForm;
