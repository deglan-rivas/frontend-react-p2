import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal'
import Gasto from './components/Gasto'
import ListadoGastos from './components/ListadoGastos'
import Filtro from './components/Filtro'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidate, setIsValidate] = useState(false)

  const [isModalShown, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [filtro, setFiltro] = useState('')

  const [gastos, setGastos] = useState([])
  const [gasto, setGasto] = useState({})

  const handleModal = () => {
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 500);
  }

  return (
    <div className={isModalShown && 'fijar'}>
      <Header
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
        isValidate = {isValidate}
        setIsValidate = {setIsValidate}
        gastos = {gastos}
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

      {/* {gastos && gastos.map( (gastoState) => {
        return <Gasto
          gastoState = {gastoState}
        />
      })} */}
    </div>
  )
}

export default App
