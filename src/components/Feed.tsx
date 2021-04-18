import styled from "styled-components";

import { useScreenSize } from "@/hooks/useScreenSize";

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Layout: React.FC = ({ children }) => {
  return <FeedContainer></FeedContainer>;
};

export default Layout;
