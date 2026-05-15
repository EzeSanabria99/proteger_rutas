import { products } from "../../../data/data.ts"; // Chequeá que la ruta a data.ts sea esta
import { addToCart } from "../cart/cart";
import type { Product } from "../../../types/product";

const container = document.getElementById("product-container");
const searchInput = document.getElementById("search-input") as HTMLInputElement;

// Función para dibujar los productos
const renderProducts = (list: Product[]) => {
    if (!container) return;
    container.innerHTML = ""; // Limpiar antes de dibujar

    list.forEach(prod => {
        const div = document.createElement("div");
        div.classList.add("product-card");
        div.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}">
            <h3>${prod.nombre}</h3>
            <p>$${prod.precio}</p>
            <button id="btn-${prod.id}">Agregar</button>
        `;
        container.appendChild(div);

        // Asignar el evento al botón recién creado
        const btn = document.getElementById(`btn-${prod.id}`);
        btn?.addEventListener("click", () => addToCart(prod));
    });
};

// Iniciar con todos los productos
renderProducts(products);

// Escuchar el buscador
searchInput?.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase();
    const filtered = products.filter(p => p.nombre.toLowerCase().includes(term));
    renderProducts(filtered);
});