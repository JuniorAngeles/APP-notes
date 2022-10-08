import connect from "../services/mysql.service.js";

export function getNotes(request, response) {
  connect.query(`select * from notas order by create_at desc`, function (error, data) {
    if (error) {
      response.status(404).send({
        messege: `a ocurrido un error al obtener los datos`,
        error: error,
        data: null,
      });
    } else {
      response.status(200).send({
        messege: `se encontraron datos en la base de datos`,
        data: data,
        error: null,
      });
    }
  });
}
export function getNote(request, response) {
  const { params } = request;
  const id = Number(params.id);
  connect.query(`select * from notas where id=${id}`, function (error, data) {
    if (data[0] && !error) {
      response.status(200).send({
        messege: `se encontro el dato buscado`,
        data: data[0],
        error: null,
      });
    } else {
      response.status(404).send({
        messege: `a ocurrido un error al obtener el dato`,
        error: error,
        data: null,
      });
    }
  });
}

export function createNote(request, response) {
  const { body } = request;
  connect.query(
    `insert into notas(tittle, content) value ( ? , ?)`,
    [body.tittle, body.content],
    function (error, data) {
      if (error) {
        response.status(400).send({
          messege: `ocurrido un error al insertar el dato`,
          error: error,
          data: null,
        });
      } else {
        response.status(201).send({
          messege: `el dato se inserto correctamente`,
          data: data,
          error: null,
        });
      }
    }
  );
}

export function updateNote(request, response) {
  const { params, body } = request;
  const id = Number(params.id);
  connect.query(
    `update notas set tittle = ?, content = ? where id = ${id} ;`,
    [body.tittle, body.content],
    function (error, data) {
      if (error) {
        response.status(400).send({
          messege: `ocurrido un error al actualizar el dato`,
          error: error,
          data: null,
        });
      } else {
        response.status(202).send({
          messege: `el dato se actualizo correctamente`,
          data: data,
          error: null,
        });
      }
    }
  );
}

export function deleteNote(request, response) {
  const { params } = request;
  const id = Number(params.id);
  connect.query(`delete from notas where id=${id}`, function (error, data) {
    if (error) {
      response.status(400).send({
        messege: `ocurrido un error al eliminar el dato`,
        error: error,
        data: null,
      });
    } else {
      response.status(202).send({
        messege: `el dato se elimino correctamente`,
        data: data,
        error: null,
      });
    }
  });
}

export function deleteNotes(request, response) {
  connect.query(`delete from notas`, function (error, data) {
    if (error) {
      response.status(400).send({
        messege: `ocurrido un error al eliminar los datos`,
        error: error,
        data: null,
      });
    } else {
      response.status(202).send({
        messege: `los datos se elimino correctamente`,
        data: data,
        error: null,
      });
    }
  });
}
