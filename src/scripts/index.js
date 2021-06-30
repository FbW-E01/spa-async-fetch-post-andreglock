// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import "babel-polyfill";


// \/ All of your javascript should go here \/
const form = document.querySelector("#submit-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const message = document.querySelector("#message");
const checkbox = document.querySelector("#checkbox");

const getUser = async (user) => {
    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            body: JSON.stringify(user),
        });
        return data.json();
    } catch {
        console.warn("Error");
    }
}

form.addEventListener("submit", async (e) => {
    e.preventDefault(); // prevents the form to be send
    const user = {
        name: name.value,
        email: email.value,
        password: password.value,
        message: message.value,
        checkbox: checkbox.checked,
    };
    try {
        const json = await getUser(user);
        console.log(json);
        alert(`User data saved \n UserID: ${json.id}`)
    } catch (error) {
        console.log("Error:", error);
    }
});