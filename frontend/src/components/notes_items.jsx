import { Link } from "react-router-dom";
import "../styles/noteitem.css";

export default function NotesItems({ notes, individual }) {
  return (
    <div className="note-item">
      <h1 className="note-item-title">{notes.tittle}</h1>
      <p className="note_item__content">{notes.content}</p>
      <div>
        <span>Fecha de creacion:{notes.create_at}</span>
        <br />
        <span>Fecha de actualizacion: {notes.update_at}</span>
      </div>
      <div className="note-item__actions">
        {!individual && <Link to={`/view/${notes.id}`}>Ver nota</Link>}
        <Link to={`/delete/${notes.id}`}>Borrar nota</Link>

        <Link to={`/update/${notes.id}`}>Editar</Link>
        <br />
        <br />
      </div>
    </div>
  );
}
