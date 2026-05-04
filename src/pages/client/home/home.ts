import { logout } from "../../../utils/auth";

const btnLogout = document.getElementById("logoutButton") as HTMLButtonElement;

btnLogout?.addEventListener("click", () => {
    logout(); 
});