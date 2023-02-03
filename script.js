var listaFilmes = []
var nomeFilmes = [];

const container = document.querySelector('.content-container');

listaFilmes[0] = "https://img.elo7.com.br/product/original/269274A/poster-o-senhor-dos-aneis-a-sociedade-do-anel-lo04-90x60-cm-presente-geek.jpg";
nomeFilmes[0] = "O senhor dos anéis: A sociedade do Anel";

listaFilmes[1] = "https://img.elo7.com.br/product/original/26927C9/poster-o-senhor-dos-aneis-as-duas-torres-lo01-tam-90x60-cm-presente-geek.jpg";
nomeFilmes[1] = "O senhor dos anéis: As duas torres";

listaFilmes[2] = "https://img.elo7.com.br/product/original/2692931/big-poster-o-senhor-dos-aneis-o-retorno-do-rei-lo07-90x60-cm-poster.jpg";
nomeFilmes[2] = "O senhor dos anéis: O retorno do rei";

listaFilmes[3] = "https://img.elo7.com.br/product/zoom/268E0B6/big-poster-o-hobbit-uma-jornada-inesperada-lo07-tam-90x60-cm-poster.jpg";
nomeFilmes[3] = "O hobbit: Uma jornada inesperada";

listaFilmes[4] = "https://img.elo7.com.br/product/zoom/2692268/big-poster-o-hobbit-a-desolacao-de-smaug-lo07-tam-90x60-cm-o-hobbit.jpg";
nomeFilmes[4]= "O hobbit: A desolação de Smaug"

listaFilmes[5] = "https://img.elo7.com.br/product/zoom/269238C/poster-o-hobbit-3-a-batalha-dos-cinco-exercitos-lo07-90x60-geek.jpg";
nomeFilmes[5] = "O hobbit: A batalha dos cinco exércitos"

for (var i = 0; i < listaFilmes.length; i++) {
    container.innerHTML =
      container.innerHTML +
      '<div class="image-container"><img src=' +
      listaFilmes[i] +
      '><span class="image-name">' +
      nomeFilmes[i] +
      '</span></div>';
  }
