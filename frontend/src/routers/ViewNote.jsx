import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NotesItems from "../components/notes_items";
import NoteVoler from "../components/itemviewnotes";
import "../styles/index.css"
export default function ViewRoute() {
  const { id } = useParams();

  const [notes, setNotes] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/notes/${id}`)
      .then((response) => response.json())
      .then((result) => setNotes(result));
  }, []);

  if (!notes) {
    return (
      <>
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          </div>
      </>
    );

  }

  if (!notes.data) {
    return (
      <>
        <h1>esta nota no existe</h1>
      </>
    );
  }
  return (
    <>
      <h1>informacion de la nota</h1>
      <NotesItems notes={notes.data} individual={true} />
      <NoteVoler />
    </>
  );
}
