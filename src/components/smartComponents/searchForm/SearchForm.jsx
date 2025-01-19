import styled from "styled-components";
import { useState } from "react";
export default function SearchForm() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <StyledSearchForm className='search-form'>
      <StyledInput
        type='text'
        placeholder='Search...'
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
    </StyledSearchForm>
  );
}

const StyledSearchForm = styled.form`
  display: flex;
  gap: 10px;
`;
const StyledInput = styled.input`
  padding: 10px;
  border-radius: 100px;
  font-size: 16px;
`;
