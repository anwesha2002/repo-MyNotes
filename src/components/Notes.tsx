import React from "react";
import { useState } from "react";
import Create from "./create";

import NotesItem from "./NotesItem";
import "./styles.css";
/*const Notes = () => {
  const [notes, setNotes] = useState([
    {
      title: "Title",
    },
  ]);
  const [numbers, setNumbers] = useState();
  const handleAddNotes = () => {
    setNotes([setNotes, {title : ""}]);
  };
  return (
    <div>
      {notes.map((note) => (
        <div>
          <input type="text" name="notes" id="notes"></input>
        </div>
      ))}
      <button onClick={handleAddNotes}>add</button>
    </div>
  );
};*/

const Notes = ({
  notes,
  handleSaveNotes,
  handleDelNote,
}: {
  notes: any;
  handleSaveNotes: any;
  handleDelNote: any;
}) => {
  return (
    <div className="row d-flex justify-content-center">
      <Create handleSaveNotes={handleSaveNotes} />
      {notes.map((note: { id: any; text: any; Date: any }) => (
        <NotesItem
          id={note.id}
          text={note.text}
          Date={note.Date}
          handleDelNote={handleDelNote}
        />
      ))}
    </div>
  );
};

export default Notes;
