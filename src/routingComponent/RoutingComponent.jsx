import { Outlet } from "react-router-dom";
import { Header } from "../layout/header/Header";
import styled from "styled-components";
import { ThemeContext } from "../components/smartComponents/context/ThemeContext";
import { useContext } from "react";
import { theme } from "../styles/Theme";
import { Suspense } from "react";
import CustomLoader from "../components/stupidComponents/customLoader/CustomLoader";

const RoutingComponent = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <StyledPageContainer
      className={`page-container ${isDark ? "dark" : "light"}`}>
      <div className='page-content'>
        <Header />
        <main>
          <Suspense
            fallback={
              <StyledLoaderOverlay>
                <CustomLoader />
              </StyledLoaderOverlay>
            }>
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

const StyledLoaderOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  z-index: 10;
`;

export default RoutingComponent;
