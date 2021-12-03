# React Native Init Example

## Introduction

[ Descripción de la App - Completar en caso que haga falta]

## Table of Contents

- [Development](#development)
    - [Prerequisites](#prerequisites)
    - [Technologies](#technologies)
    - [Project Structure](#project-structure)
    - [Set Up Local Environment](#set-up-local-environment)
- [Coding Guidelines](#coding-guidelines)
    - [Code Style](#code-style)
- [Tests](#tests)
    - [Unit Tests](#unit-tests)
- [Submitting Your Changes](#submitting-your-changes)

## Development

### Prerequisites

First, install the following dependencies:

- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Yarn](https://classic.yarnpkg.com/en/docs/getting-started)

### Technologies

 * [React Native](https://reactnative.dev/)
 * [React Navigation](https://reactnavigation.org/)
 * [React Native Elements](https://react.native-community.org/docs/0.57/elements)
 * [React Native Vector Icons](https://oblador.github.io/react-native-vector-icons/)
 * [Redux Toolkit](https://redux-toolkit.js.org/)
 * [React Native Debugger]()

### Project structure

The project code base is mainly located inside, `src/`.

```
.
├── src
│   ├── assets             # Images and other assets
│   │
│   ├── components
│   │   ├── sample              # `Sample` component files.
│   │   │   ├── index.jsx       # `Sample` component source code.
│   │
│   ├── hooks                   # Custom hooks
│   │   ├── */                  # Each hooks folder if it needs to be separated.
│   │   └── useHookName.js      # Hook source code.
│   │
│   ├── navigation              # Navigation files.
│   │   ├── */                  # Folder for each Screen. eg: `Home`, `Login`, `Register`
│   │   └── index.js            # Main entry point for navigations.
│   │
│   └── App.js                  # Main entry point for the app.
```

### Set Up local environment
Local development requires to have at least one device connected to the computer or at least one emulator already
configured. To know how to configure an emulator, please refer to the [React Native](https://reactnative.dev/docs/environment-setup)

#### Android
```bash
yarn && yarn run android
```

#### IOs
```bash
yarn && cd ios && pod install
```
```bash
yarn run ios
```

## Coding Guidelines

### Code Style
Para mantener un code style consistente, se recomienda usar [prettier](https://prettier.io/) y [eslint](https://eslint.org/),
ambos se encuentran ya configurados, por lo que en cada cambio/PR se debe ejecutar el comando `yarn lint` y obtener una
salida limpia, si se detecta algún error, se debe corregir y luego ejecutar `yarn lint` para verificar que no existan
nuevos errores. Este mismo proceso se debe realizar durante una code review.

#### Components
Los componentes son la base de la aplicación, por lo que deben ser reutilizables y mantener una estructura simple, cada
nuevo componente debe ir dentro de la carpeta `components`, dentro de `/components` se debe crear una carpeta con el nombre
de dicho componente, dentro de esta carpeta se debe crear el archivo `index.jsx` y dentro de este archivo es donde tendremos
el código, teniendo asi una estructura de carpetas y archivos consistente. Cualquier otro archivo se relacione con el componente,
puede estar en su misma carpeta, excluyendo los assets.

#### Navigation
Navigation es donde se encuentran las rutas de la aplicación, por lo que se debe crear una carpeta por cada nueva ruta (vista),
dentro de esta carpeta se debe crear el archivo `index.jsx` y dentro de este archivo se debe crear el código de la nueva vista.
Una vista es considerada todo aquello que sea navegable, como por ejemplo, una vista de login, una vista de registro, una
vista de perfil de usuario; Asi mismo dentro de una vista como el registro podemos tener varios pasos/steps que se pueden
considerar parte de la misma vista y tener cada uno de ellos dentro de la misma parte padre.

Adicionalmente, dentro de la carpeta `navigation` existe un archivo `index.jsx`, en el cual se encuentra declaro el main navigator,
el punto de entrada principal de la navigation. En este archivo podremos crear el flujo de navegación de la aplicación, asi como tambien
extenderlo añadiendo navegaciones internas. Un ejemplo de esto es: tener una navegación principal de "tabs" y adicionalmente
cada tab tener su propia navegación interna basada en stacks.

#### Hooks
Los hooks son una herramienta de React que nos permite crear funciones o wrappers de funciones y reutilizarlas en diferentes
componentes (funcionales), esto nos permite reutilizar código y mantener una estructura simple. Dentro de la carpeta `hooks`
se encuentran todos los hooks creados particularmente para la aplicación.

Un ejemplo de un costume hook podría ser `useError`, este hook nos permite obtener las funciones necesarias para mostrar un error, como
por ejemplo podría ser `showError`, permitiendo tener esta lógica en un solo lugar sin preocuparnos de acceder al store o hacer
imports excesivos, con una sola línea podemos estar seteando un error de forma sencilla y transparente.

```jsx
import { errorAccion } from '../store/error';

function useError() {
  const [error, setError] = useState(null);

  const showError = (error) => {
    sentry.captureException(error); // Enviamos el error a Sentry
    store.dispatch(errorAccion(error)); // Lanzamos una accion de error
    // Otras operaciones necesarias
    setError(error);
  }

  return {
    error,
    showError
  }
}
```
```jsx
import { useError } from '../hooks/useError';

function MyComponent() {
  const { showError } = useError();

  return (
    <View>
      <Text>
        {/* ... */}
      </Text>
    </View>
  );
}
```

#### Store
El store es el lugar donde se encuentran todos los datos de la aplicación, el store principal se encuentra en el archivo `index.js`
y es un conjunto de stores secundarios, cada store secundario es referente a una parte de la aplicación o modelo de negocio,
por ejemplo: un store para el modelo de usuario, un store para el modelo de producto, un store para el modelo de error, etc.

Cada store secundario es representado por una carpeta, dentro de esta carpeta se encuentran tres archivos: `actions.js`,
`reducer.js`, y `selectors.js`. Dentro de cada archivo se encuentra el código de la acción, reducer y selector
respectivamente. De esta forma mantenemos una estructura simple y limpia de código, teniendo un fácil acceso a la lógica
de cada módulo. Esta estructura se penso para ser usada con Redux Toolkit.

`reducer.js`: Dentro de reducer.js se encuentra el código del reducer, el cual se encarga de manejar las acciones y
modificar el estado en consecuencia, por como Redux Toolkit se maneja, usamos `createSlice` para crear el store secundario
y los reducers que lo modificarán, una vez hecho esto, automáticamente nos creas las actiones relacionadas dentro de nuestro
Slice.

`actions.js`: Dentro de actions.js se encuentra el código de las acciones, pero de las que requieren un comportamiento más
complejo que solo modificar el estado de nuestra aplicación, las asíncronas (async) son las acciones que requieren una llamada
a una api, por ejemplo. Estas acciones se crean con `createAsyncThunk`, este método nos va a generar una acción que puede tener
tres estados posibles y los cuales debemos manejar en nuestra aplicación creando los reducers correspondientes dentro de
`reducer.js`, estos reducers tienen una sintaxis diferente y *no* son creados automáticamente por Redux Toolkit. Estos
reducers se crean de la siguiente forma:

```js
extraReducers: builder => {
  // Add reducers for additional action types here
  builder.addCase(fetchValue.fulfilled, (state, action) => {
    // Add new value to state
    state.value = action.payload;
  });
  builder.addCase(fetchValue.rejected, (state, action) => {
    // Error case
    state.value = null;
  });
  builder.addCase(fetchValue.pending, (state, action) => {
    // On queue to be executed
  });
}
```

`selectors.js`: Dentro de selectors.js se encuentra el código de los selectores, estos selectores son los que nos permiten
acceder a una parte o a la totalidad de un estado de nuestra aplicación o incluso realizar una lógica de validación sobre
un valor o un set de valores particulares, la ventaja de crear estos selectores es que podemos accederlos con hooks desde
nuestro y el mismo hooks nos va a retornar un nuevo valor si el mismo llegara a cambiar. Por ejemplo:

```jsx
import {createSelector} from '@reduxjs/toolkit';

export const sampleSelector = state => state.sample;

export const isValueGreaterThanZero = createSelector(
  sampleSelector,
  (sample) => {
    return sample.value > 0;
  }
);
```

```jsx
import { useSelector } from 'react-redux';

function MyComponent() {
  const booleanResult = useSelector(isValueGreaterThanZero);

  return (
    <View>
      <Text>
        {booleanResult && <Text>The value is greater than zero</Text>}
      </Text>
    </View>
  );
}
```

### Logging

TODO

## Submitting Your Changes

1. Get `main` branch up to date: `git checkout main && git pull`
2. Create your branch with Jira ticket number in the branch name: `git checkout -b <branch_name> description`
3. Hackity hack with small PRs organized by subtask (if needed)
4. Push branch: Runs eslint, jest tests, and typescript compile that has to pass to push
5. Create PR and follow provided PR template: PRs require at least <X> approvals to merge and approvals are reset for any change to the PR
