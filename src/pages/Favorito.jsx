import React, { useRef, useEffect, useState } from 'react'
import { MdOutlineHomeWork } from 'react-icons/md'
import '../Css/Compra.css'
import { RiDeleteBinLine } from 'react-icons/ri'

function Favorito() {

  const Favoritas = JSON.parse(localStorage.getItem("ViviendasFavoritas"))
  console.log(Favoritas)
  
  const Mostrar = useRef(null)

  const [Class, setClass] = useState()


 
    const Clase = Class ? "Activa" : "Desactivada"
   
    console.log(Clase)



  const Eliminar = (e) =>{
     const Titulo = e.currentTarget.id

     var Index = Favoritas.findIndex(index => index.Titulo == Titulo)

      Favoritas.splice(Index, 1)

      localStorage.setItem("ViviendasFavoritas", JSON.stringify(Favoritas))

      location.reload();
      
      
  }

  useEffect(() =>{
    if(Favoritas.length == 0){
      Mostrar.current.innerHTML = "Todavia no te ha gustado una vivienda"
    }
    
    if(Favoritas.length == 0){
      setClass(false)
    }else{
      setClass(true)
    }
  }, [])


  return (
    <>
    
    
    <div className="Contenedor">
      <h1 className='Titulo2'>Favoritas de House Shopping</h1>

      <a className='Atras' href="/" style={{display:'flex', alignItems:'center', textDecoration:'none'}}>
        <MdOutlineHomeWork className='icono' /> 
        <span className='regresar'>Regresar</span>
      </a>

        <h1 className={Clase} ref={Mostrar}></h1>

      <div className="Contenedor-Agregadas">

      {
        Favoritas.map(viviendas => 
          

          <div className='Caja-Agregadas' key={viviendas.Titulo}>

            <img src={viviendas.Imagenes.ImagenPrincipal} alt="" />

            <div>
              <span>Direccion</span>
              <h1>{viviendas.Datos.Direccion}</h1>
            </div>

            <div>
              <span>Vendedor</span>
              <h1>{viviendas.Datos.Vendedor}</h1>
            </div>

            <div>
              <span>Precio</span>
              <h1>{viviendas.Datos.Precio}</h1>
            </div>

            <RiDeleteBinLine id={viviendas.Titulo} className='Delete' onClick={Eliminar}/>
          </div>
          )
      }

</div>


    </div>

  
    </>
  )
}

export default Favorito