import { useNavigate } from "react-router-dom";
import "../styles/form.css";
import swal from 'sweetalert';


export default function CreateNote() {
  const navigate = useNavigate();

  function submitData(event) {
    event.preventDefault();

    const form = new FormData(event.target);

    const tittle = form.get("tittle");
    const content = form.get("content");

    fetch(`http://localhost:5000/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        tittle,
        content,
      }),
    })
      .then(() => navigate("/"))
      .then(swal("Good job!", "You clicked the button!", "success"));
  }

  return (
    <>
      <section class="contenedor">
        <h1>Agregar nueva Nota</h1>
        <form onSubmit={submitData}>
          <label for="tittle">Titulo</label>
          <input type="text" id="tittle" name="tittle" placeholder="Titulo de la Nota" required />

          <label for="content">Descripción</label>
          <textarea id="content" name="content" placeholder="Descripción de la Nota" required></textarea>

          <button type="submit">Crear</button>
        </form>
      </section>
    </>
  );
}
