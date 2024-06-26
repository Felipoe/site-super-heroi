function carregarSuperHerois() {

    const requisicaoHttp = new XMLHttpRequest()
    requisicaoHttp.open("GET", "https://akabab.github.io/superhero-api/api/all.json", false)
    requisicaoHttp.send()

    const resposta = JSON.parse(requisicaoHttp.responseText)
    const superherois = resposta

    for (let index = 0 ; index <superherois.length; index++){
        const superheroi = superherois[index]
        adicionarCardSuperHerois(superheroi)
    }   
}

function adicionarCardSuperHerois(superheroi){

    const divCardElemento = document.createElement("div")
    divCardElemento.classList.add("card")

    const imagemElemento = document.createElement("img")
    imagemElemento.setAttribute("src", superheroi.images.md)
    imagemElemento.style.width= "90%"

    const textoElemento = document.createElement("h1")
    textoElemento.innerHTML = superheroi.name

    const divElemento = document.getElementById("conteudo-super-hero")
    divCardElemento.appendChild(imagemElemento)
    divCardElemento.appendChild(textoElemento)
    divElemento.appendChild(divCardElemento)
}