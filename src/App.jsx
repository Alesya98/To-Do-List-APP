import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import InputTask from "./InputTask";
import ToDoList from "./ToDoList";
import { DeleteTaskContext } from "./DeleteTaskContext";
import ButtonComp from "./ButtonComp";
import DeleteActiveTask from "./DeleteActiveTask";

function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      title: "Купить курс",
      isDone: false,
    },
  ]);

  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);

  useEffect(() => {
    const tasks =  JSON.parse(localStorage.getItem('tasks'))
    setTask(tasks)
   }, []);


  const [filter, setFilter] = useState("all");

  const deleteTask = (id) => {
    setTask((tasks) => tasks.filter((item) => item.id !== id));
  };

  const checkedTask = (id) => {
    setTask((tasks) =>
      tasks.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item,
      ),
    );
  };

  const editTitle = (id, newTitle) => {
    setTask((tasks) =>
      tasks.map((item) =>
        item.id === id ? { ...item, title: newTitle } : item,
      ),
    );
  };

  const filteredTask = tasks.filter((item) => {
    if (filter === "active") return !item.isDone;
    if (filter === "done") return item.isDone;
    return true;
  });

  const taskLength = filteredTask.filter((item) => !item.isDone);

  const clearActive = () => {
    setTask((tasks) => tasks.filter((item) => !item.isDone));
  };

  return (
    <>
      <Header />
      <InputTask setTask={setTask} />
      <DeleteTaskContext value={{ deleteTask, checkedTask, editTitle }}>
        <ToDoList tasks={filteredTask} />
      </DeleteTaskContext>
      <ButtonComp setFilter={setFilter} />
      <DeleteActiveTask taskLength={taskLength} clearActive={clearActive} />
    </>
  );
}

export default App;
