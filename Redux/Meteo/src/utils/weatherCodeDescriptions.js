import cloud from './assets/cloud.svg';
import cloudy from './assets/cloudy.svg';
import flake from './assets/flake.svg';
import fog from './assets/fog.svg';
import ice from './assets/ice.svg';
import pocoNuboso from './assets/poconuboso.svg';
import rain from './assets/rain.svg';
import snow from './assets/snow.svg';
import storm from './assets/storm.svg';
import stormRain from './assets/stormrain.svg';
import sun from './assets/sun.svg';
import sunRain from './assets/sunrain.svg';

export const weatherCodeDescriptions = {
  0: sun, // Despejado
  1: pocoNuboso, // Mayormente despejado
  2: cloudy, // Parcialmente nublado
  3: cloud, // Nublado
  45: fog, // Niebla
  48: ice, // Niebla con escarcha
  51: rain, // Llovizna ligera
  53: rain, // Llovizna moderada
  55: rain, // Llovizna densa
  61: rain, // Lluvia ligera
  63: rain, // Lluvia moderada
  65: rain, // Lluvia intensa
  71: flake, // Nieve ligera
  73: snow, // Nieve moderada
  75: snow, // Nieve intensa
  80: sunRain, // Chubascos ligeros
  81: sunRain, // Chubascos moderados
  82: stormRain, // Chubascos intensos
  95: storm, // Tormenta
  96: stormRain, // Tormenta con granizo leve
  99: stormRain, // Tormenta con granizo fuerte
};
