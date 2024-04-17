import React from 'react'
import { Viviendas } from '../Data/Aviviendas'
import {MdFavorite} from 'react-icons/md'
import '../Css/BtnFavorito.css'
 
function BtnFavorito() {
  return (
    <div>

        {
            Viviendas.map(titulo =>
                
                <div key={titulo.Titulo}>
                    <MdFavorite className='Fav' id={titulo.Titulo}/>
                </div>

                
                
                )
        }

    </div>
  )
}

export default BtnFavorito