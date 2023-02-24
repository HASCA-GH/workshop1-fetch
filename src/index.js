/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')

const baseUrl = "https://platzi-avo.vercel.app"
const urlApi = "https://platzi-avo.vercel.app/api/avo"

const appNode = document.querySelector('#app');

// WEB API USING PROMISES:
// Conectar al server
fetch(urlApi)
// Procesar la respuesta y convertirla en json
.then((respuesta) =>respuesta.json())
// JSON->Data->Renderizar info en browser
.then((responseJson) =>{
    // console.log('DAta: ', responseJson.data)
    const todosLosItems=[]
    responseJson.data.forEach((item) => {
        // crear imagen
        const imagen = document.createElement('img');
        imagen.src = `${baseUrl}${item.image}` ;

        // crear titulo
        const title = document.createElement('h2');
        title.textContent = item.name;
        // crear precio
        const price = document.createElement('div');
        price.textContent = item.price;

        const container = document.createElement('div');
        container.append(imagen, title, price);

        // document.body.appendChild(imagen)
        // document.body.appendChild(title)
        // document.body.appendChild(price)
        todosLosItems.push(container)
    })
    appNode.append(...todosLosItems)
})

