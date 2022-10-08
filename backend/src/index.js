import express from "express";
import cors from "cors";
// const cors = require('cors');
import errores from "./middlewares/error.middleware.js";
import config from "./confing.js";
import { getNote, getNotes, createNote, deleteNote, deleteNotes, updateNote } from "./controllers/notes.controller.js";

const app = express();
app.use(cors());

// formatear las respuesta de tipo json
app.use(express.json());

// traer una sola nota
app.get("/notes/:id", getNote);
// traer varias notas
app.get("/notes", getNotes);
// crear nota
app.post("/notes", createNote);
// borrar una nota
app.delete("/notes/:id", deleteNote);
// borrar todas las notas
app.delete("/notes", deleteNotes);
// actualizar una nota
app.put("/notes/:id", updateNote);
// ruta que no existe
app.use(errores);

app.listen(config.express.port, function () {
  console.log(`el servidor esta corriendo en el puerto ${config.express.port}`);
});
