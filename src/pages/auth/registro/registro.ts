import { type IUser } from "../../../types/IUser";
import { navigate } from "../../../utils/navigate";

const form = document.getElementById("register-form") as HTMLFormElement;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;

    const newUser: IUser = {
        email,
        password,
        role: "client", // Por defecto según el PDF
        loggedIn: false
    };

    const users: IUser[] = JSON.parse(localStorage.getItem("users") || "[]");
    
    if (users.find(u => u.email === email)) {
        alert("Usuario ya registrado");
        return;
    }

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("¡Registro exitoso!");
    navigate("/src/pages/auth/login/login.html");
});