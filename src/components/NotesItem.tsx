import React from "react";
import Create from "./create";
import "./styles.css";
const NotesItem = ({
  id,
  text,
  Date,
  handleDelNote,
}: {
  id: number;
  text: string;
  Date: number;
  handleDelNote: any;
}) => {
  const handleDel = () => {
    handleDelNote(id);
  };

  return (
    <div className="col-md-3 d-flex justify-content-between flex-column notesitem">
      <span className="align-self-center">{text}</span>
      <div className="d-flex justify-content-around">
        <small>{Date}</small>
        <button onClick={handleDel} className="btn btn-primary">
          Del
        </button>
      </div>
    </div>
  );
};

export default NotesItem;
