console.log("Hello World");

function handleInput(event) {
    const value = event.target.value;
    if (value === "alert") {
        alert("Attention !!");
    }
    changeColor(value)
    
}


const messageInput = document.querySelector("#message");
messageInput.addEventListener("input",event => {
    handleInput(event)}); // Ici, lorsqu'on écrit alerte sur le site, il y a une boite d'alerte qui afficher
// Attention !!

const labels = document.querySelectorAll("label");
console.log(labels)

function changeColor(color) {
labels.forEach((label) => {
    label.style.color = color;
})}

const pingDiv = document.querySelector("#pings")
const boutonCreer = document.querySelector("#creer");
const pingTemplate = document.querySelector("#ping-temp");

/*
boutonCreer.addEventListener("click", () => {
    temp = pingTemplate.content.cloneNode(true)
    const messageInput = document.querySelector("#message");
    temp.querySelector("#contenu").textContent = messageInput.value
    
    pingDiv.prepend(temp)
})*/

//*************************

const form = document.querySelector("#add-ping-form")
/* De base ! La juste c'est simplifié
form.addEventListener("submit", (event) => {
    event.preventDefault(); //Comme ça le formulaire ne s'envoie pas 

    //On récupère l'information
    const formData = new FormData(event.target); //event.target = form
    const message = formData.get("message"); 
    // Ici en fait on triche. Il faut en fait envoyer les données 
    //au serveur, attendre sa réponse et ensuite partager le ping

    if (message != "") {
    temp = pingTemplate.content.cloneNode(true) 
    const pingmessage = temp.querySelector(".ping-message")
    temp.querySelector("#contenu").textContent = messageInput.value

    pingDiv.prepend(temp)
    }
    event.target.reset()
}) */

form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    const formData = new FormData(event.target); 
    const message = formData.get("message"); 

    if (message != "") {

    const pingElement = document.createElement("ping-element");
    pingElement.setAttribute("message", message)
    pingElement.setAttribute("author", "Moi")
    pingElement.setAttribute("date", new Date().toISOString())
    pingElement.setAttribute("likes", Math.round(Math.random()*100))

    pingDiv.prepend(pingElement)
    }
    event.target.reset()
})

/*

form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    const formData = new FormData(event.target);

    const response = fetch("http://localhost:3000/pings", {
        method : "Post",
        body: formData,
    }).then((response) => {

        if(!response.ok) {
            console.error("Error for a ping", response)
            return;
        }
        response.json().then((data) => { //.json parce que le serveur répond en json, c'est le traitement standard par une API
            const message = data.content
            if (message != "") {
                temp = pingTemplate.content.cloneNode(true) 
                const pingmessage = temp.querySelector(".ping-message")
                temp.querySelector("#contenu").textContent = messageInput.value
            
                pingDiv.prepend(temp)
            }
            event.target.reset()
        });
    }) 
})

form.addEventListener("submit", async (event) => {
    event.preventDefault(); 
    const formData = new FormData(event.target);

    const response = await fetch("http://localhost:3000/pings", {
        method : "Post",
        body: formData,
    })

    if(!response.ok) {
        console.error("Error for a ping", response)
        return;
    }
    const data = await response.json();
        //.json parce que le serveur répond en json, c'est le traitement standard par une API
    const message = data.content
    if (message != "") {
        temp = pingTemplate.content.cloneNode(true) 
        const pingmessage = temp.querySelector(".ping-message")
        temp.querySelector("#contenu").textContent = messageInput.value
            
        pingDiv.prepend(temp)
    }
    event.target.reset()
})*/

/*
function slowResponse(request) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(request), 5000);
    })
}

function quickResponse(request) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(request), 100);
    })
}

function immediateResponse(request) {
    resolve(request)
}

async function fakeFetch() {
    const immediate = await immediateResponse("immediate");
    console.log(immediate);

    const slow = await slowResponse("Slow");
    console.log(slow);
    const quick = await quickResponse("quick");
    console.log(quick);

    console.log("End");
}
console.log("Starting fakeFetch")
fakeFetch();
console.log("End of fakeFetch)")*/