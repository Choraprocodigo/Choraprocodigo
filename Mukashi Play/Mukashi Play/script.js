const toggle = document.getElementById("toggle-theme");

// quando clicar no botão
toggle.addEventListener("click", function() {
    if (toggle.checked) {
        document.body.style.backgroundColor = "#292929";
        document.body.style.transition = "background-color 0.5s, color 0.5s";
        document.body.style.color = "white";
        localStorage.setItem("theme", "dark");
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.transition = "background-color 0.5s, color 0.5s";
        document.body.style.color = "black";
        localStorage.setItem("theme", "light");
    }
});

// quando a página carregar
window.onload = function() {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
        toggle.checked = true;
        document.body.style.backgroundColor = "#292929";
        document.body.style.color = "white";
    } else {
        toggle.checked = false;
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
};

var hora = new Date().getHours();

if (hora <12){
    document.getElementById("horas").innerHTML = "Bom dia! Bem-vindo ao seu site retro! Divirta-se ao máximo.";
}else if (hora <18){
    document.getElementById("horas").innerHTML = "Boa tarde! Bem-vindo ao seu site retro! Divirta-se ao máximo.";
} else {
    document.getElementById("horas").innerHTML = "Boa noite! Bem-vindo ao seu site retro! Divirta-se ao máximo.";
}

const formPesquisa = document.getElementById("form-pesquisa");
const campoPesquisa = document.getElementById("campo-pesquisa");
const mensagemErro = document.getElementById("mensagem-erro");

// Base de dados dos jogos
const jogosDisponiveis = {
  "chrono trigger": "https://www.retrogames.cc/embed/22857-chrono-trigger-usa.html",
  "super mario world": "https://www.retrogames.cc/embed/44282-super-mario-world.html",
  "street fighter II turbo":"https://www.retrogames.cc/embed/20197-street-fighter-ii-turbo-hyper-fighting-usa.html",
  "star fox": "https://www.retrogames.cc/embed/19754-star-fox-usa.html",
  "donkey kong country 2": "https://www.retrogames.cc/embed/17336-donkey-kong-country-2-diddy-s-kong-quest-usa-en-fr-rev-a.html",
  "earthbound": "https://www.retrogames.cc/embed/24789-earthbound-usa.html",
  "super castlevania IV": "https://www.retrogames.cc/embed/23973-super-castlevania-iv-usa.html",
  "super mario all-stars": "https://www.retrogames.cc/embed/44617-super-mario-all-stars-super-mario-world-improvement.html",
  "Super metroid": "https://www.retrogames.cc/embed/16893-super-metroid-japan-usa-en-ja.html",
  "the legend of zelda": "https://www.retrogames.cc/embed/44785-the-legend-of-zelda-a-link-to-the-past-title-skip-and-full-hearts.html",
  "banjo-kazooie": "https://www.retrogames.cc/embed/32667-banjo-kazooie-usa-rev-a.html",
  "007 - goldenEye": "https://www.retrogames.cc/embed/32471-007-goldeneye-usa.html",
  "perfect dark": "https://www.retrogames.cc/embed/32790-perfect-dark-usa.html",
  "castlevania: aria of sorrow": "https://www.retrogames.cc/embed/29282-castlevania-aria-of-sorrow-u-gbatemp.html",
  "final fantasy tactics advance": "https://www.retrogames.cc/embed/17590-final-fantasy-tactics-advance-e-surplus.html",
  "fire emblem": "https://www.retrogames.cc/embed/26190-fire-emblem-u-venom.html",
  "golden sun": "https://www.retrogames.cc/embed/28962-golden-sun-u-mode7.html",
  "kirby & the amazing mirror": "https://www.retrogames.cc/embed/19385-kirby-and-the-amazing-mirror-e-rising-sun.html",
  "metroid fusion":"https://www.retrogames.cc/embed/20567-metroid-fusion-u-gbanow.html",
  "wario land 4": "https://www.retrogames.cc/embed/26667-wario-land-4-e-mode7.html",
};

formPesquisa.addEventListener("submit", (e) => {
  e.preventDefault();

  const termo = campoPesquisa.value.trim().toLowerCase();
  if (!termo) return;

  // Quebra o termo de pesquisa em palavras
  const palavrasPesquisa = termo.split(" ").filter(Boolean);

  // Função para verificar se todas as palavras de pesquisa estão no nome do jogo
  const jogoEncontrado = Object.keys(jogosDisponiveis).find(jogo => {
    return palavrasPesquisa.every(palavra => jogo.toLowerCase().includes(palavra));
  });

  if (jogoEncontrado) {
    const src = encodeURIComponent(jogosDisponiveis[jogoEncontrado]);
    window.location.href = `jogo.html?src=${src}`;
  } else {
    mensagemErro.textContent = "Jogo não encontrado. Tente outro nome.";
  }
});
