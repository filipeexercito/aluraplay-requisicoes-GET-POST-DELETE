import { conectaApi } from "./conectaApi.js";

// const formulario = document.querySelector("[data-formulario]");
const lista = document.querySelector("[data-lista]");

export async function deletaVideo(id) {

    try {
        await conectaApi.deletaVideo(id);
    } catch {
        alert("Não foi possível deletar esse vídeo.")
    };




    // const tituloDoLivroParaDeletar = evento.target.elements['titulo'].value;
    // try {
    //     const livroParaDeletar = await conectaApi.buscaVideoPorTitulo(tituloDoLivroParaDeletar);
    //     const id = livroParaDeletar[0].id;
    //     await conectaApi.deletaVideo(id);
    //     formulario.innerHTML = "Vídeo DELETADO com sucesso."
    // } catch {
    //     formulario.innerHTML = "Ocorreu um erro! Não foi possível localizar e deletar o vídeo."
    // }
}

// formulario.addEventListener('submit', evento => deletaVideo(evento));