import { fetchSwapiInfo, fetchSwapiByUrl } from '../services/SwapiServices';
import { useEffect, useState } from 'react';


function FormSwapi() {

    const [people, setPeople] = useState([]);
    const [loadingPeople, setLoadingPeople] = useState(false);
    const [errorPeople, setErrorPeople] = useState(null);

    const [selectedUrl, setSelectedUrl] = useState("");
    const [character, setCharacter] = useState(null);
    const [loadingCharacter, setLoadingCharacter] = useState(false);
    const [errorCharacter, setErrorCharacter] = useState(null);

    const [apodo, setApodo] = useState('');
    const [favorito, setFavorito] = useState(false);
    const [resumen, setResumen] = useState('');

    useEffect(() => {
        setLoadingPeople(true);
        setErrorPeople(null);

        fetchSwapiInfo()
            .then((data) => {
                console.log(data);
                setPeople(data);
            })
            .catch((err) => {
                console.error(err);
                setErrorPeople("No se pudo cargar la lista de personajes.");
            })
            .finally(() => setLoadingPeople(false));
    }, []);


    useEffect(() => {
        if (!selectedUrl) {
            setCharacter(null);
            return;
        }

        setLoadingCharacter(true);
        setErrorCharacter(null);
        setCharacter(null);

        fetchSwapiByUrl(selectedUrl)
            .then((data) => setCharacter(data))
            .catch((err) => {
                console.error(err);
                setErrorCharacter("No se pudo cargar los datos del personaje.");
            })
            .finally(() => setLoadingCharacter(false));
    }, [selectedUrl]);

    function handleGuardar() {
        if (!character) return;
        setResumen({
            nombre: character.name,
            height: character.height,
            birth_year: character.birth_year,
            apodo,
            favorito,
            url: selectedUrl,
        });
    }

    return (
        <>
            <div style={{
                minHeight: "100vh",
                padding: 20,
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                backgroundColor: "#121212",
                color: "#e0e0e0",
            }}
>
                <h1 style={{ textAlign: "center", marginBottom: 24 }}>Ficha Galactica</h1>
                <div style={{ marginBottom: 20 }}>
                    <label>
                        <strong>Seleccioná un personaje: </strong>
                    </label>
                    <br />
                    {loadingPeople ? (
                        <p>Cargando personajes...</p>
                    ) : errorPeople ? (
                        <p style={{ color: "red" }}>{errorPeople}</p>
                    ) : (
                        <select
                            value={selectedUrl}
                            onChange={(e) => setSelectedUrl(e.target.value)}
                            style={{
                            width: "100%",
                            padding: 8,
                            marginTop: 6,
                            backgroundColor: "#1e1e1e",
                            color: "#e0e0e0",
                            border: "1px solid #444",
                            borderRadius: 6,
                        }}

                        >
                            <option value="">-- Elegí un personaje --</option>
                            {people.map((p) => (
                                <option key={p.url} value={p.url}>
                                    {p.name}
                                </option>
                            ))}
                        </select>
                    )}
                </div>

                <div style={{
                    border: "1px solid #444",
                    padding: 12,
                    borderRadius: 8,
                    marginBottom: 20,
                    backgroundColor: "#1e1e1e",
                }}
>
                    <h3 style={{ marginBottom: 12 }}>Vista previa</h3>
                    {loadingCharacter ? (
                        <p>Cargando detalle...</p>
                    ) : errorCharacter ? (
                        <p style={{ color: "red" }}>{errorCharacter}</p>
                    ) : character ? (
                        <>
                            <p><b>Nombre:</b> {character.name}</p>
                            <p><b>Altura:</b> {character.height} cm</p>
                            <p><b>Año de nacimiento:</b> {character.birth_year}</p>
                        </>
                    ) : (
                        <p>Seleccioná un personaje para ver su ficha.</p>
                    )}
                </div>

                <div style={{ marginBottom: 20 }}>
                    <label>
                        Apodo en tu ficha:
                        <input
                            type="text"
                            value={apodo}
                            onChange={(e) => setApodo(e.target.value)}
                            style={{
                            display: "block",
                            width: "100%",
                            padding: 8,
                            marginTop: 6,
                            backgroundColor: "#1e1e1e",
                            color: "#e0e0e0",
                            border: "1px solid #444",
                            borderRadius: 6,
                        }}

                        />
                    </label>

                    <label style={{ display: "block", marginTop: 8 }}>
                        <input
                            type="checkbox"
                            checked={favorito}
                            onChange={(e) => setFavorito(e.target.checked)}
                            style={{ marginRight: 6 }}
                        />
                        ¿Es tu favorito?
                    </label>
                </div>

                <button onClick={handleGuardar} disabled={!character} style={{
                    padding: "8px 12px",
                    backgroundColor: "#333",
                    color: "#e0e0e0",
                    border: "1px solid #444",
                    borderRadius: 6,
                    cursor: "pointer",
                    fontWeight: "bold",
                }}
>
                    Guardar ficha
                </button>

                {resumen && (
                    <div style={{
                        marginTop: 30,
                        padding: 20,
                        borderRadius: 8,
                        backgroundColor: "#1e1e1e",
                        color: "#e0e0e0",
                        border: "1px solid #444",
                    }}
>
                        <h3 style={{ marginBottom: 12 }}>Resumen de ficha</h3>
                        <p><b>Nombre:</b> {resumen.nombre}</p>
                        <p><b>Apodo:</b> {resumen.apodo || "-"}</p>
                        <p><b>Favorito:</b> {resumen.favorito ? "Sí" : "No"}</p>
                        <p><b>Altura:</b> {resumen.height} cm</p>
                        <p><b>Año de nacimiento:</b> {resumen.birth_year}</p>
                        <p style={{ fontSize: 12, color: "#aaa" }}><i>URL: {resumen.url}</i></p>
                    </div>
                )}
            </div>
        </>
    )
}

export default FormSwapi;