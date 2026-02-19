import { create } from 'zustand';

const METEO_API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=';
// Obtener datos de esta dirección: `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
export const climaStore = create((set) => ({
  clima: null,
  loading: false,
  error: null,

  setDatosClima: async (latitude, longitude) => {
    if (!latitude || !longitude) return;

    set({ loading: true, error: null });

    try {
      const response = await fetch(`${METEO_API_URL}${latitude}&longitude=${longitude}&current_weather=true`);

      if (!response.ok) {
        throw new Error('Error al obtener los datos del clima');
      }

      const data = await response.json();
      set({ clima: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));
