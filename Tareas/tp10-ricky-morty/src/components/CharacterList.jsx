import { fetchRickMortyCharacters } from '../services/RickMortyServices';
import React, { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, CardActionArea, Typography } from '@mui/material';

function CharacterList({ onSelectCharacter }) {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetchRickMortyCharacters()
            .then(data => setCharacters(data))
            .catch(error => console.error('Error fetching characters:', error));
    }, []);

    return (
        <>
            <Typography variant="h6" component="h1" align="center">
                <h1>Rick and Morty Personajes</h1>
            </Typography>
            <Grid container spacing={5} justifyContent="center">
                {characters.map(character => (
                    <Card variant="outlined">
                        <CardActionArea onClick={() => onSelectCharacter(character)}>
                            <CardMedia component="img" image={character.image} alt={character.name} />
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {character.name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Grid>
        </>
    );
}

export default CharacterList;
