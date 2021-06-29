// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import "babel-polyfill";


// \/ All of your javascript should go here \/
const form = document.querySelector("#submit-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const checkbox = document.querySelector("#checkbox");

const getUser = async (user) => {
    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            body: JSON.stringify(user),
        });
        return data;
    } catch {
        console.warn("Error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevents the form to be send
    alert("You submitted");
    const user = {
        name: name.value,
        email: email.value,
        message: message.value,
        checkbox: checkbox.checked,
    };
    getUser(user).then(console.log);
});