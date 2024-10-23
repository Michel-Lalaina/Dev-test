import React from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../layouts/header";
import { Box, Typography, Button } from "@mui/material";
import CommentBox from "./coms";
import Footer from "../layouts/footer";
import How from "./droite";

const Home = () => {

    const navigate = useNavigate(); // Hook pour naviguer


    return (
        <div className="accueil">

            <Header />
            {/* l'entete du page */}


            <div className="col-lg-11">


                <div className="col_left"> {/*Coter gauche,le card */}

                    <div className="circle"> <i className="bi bi-hospital"></i>
                    </div>
                    <Box
                        sx={{
                            width: '87%', height: '50vh', // Augmentation de la hauteur totale
                            margin: 'auto', borderRadius: '12px',
                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Légère ombre( effet "carte")
                            overflow: 'hidden', // Évite les débordements
                            textAlign: 'center', backgroundColor: '#f0f4f8', // Couleur de fond douce
                            display: 'flex', flexDirection: 'column', // Organisation verticale
                            alignItems: 'center', // Centrer le contenu horizontalement
                            justifyContent: 'space-between', // Espace équilibré entre les éléments
                            paddingTop: 1, // Ajouter de l’espace en haut 
                        }}
                    >

                        <img /* Image */
                            src="../image/ville1.jpg" width="100%" style={{
                                objectFit: 'cover',
                                height: '100%', // L’image 
                            }}
                            alt="Soins médicaux en Inde" />

                        {/* Texte et bouton */}
                        <Box sx={{
                                width: '100%', // Prendre toute la largeur
                                height: '100%',
                                padding: 1.5, // Espace interne pour plus d'air
                                textAlign: 'center', // Centre le texte
                            }}
                        >
                            <Typography variant="h6"
                                sx={{ fontWeight: 'bold', color: '#2E3B55', // Couleur douce 
                                    marginBottom: 1, // Espace sous le texte
                                }}
                            >
                                Soins Médicaux de Classe Mondiale en Inde avec un cout abordable
                            </Typography>

                            <Button  variant="contained" 
                                onClick={() => navigate('/form')} // Redirection au clic
                                sx={{ backgroundColor: '#388E3C', // Vert foncé agréable
                                    color: 'white', width: '80%', borderRadius: '8px',
                                    boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.2)', // Effet d'ombre sur le bouton
                                    '&:hover': {
                                        backgroundColor: '#2E7D32', // Couleur plus foncée au survol
                                    },
                                }}>
                              Prendre rendez-vous
                            </Button>
                        </Box>
                    </Box>


                </div>

                <div className="col_lg">
                    {/* cote a droite  */}


                    <div className="col-lg-3">
                        <img src="../image/ap.jpg" className="animer1" width="100%" height="140px" />
                        <h5>Hautes technologies</h5>
                        <p>Equipements modernes et appareils médicaux sophistiqués des chirurgies complexes et variées.</p>
                        <a href="#" className="btn btn-primary"><i className="bi bi-check-square-fill"></i>Plus d'info</a>
                    </div>

                    <div className="col-lg-3">
                        <img src="../image/images.jpeg" className="animer2" width="100%" height="140px" />
                        <h5>Médecins expérimentés </h5>
                        <p>Hautement qualifiés et compétents, assurant une prise en charge le plus efficacement.</p>
                        <a href="#" className="btn btn-primary"><i className="bi bi-check-square-fill"></i>Plus d'info</a>
                    </div>

                    <div class="col-lg-3">
                        <img src="../image/soigner.jpg" className="animer3" width="100%" height="140px" />
                        <h5>Intégration 100%</h5>
                        <p>les patients sont bien traités et jouissent d'une liberté totale sans contraintes inutiles.</p>
                        <a href="#" className="btn btn-primary"><i className="bi bi-check-square-fill"></i>Plus d'info</a>
                    </div>
                </div>
            </div>
            <div className="Down" style={{ display: "flex", padding: "20px" }}>
                {/* appel du composant simule commentaire et son coter*/}
                <CommentBox />
                <How />
            </div>

            {/* appel du composant footer */}
            <Footer />
        </div>


    )
}
export default Home;