import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function updateNote() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [note, setNote] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/notes/${id}`)
      .then((response) => response.json())
      .then((result) => setNote(result));
  }, []);

  function updateData(event) {
    event.preventDefault();

    // TODO: obtener el { tittle, content} en un objeto
    const form = new FormData(event.target);
    const tittle = form.get("tittle");
    const content = form.get("content");

    // console.log(tittle)
    // console.log(content)
    // TODO: enviar ese obteto con fetch
    fetch(`http://localhost:5000/notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tittle,
        content,
      }),
    }).then(() => navigate("/"));
  }

  if (!note) {
    return <h1>Cargando...</h1>;
  }

  return (
    <section className="contenedor">
      <form onSubmit={updateData}>
        <input
          className="titulo-h1"
          type="text"
          id="tittle"
          name="tittle"
          placeholder="Titulo de la Nota"
          required
          value={note.data.tittle}
          onChange={(event) => {
            setNote({
              ...note,
              data: {
                ...note.data,
                tittle: event.target.value,
              },
            });
          }}
        />

        <textarea
          className="contenido-p"
          id="content"
          name="content"
          placeholder="Descripción de la Nota"
          required
          value={note.data.content}
          onChange={(event) => {
            setNote({
              ...note,
              data: {
                ...note.data,
                content: event.target.value,
              },
            });
          }}
        ></textarea>

        <button type="submit">Guardar</button>
      </form>
    </section>
  );
}
