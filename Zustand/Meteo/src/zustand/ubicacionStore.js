import { create } from 'zustand';

const UBICACION_API_URL = 'https://nominatim.openstreetmap.org/search';

export const ubicacionStore = create((set) => ({
  ciudad: '',
  lat: null,
  lon: null,
  loading: false,
  error: null,

  setUbicacion: (ubicacion) => set({ ubicacion }),

  obtenerUbicacion: async (nomCiudad) => {
    if (!nomCiudad) return;

    set({ loading: true, error: null });

    try {
      const response = await fetch(`${NOMINATIM_URL}?q=${nomCiudad}&format=json&limit=1`);

      if (!response.ok) {
        throw new Error('Error al obtener la ubicación');
      }

      const data = await response.json();

      if (data.length === 0) {
        throw new Error('Ciudad no encontrada');
      }

      set({
        lat: data[0].lat,
        lon: data[0].lon,
        loading: false,
      });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));
