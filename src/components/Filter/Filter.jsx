import { FilterContainer, FilterLabel, FilterInput } from './FilterStyles';

const Filter = ({ handleFilterChange }) => {
  const filterContactsByName = e => {
    handleFilterChange(e.target.value);
  };

  return (
    <FilterContainer>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput onChange={filterContactsByName} type="filter" />
    </FilterContainer>
  );
};

export default Filter;
