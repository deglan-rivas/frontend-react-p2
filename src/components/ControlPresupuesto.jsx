import { useEffect, useState } from "react";

const ControlPresupuesto = ({presupuesto, gastos, setGastos, setPresupuesto, setIsValidate}) => {
  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)

  useEffect( () => {
    console.log(gastos)
    const totalGastado = gastos.reduce((total, gasto) => total + gasto.cantidad, 0)
  }, [gastos])

  const formatearPresupuesto = cantidad => {
    // console.log(cantidad)
    // console.log(cantidad.toLocaleString('en-US', {
    //   style: 'currency',
    //   currency: 'USD'
    // }))
    return cantidad.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }

  const handleResetApp = () => {
    const confirmation = confirm('Seguro que desea reiniciar sus gastos? Esta acción es irreversible')

    if (confirmation) {
      setGastos([])
      setIsValidate(false)
      setPresupuesto(0)
    }
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Aquí va el gráfico</p>
      </div>

      <div className="contenido-presupuesto">
        <input
          className="reset-app"
          type="button"
          value='resetear app'
          onClick={handleResetApp}
        />
                  
        <p >
          <span>Presupuesto:</span> {formatearPresupuesto(presupuesto)}
        </p>

        <p >
          <span>Disponible:</span> {formatearPresupuesto(0)}
        </p>

        <p >
          <span>Gastos:</span> {formatearPresupuesto(0)}
        </p>
      </div>
    </div>
  )
}

export default ControlPresupuesto