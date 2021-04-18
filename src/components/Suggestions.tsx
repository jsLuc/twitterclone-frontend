import styled from 'styled-components'

import { SearchIcon } from '@/components/icons'

import { allNews } from '@/constants/news'

const SuggestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
`

const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 350px;
  height: 48px;

  background-color: #202327;
  align-items: center;
  border-radius: 30px;

  margin-bottom: 12px;
  margin-top: 12px;
`

const SearchBarIconContainer = styled.div`
  fill: #757575;
  width: 44px;
  padding: 0 8px 0px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SearchBarInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 15px;
  background-color: transparent;

  :focus {
    outline: none;
  }
`

const Title = styled.div`
  margin: 12px 0px 10px 0px;
  font-size: 20px;
  font-weight: bold;
  padding-left: 20px;
`

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  padding: 0px;
  margin: 0px;
  background-color: #2f3336;
`

const ShowMore = styled.div`
  cursor: pointer;
  margin: 10px 20px 20px;
  padding: 0px;
  font-size: 15px;
  color: #3c86ee;
`

const NewsList = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0px;
  margin: 0px;

  width: 350px;
  background-color: #15181c;
  border-radius: 17px;

  /* background-color: rgba(29,161,242,1.00); */
`

const NewsItemContainer = styled.div`
  cursor: pointer;
`

const NewsItemTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin: 0px 5px 5px 10px;
  padding: 2px 0px 0px 0px;
  padding-left: 10px;
`

const NewsItemDescription = styled.div`
  font-size: 13px;
  padding: 0px;
  color: #6e767d;
  padding-left: 10px;
  margin: 0px 0px 15px 10px;
`

const TagsGroup = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px;
  margin: 15px 0px 5px 5px;
  padding-left: 10px;
`

const Tag = styled.div`
  font-size: 12px;
  padding: 0px;
  color: #6e767d;
  margin-left: 5px;
`

const Suggestions: React.FC = () => {
  return (
    <SuggestionsContainer>
      <SearchBarContainer>
        <SearchBarIconContainer>
          <SearchIcon />
        </SearchBarIconContainer>
        <SearchBarInput placeholder="Search Twitter" />
      </SearchBarContainer>

      <NewsList>
        <Title>O que está acontecendo</Title>
        <HorizontalLine />
        {allNews.map((news) => {
          return (
            <NewsItemContainer key={news.id}>
              <TagsGroup>
                {news.tags.map((tag, index) => {
                  const isLastTag = news.tags.length - 1 === index
                  return (
                    <Tag key={tag.id}>
                      {tag.name}
                      {!isLastTag && ' ·'}
                    </Tag>
                  )
                })}
              </TagsGroup>
              <NewsItemTitle key={news.titulo}>{news.titulo}</NewsItemTitle>
              <NewsItemDescription key={news.desc}>
                {news.desc}
              </NewsItemDescription>
              <HorizontalLine />
            </NewsItemContainer>
          )
        })}
        <ShowMore>Mostrar mais</ShowMore>
      </NewsList>
    </SuggestionsContainer>
  )
}

export default Suggestions
