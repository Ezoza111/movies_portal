import styled from "styled-components";
import { useState } from "react";
import { theme } from "../../../styles/Theme";
import { useTheme, ThemeContext } from "../context/ThemeContext";

export default function SearchForm({ onSearch }) {
  const { isDark } = useTheme(ThemeContext);
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
    <StyledSearchForm
      className='search-form'
      onSubmit={handleSubmit}
      id='search-form'>
      <StyledInput
        className={`${isDark ? "dark" : "light"}`}
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
  width: 100%;
  justify-content: center;
  margin-bottom: 30px;
`;
const StyledInput = styled.input`
  width: 50%;
  min-width: 230px;
  padding: 10px 10px 10px 15px;
  border-radius: 100px;
  font-size: 16px;
  &.dark {
    border: 3px solid ${theme.colors.accent};
  }
  &.light {
    border: 3px solid ${theme.colors.accentLight};
  }
`;
