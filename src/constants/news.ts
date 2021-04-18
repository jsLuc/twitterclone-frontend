interface Tag {
  id: string;
  name: string;
}

interface News {
  id: string;
  titulo: string;
  tags: Tag[];
  desc: string;
}

export const allNews: News[] = [
  {
    id: "1",
    titulo: "Yunk Vino",
    tags: [
      {
        id: "1",
        name: "Assunto do Momento em Brasil",
      },
    ],
    desc: "1.592 Tweets",
  },
  {
    id: "2",
    titulo: "Nerf Lulu",
    tags: [
      {
        id: "1",
        name: "League of Legends",
      },
      {
        id: "2",
        name: "Assunto do Momento",
      },
    ],
    desc: "4.356 Tweets",
  },
  {
    id: "3",
    titulo: "São Paulo: as últimas notícias sobre a pandemia",
    tags: [
      {
        id: "1",
        name: "Covid-19",
      },
      {
        id: "2",
        name: "AO VIVO",
      },
    ],
    desc: "",
  },
];
