import React from 'react'
import { Viviendas } from '../Data/Aviviendas'

console.log(Viviendas)
function Slide() {

  return (
    <div>

        {
            Viviendas.map(slide => <img src={`${slide.Slides.map}`} />)
        }

    </div>
  )
}

export default Slide