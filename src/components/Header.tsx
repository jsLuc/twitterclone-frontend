import styled from 'styled-components'
import {
  BookmarkIcon,
  ExploreIcon,
  HomeIcon,
  ListIcon,
  MessageIcon,
  NotificationIcon,
  ProfileIcon,
  MoreIcon,
  TwitterIcon,
} from '@/components/icons'

const HeaderContainer = styled.header`
  width: 100%;
  max-width: 266px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 12px;
  gap: 4px;

  @media (min-width: 1280px) {
    align-items: flex-start;
    padding: 0 8px;
    gap: 0px;
  }
`

const HeaderItem = styled.a`
  display: flex;
  padding: 16px;
  gap: 16px;
  align-items: center;
  cursor: pointer;
`

const HeaderTitle = styled.p`
  display: none;
  font-size: 20px;
  font-weight: 700;

  @media (min-width: 1280px) {
    display: initial;
  }
`

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Nav>
        <HeaderItem>
          <TwitterIcon />
        </HeaderItem>

        <HeaderItem>
          <HomeIcon />
          <HeaderTitle>Home</HeaderTitle>
        </HeaderItem>

        <HeaderItem>
          <ExploreIcon />
          <HeaderTitle>Explore</HeaderTitle>
        </HeaderItem>

        <HeaderItem>
          <NotificationIcon />
          <HeaderTitle>Notifications</HeaderTitle>
        </HeaderItem>

        <HeaderItem>
          <MessageIcon />
          <HeaderTitle>Messages</HeaderTitle>
        </HeaderItem>

        <HeaderItem>
          <BookmarkIcon />
          <HeaderTitle>Bookmarks</HeaderTitle>
        </HeaderItem>

        <HeaderItem>
          <ListIcon />
          <HeaderTitle>Lists</HeaderTitle>
        </HeaderItem>

        <HeaderItem>
          <ProfileIcon />
          <HeaderTitle>Profile</HeaderTitle>
        </HeaderItem>

        <HeaderItem>
          <MoreIcon />
          <HeaderTitle>More</HeaderTitle>
        </HeaderItem>
      </Nav>
    </HeaderContainer>
  )
}

export default Header
