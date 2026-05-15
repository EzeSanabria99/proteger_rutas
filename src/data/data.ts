import type { Product } from "../types/product";

export const products: Product[] = [
    {
        id: 1,
        nombre: "Hamburguesa Clásica",
        precio: 2500,
        categoria: "Hamburguesas",
        imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop"
    },
    {
        id: 2,
        nombre: "Pizza Especial",
        precio: 3800,
        categoria: "Pizzas",
        imagen: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop"
    },
    {
        id: 3,
        nombre: "Papas Fritas",
        precio: 1200,
        categoria: "Snacks",
        imagen: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&auto=format&fit=crop"
    }
];
