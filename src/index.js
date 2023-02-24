/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')

const url = "https://platzi-avo.vercel.app/api/avo"

// WEB API USING PROMISES:
// Conectar al server
fetch(url)
// Procesar la respuesta y convertirla en json
.then((respuesta) =>respuesta.json())
// JSON->Data->Renderizar info en browser
.then((responseJson) =>{
    // console.log('DAta: ', responseJson.data)
    const todosLosItems=[]
    responseJson.data.forEach(item => {
        // crear imagen
        const imagen = document.createElement('img');
        // crear titulo
        const title = document.createElement('h2');
        // crear precio
        const price = document.createElement('div');

        const container = document.createElement('div');
        container.append(imagen, title, price);

        // imagen.src = item.image;
        // document.body.appendChild(imagen)
        // document.body.appendChild(title)
        // document.body.appendChild(price)
        todosLosItems.push(container)
    })
    document.body.append(...todosLosItems)
})

