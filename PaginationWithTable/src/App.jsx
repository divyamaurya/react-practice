import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItem = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPage = data.length / itemPerPage;

  const handleChange = (e) => {
    setItemPerPage(e.target.value);
  };

  const handleNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      <h1>Table</h1>
      <button onClick={handlePrevious} value={itemPerPage}>
        Previous
      </button>
      <select onChange={handleChange}>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
      <button onClick={handleNext}>Next</button>
      <p>{`${currentPage} of ${totalPage}`}</p>
      <table border={"1px"}>
        {currentItem.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default App;
