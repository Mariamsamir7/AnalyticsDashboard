import React, { useState } from 'react';
import {
  useTheme,
  Avatar,
  Box,
  Card,
  Divider,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/system';
import PageHeader from '../components/PagesHeader';
import UserAccount from '../assets/images/user.png';
import UserAccount1 from '../assets/images/user1.png';
import UserAccount2 from '../assets/images/user2.png';

const ChatContainer = styled(Box)({
  display: 'flex',
  height: '100vh',
});

const ChatListContainer = styled(Box)({
  width: '30%',
  borderRight: '1px solid #ddd',
  overflowY: 'auto',
});

const ChatWindowContainer = styled(Box)({
  width: '70%',
  display: 'flex',
  flexDirection: 'column',
});

const MessageContainer = styled(Box)({
  flexGrow: 1,
  overflowY: 'auto',
  padding: '16px',
});

const MessageInputContainer = styled(Paper)({
  display: 'flex',
  alignItems: 'center',
  padding: '8px',
});

const MessageBubble = styled(Card)(({ isSender }: { isSender: boolean }) => ({
  maxWidth: '60%',
  padding: '8px 12px',
  marginBottom: '8px',
  alignSelf: isSender ? 'flex-end' : 'flex-start',
  
}));

const ChatApp: React.FC = () => {
  const theme=useTheme();
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<{ sender: string; text: string; time: string }[]>([
    { sender: 'Remy Sharp', text: 'Sit meis deleniti eu.', time: '20 minutes ago' },
    { sender: 'You', text: 'Lorem ipsum dolor sit amet.', time: '12 minutes ago' },
    { sender: 'Remy Sharp', text: 'Cum ea graeci tractatos.', time: '8 minutes ago' },
    { sender: 'You', text: 'Cras pulvinar, sapien id vehicula aliquet.', time: '5 minutes ago' },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { sender: 'You', text: message, time: 'Just now' }]);
      setMessage('');
    }
  };

  return (
    <Box sx={{ padding: 3, minHeight: '100vh' }}>
      {/* Header */}
      <PageHeader title="Chat" />
      <Divider sx={{ marginBottom: 3 }} />
    <ChatContainer sx={{ borderRadius: 2,height:360, backgroundColor:theme.palette.background.paper, boxShadow: 1,}}>
      {/* Chat List */}
      <ChatListContainer >
        <Box p={2} >
          <TextField fullWidth placeholder="Search contacts" variant="outlined" size="small" />
        </Box>
        <Divider />
        <List>
          <ListItem >
            <ListItemAvatar>
              <Avatar src={UserAccount} />
            </ListItemAvatar>
            <ListItemText primary="Lucy Lavender" secondary="Sent a photo" />
          </ListItem>
          <ListItem >
            <ListItemAvatar>
              <Avatar src={UserAccount1} />
            </ListItemAvatar>
            <ListItemText primary="Remy Sharp" secondary="Coffee?" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={UserAccount2} />
            </ListItemAvatar>
            <ListItemText primary="Cassandra Mixon" secondary="Hello!" />
          </ListItem>
        </List>
      </ChatListContainer>

      {/* Chat Window */}
      <ChatWindowContainer>
        <MessageContainer>
          {messages.map((msg, index) => (
            <Box key={index} display="flex" flexDirection="column" alignItems={msg.sender === 'You' ? 'flex-end' : 'flex-start'}>
              <MessageBubble isSender={msg.sender === 'You'}>
                <Typography variant="body2">{msg.text}</Typography>
              </MessageBubble>
              <Typography variant="caption" color="textSecondary" sx={{ alignSelf: msg.sender === 'You' ? 'flex-end' : 'flex-start' }}>
                {msg.time}
              </Typography>
            </Box>
          ))}
      
        </MessageContainer>

        {/* Message Input */}
        <Divider/>
      <MessageInputContainer  sx={{ m: 3  }}>
          <InputBase
            sx={{ p: 1, flex: 1  }}
            placeholder="Type your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <IconButton color="primary" onClick={handleSendMessage}>
            <SendIcon />
          </IconButton>
        </MessageInputContainer>
      </ChatWindowContainer>
    </ChatContainer>
    </Box>
  );
};

export default ChatApp;