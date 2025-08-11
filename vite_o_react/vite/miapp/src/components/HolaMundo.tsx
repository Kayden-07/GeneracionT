type Props = {
    nombre: string;
    apellido: string;
}

function HolaMundo ({nombre, apellido}:Props) {
    return (
        <div>Hola {nombre} {apellido}, DESDE UN COMPONENTE</div>
    )
}

export default HolaMundo