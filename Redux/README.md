# Redux Toolkit

Redux Toolkit es, hasta la fecha, la herramienta adecuada para manejar el **estado global** de las aplicaciones ReactJS

## Instalación 

Vamos al grano, para instalar **Redux Toolkit** en nuestro proyecto, lo haremos con los siguientes comandos:

#### Instalar Toolkit

```http
    npm install @reduxjs/toolkit
```

#### Instalar Redux

```http
    npm install react-redux
```
## Uso de Redux Toolkit

En primer lugar, nos dirigiremos al fichero **main.jsx**, y pegaremos el siguiente código:

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { Provider } from 'react-redux';
import { store } from './redux/store.js';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
        <App />
        </Provider>
    </React.StrictMode>
);
```
1. Importamos el **Provider** y el **store**
2. Los implementamos en el código, utilizando **Provider como componente**, y el **store como prop**

## Creación del **store**

Toda app de Redux requiere un **store**, que funcionará como **almacén para todos los slices**, que alojarán las funciones reducer:

```javascript
import { configureStore } from '@reduxjs/toolkit';

import primerSlice from './primerSlice';

export const store = configureStore({
  reducer: {
    primer: primerSlice,

    // Aquí se pueden guardar todos los slicers que queramos   crear, después de importarlos, claro.
  },
});
```

## Creación del **slice** y los **reducers**

En los slices, crearemos los **reducers**, que son las **funciones**, propiamente dichas, que manejan el estado:

```javascript
import { createSlice } from '@reduxjs/toolkit';

const primerSlice = createSlice({
  name: 'primer',
  initialState: [],

  reducers: {
    primerReducer: (state, action) => {
        // Codigo de la función aquí 
    },

    segundoReducer: (state, action) => {
        // Codigo de la función aquí  
    },  
});

export const { primerReducer, segundoReducer } = primerSlice.actions;
export default primerSlice.reducer;
```

1. Importamos la herramienta **createSlice** de toolkit y creamos el slice
2. Nombramos el slice **obligatoriamente igual** que en el store.
3. Creamos el **estado inicial**, llamado initialState. Es el valor predeterminado de ese slice antes de que cualquier acción haya sido utilizada. Este estado inicial puede ser un *objeto*, *array*, *número*, etc., y establece la estructura y los valores iniciales del estado en el store.

A continuación, crearemos el objeto **reducers**, en el cual, alojaremos todas las funciones encargadas de manejar el estado global.