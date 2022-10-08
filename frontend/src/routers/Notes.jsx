import { useState, useEffect } from "react";
import NotesItems from "../components/notes_items";
import NotesGroup from "../components/NotesGroup";
import { Link } from "react-router-dom";
import "../styles/Notes.css";
import Header from "../components/Header";

export default function Notes() {
  const [notes, setNotes] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/notes")
      .then((response) => response.json())
      .then((result) => setNotes(result));
  }, []);

  useEffect(() => {
    console.log(notes);
  }, [notes]);

  if (!notes) {
    return (
      <>     <div className="centrado">
      <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      </div>
      </div>
      <p className="notes-subtitle">Getting notes!</p>
      </>

    );
  }

  // if (notes.error) {
  //     console.log(`hubo un error al obtener los datos`);
  // }

  if (notes.data.length == 0) {
    return (
      <div className="notes">
        <p className="notes-subtitle top-spacer">No hay notas.</p>
        <p className="notes-subtitle">
          <Link to="/create">Crear una nota!</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="notes">
      <NotesGroup>
        {notes.data.map((notes) => {
          return <NotesItems notes={notes} />;
        })}
      </NotesGroup>
    </div>
  );
}
