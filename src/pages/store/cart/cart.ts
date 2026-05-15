import type { Product, CartItem } from "../../../types/product";

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
};

export const calculateTotal = (): number => {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.precio * item.cantidad), 0);
};


const renderCart = () => {
    const cartContainer = document.getElementById("cart-container");
    const totalElement = document.getElementById("cart-total");

    if (!cartContainer) return; // Si no estamos en la página del carrito, no hace nada

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

document.addEventListener("DOMContentLoaded", renderCart);