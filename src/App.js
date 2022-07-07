import { useEffect, useState } from "react";

function App() {
  const [toDo, setToDO] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDO(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDO("");
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your todo..."
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
