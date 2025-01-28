import { Outlet } from "react-router-dom";
import { Header } from "../layout/header/Header";
import styled  from "styled-components";
import { ThemeContext } from "../components/smartComponents/context/ThemeContext";
import { useContext } from "react";
import { theme } from "../styles/Theme";
import { Suspense } from "react";

const RoutingComponent = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <StyledPageContainer className={`page-container ${isDark ? "dark" : "light"}`}>
      <div className='page-content'>
        <Header />
        <main>
          <Suspense fallback={<p>Loading ...</p>}>
          <Outlet />
          </Suspense>
        </main>
      </div>
    </StyledPageContainer>
  );
};

const StyledPageContainer = styled.div`
  &.dark {
    background-color: ${theme.colors.primary};
  }
  &.light {
    background-color: ${theme.colors.primaryLight};
  }
  
  .page-content {
    max-width: 1280px;
    margin: 0 auto;
  }
`;

export default RoutingComponent;
