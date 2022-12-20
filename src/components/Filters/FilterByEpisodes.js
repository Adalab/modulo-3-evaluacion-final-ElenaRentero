function filterByEpisode ({filterEpisode, filterByEpisode}) {
    const handleFilterEpisode = (ev) => {
        filterByEpisode(ev.target.value)
    }
return (
    <>
    <label className='form__label' htmlFor='episode'>Episodio:</label>
    <input className='form__input' type='episode' name="episode" id="episode" value={filterEpisode} onChange={handleFilterEpisode}></input>
    </>
)
}

export default filterByEpisode;