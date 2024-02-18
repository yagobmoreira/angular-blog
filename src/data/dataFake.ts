export const noticiasJogos = [
  {
      id: 1,
      title: "Novo DLC de 'The Witcher 3: Wild Hunt' anunciado",
      description: "A CD Projekt Red revelou um novo DLC para 'The Witcher 3: Wild Hunt', trazendo novas missões, itens e áreas para explorar. Os fãs estão animados com essa expansão do universo de Geralt de Rivia.",
      image: "assets/thewitcher3.jpeg"
  },
  {
      id: 2,
      title: "Data de lançamento de 'Halo Infinite' finalmente revelada",
      description: "Após vários adiamentos, a Microsoft anunciou a data de lançamento oficial para 'Halo Infinite'. Os fãs poderão jogar o próximo capítulo da aclamada série em breve.",
      image: "assets/halo.jpeg"
  },
  {
      id: 3,
      title: "Novo gameplay de 'God of War: Ragnarok' surpreende os fãs",
      description: "Um novo vídeo de gameplay de 'God of War: Ragnarok' foi lançado, mostrando batalhas épicas, gráficos impressionantes e um vislumbre do que está por vir nesta aguardada sequência.",
      image: "assets/godOfWar.jpeg"
  },
  {
      id: 4,
      title: "Atualização de aniversário de 'Overwatch' traz novos mapas e heróis",
      description: "'Overwatch' está celebrando seu aniversário com uma grande atualização, incluindo novos mapas, heróis e itens cosméticos. Os jogadores estão ansiosos para experimentar as novidades.",
      image: "assets/overwatch.jpeg"
  }
];

export type newsType = {
    id: number,
    title: string,
    description: string,
    image: string
}