import { useState, memo } from "react";

const InputTask = ({ setTask }) => {
  console.log("rerender InputTask");
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    if (text.trim() === "") {
      setError("Нельзя добавить пустую задачу");
      return;
    }
    setError("");
    setTask((tasks) => [
      ...tasks,
      { id: crypto.randomUUID(), title: text, isDone: false },
    ]);

    setText("");
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <input
        className="search"
        placeholder="Введите задачу"
        type="text"
        value={text}
        onChange={handleChange}
      />
      <button className="search-btn" onClick={handleClick}>
        Добавить
      </button>
      {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}
    </div>
  );
};

export default memo(InputTask);
