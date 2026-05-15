
// 1. IMPORTACIONES CORREGIDAS
import { products } from "../../../data/data";
import type { Product, CartItem } from "../../../types/product";

// 2. LÓGICA DEL CARRITO
export const getCart = (): CartItem[] => {
    const cartData = localStorage.getItem('cart');
    return JSON.parse(cartData || "[]");
};

export const addToCart = (product: Product): void => {
    const cart = getCart();
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.cantidad += 1;
    } else {
        const newItem: CartItem = { ...product, cantidad: 1 };
        cart.push(newItem);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart(); // Para que se actualice la vista al agregar
};

export const calculateTotal = (): number => {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.precio * item.cantidad), 0);
};

// 3. RENDERIZADO DINÁMICO
const renderCart = () => {
    const cartContainer = document.getElementById("cart-container");
    const totalElement = document.getElementById("cart-total");

    if (!cartContainer) return;

    const items = getCart();

    if (items.length === 0) {
        cartContainer.innerHTML = "<p>Tu carrito está vacío</p>";
        if (totalElement) totalElement.innerText = "0";
        return;
    }

    cartContainer.innerHTML = "";
    items.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <p><strong>${item.nombre}</strong> - Cantidad: ${item.cantidad} - Precio: $${item.precio * item.cantidad}</p>
        `;
        cartContainer.appendChild(div);
    });

    if (totalElement) {
        totalElement.innerText = calculateTotal().toString();
    }
};

// 4. INICIALIZACIÓN
document.addEventListener("DOMContentLoaded", () => {
    console.log("Productos disponibles:", products); // Para usar la variable y quitar el aviso ts(6133)
    renderCart();
});