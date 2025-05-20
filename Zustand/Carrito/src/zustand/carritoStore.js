import { create } from 'zustand';

export const carritoStore = create((set) => ({
  carrito: {
    items: [],
    total: 0,
  },

  addInstrumento: (instrumento) =>
    set((estado) => {
      const enElCarrito = estado.carrito.items.find((i) => i.nombre === instrumento.nombre);

      if (enElCarrito) {
        return {
          carrito: {
            items: estado.carrito.items.map((item) =>
              item.nombre === instrumento.nombre ? { ...item, cantidad: item.cantidad + 1 } : item
            ),
            total: estado.carrito.total + instrumento.precio,
          },
        };
      } else {
        return {
          carrito: {
            items: [...estado.carrito.items, { ...instrumento, cantidad: 1 }],
            total: estado.carrito.total + instrumento.precio,
          },
        };
      }
    }),

  eliminarInstrumento: () => {
    // code
  },
}));
