import React, { useEffect, useState } from "react";
import Header from "./components/header";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import { nanoid } from "nanoid";
import styles from "./App.css";
function app() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is my first note",
      Date: "12/3/23",
    },
  ]);

  useEffect(() => {
    const saveNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (saveNotes) {
      setNotes(saveNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const saveNote = (text: string) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      Date: date.toLocaleDateString(),
    };
    const newNotes = [newNote, ...notes];
    setNotes(newNotes);
  };

  const delNote = (id: string) => {
    const newNotes = notes.filter((note) => note.id != id);
    setNotes(newNotes);
  };

  return (
    <div>
      <div>
        <Header notes={notes} handleAllNotes={setNotes} />
      </div>
      <div>
        <Notes
          notes={notes}
          handleSaveNotes={saveNote}
          handleDelNote={delNote}
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default app;
