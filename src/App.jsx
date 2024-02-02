import { useState, useEffect } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal'
import Gasto from './components/Gasto'
import ListadoGastos from './components/ListadoGastos'
import Filtro from './components/Filtro'

function App() {
  const [presupuesto, setPresupuesto] = useState(
    localStorage.getItem('presupuesto') ?? 0
  )
  const [isValidate, setIsValidate] = useState(false)

  const [isModalShown, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [filtro, setFiltro] = useState('')

  const [gastos, setGastos] = useState(
    JSON.parse(localStorage.getItem('gastos')) ?? []
  )
  const [gasto, setGasto] = useState({})

  const handleModal = () => {
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 500);
  }

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto])

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos ?? []) )
  }, [gastos])

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;

    if(presupuestoLS > 0 ) {
      setIsValidate(true)
    }
  }, []);

  return (
    <div className={isModalShown && 'fijar'}>
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
          setGastos = {setGastos}
          gastos = {gastos}
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
