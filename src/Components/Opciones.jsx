import { BsFillHouseAddFill } from 'react-icons/bs'
import { BsFillHouseHeartFill } from 'react-icons/bs'
import { BsFilter } from 'react-icons/bs'
import { Viviendas } from '../Data/Aviviendas' 
import { useState } from 'react'

 
import '../Css/Opciones.css'
import Cajas from './Cajas'

function Opciones() {

    const [fil, setFil] = useState([])


    const [VerFill,  setVerFiltro] = useState(false)

    const VerFiltro = () =>{
        setVerFiltro(VerFill => !VerFill)
    }

    let Clase = VerFill ? 'Ver' : 'NoVer'

    
    const cambio = (e) =>{

        const data = e.target.value
        const chiva =(Viviendas.filter(filtrar => filtrar.Datos.Vivienda == data))
       
        setFil(chiva)
        console.log(fil)
        
    }
    
    <Cajas
    Filtro={fil}
    />
 

  return (
    <div >

        {/* <div className="FavCar">

            <div className="Carrito" >
                <BsFillHouseAddFill style={{color: '#FB2326'}}/>
                <h3>Casas Agregadas</h3>
            </div>

            <div className='Favorita'>
                <BsFillHouseHeartFill style={{color: '#FDB53B'}}/>
                <h3>Casas Favoritas</h3>     
            </div>

        </div>

        <div className='Filtro'>
                <BsFilter style={{color: '#503f22'}} onClick={VerFiltro}/>
                <h3>Filtrar Casa</h3>

                <div>
                
                    <select name="" className={Clase} id="Seleccion" onChange={cambio}>
                        <option value="menorAmayor">Precio: Menor a Mayor</option>
                        <option value="mayorAmenor">Precio: Mayor a Menor</option>
                        <option value="Apartamento">Apartamentos</option>
                        <option value="Casa">Casas</option>
                        <option value="Villa">Villas</option>
                    </select>

                </div>          
        </div> */}

    </div>
  )
}

export default Opciones