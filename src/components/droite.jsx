// HowItWorks.jsx
import React from 'react';
import { 
  Box, Typography, Grid, Divider, IconButton 
} from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';
import DescriptionIcon from '@mui/icons-material/Description';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { blue } from '@mui/material/colors';

// Tableau des étapes avec icônes et descriptions
const steps = [
  {
    icon: <FlagIcon sx={{ fontSize: 80, color: '#1976D2' }} />,  // Icône agrandie avec couleur
    title: 'Consultation Initiale',
    description:
      'Contactez CureSureMedico pour commencer votre parcours. Discutez de vos besoins et préférences médicales.',
  },
  {
    icon: <DescriptionIcon sx={{ fontSize: 80, color: '#388E3C' }} />,  // Icône verte
    title: 'Soumettez vos Dossiers',
    description:
      'Envoyez vos dossiers médicaux et préférences de traitement, y compris les rapports de diagnostic, votre historique médical, les dates de voyage et votre budget.',
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 80, color: '#F57C00' }} />,  // Icône orange
    title: 'Recevez un Devis en 48 Heures',
    description:
      'Recevez un devis détaillé incluant les soins médicaux, l’hébergement et les frais de voyage, sous 48 heures.',
  },
];

const How = () => {
  return (
    <Box
      sx={{ maxWidth: '900px', margin: 'auto',  padding: 5, textAlign: 'center',
        backgroundColor: '#f9f9f9', // Arrière-plan léger
        borderRadius: 2, boxShadow: 4, //  ombre 
      }} >

      <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#424242' }}>
        Comment ça marche !!
      </Typography>

      <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '1.1rem', color: '#616161' }}>
        <span style={{color: 'blue' }}>CuresureMedico </span>rend votre parcours médical simple et fluide. Voici comment :
      </Typography>

      <Divider sx={{ my: 4 }} />

      {/* Section des étapes */}
      <Grid container spacing={5}>
        {steps.map((step, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              {step.icon}  {/* Icône */}

              <Typography variant="h5" gutterBottom sx={{ fontWeight: '500', mt: 2 }}>
                {step.title}
              </Typography>
              <Typography variant="body1" sx={{ color: '#757575' }}>
                {step.description}
              </Typography>
            </Box>
            {index < steps.length - 1 && (
              <Divider orientation="vertical" flexItem sx={{ margin: 'auto', my: 2, borderColor: '#BDBDBD' }} />
            )}
          </Grid>
        ))}
      </Grid>

      {/* Bouton WhatsApp flottant */}
      <IconButton  href="https://wa.me/"  target="_blank"
        sx={{  position: 'fixed',  bottom: 24,  right: 24,
        backgroundColor: '#25D366',  color: 'white',  width: 50,  // Bouton largeur
          height: 50, // Bouton hauteur
          borderRadius: '50%',  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', // Ombre plus visible
          '&:hover': { backgroundColor: '#128C7E' },
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 20 }} />  {/* Icône agrandeur */}
      </IconButton>
    </Box>
  );
};

export default How;
