export async function fetchSwapiInfo() {
    const response = await fetch(`https://swapi.info/api/people`);
    if (!response.ok) {
        throw new Error('Failed to fetch data from SWAPI');
    }
    const data = await response.json();
    return data;
}

export async function fetchSwapiByUrl(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch character from SWAPI');
    }
    const data = await response.json();
    return data;
}
