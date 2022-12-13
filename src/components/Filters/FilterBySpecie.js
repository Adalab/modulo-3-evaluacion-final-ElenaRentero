function FilterBySpecie({ filterSpecie, filterBySpecie }) {
  const handleFilterSpecie = (ev) => {
    filterBySpecie(ev.target.value);
  };
  return (
    <>
      <label className='form__label' htmlFor="specie">Especie:</label>
      <select
        className='form__select'
        name="specie"
        id="specie"
        value={filterSpecie}
        onChange={handleFilterSpecie}
      >
        <option value='All'>All</option>
        <option value='Alien'>Alien</option>
        <option value='Human'>Human</option>
      </select>
    </>
  );
}

export default FilterBySpecie;
