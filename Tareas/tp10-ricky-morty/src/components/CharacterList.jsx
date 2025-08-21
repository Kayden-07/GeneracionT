import { fetchRickMortyCharacters } from '../services/RickMortyServices';
import React, { useEffect, useState } from 'react';
import { Grid, Card } from '@mui/material';

function CharacterList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetchRickMortyCharacters()
            .then(data => setCharacters(data))
            .catch(error => console.error('Error fetching characters:', error));
    }, []);

    return (
        <>
            <h1>Rick and Morty Personajes</h1>
            <Grid container spacing={2}>
                {characters.map(character => ( 
                    <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
                        <Card variant="outlined">
                            <img src={character.image} alt={character.name} />
                            <h2>{character.name}</h2>
                        </Card>
                    </Grid> 
                ))}
            </Grid>
        </>
    );
}

export default CharacterList;
