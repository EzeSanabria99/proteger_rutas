import type { Product, CartItem } from "../../../types/product";

// Obtener datos del LocalStorage
export const getCart = (): CartItem[] => {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
};

// Función para agregar (se exporta para que Home la use)
export const addToCart = (product: Product): void => {
    const cart = getCart();
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.cantidad += 1;
    } else {
        cart.push({ ...product, cantidad: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    // Si estamos en la página del carrito, actualizamos la vista
    renderCart();
};

// Función para dibujar el carrito en el HTML
export const renderCart = () => {
    const container = document.getElementById("cart-container");
    const totalElement = document.getElementById("cart-total");
    if (!container) return;

    const items = getCart();
    
    if (items.length === 0) {
        container.innerHTML = "<p>Tu carrito está vacío. ¡Ve a comprar algo rico!</p>";
        if (totalElement) totalElement.innerText = "0";
        return;
    }

    container.innerHTML = "";
    items.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <p>
                <strong>${item.nombre}</strong> (x${item.cantidad}) 
                - Precio unitario: $${item.precio} 
                - Subtotal: $${item.precio * item.cantidad}
            </p>
        `;
        container.appendChild(div);
    });

    if (totalElement) {
        const total = items.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
        totalElement.innerText = total.toString();
    }
};

// Ejecutar al cargar la página del carrito
document.addEventListener("DOMContentLoaded", renderCart);