import '../styles/layout/Filters.scss';

function Filters({filterName, filterByName}) {
    const handleSubmit = (ev) => {
        ev.preventDefault();
    }

    const handleFilterName = (ev) => {
        filterByName(ev.target.value)
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <input className='form__input' type='text' value={filterName} onChange={handleFilterName}></input>
        </form>
    )
}

export default Filters;