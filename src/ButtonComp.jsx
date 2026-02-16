const ButtonComp =({setFilter}) => {
return <div style={{display:'flex', gap: '20px', justifyContent: 'space-between'}}>
<button className="search-btn"  onClick={() => setFilter('active')}>Активные</button>
<button className="search-btn" onClick={() => setFilter('done')}>Готовые</button>
<button className="search-btn" onClick={() => setFilter('all')}>Все</button>
</div>
}

export default ButtonComp