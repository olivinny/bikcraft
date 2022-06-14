// verificar pagina ativa

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = window.location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// verificar itens do orçamento

const parametros = new URLSearchParams(location.search); // cospe um array com os parametros de busca

function ativarProduto(parametro) {
  const elemento = document.querySelector("#" + parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(evento) {
  pergunta = evento.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.querySelector("#" + controls);
  resposta.classList.toggle("ativo");
  if (resposta.classList.contains("ativo")) {
    pergunta.setAttribute("aria-expanded", true);
  } else {
    pergunta.setAttribute("aria-expanded", false);
  }
}

function eventoPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventoPerguntas);

// Galeria de bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function ativarImagem(evento) {
  const imagem = evento.currentTarget;
  var media = matchMedia("(min-width:1000px)").matches;
  if (media) {
    galeriaContainer.prepend(imagem);
  }
  media = matchMedia("(max-width:800px)").matches;
  if (media) {
    galeriaContainer.prepend(imagem);
  }
}

function cliqueGaleria(imagem) {
  imagem.addEventListener("click", ativarImagem);
}

galeria.forEach(cliqueGaleria);

console.log(galeria, galeriaContainer);

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
