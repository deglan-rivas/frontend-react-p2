const generarId = () => {
  const random = Math.random().toString(36).substring(2)
  const fecha = Date.now().toString(36)

  return random + fecha
}

const formatearFecha = fecha => {
  // console.log(fecha)
  return new Date(fecha).toLocaleDateString('es-ES',{
    year: "numeric",
    month: "long",
    day: "2-digit"
  })
}



export {
  generarId,
  formatearFecha
}