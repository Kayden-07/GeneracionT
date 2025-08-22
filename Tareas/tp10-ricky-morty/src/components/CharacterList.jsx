import { fetchRickMortyCharacters } from '../services/RickMortyServices';
import { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, CardActionArea, Typography, Button } from '@mui/material';

function CharacterList({ onSelectCharacter }) {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        loadCharacters(page); // Cargar personajes al montar el componente o cambiar de página
    }, [page]); 

    const loadCharacters = async (page) => { // Función para cargar personajes
        try {
            const data = await fetchRickMortyCharacters(page);
            setCharacters((prev) => [...prev, ...data.results]); // Agregar nuevos personajes a la lista existente
            setHasMore(data.info.next !== null);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Typography variant="h6" component="h1" align="center">
                <h1>Rick and Morty Personajes</h1>
            </Typography>
            <Grid container spacing={5} justifyContent="center">
                {characters.map(character => (
                    <Card variant="outlined" key={character.id} sx={{ width: 300}}>
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
            {hasMore && (
                <Button onClick={() => setPage((prev) => prev + 1)} variant="contained" color='success' sx={{ mt: 2 }} fullWidth>
                    <Typography variant="body1">Cargar más personajes</Typography>
                </Button>
            )}
        </>
    );
}

export default CharacterList;
