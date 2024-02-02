import React, { useState } from "react"
import Mensaje from "./Mensaje"

const NuevoPresupuesto = ({
  presupuesto, 
  setPresupuesto, 
  isValidate, 
  setIsValidate  
}) => {
  const [mensaje, setMensaje] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!presupuesto || presupuesto < 0) {
      setMensaje('Error: valor no permitido')
      setIsValidate(false)
      return
    }
    
    setMensaje('')
    setIsValidate(true)
  }
  // console.log('ga')

  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form className="formulario" onSubmit={handleSubmit}>

          <div className="campo">
            <label htmlFor="agregaPresupuesto">
              Definir Presupuesto
            </label>
            <input 
              type="number" 
              placeholder="Agrega un presupuesto"
              id="agregaPresupuesto"
              className="nuevo-presupuesto"
              value={presupuesto}
              onChange={e => setPresupuesto(Number(e.target.value))}
            />
          </div>

          <input 
            type="submit" 
            value="Agregar Presupuesto"
          /> 
        </form>

        {mensaje && <Mensaje tipo="error" mensaje = {mensaje}/>}
        {/* {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>} */}
    </div>
  )
}

export default NuevoPresupuesto