import { create } from 'zustand';

// Pillar ciudades del linkhttps://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(nomCiudad)}
// Y condiciones climáticas de aquí: https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true
// DUDA: ¿Es necesario crear dos stores, o puedo uno solo?

const climaStore = create((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchClima: async (latitude, longitude) => {
    
    set({ loading: true, error: null });
    
    try {
      const API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
      const response = await fetch(API_URL);
      const data = await response.json();
      set({ data: data.current_weather, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default climaStore;
