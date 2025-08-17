import './Publicacion.css';
import { useState, useEffect } from 'react';

function Publicacion() {
    const [meGusta, setMegusta] = useState(0);
    const [meDivierte, setMeDivierte] = useState(0);
    const [meSorprende, setMeSorprende] = useState(0);

    const [mensaje, setMensaje] = useState('');
    const [comentarios, setComentarios] = useState<string[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        console.log("Componente montado")
    }, [mensaje])

    const manejarComentario = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (mensaje.trim() === '') {
            setError('El comentario no puede estar vacío.');
            return;
        }
        if (mensaje.length > 40) {
            setError('El comentario debe tener menos de 40 caracteres.');
            return;
        }
        setComentarios([...comentarios, mensaje]);
        setMensaje('');
        setError('');
    }

    return (
        <>
            <div className="publicacion">
                <img src="https://www.lanacion.com.ar/resizer/v2/cuanto-tiempo-dura-el-celo-en-una-gata-y-que-L4J6PKDJ55DDVORD7R3NTWUCAU.jpg?auth=a52fcb62c934499d3cb91eec7cd8d4e13ecadf2538671f5365ef0ebfedd764f5&width=880&height=586&quality=70&smart=true" alt="Gata bonita" />
                <p>Que bonita gata</p>
                <div className="reacciones">
                    <button onClick={() => setMegusta(meGusta + 1)}>👍 Me gusta ({meGusta})</button>
                    <button onClick={() => setMeDivierte(meDivierte + 1)}>😂 Me divierte ({meDivierte})</button>
                    <button onClick={() => setMeSorprende(meSorprende + 1)}>😮 Me sorprende ({meSorprende})</button>
                </div>
                <h3>💬 Comentario</h3>
                <form onSubmit={manejarComentario}>
                    <input
                        type="text"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                        placeholder="Escribe tu comentario (menos de 40 caracteres)"
                    />
                    <button type="submit" style={{ marginLeft: '10px' }}>Comentar</button>
                </form>
                {error && <p className="error">{error}</p>}
                <div className="comentarios">
                    {comentarios.map((comentario, index) => (
                        <p key={index}>Comentario {index + 1}: {comentario}</p>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Publicacion;