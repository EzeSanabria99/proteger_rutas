import { type CartItem } from '../../../data/data';

const carritoContainer = document.getElementById('carrito-container');
const totalPrecioElement = document.getElementById('total-precio');
const btnVaciar = document.getElementById('btn-vaciar');
const btnComprar = document.getElementById('btn-comprar');

let carrito: CartItem[] = JSON.parse(localStorage.getItem('carrito') || '[]');

function renderCarrito() {
    if (!carritoContainer || !totalPrecioElement) return;
    carritoContainer.innerHTML = '';
    let total = 0;

    if (carrito.length === 0) {
        carritoContainer.innerHTML = '<p>El carrito está vacío</p>';
        totalPrecioElement.innerText = '0';
        return;
    }

    carrito.forEach(item => {
        const div = document.createElement('div');
        div.style.borderBottom = "1px solid #eee";
        div.style.padding = "10px";
        div.innerHTML = `<span>${item.nombre} x ${item.quantity} - $${item.precio * item.quantity}</span>`;
        total += item.precio * item.quantity;
        carritoContainer.appendChild(div);
    });

    totalPrecioElement.innerText = total.toString();
}

btnVaciar?.addEventListener('click', () => {
    localStorage.removeItem('carrito');
    carrito = [];
    renderCarrito();
});

btnComprar?.addEventListener('click', () => {
    if (carrito.length === 0) return alert("Carrito vacío");
    alert("¡Gracias por tu compra! Tu pedido está en camino.");
    localStorage.removeItem('carrito');
    carrito = [];
    renderCarrito();
});

renderCarrito();