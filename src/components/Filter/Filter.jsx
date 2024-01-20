const Filter = ({ state }) => {
  const filterContactsByName = e => {
    console.log(state);
  };

  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <input onChange={filterContactsByName} type="filter" />
    </div>
  );
};

export default Filter;
