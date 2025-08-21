import despejado from '../assets/0,1.png';
import parcNub from '../assets/2.png';
import nublado from '../assets/3.png';
import niebla from '../assets/45,48.png';
import llovizna from '../assets/51,53,55,61,63,65.png';
import nieve from '../assets/71,73,75.png';
import chaparrones from '../assets/80,81,82.png';
import tormenta from '../assets/95,96,99.png';

const weatherData = [
  { weathercode: [0, 1], descripcion: 'Cielo despejado', icono: despejado },
  { weathercode: [2], descripcion: 'Parcialmente nublado', icono: parcNub },
  { weathercode: [3], descripcion: 'Nublado', icono: nublado },
  { weathercode: [45, 48], descripcion: 'Niebla / Escarcha', icono: niebla },
  { weathercode: [51, 53, 55, 61, 63, 65], descripcion: 'Llovizna', icono: llovizna },
  { weathercode: [71, 73, 75], descripcion: 'Nieve', icono: nieve },
  { weathercode: [80, 81, 82], descripcion: 'Chaparrones', icono: chaparrones },
  { weathercode: [95, 96, 99], descripcion: 'Tormenta', icono: tormenta },
];

export default weatherData;
