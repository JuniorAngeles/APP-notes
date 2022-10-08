import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NoteVoler from "../components/itemviewnotes";

export default function DeleteNote() {
  const { id } = useParams();

  const [messege, setMessege] = useState("Cargando...");

  useEffect(() => {
    fetch(`http://localhost:5000/notes/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => setMessege(result.messege));
  }, []);

  return (
    <>
      <div className="Notes-Delete">
        {messege}
        <br />
        <br />
        <Link to="/">Volver</Link>
      </div>
    </>
  );
}
