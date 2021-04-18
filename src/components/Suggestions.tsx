import styled from "styled-components";
import styles from "@/styles/shitposter.module.css";

import { SearchIcon } from "@/components/icons";

import { noticiasdeultimahora as noticias } from "@/hooks/news";

const SuggestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;
const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 348px;
  height: 43px;

  background-color: #15171c;
  align-items: center;
  justify-content: center;
  border-radius: 30px;

  margin-bottom: 12px;
  margin-top: 12px;
`;
const Title = styled.div`
  margin: 12px 0px 10px 0px;
  font-size: 20px;
  font-weight: bold;
  padding-left: 20px;
`;
const Divs = styled.div`
  width: 100%;
  height: 1px;
  padding: 0px;
  margin: 0px;
  background-color: #6e767d44;
`;
const ShowMore = styled.div`
  cursor: pointer;
  margin: 10px 20px 20px;
  padding: 0px;
  font-size: 15px;
  color: #3c86ee;
`;
const NewsList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;

  padding: 0px;
  margin: 0px;

  width: 348px;
  background-color: #15171c;
  border-radius: 17px;

  /* background-color: rgba(29,161,242,1.00); */
`;
const NewsItem = styled.li``;

const TagsGroup = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0px;
  margin: 15px 0px 5px 5px;
  list-style-type: none;
  padding-left: 10px;
`;

const Tag = styled.li`
  font-size: 12px;
  padding: 0px;
  color: #6e767d;
  margin-left: 5px;
`

const Suggestions: React.FC = () => {
  return (
    <SuggestionsContainer>
      <SearchBar>
        <SearchIcon />
        Search Twitter
      </SearchBar>

      <NewsList>
        <Title>O que está acontecendo</Title>
        <Divs />
        {noticias.map((noticia) => {
          const indexCount = noticia.tags.length;

          return (
            <div className={styles.noticia}>
              <TagsGroup>
                {noticia.tags.map((tag, index) => {
                  return (
                    //gambiarra:
                    <Tag key={`${tag}-${index}`}>
                      {indexCount - 1 === index ? `${tag}` : `${tag} ·`}
                    </Tag>
                  );
                })}
              </TagsGroup>
              <li key={noticia.titulo} className={styles.noticiatitle}>
                {noticia.titulo}
              </li>
              <li key={noticia.desc} className={styles.description}>{noticia.desc}</li>
              <Divs />
            </div>
          );
        })}
        <ShowMore>Mostrar mais</ShowMore>
      </NewsList>
    </SuggestionsContainer>
  );
};

export default Suggestions;
