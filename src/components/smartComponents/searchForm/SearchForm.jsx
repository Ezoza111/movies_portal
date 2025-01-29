import styled from "styled-components";
import { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value); // Передаем значение в родительский компонент
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Отменяем перезагрузку страницы
    onSearch(searchValue); // Передаем значение в родительский компонент при submit
  };

  return (
    <StyledSearchForm className='search-form' onSubmit={handleSubmit} id="search-form">
      <StyledInput
        type='text'
        placeholder='Start typing the movie title...'
        onChange={handleInputChange}
        value={searchValue}
      />
    </StyledSearchForm>
  );
}

const StyledSearchForm = styled.form`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: center;
`;
const StyledInput = styled.input`
  width: 50%;
  padding: 10px 10px 10px 15px;
  border-radius: 100px;
  font-size: 16px;
`;
