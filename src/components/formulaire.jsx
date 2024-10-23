
import React from "react";
import { useNavigate } from 'react-router-dom';
import {  Box, TextField, InputAdornment, IconButton, Typography, Button 
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ChatIcon from '@mui/icons-material/Chat';

const QuotaForm = () => {

const navigate=useNavigate();

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: 2, padding: 2, width: '100%', maxWidth: 400,
        margin: 'auto', backgroundColor: '#fff', boxShadow: 3, borderRadius: 2,
      }}>

      <Typography variant="h6" gutterBottom>
        Veuillez remplire S'il vous plait
      </Typography>

      <TextField fullWidth variant="outlined" label="Name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          ),
        }}
      />

      <TextField  fullWidth  variant="outlined" label="Country"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LanguageIcon />
            </InputAdornment>
          ),
        }}
      />

      <TextField fullWidth variant="outlined" label="Email" type="email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        fullWidth variant="outlined" label="Phone" type="tel"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PhoneIcon />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        fullWidth variant="outlined" label="Whatsapp" type="tel"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <WhatsAppIcon />
            </InputAdornment>
          ),
        }}
      />

      <TextField fullWidth  variant="outlined" label="Message" multiline rows={4}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <ChatIcon />
            </InputAdornment>
          ),
        }}
      />

      <Button variant="contained" color="success"  fullWidth 
      onClick={() => navigate('/')} >
        Submit
      </Button>
    </Box>
    
  );
};

export default QuotaForm;