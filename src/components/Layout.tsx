import styled from "styled-components";

import { useScreenSize } from "@/hooks/useScreenSize";

import Header from "@/components/Header";
// import { RightBar as UnstyledRightBar } from "@/components/RightBar";

const HeaderContainer = styled.div`
  flex-grow: 1;
  flex-basis: 0;

  display: flex;
  justify-content: flex-end;
`;

const LayoutContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const ChildrenContainer = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
`;

const Layout: React.FC = ({ children }) => (
  <LayoutContainer>
    <HeaderContainer>
      <Header />
    </HeaderContainer>
    {children}
  </LayoutContainer>
);

export default Layout;
