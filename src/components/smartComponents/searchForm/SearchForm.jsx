import styled from "styled-components";
import { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value); // Передаем значение в родительский компонент
  };

  return (
    <StyledSearchForm className='search-form'>
      <StyledInput
        type='text'
        placeholder='Search...'
        onChange={handleInputChange}
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
  width: 50vw;
  padding: 10px;
  border-radius: 100px;
  font-size: 16px;
`;
