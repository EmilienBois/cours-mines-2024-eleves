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

const pingsData = [
    {
        message: "Hello World",
        author: "Lui",
        date: new Date(),
        likes: 0
    },
    {
        message: "Hello World2",
        author: "Elle",
        date: new Date(),
        likes:42
    },
    {
        message: "Hello World3",
        author: "Oim",
        date: new Date(),
        likes: 9840
    },

]

const pingDiv = document.querySelector("#pings")
const pingTemplate = document.querySelector("#ping-temp");


//*************************

const form = document.querySelector("#add-ping-form")


form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    const formData = new FormData(event.target); 
    const message = formData.get("message"); 

    

    const pingElement = document.createElement("ping-element");
    pingElement.setAttribute("message", message)
    pingElement.setAttribute("author", "Moi")
    pingElement.setAttribute("date", new Date())
    pingElement.setAttribute("likes", Math.round(Math.random()*100))

    pingDiv.prepend(pingElement)
    
    event.target.reset()
})

const pingList = document.createElement("ping-list");
pingElement.setAttribute("pings", pingsData);

pingDiv.prepend(pingList)