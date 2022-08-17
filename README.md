# Ejecución de la aplicación

Para correr la aplicación, seguir los siguientes pasos:

## Frontend

En la carpeta client:

### `npm install`

Para la instalación de las dependencias

### `npm start`

Para correr la aplicación cliente, ésta correrá en http://localhost:3000/

## Backend

En la carpeta server:

### `npm install`

Para la instalación de las dependencias

### `nodemon index.js`

Para correr el servidor, éste correrá en http://localhost:4200/

## Base de datos

El nombre de la BD es basto

## Ejecución de Test

En la carpeta client

### `npm test`

Para correr los tests

## Librerias externas utilizadas

### material-ui

Se utilizó esta biblioteca de diseño para la estructura de la aplicacion y uso de algunos componentes basicos (Botones, Inputs, Fuentes, Snackbar)

### axios

Se utilizó esta biblioteca para hacer las solucitudes al servidor

### react-hook-form

Se utilizó esta biblioteca para la realizacion del formulario existente en la aplicacion

### mongoose

Se utilizó esta biblioteca para el manejo de la base de datos mongoDB

## Arquitectura Frontend

### Domain

###### Models

Aqui mantenemos los modelos que se necesitan, en este caso de la aplicacion el tipo Animal

###### Repositories

Todos los tipos relacionados con el repositorio (Encargado de traetr los datos del servidor)

###### Services

Encargado de interactuar con los modelos y realiazar acciones sobre ellos (Traer los animales, añadir, eliminar o actualizar un animal)

### Infraestructure

#### Instances

Instancia para nuestro cliente y repositorio

#### Components

Componentes utilizados en la aplicacion

#### Hooks

Hooks personalizados utilizados en la aplicacion

#### Pages

Las 3 páginas que se renderizan en la aplicacion (Listado de animales, alta de un animal, edición de un animal)

#### Theme

Configuracion del tema utilizado en la aplicacion

#### Types

Diferentes tipos de datos utilizados en la aplicacion

#### Utils

Funciones generales utlizadas en la aplicacion

## Comentarios

###### Se utiliza typescript

###### Se utiliza la nueva versión de react

###### A nivel diseño se optó por hacer diferentes rutas para la carga y actualizacion de animales y no por medio de un modal en la misma ruta

###### Al momento de editar un animal el campo ID se establece como deshabilitado. Se controla si hubo cambios al editar un animal antes de hacer el update a la BD
