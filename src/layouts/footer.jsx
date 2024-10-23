import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2E3B55", // Couleur plus élégante
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", // Espace entre les éléments
        padding: "10px 20px",
        height: "100px",
        color: "#fff",
      }}
    >
      {/* Image à gauche */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="./image/Plan1.jpg" // Assure-toi d'avoir l'image à cet emplacement
          alt="Logo"
          style={{ height: '60px', marginRight: '15px' }}
        />
        <Typography variant="body1">
          LM @Copyright Test 2024
        </Typography>
      </Box>

      {/* Icônes à droite */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton
          sx={{ color: 'white' }}
          href="https://twitter.com" target="_blank"
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          sx={{ color: 'white' }}
          href="https://facebook.com" target="_blank"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          sx={{ color: 'white' }}
          href="https://instagram.com" target="_blank"
        >
          <InstagramIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
