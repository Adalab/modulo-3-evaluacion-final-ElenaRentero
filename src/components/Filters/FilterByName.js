function FilterByName({filterName, filterByName}){
    const handleFilterName = (ev) => {
        filterByName(ev.target.value)
    }
    return (
        <>
        <label className='form__label' htmlFor='name'>Nombre:</label>
        <input className='form__input' type='name' name="name" id="name" value={filterName} onChange={handleFilterName}></input>
        </>
    )
}

export default FilterByName;