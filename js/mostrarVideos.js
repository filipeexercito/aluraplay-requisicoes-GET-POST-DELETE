import { conectaApi } from "./conectaApi.js";
import { deletaVideo } from './deletarVideo.js'; // Nesse caso, é necessário utilizar as chaves, pois a importação é de um export. Caso a importação fosse de um export default, seria necessário retirar as chaves, podendo inclusive nomear a importação com qualquer nome.

const lista = document.querySelector("[data-lista]");
console.log(lista);

export default function constroiCard(titulo, descricao, url, imagem, id) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
        title="${titulo}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="${imagem}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
    </div>
    `
    video.appendChild(botaoDeleta(id));

    return video;
}

async function listaVideos() {
    try {
        const listaApi = await conectaApi.listaVideos();
        listaApi.forEach(elemento => lista.appendChild(
            constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem, elemento.id)));
    } catch {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeos</h2>`
    }
}

listaVideos();

function botaoDeleta(id) {
    const elementoBotao = document.createElement("button");
    elementoBotao.innerText = "X";

    elementoBotao.addEventListener("click", () => {deletaVideo(id)});

    return elementoBotao;
};


