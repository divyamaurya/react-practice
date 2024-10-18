import "./App.css";
import useFetch from "./hooks/useFetch";
import useForm from "./hooks/useForm";

function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const { values, handleChange, resetForm } = useForm({ name: "", email: "" });
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error...</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", values);
    resetForm();
  };
  return (
    <>
      <div>
        {data.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="name"
          />
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="email"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
