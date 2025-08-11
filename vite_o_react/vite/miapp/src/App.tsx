import './App.css'
import PresentacionCard from './components/PresentacionCard'

function App() {

  const maneJadorSaludo = (nombre: string, apellido:string) => {
    alert(`Hola ${nombre} ${apellido}, bienvenido a React con TypeScript`)
  }
  return (
    <>
      <PresentacionCard nombre='Gino' apellido='Mazzaglia' onSaludar={maneJadorSaludo}/>
    </>
  )
}

export default App
