import { useState, useEffect } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal'
import Gasto from './components/Gasto'
import ListadoGastos from './components/ListadoGastos'
import Filtro from './components/Filtro'
import { generarId } from './helpers'


function App() {
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  )
  const [isValidate, setIsValidate] = useState(false)

  const [isModalShown, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [filtro, setFiltro] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState([])

  const [gastos, setGastos] = useState(
    JSON.parse(localStorage.getItem('gastos')) ?? []
  )
  const [gastoEditar, setGastoEditar] = useState({})

  useEffect(() => {
    if( Object.keys(gastoEditar).length > 0 ) {
      setModal(true)

      setTimeout(() => {
        setAnimarModal(true)
      }, 500);
    }
  }, [ gastoEditar ])

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto])

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos ?? []) )
  }, [gastos])

  useEffect(() => {
    if(filtro) {
        const gastosFiltrados = gastos.filter( gasto => gasto.categoria === filtro)
        setGastosFiltrados(gastosFiltrados)
    }
  }, [filtro]);

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;

    if(presupuestoLS > 0 ) {
      setIsValidate(true)
    }
  }, []);

  const handleModal = () => {
    setModal(true)
    setGastoEditar({})

    setTimeout(() => {
      setAnimarModal(true)
    }, 500);
  }

  const guardarGasto = gasto => {
    if(gasto.id) {
      // Actualizar
      const gastosActualizados = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados);
      setGastoEditar({})
    } else {
      // Nuevo Gasto
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto ])
    }
    setAnimarModal(false)
    setTimeout(() => {
        setModal(false)
    }, 500);
  }

  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter( gasto => gasto.id !== id);
    setGastos(gastosActualizados);
  }

  return (
    <div className={isModalShown ? 'fijar': ''}>
      <Header
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
        isValidate = {isValidate}
        setIsValidate = {setIsValidate}
        gastos = {gastos}
        setGastos = {setGastos}
      />

      {isValidate && (
        <>

          <main>
            <Filtro
              filtro={filtro}
              setFiltro={setFiltro}
            />

            <ListadoGastos
              gastos = {gastos}
              setGastoEditar = {setGastoEditar}
              eliminarGasto = {eliminarGasto}
              filtro = {filtro}
              gastosFiltrados = {gastosFiltrados}
            />
          </main>

          <div className='nuevo-gasto'>
            <img 
              src={IconoNuevoGasto} 
              alt="icono nuevo gasto" 
              onClick={handleModal}
            />
          </div>
        </>
      )}

      {isModalShown && (
        <Modal
          setModal = {setModal}
          setAnimarModal = {setAnimarModal}
          animarModal = {animarModal}
          guardarGasto = {guardarGasto}
          gastoEditar = {gastoEditar}
          setGastoEditar = {setGastoEditar}
        />
      )}

    </div>
  )
}

// {gastos && gastos.map( (gastoState) => {
//   return <Gasto
//     gastoState = {gastoState}
//   />
// })}
export default App
