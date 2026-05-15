export interface Icategoria { id: number; nombre: string; }

export interface Product { 
    id: number; nombre: string; precio: number; 
    descripcion: string; imagen: string; categoriaId: number; 
}

export interface CartItem extends Product { 
    quantity: number; 
}

export const PRODUCTS: Product[] = [
    { id: 1, nombre: 'Hamburguesa Doble', precio: 8500, descripcion: 'Pan con sesamo, medallón de carne con lechuga y tomate.', imagen: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400', categoriaId: 1 },
    { id: 2, nombre: 'Pizza Especial', precio: 7000, descripcion: 'Muzarella y jamón.', imagen: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400', categoriaId: 2 },
    { id: 3, nombre: 'Papas Fritas con cheddar', precio: 5000, descripcion: 'Papas saladas.', imagen: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400', categoriaId: 3 }
];

export const CATEGORIES: Icategoria[] = [
    { id: 1, nombre: 'Hamburguesas' },
    { id: 2, nombre: 'Pizzas' },
    { id: 3, nombre: 'Guarniciones' }
];