import { checkAuhtUser } from "./utils/auth";

function guard() {
    const path = window.location.pathname;

   
    if (path.includes("/admin/")) {
        checkAuhtUser(
            "/src/pages/auth/login/login.html", 
            "/src/pages/client/home/home.html", 
            "admin"                             
        );
    }

    
    if (path.includes("/client/")) {
        checkAuhtUser(
            "/src/pages/auth/login/login.html",
            "/src/pages/admin/home/home.html",
            "client"
        );
    }
}

document.addEventListener("DOMContentLoaded", guard);