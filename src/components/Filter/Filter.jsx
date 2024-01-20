const Filter = ({ handleFilterChange }) => {
  const filterContactsByName = e => {
    handleFilterChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <input onChange={filterContactsByName} type="filter" />
    </div>
  );
};

export default Filter;
