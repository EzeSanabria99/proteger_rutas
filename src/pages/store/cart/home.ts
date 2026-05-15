import { products } from "../../../data/data.ts"; // Chequeá que la ruta a data.ts sea esta
import { addToCart } from "../cart/cart";
import type { Product } from "../../../types/product";

const container = document.getElementById("product-container");
const searchInput = document.getElementById("search-input") as HTMLInputElement;


const renderProducts = (list: Product[]) => {
    if (!container) return;
    container.innerHTML = ""; 

    list.forEach(prod => {
        const div = document.createElement("div");
        div.classList.add("product-card");
        
        // Creamos el HTML con un ID único para cada botón basado en el ID del producto
        div.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}" style="width:150px">
            <h3>${prod.nombre}</h3>
            <p>$${prod.precio}</p>
            <button id="btn-${prod.id}">Agregar</button>
        `;
        container.appendChild(div);

        
        const btn = document.getElementById(`btn-${prod.id}`);
        if (btn) {
            btn.addEventListener("click", () => {
                addToCart(prod);
                alert(`${prod.nombre} agregado al carrito`);
            });
        }
    });
};


renderProducts(products);


searchInput?.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase();
    const filtered = products.filter(p => p.nombre.toLowerCase().includes(term));
    renderProducts(filtered);
});