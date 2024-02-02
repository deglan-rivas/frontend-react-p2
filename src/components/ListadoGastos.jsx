import Gasto from "./Gasto"

const ListadoGastos = ({gastos}) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{gastos.length ? "Gastos" : "No hay gastos disponibles"}</h2>

      {gastos.map( gastoState => 
        <Gasto
          key = {gastoState.id}
          gastoState = {gastoState}
        /> )}
    </div>
  )
}

export default ListadoGastos