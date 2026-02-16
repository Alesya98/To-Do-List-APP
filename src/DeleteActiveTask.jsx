const DeleteActiveTask = ({taskLength, clearActive}) => {
return <div>
    <p>Осталось дел: {taskLength.length}</p>
    <button className="search-btn" onClick={clearActive}>Оистить выполненые</button>
</div>
}

export default DeleteActiveTask