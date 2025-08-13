export async function fetchPokemons(limit: number) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    if (!response.ok) { // Manejo de errores
        throw new Error('Network response was not ok'); 
    }
    const data = await response.json(); // Convierte la respuesta a JSON
    return data.results; // Devuelve el array de pokemones
}