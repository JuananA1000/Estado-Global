# Aplicación de Climatología

- **Estado de la ubicación**: Un objeto que contiene la ubicación actual del usuario. Acederemos a los datos de ubicación a través de la API [`Nominatim`](https://nominatim.org/)
- **Estado del clima**: datos del clima para la ubicación actual. Acederemos a los datos de temperaturas y condiciones climáticas a través de la API [`Open Meteo`](https://open-meteo.com/)
- **Acciones**:
  - Actualizar ubicación
  - Cargar datos del clima.

En este caso, el estado de la ubicación y el clima serán gestionados por separado. Las acciones para actualizar ubicación y cargar datos del clima actualizarían el estado correspondiente.
