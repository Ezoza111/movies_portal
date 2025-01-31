import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { MyButton } from "../../stupidComponents/button/MyButton";
import { useSelector } from "react-redux";
import { theme } from "../../../styles/Theme";
import { changeUserStatus } from "../../../store/usernameSlice";
import { useDispatch } from "react-redux";

export const HamburgerMenu = ({ isDark }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userName } = useSelector((state) => state.userName.userName);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Функция для переключения состояния меню
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const user = (
    <h3 style={{ textAlign: "right", fontSize: "1rem" }}>{`${userName}`}</h3>
  );

  // Закрытие меню при изменении ширины окна
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 520) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Чистим обработчик при размонтировании компонента
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Функция для перехода по ссылке и закрытия меню
  const handleNavigate = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Закрываем меню после перехода
  };

  return (
    <>
      {/* Гамбургер-меню для мобильных устройств */}
      <Hamburger onClick={toggleMenu}>
        <span className={`${isDark ? "dark" : "light"}`} />
        <span className={`${isDark ? "dark" : "light"}`} />
        <span className={`${isDark ? "dark" : "light"}`} />
      </Hamburger>

      {/* Выпадающее меню при клике на гамбургер */}
      {isMenuOpen && (
        <DropdownMenu className={`${isDark ? "dark" : "light"}`}>
          {userName !== null ? (
            <>
              {user}
              <MyButton
                className={`btn-favorites ${isDark ? "dark" : "light"}`}
                name='Favorites'
                functionClick={() => handleNavigate("/favorites")}
              />
              <MyButton name='Exit' functionClick={() => dispatch(changeUserStatus(null))} />
            </>
          ) : (
            <>
              <MyButton
                className={`btn-favorites ${isDark ? "dark" : "light"}`}
                name='Favorites'
                functionClick={() => handleNavigate("/favorites")}
              />
              <MyButton
                className={`btn-sign-up ${isDark ? "dark" : "light"}`}
                name='Sign Up'
                functionClick={() => handleNavigate("/login")}
              />
            </>
          )}
        </DropdownMenu>
      )}
    </>
  );
};

// Стили для гамбургер-меню
const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 4px;
    width: 25px;
    background: ${theme.colors.accentLight};
    margin-bottom: 4px;
    border-radius: 2px;
    &.dark {
      background: ${theme.colors.accent};
    }
    &.light {
      background: ${theme.colors.accentLight};
    }
  }

  @media (max-width: 520px) {
    display: flex;
  }
`;

// Выпадающее меню для гамбургер-меню
const DropdownMenu = styled.div`
  position: absolute;
  top: 70px;
  right: 20px;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 150px;
  width: 100%;

  button {
    padding: 5px 10px;
    width: 100%;
  }

  &.dark {
    background: ${theme.colors.secondary};
    border: 1px solid ${theme.colors.accent};
  }
  &.light {
    background: ${theme.colors.primaryLight};
    border: 1px solid ${theme.colors.accentLight};
  }
`;
