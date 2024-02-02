import React from "react";

const Mensaje = ({mensaje, tipo}) => {
  return (
    <div className={`alerta ${tipo}`}>
      {mensaje}
    </div>
  )
}

// const Mensaje = ({children, tipo}) => {
//   return (
//     <div className={`alerta ${tipo}`}>
//       {children}
//     </div>
//   )
// }

export default Mensaje