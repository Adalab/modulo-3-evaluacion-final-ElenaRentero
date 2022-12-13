function FilterByStatus({ filterStatus, filterByStatus }) {
    const handleFilterStatus = (ev) => {
      filterByStatus(ev.target.value);
    };
    return (
      <>
        <label className='form__label' htmlFor="status">Estado:</label>
        <select
          className='form__select'
          name="status"
          id="status"
          value={filterStatus}
          onChange={handleFilterStatus}
        >
          <option value='All'>All</option>
          <option value='Alive'>Alive</option>
          <option value='Dead'>Dead</option>
          <option value='unknown'>Unknown</option>
        </select>
      </>
    );
  }

  export default FilterByStatus;