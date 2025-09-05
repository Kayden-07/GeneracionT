import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/carousel/Navbar'
import Home from './components/page/Home'
import Products from './components/page/Products'
import ProductDetail from './components/page/ProductDetail'
import PrivateRoute from './routes/PrivateRoute'
import Dashboard from './components/page/Dashboard'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<ProductDetail/>}/>

        <Route path='/das' element={<PrivateRoute>
          <Dashboard/>
        </PrivateRoute>}/>
      </Routes>
    </>
  )
}

export default App
