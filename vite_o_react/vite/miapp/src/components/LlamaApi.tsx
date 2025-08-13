import { useEffect, useState } from "react"
import { fetchPokemons } from "../services/PokemonServices";

function LlamaApi() {

    type Pokemon = {
        name: string;
        url: string;
    }

    const [pokemones, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        fetchPokemons(10)
            .then(data => setPokemons(data))
            .catch(error => console.error('Error fetching data:', error));
    }
        , [])

    //[] = compoenenteDidMount() --> se ejecuta una vez al montar el componente
    //[valor] = componenteDidUpdate() --> se ejecuta cuando el valor cambia
    //componentWillUnmount() --> se ejecuta cuando el componente se desmonta

    return (
        <>
            <h2>Datos de la API</h2>
            <ul>
                {pokemones.map((pokemon, index) => (
                    <li key={index}>{pokemon.name}</li>
                ))}
            </ul>
        </>
    )
}

export default LlamaApi

//Repasando un poco de Fetch
//HTTP
//PETICIONES
// GET --> PEDIR DATOS
// POST --> ENVIAR DATOS
// PUT --> ACTUALIZAR DATOS
// DELETE --> ELIMINAR DATOS