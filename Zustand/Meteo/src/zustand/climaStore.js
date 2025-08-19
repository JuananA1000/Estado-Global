import { create } from 'zustand';

// Pillar ciudades del linkhttps://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(nomCiudad)}
// Y condiciones climáticas de aquí: https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true
// DUDA: ¿Es necesario crear dos stores, o puedo uno solo?

const climaStore = create((set) => ({
  ciudad: '',

  setCiudad: (nuevaCiudad) => set({ ciudad: nuevaCiudad }),
}));

export default climaStore;
