import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function DeleteTodasNote() {
  const [messege, setMessege] = useState("Cargando...");

  useEffect(() => {
    fetch(`http://localhost:5000/notes`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => setMessege(result.messege)).then(swal({
  title: "Are you sure?",
  text: "Once deleted, you will not be able to recover this imaginary file!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("Poof! Your imaginary file has been deleted!", {
      icon: "success",
    });
  } else {
    swal("Your imaginary file is safe!");
  }
}));
  }, []);

  return (
    <>
      {messege}

      <Link to="/">
        <button>Volver</button>
      </Link>
    </>
  );
}
