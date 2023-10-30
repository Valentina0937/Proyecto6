const marcoPuntaje = document.querySelector('.puntaje');
let puntajeActual = 0;
const puntajeLimite = 5;

//Mapeo dibuja en html
//Arreglo a partir del arreglo puntaje limite
const htmlMapa = Array.from(Array(puntajeLimite)).map((item, i)=>{
    //Construye 5 divisiones
    return `<div class="item item-${i}" data-pos="${i}"></div>`;
}); 
marcoPuntaje.innerHTML = htmlMapa.join("");
//Escuche cuando el mouse pase por el item
document.querySelectorAll(".item").forEach(item=>{
    item.addEventListener("mouseover", e=>{
        console.log("Funciona");
        //Captura la posición 
        const posicion = item.getAttribute("data-pos");

        if(puntajeActual==parseInt(posicion)+1){
            return;

        }
        document.querySelectorAll(".item").forEach(cuadraditoGris=>{
            if(cuadraditoGris.classList.contains("select")){
                cuadraditoGris.classList.remove("select");
            }
        })

        for(let i = 0; i<=posicion; i++){
            const cuadradito = document.querySelector(`.item-${i}`);
            if(!cuadradito.classList.contains("select")){
                cuadradito.classList.add("select");
            }
        }
        puntajeActual=parseInt(posicion)+1;  
    })
    item.addEventListener("click", (e)=>{
        const posicion = item.getAttribute("data-pos");
        puntajeActual = parseInt(posicion) + 1;
        console.log(puntajeActual)
    });
})