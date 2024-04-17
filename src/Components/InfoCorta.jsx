import React from 'react'
import { Viviendas } from '../Data/Aviviendas'

function InfoCorta() {
  return (
    <div>
        {
            Viviendas.map(info =>
                <ul>
                    <li>{info.Descripcion.Habitaciones}</li>
                </ul>)
        }
    </div>
  )
}

export default InfoCorta