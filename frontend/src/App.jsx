import { Routes, Route } from "react-router-dom";
import Notes from "./routers/Notes";
import ViewRoute from "./routers/ViewNote";
import DeleteNote from "./routers/DeleteNote";
import DeleteTodasNote from "./routers/Delete-todasNotes";
import CreateNote from "./routers/CreateNotes";
import UpdateNote from "./routers/UptadeNote";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/view/:id" element={<ViewRoute />} />
        <Route path="/delete/:id" element={<DeleteNote />} />
        <Route path="/delete" element={<DeleteTodasNote />} />
        <Route path="/create" element={<CreateNote />} />
        <Route path="/update/:id" element={<UpdateNote />} />
      </Routes>
    </>
  );
}
