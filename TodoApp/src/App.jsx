import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(["divya"]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleAdd = () => {
    if (inputValue !== "") {
      if (editIndex !== null) {
        const updateData = [...data];
        updateData[editIndex] = inputValue;
        setData(updateData);
        setEditIndex(null);
      } else {
        const addData = [...data, inputValue];
        setData(addData);
      }
      setInputValue("");
    }
  };

  const handleDelete = (index) => {
    const tempData = [...data];
    const deleteData = tempData.filter((item, i) => i !== index);
    setData(deleteData);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setInputValue(data[index]);
  };
  return (
    <>
      <h1>Todo App</h1>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
      {data.map((item, index) => (
        <>
          <p key={item}>{item}</p>
          <button onClick={() => handleDelete(index)}>Delete</button>
          <button onClick={() => handleEdit(index)}>Edit</button>
        </>
      ))}
    </>
  );
}

export default App;
