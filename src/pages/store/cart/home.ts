import { PRODUCTS, CATEGORIES, type CartItem } from '../../../data/data';

const productosContainer = document.getElementById('productos-container');
const categoriasContainer = document.getElementById('categorias-container');
const inputBusqueda = document.getElementById('busqueda') as HTMLInputElement;

let carrito: CartItem[] = JSON.parse(localStorage.getItem('carrito') || '[]');

function agregarAlCarrito(id: number) {
    const producto = PRODUCTS.find(p => p.id === id);
    if (!producto) return;
    const itemEnCarrito = carrito.find(item => item.id === id);
    if (itemEnCarrito) {
        itemEnCarrito.quantity += 1;
    } else {
        carrito.push({ ...producto, quantity: 1 });
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`${producto.nombre} agregado!`);
}

function renderProductos(lista: any[]) {
    if (!productosContainer) return;
    productosContainer.innerHTML = '';
    lista.forEach(p => {
        const card = document.createElement('div');
        card.style.border = "1px solid #ddd";
        card.style.margin = "10px";
        card.style.padding = "10px";
        card.innerHTML = `
            <img src="${p.imagen}" width="100">
            <h4>${p.nombre}</h4>
            <p>$${p.precio}</p>
            <button class="btn-agregar">Agregar 🛒</button>
        `;
        card.querySelector('.btn-agregar')?.addEventListener('click', () => agregarAlCarrito(p.id));
        productosContainer.appendChild(card);
    });
}

function renderCategorias() {
    if (!categoriasContainer) return;
    categoriasContainer.innerHTML = '<button id="btn-todos">Todos</button>';
    const btnTodos = document.getElementById('btn-todos');
    if (btnTodos) btnTodos.onclick = () => renderProductos(PRODUCTS);

    CATEGORIES.forEach(cat => {
        const btn = document.createElement('button');
        btn.innerText = cat.nombre;
        btn.onclick = () => renderProductos(PRODUCTS.filter(p => p.categoriaId === cat.id));
        categoriasContainer.appendChild(btn);
    });
}

inputBusqueda?.addEventListener('input', () => {
    const valor = inputBusqueda.value.toLowerCase();
    renderProductos(PRODUCTS.filter(p => p.nombre.toLowerCase().includes(valor)));
});

renderProductos(PRODUCTS);
renderCategorias();