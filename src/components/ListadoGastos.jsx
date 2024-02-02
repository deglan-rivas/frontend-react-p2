import Gasto from "./Gasto"

const ListadoGastos = ({gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados}) => {
  return (
    <div className="listado-gastos contenedor">

      { filtro ? (
          <>
            <h2>{gastosFiltrados.length ? "Gastos" : "No hay gastos disponibles para esta categoría"}</h2>

            {gastosFiltrados.map( gastoState => 
              <Gasto
              key = {gastoState.id}
              gastoState = {gastoState}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              /> )}
          </>
        ) : (
          <>
            <h2>{gastos.length ? "Gastos" : "No hay gastos disponibles"}</h2>

            {gastos.map( gastoState => 
              <Gasto
              key = {gastoState.id}
              gastoState = {gastoState}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              /> )}
          </>
        ) 
      }
      
    </div>
  )
}

export default ListadoGastos