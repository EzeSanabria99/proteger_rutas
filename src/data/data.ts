export interface Icategoria { id: number; nombre: string; }

export interface Product { 
    id: number; nombre: string; precio: number; 
    descripcion: string; imagen: string; categoriaId: number; 
}

export interface CartItem extends Product { 
    quantity: number; 
}

export const PRODUCTS: Product[] = [
    { 
        id: 1, 
        nombre: 'Hamburguesa Doble', 
        precio: 8500, 
        descripcion: 'Pan con sesamo, medallón de carne con lechuga, tomate, queso y cebolla.', 
        imagen: 'https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?auto=format&fit=crop&w=600&q=80', 
        categoriaId: 1 
    },
    { 
        id: 2, 
        nombre: 'Pizza Napolitana con jamón', 
        precio: 7000, 
        descripcion: 'Muzarella y jamón con tomate.', 
        imagen: 'https://images.unsplash.com/photo-1673439304183-8840bd0dc1bf?auto=format&fit=crop&w=600&q=80', 
        categoriaId: 2 
    },
    { 
        id: 3, 
        nombre: 'Papas Fritas con perejil', 
        precio: 5000, 
        descripcion: 'Papas saladas con sabor exquisito.', 
        imagen: 'https://images.unsplash.com/photo-1630431341973-02e1b662ec35?auto=format&fit=crop&w=600&q=80', 
        categoriaId: 3 
    }
];

export const CATEGORIES: Icategoria[] = [
    { id: 1, nombre: 'Hamburguesas' },
    { id: 2, nombre: 'Pizzas' },
    { id: 3, nombre: 'Guarniciones' }
];