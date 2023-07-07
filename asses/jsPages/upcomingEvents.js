let container = document.getElementById("contenedorCards")
let events = data.events
let currentData = data.currentDate
let date = data.date
function crearCards(objeto){
    return `<div class="col">
                <div class="card h-100 card border-danger">
                    <img src="${objeto.image}" class="card-img-top h-50 p-3" alt="${objeto.name}">
                    <div class="card-body">
                    <h5 class="card-title">${objeto.name}</h5>
                    <p class="card-text">${objeto.description}</p>
                </div>
                <div class="d-flex justify-content-evenly">
                    <p>Price: ${objeto.price}</p>
                    <a class="text-decoration-none text-dark details" href="./asses/pages/1.html">Details</a>
                </div>
                </div>
            </div>`
}

function imprimirCards(array,elemetoHTML,data){
    let template = ""
    for (let evento of array) {
        if (evento.date > data) {
            template += crearCards(evento)
        }
        elemetoHTML.innerHTML=template;
    }
}
imprimirCards(events, container, currentData)