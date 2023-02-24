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
        imagen.src = `${baseUrl}${item.image}`;
        imagen.className = 'img-cuadrito'

        // crear titulo
        const title = document.createElement('h2');
        title.textContent = item.name;
        // title.style = 'font-size: 2rem';
        // title.style.fontSize = '2rem'
        title.className = 'muy-grande'

        // crear precio
        const price = document.createElement('div');
        price.textContent = item.price;

        const parteIzq = document.createElement('div')
        parteIzq.className = 'parteIzq'

        const parteDer = document.createElement('div')
        parteDer.className = 'parteDer'

        const container = document.createElement('div');
        container.className = 'container-cuadrito'
        container.append(parteIzq, parteDer);
        // container.append(imagen, title, price);
        parteIzq.append(imagen)
        parteDer.append(title, price)
        

        // document.body.appendChild(imagen)
        // document.body.appendChild(title)
        // document.body.appendChild(price)
        todosLosItems.push(container)
    })
    appNode.append(...todosLosItems)
})

