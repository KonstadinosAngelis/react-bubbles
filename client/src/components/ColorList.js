import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const [addColor, setAddColor] = useState("")
  const [addHex, setAddHex] = useState("")

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = () => {
    axiosWithAuth().put(`/api/colors/${colorToEdit.id}`, {
      color: colorToEdit.color,
      code: colorToEdit.code,
      id: colorToEdit.id
    })
  };

  const deleteColor = color => {
    axiosWithAuth().delete(`/api/colors/${color.id}`)
  };

  const onChange = e => {
    return(
    e.target.name === 'addColor' ? setAddColor(e.target.value):
    e.target.name === 'addHex' ? setAddHex(e.target.value) :
    null
    )}

  const addNewColor = () => {
    axiosWithAuth().post('api/colors', ({
      color: addColor,
      code: {
        hex: addHex
      }
    }))
  }

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() =>{editColor(color)}}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      <form onSubmit={addNewColor}>
        <input 
        type="text"
        name="addColor"
        placeholder="Color Name"
        onChange={onChange}
        value={addColor}
        /> 

        <input 
        type="text"
        name="addHex"
        placeholder="Hexidecimal Value"
        onChange={onChange}
        value={addHex}
        />
        <button>AddColor</button>
      </form>
    </div>
  );
};

export default ColorList;
