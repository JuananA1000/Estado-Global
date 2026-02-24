import { create } from 'zustand';

const ubicacionStore = create((set) => ({
  data: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,

  fetchUbicacion: async (nomCiudad) => {
    try {
      set({ status: 'loading', error: null });

      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(nomCiudad)}`,
      );

      if (!response.ok) {
        throw new Error('Error al obtener la ubicación');
      }

      const data = await response.json();

      set({
        status: 'succeeded',
        data: data[0] || null,
      });
    } catch (error) {
      set({
        status: 'failed',
        error: error.message,
      });
    }
  },
}));

export default ubicacionStore;
