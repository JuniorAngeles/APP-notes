import { Link } from "react-router-dom";

export default function NoteVoler({ notes, individual }) {
  return (
    <div className="note-item Volver">
      <Link to="/">Volver</Link>
    </div>
  );
}
