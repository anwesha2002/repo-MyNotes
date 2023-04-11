import React, { useState } from "react";
import "./styles.css";

const Create = ({ handleSaveNotes }: { handleSaveNotes: any }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 500;
  const handleChange = (event: any) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSave = () => {
    if (noteText.trim().length > 0) {
      handleSaveNotes(noteText);
      setNoteText("");
    }
  };
  return (
    <div className="col-md-3 d-flex justify-content-between flex-column notesitem new">
      <textarea
        rows={8}
        cols={40}
        placeholder="Type here..."
        onChange={handleChange}
        value={noteText}
      ></textarea>
      <div className="d-flex justify-content-around">
        <small className="d-flex align-self-center">
          Remaining Character : {characterLimit - noteText.length}
        </small>
        <button onClick={handleSave} className="btn btn-success save">
          Save
        </button>
      </div>
    </div>
  );
};

export default Create;
