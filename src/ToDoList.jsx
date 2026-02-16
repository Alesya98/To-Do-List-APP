import Task from "./Task";

const ToDoList = ({tasks}) => {
    console.log('rerender ToDoList')
return <div className="tasks">
    {tasks.length === 0 && <h3>Добавь задачу, которую нужно выполнить </h3>}
{tasks.map(item => <Task key={item.id} task={item}/>)}
</div>
}

export default ToDoList