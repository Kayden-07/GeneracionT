export async function fetchRickMortyCharacters() {
  const response = await fetch(`https://rickandmortyapi.com/api/character`)
  if (!response.ok) {
    throw new Error(`Error en la API: ${response.status} ${response.statusText}`)
  }
    const data = await response.json()
    return data.results;
}