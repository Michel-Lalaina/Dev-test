
import React, { useState } from "react";
import {
  Box, Card, CardContent, Typography, TextField, Button, 
  List, ListItem, ListItemText, Divider, Avatar, IconButton
} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

// Commentaires par défaut
const defaultComments = [
  "Super article, j'ai appris beaucoup !",
  "Merci pour les informations.",
  "Pouvez-vous expliquer davantage sur ce sujet ?"
];

const CommentBox = () => {
  const [comments, setComments] = useState(defaultComments); // Initialisation avec des commentaires par défaut
  const [newComment, setNewComment] = useState(''); // Commentaire en cours de saisie

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]); // Ajouter le commentaire à la liste
      setNewComment(''); // Réinitialiser le champ après envoi
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%', // Hauteur plus
        backgroundColor: '#f3f4f6',
        padding: 2,
      }}
    >
      <Card sx={{ boxShadow: 3 }}>
        <img src="./image/ger.jpg" width="100%" height="50%" />
        <CardContent>
          <Typography variant="h4" gutterBottom align="center" sx={{ marginBottom: 2 }}>
            Section Commentaires
          </Typography>

          {/* Liste des commentaires */}
          <List sx={{ maxHeight: '50vh', overflow: 'auto' }}>
            {comments.map((comment, index) => (
              <React.Fragment key={index}>
                <ListItem alignItems="flex-start">
                  <Avatar sx={{ marginRight: 2 }}>C</Avatar> {/* Avatar  */}
                  <ListItemText 
                    primary={`Utilisateur ${index + 1}`} //++ de numero index des utillisateur commentes
                    secondary={comment} 
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </React.Fragment>
            ))}
          </List>

          {/* Champ d’écriture des commentaires */}
          <Box sx={{ display: 'flex', marginTop: 3, alignItems: 'center' }}>
            <TextField
              label="Écrire un commentaire..."
              variant="outlined"
              fullWidth
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              size="medium"
              sx={{ marginRight: 1 }}
            />
            <IconButton
              color="primary"
              onClick={handleAddComment}
              aria-label="Envoyer le commentaire"
            >
              <SendIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CommentBox;
