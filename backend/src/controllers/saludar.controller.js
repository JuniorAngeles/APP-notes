function saludarController(request, response) {
  const nombre = request.params.nombre;
  const ruta = request.route.path;

  response.status(200).send(`hola mundo como estan <h1>${nombre}</h1>  <h1> ruta: ${ruta} </h1>`);
  console.log(request.route.path);
}

export default saludarController;
