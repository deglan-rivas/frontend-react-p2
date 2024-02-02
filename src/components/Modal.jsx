import { useState } from 'react'

import btnCerrar from '../img/cerrar.svg'
import Mensaje from './Mensaje'
import { generarId } from '../helpers'

const Modal = ({
      setModal, 
      setAnimarModal, 
      animarModal,
      setGastos,
      gastos
    }) => {
  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState(0)
  const [categoria, setCategoria]  = useState('')
  const [mensaje, setMensaje] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    if ([nombre, cantidad, categoria].includes('')) {
      setMensaje('Todos los campos son obligatorios')

      setTimeout(() => {
        setMensaje('')
      }, 3000);
      return
    }

    setMensaje('')
    setGastos([...gastos, {
      nombre, 
      cantidad, 
      categoria, 
      id: generarId(), 
      fecha: Date.now() 
    }])
    handleCloseModal()
  }

  const handleCloseModal = () => {
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500);
  }
  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img 
          src={btnCerrar} 
          alt="cerrar ventana" 
          onClick={handleCloseModal}
        />
      </div>

      <form 
        className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
        onSubmit={handleSubmit}
      >
        <legend>
          Nuevo Gasto
        </legend>

        {mensaje && 
          <Mensaje
            mensaje={mensaje}
            tipo="error"
          />
        }

        <div className='campo'>
          <label htmlFor='nombre'>Nombre Gasto</label>
          <input 
            id='nombre'
            type="text" 
            placeholder='Añade el nombre del gasto'
            value={nombre}
            onChange={(e) => {setNombre(e.target.value.trim())}}
          />
        </div>

        <div className='campo'>
          <label htmlFor='cantidad'>Cantidad</label>
          <input 
            id='cantidad'
            type="number" 
            placeholder='Añade la cantidad del gasto. Ejm: 300'
            value={cantidad}
            onChange={(e) => {setCantidad(Number(e.target.value))}}
          />
        </div>

        <div className='campo'>
          <label htmlFor="categoria">Categoría</label>

          <select 
            id="categoria"
            value={categoria}
            onChange={(e) => {setCategoria(e.target.value)}}
          >
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>

        <input 
          type="submit" 
          value="Añadir Gasto"
        />
      </form>
    </div>
  )
}

export default Modal