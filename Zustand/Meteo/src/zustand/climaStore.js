import { create } from 'zustand';

const climaStore = create((set) => ({
  data: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,

  fetchWeather: async ({ latitude, longitude }) => {
    try {
      set({ status: 'loading', error: null });

      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
      );

      if (!response.ok) {
        throw new Error('Error al obtener el clima');
      }

      const data = await response.json();

      set({
        status: 'succeeded',
        data: data.current_weather,
      });
    } catch (error) {
      set({
        status: 'failed',
        error: error.message,
      });
    }
  },
}));

export default climaStore;
