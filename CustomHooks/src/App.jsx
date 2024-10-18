import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error...</div>;
  }
  return (
    <>
      {data.map((item) => (
        <p>{item.name}</p>
      ))}
    </>
  );
}

export default App;
