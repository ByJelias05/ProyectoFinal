import React from 'react'
import { Viviendas } from '../Data/Aviviendas' 
import '../Css/BtnAgregar.css'

function BtnAgregar() {
  return (
    <div>
        {
            Viviendas.map(titulo => 
                
                <div key={titulo.Titulo}>
                  <button id={titulo.Titulo} className={titulo.Titulo}>Comprar</button>
                </div>
                
                )
        }
    </div>
  )
}

export default BtnAgregar