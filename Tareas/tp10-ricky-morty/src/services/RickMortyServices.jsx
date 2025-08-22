// api.js
export async function fetchRickMortyCharacters(page = 1) {
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  if (!response.ok) {
    throw new Error(`Error en la API: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}
