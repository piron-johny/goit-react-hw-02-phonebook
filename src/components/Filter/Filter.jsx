import { StyledFilter } from './Filter.styled';

const Filter = ({ filterChange, value }) => {
  return (
    <StyledFilter>
      Find contacts by name
      <input type="text" onChange={filterChange} value={value}/>
    </StyledFilter>
  );
};

export default Filter;
