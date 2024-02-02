import React from "react"
import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"

const Header = ({
  presupuesto, 
  setPresupuesto, 
  isValidate, 
  setIsValidate,
  gastos,
  setGastos
}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      { isValidate 
          ? <ControlPresupuesto
              presupuesto = {presupuesto}
              gastos = {gastos}
              setGastos = {setGastos}
              setIsValidate = {setIsValidate}
              setPresupuesto = {setPresupuesto}
            />
          : <NuevoPresupuesto
              presupuesto = {presupuesto}
              setPresupuesto = {setPresupuesto}
              isValidate = {isValidate}
              setIsValidate = {setIsValidate}
            />
      }
      
    </header>
  )
}

export default Header