import React, { useState } from "react";

function PanelNave() {

    const [energia, setEnergia] = useState(100);
    const [mensage, setMensaje] = useState('');
    const [comentario, setComentario] = useState('');

    const gastarEnergia = () => {
        if (energia > 0) {
            setEnergia(energia - 10)
        }
    }

    const recargarEnergia = () => {
        if (energia < 100) {
            setEnergia(energia + 10)
        }
    }

    const manejarComentario = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (mensage.length < 40) {
            setComentario(mensage);
            setMensaje('');
        }
    }

    return (
        <>
            <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
                <h1>🚀Panel de energia</h1>
                <h2>🔋Energia: {energia}</h2>
                <button onClick={gastarEnergia}>Usar Nave</button>
                <button onClick={recargarEnergia}>Recargar Energia</button>

                <h3>Comentario</h3>
                <form onSubmit={manejarComentario}>
                    <input
                        type="text"
                        value={mensage}
                        onChange={(e) => setMensaje(e.target.value)}
                        placeholder="Escribe tu cometario (menos de 40 caracteres)"
                    />
                    <button type="submit" style={{marginLeft: '10px'}}>Comentar</button>
                </form>
                <p>{comentario}</p>
            </div>
        </>
    )
}

export default PanelNave;