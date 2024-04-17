
import './Css/App.css'
import { Viviendas } from './Data/Aviviendas'
import { useState, useEffect } from 'react'
import Opciones from './Components/Opciones'
import Cajas from './Components/Cajas'
import Modal from './Components/Modal'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Compra from './pages/Compra'
import Favorito from './pages/Favorito'
import  NoEncontrada  from './pages/NoEncontrada'


function App() {

  const [vivi, setViviendas] = useState(Viviendas)

  const [Modal1, cambiarModal1] = useState(false)

  useEffect(() =>{
    setViviendas(Viviendas)

    
  }, [])

  return (

    

    <>
     
      
      <BrowserRouter>
          <Routes>
              <Route path='/' element={

                <>
                 <h1 className='Titulo'>House Shopping</h1>
                  <Cajas
                  Casa={vivi}
                  Modal1={Modal1}
                  cambiarModal1={cambiarModal1}
                  />

                  <Modal
                    Modal1={Modal1}
                    cambiarModal1={cambiarModal1}
                  />
            
                </>
                } 
              />

              <Route path='/Compra' element={<Compra/>} />
              <Route path='/Favorito' element={<Favorito/>} />
              <Route path='*' element={<NoEncontrada/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
