import styled from "styled-components";
import {
  BookmarkIcon,
  ExploreIcon,
  HomeIcon,
  ListIcon,
  MessageIcon,
  NotificationIcon,
  ProfileIcon,
  SearchIcon,
  MoreIcon,
  TwitterIcon,
} from "@/components/icons";
import { useScreenSize } from "@/hooks/useScreenSize";

const HeaderContainer = styled.header`
  max-width: 250px;
`;

const TwitterContainer = styled.div`
  padding: 4px 16px;
  width: 46px;
  height: 46px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const Nav = styled.nav`
  padding: 0 8px;
  display: flex;
  flex-direction: column;
`;

const HeaderItem = styled.a`
  display: flex;
  padding: 16px;
  gap: 16px;
  align-items: center;
  cursor: pointer;
`;

const HeaderTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const Header: React.FC = () => {
  const screenSize = useScreenSize()

  return (
    <HeaderContainer>
      <TwitterContainer>
        <TwitterIcon />
      </TwitterContainer>

      <Nav>
        <HeaderItem>
          <HomeIcon />
          <HeaderTitle hidden={screenSize === 'sm'}>Home</HeaderTitle>
        </HeaderItem>

        <HeaderItem>
          <ExploreIcon />
          <HeaderTitle hidden={screenSize === 'sm'}>Explore</HeaderTitle>
        </HeaderItem>

        <HeaderItem>
          <NotificationIcon />
          <HeaderTitle hidden={screenSize === 'sm'}>Notifications</HeaderTitle>
        </HeaderItem>

        <HeaderItem>
          <MessageIcon />
          <HeaderTitle hidden={screenSize === 'sm'}>Messages</HeaderTitle>
        </HeaderItem>

        <HeaderItem>
          <BookmarkIcon />
          <HeaderTitle hidden={screenSize === 'sm'}>Bookmarks</HeaderTitle>
        </HeaderItem>

        <HeaderItem>
          <ListIcon />
          <HeaderTitle hidden={screenSize === 'sm'}>Lists</HeaderTitle>
        </HeaderItem>

        <HeaderItem>
          <ProfileIcon />
          <HeaderTitle hidden={screenSize === 'sm'}>Profile</HeaderTitle>
        </HeaderItem>

        <HeaderItem>
          <MoreIcon />
          <HeaderTitle hidden={screenSize === 'sm'}>More</HeaderTitle>
        </HeaderItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header
