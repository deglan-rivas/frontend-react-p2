import { formatearFecha } from '../helpers/index.js'
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"

import iconoAhorro from '../img/icono_ahorro.svg'
import iconoCasa from '../img/icono_casa.svg'
import iconoComida from '../img/icono_comida.svg'
import iconoGastos from '../img/icono_gastos.svg'
import iconoOcio from '../img/icono_ocio.svg'
import iconoSalud from '../img/icono_salud.svg'
import iconoSuscripciones from '../img/icono_suscripciones.svg'

const diccionarioIconos = {
  ahorro: iconoAhorro,
  casa: iconoCasa,
  comida: iconoComida,
  gastos: iconoGastos,
  ocio: iconoOcio,
  salud: iconoSalud,
  suscripciones: iconoSuscripciones,
}

const Gasto = ({gastoState, setGastoEditar, eliminarGasto}) => {
  console.log(gastoState)
  const {nombre, cantidad, categoria, id, fecha} = gastoState

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gastoState)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction 
        onClick={() => eliminarGasto(id)}
        destructive={true}
      >
          Eliminar
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img 
              src={diccionarioIconos[categoria] }
              alt={`icono ${categoria}`} 
            />

            <div className="descripcion-gasto">
              <p className="categoria">{categoria}</p>
              <p className="nombre-gasto">{nombre}</p>
              <p className='fecha-gasto'>
                Agregado el {""}
                <span>{formatearFecha(fecha)}</span>
              </p>
            </div>

          </div>
          
          <p className="cantidad-gasto">${cantidad}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
    )
}

export default Gasto