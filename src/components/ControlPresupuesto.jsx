import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({presupuesto, gastos, setGastos, setPresupuesto, setIsValidate}) => {
  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)
  const [porcentaje, setPorcentaje] = useState(0)

  useEffect( () => {
    const totalGastado = gastos.reduce((total, gasto) => total + gasto.cantidad, 0)
    const totalDisponible = presupuesto - totalGastado;

    const nuevoPorcentaje = (( ( presupuesto - totalDisponible ) / presupuesto  ) * 100).toFixed(2);

    setDisponible(totalDisponible)
    setGastado(totalGastado)
    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje)
    }, 1500);
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
        <CircularProgressbar
          styles={buildStyles({
            pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
            trailColor: '#F5F5F5',
            textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
          })}
          value={porcentaje}
          text={`${porcentaje}% Gastado`}
        />
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

        <p className={`${disponible < 0 ? 'negativo' : '' }`}>
          <span>Disponible:</span> {formatearPresupuesto(disponible)}
        </p>

        <p >
          <span>Gastos:</span> {formatearPresupuesto(gastado)}
        </p>
      </div>
    </div>
  )
}

export default ControlPresupuesto