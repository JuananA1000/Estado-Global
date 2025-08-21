import { create } from 'zustand';

const ubicacionStore = create((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchUbicacion: async (nomCiudad) => {
    
    set({ loading: true, error: null });
    
    try {
      const API_URL = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(nomCiudad)}`;
      const response = await fetch(API_URL);
      const data = await response.json();
      set({ data: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default ubicacionStore;
