import '../Css/Cajas.css'
import '../Css/BtnAgregar.css'
import '../Css/BtnFavorito.css'
import {MdFavorite} from 'react-icons/md'
import {useState, useEffect, useRef} from 'react'
import '../Css/Modal.css'

import { BsFillHouseAddFill } from 'react-icons/bs'
import { BsFillHouseHeartFill } from 'react-icons/bs'
import { FiX } from 'react-icons/fi'
import { BsFilter } from 'react-icons/bs'
import { Viviendas } from '../Data/Aviviendas'



function Cajas( { Casa, Modal1, cambiarModal1} ) {

  const Digi = useRef(null);

const [DataModal, setDataModal] = useState([])

useEffect(() =>{
  setDataModal(DataModal)
})

  const [array, setArray] = useState(Casa)

  // let precios =array.map(casa => casa.Datos.Precio)

  // precios.sort((a, b) =>{
  //   if(a == b){
  //     return 0;
  //   }
  //   if(a < b){
  //     return -1
  //   }
  //   if(a > b){
  //     return 1
  //   }
    
  // })

  // console.log(precios)
  

  //VerFitraje

     const [VerFill,  setVerFiltro] = useState(false)

    const VerFiltro = () =>{
        setVerFiltro(VerFill => !VerFill)
    }

    let Clase = VerFill ? 'Ver' : 'NoVer'

    //Filtraje

    const Filtraje = (e) =>{

      const Buscar = e.target.value;

      if(Buscar != "Todo"){

        let filtro = Viviendas.filter(vivienda => vivienda.Datos.Vivienda == Buscar)

        setArray(filtro)
        
      }
      else{
        setArray(Viviendas)
      }
    

    }

    const AgregadasLs = JSON.parse(localStorage.getItem("ViviendasAgregadas"))

    let Agregadas

    if(AgregadasLs.length > 0){
      Agregadas = AgregadasLs
    }else{
       Agregadas = []
    }

  

    const actualizarAgregar = (e) =>{

      const Titulo = e.currentTarget.id

      const AgregarV = Viviendas.find(vivienda => vivienda.Titulo == Titulo)

      Agregadas.push(AgregarV)

      console.log(Agregadas)

      localStorage.setItem("ViviendasAgregadas", JSON.stringify(Agregadas))

    }
    
    const FavoritasLs = JSON.parse(localStorage.getItem("ViviendasFavoritas"))

    let Favoritas

    if(FavoritasLs.length > 0){
        Favoritas = FavoritasLs
    }else{
      Favoritas = []
    }

    const actualizarFavorito = (e) =>{

      const Titulo = e.currentTarget.id

      const FavoritaV = Viviendas.find(vivienda => vivienda.Titulo == Titulo)

      Favoritas.push(FavoritaV)

      console.log(FavoritaV)

      localStorage.setItem("ViviendasFavoritas", JSON.stringify(Favoritas))
    }

    const paga = (e) =>{
     
      let price = Viviendas.filter(vivienda => vivienda.Datos.Precio <= e.target.value)

      

      if(price.length == 0){
        setArray(Viviendas)
      }
      else{
        setArray(price)
      }

      let Digitos = e.target.value

      const DosDigitos = [] 
      const UnDigito = [] 

      if(Digitos.length == 7){
        UnDigito.push(Digitos.slice(0,1))
        Digi.current.innerHTML = UnDigito[0] + " M"
      }
      

      if(Digitos.length == 8){
        DosDigitos.push(Digitos.slice(0,2))
        Digi.current.innerHTML = DosDigitos[0] + " M"
      }

    
    }

    const ModalInf = (e) =>{
      cambiarModal1(Modal1 = !Modal1)

      let Ndata = e.currentTarget.id;

      setDataModal([Viviendas.find(data => data.Titulo == Ndata)]);
    
    }

    const CerrarModal = (e) =>{

      e.preventDefault();

      cambiarModal1(Modal1 = !Modal1)
    }

  return (


    <>
      {/* Modal */}

    
      {
        Modal1 && 
        <div className='Contenedor-Modal'>

        <div className="Modal">
        {
          DataModal.map(info => 
            
            <div>

              <div className="Salir-titulo">
                <h1 className='tituloP'>{info.Titulo}</h1>

                <div className='salir'><FiX style={{fontSize:'35px', cursor:'pointer'}} onClick={CerrarModal}/></div>
              </div>

                <div className='Informaciones'>

                  <div className="Imagenes">
                    {
                        info.ImagenesSecunadarias.map(valor => <img src={`/Images/${valor.vivienda}/${valor.posicion}/${valor.Lugar}.jpg`}/>)
                    }
                  </div>

                  <div className='Descripcion-Datos'>
                    <div className='Descripcion'>
                      <h3>Descripcion de la Casa</h3>
                      <li>{info.Descripcion.Habitaciones}</li>
                      <li>{info.Descripcion.Baños}</li>
                      <li>Garage {info.Descripcion.Garage}</li>
                      <li>{info.Descripcion.Cocina}</li>
                      <li>{info.Descripcion.Sala}</li>
                    
        
                    </div>

                  </div>

              </div>

              <div className="Contenedor-Datos">
                      <h2 style={{color:'#968d7f'}}>Datos de la vivienda</h2>
                      
                      <div className="Datos">

                        <div className="precio">
                          <span>Precio</span>
                          <h3>{info.Datos.Precio}</h3>
                        </div>

                        <div className='vendedor'>
                          <span>Vendedor</span>
                          <h3>{info.Datos.Vendedor}</h3>
                        </div>
                        
                        <div className="direccion">
                          <span>Direccion</span>
                          <h3>{info.Datos.Direccion}</h3>
                        </div>

                        <div className="contacto">
                          <span>Contacto</span>
                          <h3>{info.Datos.Contacto}</h3>
                        </div>
                      </div>
                    </div>


            </div>
            )
        }

           
        </div>

    </div>
    }


          
    {/* Opciones */}
      <div className="contenedor-principal">

<div className="FavCar">

      <a href="/Compra"  id='Carrito'  className="Carrito" style={{textDecoration:'none'}}>
        <BsFillHouseAddFill style={{color: '#FB2326'}}/>
        <h3>Casas Agregadas</h3>
      </a>
      
    <a href="/Favorito" className='Favorita' style={{textDecoration:'none'}}>
      <BsFillHouseHeartFill style={{color: '#FDB53B'}}/>
      <h3>Casas Favoritas</h3>   
    </a> 
        
           
    
    
</div>

<div className='Filtro'>
        <BsFilter style={{color: '#503f22'}} onClick={VerFiltro}/>
        <h3>Filtrar Casa</h3>

        <div>

          <div style={{display:'flex', flexDirection:'column', marginTop:'10px'}}>

            <h1 ref={Digi} style={{fontSize:'20px', color:'#FB2326'}}>0 M</h1>
            <input  type="range" min={400000} max={65000000}  onInput={paga}/>

          </div>
    
            <select name="" className={Clase} id="Seleccion" onChange={Filtraje}>
              <option value="Todo">Todas las casas</option>
                <option value="Apartamento">Apartamentos</option>
                <option value="Casa">Casas</option>
                <option value="Villa">Villas</option>
            </select>

        </div>          
</div>

</div>

    {/* Cajas */}


      <div className='Contedor-Principal'>

          
      {

        array.map(casa =>

          <div key={casa.Titulo} className="contenedor" style={{margin:'10px'}} >
            <img onClick={ModalInf} id={casa.Titulo} src={casa.Imagenes.ImagenPrincipal} alt="" />
            <h1 className='titulo'>{casa.Titulo}</h1>
            <h1 className='precio'>{"$"+casa.Datos.Precio+" Pesos"}</h1>

            <div className='Info' >
            <ul style={{display:'flex', textDecoration:'none', listStyle:'none', justifyContent:'center', gap:'5px'}}>
                 <li style={{color:'#FB2326', fontSize:'16px'}}>{casa.Descripcion.Habitaciones}</li>
                 <span style={{color:'gray'}}> + </span>
                 <li style={{color:'#FDB53B', fontSize:'16px'}}>{casa.Descripcion.Baños}</li>
                 <span style={{color:'gray'}}> + </span>
                 <li style={{color:'#FB2326', fontSize:'16px'}}>{casa.Descripcion.Cocina}</li>
            </ul>
            </div>

            <div className='BtnA'>
            <button id={casa.Titulo} onClick={actualizarAgregar} className={casa.Titulo}>Comprar</button>
            </div>

            <div className='BtnF'>
            <MdFavorite className='Fav' id={casa.Titulo} onClick={actualizarFavorito}/>
            </div>

            

          </div>
        )


      }



      </div>

    </>
  )
}

export default Cajas