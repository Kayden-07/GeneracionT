import { Card, CardMedia, CardContent, Typography, Dialog, Stack, Backdrop } from "@mui/material";

function CharacterDetail({ character, onBack }) {

    return (
        <Dialog open={true} onClose={onBack} maxWidth="md"
            slots={{
                backdrop: (props) => (
                    <Backdrop
                        {...props}
                        sx={{
                            backgroundImage: 'url("https://wallpapers.com/images/high/rick-and-morty-portal-wynqhnx4q2jctd50.webp")',
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                )
            }}
        >
            <Card sx={{
                maxWidth: 900,
                mx: "auto",
                p: 2,
                backgroundColor: "rgba(255,255,255,0.85)", // Fondo blanco semitransparente
                boxShadow: 8,
            }}>
                <Stack direction="row" spacing={2} alignItems="center">
                    <CardMedia
                        component="img"
                        image={character.image}
                        alt={character.name}
                        sx={{ width: 300, borderRadius: 2 }}
                    />
                    <CardContent>
                        <Typography variant="h4" component="h2" gutterBottom>
                            {character.name}
                        </Typography>
                        <Stack spacing={1}>
                            <Typography variant="h6">
                                <strong>Status:</strong> {character.status}
                            </Typography>
                            <Typography variant="h6">
                                <strong>Species:</strong> {character.species}
                            </Typography>
                            <Typography variant="h6">
                                <strong>Gender:</strong> {character.gender}
                            </Typography>
                            <Typography variant="h6">
                                <strong>Origin:</strong> {character.origin.name}
                            </Typography>
                        </Stack>
                    </CardContent>
                </Stack>
            </Card>
        </Dialog>
    );
}

export default CharacterDetail;