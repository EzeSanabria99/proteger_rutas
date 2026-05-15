import { products } from "../../../data/data";
import { addToCart } from "../../store/cart/cart";
import type { Product } from "../../../types/product";

const container = document.getElementById("product-container");
const searchInput = document.getElementById("search-input") as HTMLInputElement;

const renderProducts = (list: Product[]) => {
    if (!container) return;
    container.innerHTML = "";

    list.forEach(prod => {
        const div = document.createElement("div");
        div.classList.add("product-card");
        div.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}" style="width:150px">
            <h3>${prod.nombre}</h3>
            <p>$${prod.precio}</p>
            <button id="btn-${prod.id}">Agregar al Carrito</button>
        `;
        container.appendChild(div);

        // Evento para el botón
        document.getElementById(`btn-${prod.id}`)?.addEventListener("click", () => {
            addToCart(prod);
            alert(`${prod.nombre} agregado con éxito!`);
        });
    });
};

// Carga inicial
renderProducts(products);

// Buscador dinámico
searchInput?.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase();
    const filtered = products.filter(p => p.nombre.toLowerCase().includes(term));
    renderProducts(filtered);
});