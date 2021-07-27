import React, { useState } from "react";
import "./app.scss";

const MySelect = (props) => {
  const defaultState = {
    label: "Select Item",
    items: [
      {
        label: "Item 1",
        key: "1"
      },
      {
        label: "Item 2",
        key: "2"
      },
      {
        label: "Item 3",
        key: "3"
      }
    ]
  };

  const [showMenu, setShowMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const selectItem = (e) => {
    const item = e.target.innerText || null;
    setSelectedItem(item);
    toggleMenu();
  };

  return (
    <div className="select-box">
      <div className="select-box__head" onClick={toggleMenu}>
        <label>{selectedItem ? selectedItem : "Select Item"}</label>
      </div>
      <div
        className={`select-box__items  ${showMenu ? "show" : ""}`}
        onClick={selectItem}
      >
        {defaultState.items.map((item) => (
          <div className="select-box__items__item" key={item.key}>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySelect;
