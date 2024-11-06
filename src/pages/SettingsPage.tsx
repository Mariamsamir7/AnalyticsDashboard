import React, { useState } from 'react';
import {
  TextField,
  Button,
  Avatar,
  Typography,
  Box,
  Card,
  CardContent,
  Divider
} from '@mui/material';
import PageHeader from '../components/PagesHeader';
import UserAccount from '../assets/images/user.png';
import PrivateInfoForm from '../components/PrivateInfoForm';

const SettingsPage: React.FC = () => {
  const [username, setUsername] = useState('lucylavender');
  const [biography, setBiography] = useState(
    'Lucy is a Freelance Writer and Social Media Manager who helps finance professionals and Fin-tech startups build an audience and get more paying clients online.'
  );
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfileImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    console.log('Username:', username);
    console.log('Biography:', biography);
    console.log('Profile Image:', profileImage);
  };

  return (
    <Box sx={{ padding: 3, minHeight: '100vh' }}>
      {/* Header */}
      <PageHeader title="Settings" />
      <Divider sx={{ marginBottom: 3 }} />

      {/* Public Info Card */}
      <Card sx={{ padding: 2, borderRadius: 2, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 3 }}>
        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom>Public info</Typography>
          <Box>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Biography"
              variant="outlined"
              multiline
              minRows={3}
              value={biography}
              onChange={(e) => setBiography(e.target.value)}
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveChanges}
              sx={{ marginTop: 2 }}
            >
              Save changes
            </Button>
          </Box>
        </CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 1 }}>
          <Avatar src={profileImage || UserAccount} sx={{ width: 100, height: 100 }} />
          <Button variant="contained" component="label">
            Upload
            <input type="file" hidden onChange={handleImageUpload} />
          </Button>
          <Typography variant="caption" color="textSecondary">
            For best results, use an image at least 128px by 128px in .jpg format
          </Typography>
        </Box>
      </Card>

      {/* Private Info Form */}
      <PrivateInfoForm />
    </Box>
  );
};

export default SettingsPage;
