// json-server --watch server.json para activar API REST de mentiritas

const API_URL = "http://localhost:3000"
const PRODUCTOS_URL = "http://localhost:3000/productos"

const templateFoter = document.getElementById("template-footer")
const templateCarrito = document.getElementById("template-carrito")
const items = document.getElementById("items")
const footer = document.getElementById("footer")


const saveCard = (div) => {
    let div_main = document.querySelector("#main")
    div_main.setAttribute("class", "cardp")
    div_main.appendChild(div)
}


const traer_productos = async () => {
    try {
        let response = await fetch(API_URL + "/productos")
        let data = await response.json()
        console.log(data);
        return data
    } catch (error) {
        console.log(error);

    }
}


main.addEventListener("click",e =>{
    addCarrito(e)
})

const carrito = {}
const llamar_productos = async () => {
    let productos = await traer_productos()
    productos.forEach(element => {
        let div = document.createElement("div")
        const { img,id, name, precio } = element
        div.innerHTML += `
<div class="divPcard col-12 px-0">
<div class="div_img"><img src=${img} class=" card-img-top img_card" alt="..."></div>
  <div class=" card1  ">
  <div class="div_text">
    <span class="pCard1">${name}</span>
    <span class="pCard2">${precio}</span>
    <button  class="  btn_card"  data-id="${id}">ADD</button>
    </div>
  </div>
</div>


`
        saveCard(div)

        

    });
}




const addCarrito = e =>{
    if (e.target.classList.contains("btn_card")) {
       setCarrito(e.target.parentElement)
    }
    e.stopPropagation(e)
}

const setCarrito = object =>{
const producto ={
    id: object.querySelector(".btn_card").dataset.id,
    name : object.querySelector(".pCard1").textContent,
    precio: object.querySelector(".pCard2").textContent,
    cantidad: 1
}
if (carrito.hasOwnProperty(producto.id)) {
    producto.cantidad =carrito [producto.id].cantidad + 1
}
carrito[producto.id]= {...producto}
pintarCarrito()
}
const pintarCarrito = () => {
    console.table(carrito);
    const car = document.querySelector(".carritoPinta")
    (carrito.object.values).forEach(producto =>{
        templateCarrito.querySelector("th") = producto.id
        templateCarrito.querySelectorAll("td")[0]= producto.name
        templateCarrito.querySelectorAll("td")[1]= producto.cantidad
        templateCarrito.querySelector(".btn-info").dataset.id = producto.id
        templateCarrito.querySelector("span").templateFoter = producto.cantidad * producto.precio

    })

    items.appendChild(car)

}
   

llamar_productos()

