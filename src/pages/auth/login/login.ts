import { type IUser } from "../../../types/IUser";
import { navigate } from "../../../utils/navigate";
import { saveUser } from "../../../utils/localStorage";

const form = document.getElementById("form") as HTMLFormElement;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailValue = (document.getElementById("email") as HTMLInputElement).value;
    const passwordValue = (document.getElementById("password") as HTMLInputElement).value;
    const roleValue = (document.getElementById("rol") as HTMLSelectElement).value; 

    const users: IUser[] = JSON.parse(localStorage.getItem("users") || "[]");
    
    
    const userFound = users.find(u => 
        u.email === emailValue && 
        u.password === passwordValue && 
        u.role === roleValue
    );

    if (userFound) {
        userFound.loggedIn = true;
        saveUser(userFound); 
        
        if (userFound.role === "admin") {
            navigate("/src/pages/admin/home/home.html");
        } else {
            navigate("/src/pages/client/home/home.html");
        }
    } else {
        alert("Datos incorrectos o el rol no coincide con tu usuario");
    }
});