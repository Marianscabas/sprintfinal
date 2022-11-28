// json-server --watch server.json para activar API REST de mentiritas

const API_URL = "http://localhost:3000"
const PRODUCTOS_URL = "http://localhost:3000/productos"


const saveCard = (div) => {
    let div_main = document.querySelector("#main")
    div_main.appendChild(div)
}


    const createImg = (text) => {
        let img = document.createElement("img")
        img.setAttribute('src', text)
        console.log(img)
        return img
    
    }
    const createP = (text) => {
        let p = document.createElement("p")
        p.innerHTML = text
        console.log(p)
        return p
    
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


const llamar_productos = async () => {
    let productos = await traer_productos()
    productos.forEach(element => {
        let div = document.createElement("div")
        div.setAttribute("class", "card")
        div.appendChild(createImg(element.img))
        div.appendChild(createP( element.name))
        div.appendChild(createP(element.precio))
        saveCard(div)
    });
}

llamar_productos()
