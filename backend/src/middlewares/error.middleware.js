function errores(_request, response) {
  response.status(404).send("esta ruta no existe");
}

export default errores;
