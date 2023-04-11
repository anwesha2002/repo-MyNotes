import React from "react";
import { useState } from "react";

const Header = ({
  notes,
  handleAllNotes,
}: {
  notes: any;
  handleAllNotes: any;
}) => {
  const [items, setItems] = useState([
    { items: " My Notes", number: 0, id: 1 },
  ]);

  return (
    <div className="d-flex justify-content-center ">
      {items.map((item) => (
        <div className="bg-info header d-flex justify-content-center">
          <h1>{item.items}</h1>
        </div>
      ))}
    </div>
  );
};
export default Header;
