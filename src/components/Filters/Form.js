import '../../styles/layout/Filters.scss';
import FilterByName from './FilterByName';
import FilterBySpecie from './FilterBySpecie';
import FilterByStatus from './FilterByStatus';
import FilterByEpisodes from './FilterByEpisodes';
import Header from './Header';

function Form({filterName, filterByName, filterSpecie, filterBySpecie, filterStatus, filterByStatus, filterEpisode, filterByEpisode, handleReset}) {
    const handleSubmit = (ev) => {
        ev.preventDefault();
    }
    
    return (
        <>
        <Header />
        <form className='form' onSubmit={handleSubmit}>
            <FilterByName filterName={filterName} filterByName={filterByName}/>
            <FilterBySpecie filterSpecie={filterSpecie} filterBySpecie={filterBySpecie}/>
            <FilterByStatus filterStatus={filterStatus} filterByStatus={filterByStatus}/>
            <FilterByEpisodes filterEpisode={filterEpisode} filterByEpisode={filterByEpisode} />
            <button onClick={handleReset} className='reset'>Reset filters</button>
        </form>
        </>
    )
}

export default Form;