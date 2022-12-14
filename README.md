<img width="1000" alt="image" src="http://i.cdn.turner.com/adultswim/big/img/2015/07/17/Rick%26MortyS02_Header_REF.png">

# Módulo 3: Ejercicio de evaluación final

En este repositorio se presenta el ejercicio de evaluación final de Elena Clemente Rentero para el tercer módulo de programación con React del curso de desarrolladora front-end impartido por Adalab.

## Descripción 

El ejercicio consiste en desarrollar una aplicación web sencilla con React que nos permite visualizar un listado de personajes de Rick and Morty, que podemos filtrar por el nombre del personaje, así por su especie y estado.

## Funcionamiento

<img width="1000" alt="image" src="https://user-images.githubusercontent.com/111798280/207703280-fb19f0f4-b0f7-433e-8778-b3bc6c4986be.png">

- **Visualización de los personajes**: Permite ver en modo listado los personajes de la serie Rick and Morty extraídos de la siguiente API: https://rickandmortyapi.com/api/character. Por cada personaje se visualiza una tarjeta donde se muestra su foto, nombre y especie.

- **Filtrado de personajes**: Además el usuario tiene la opción en la parte superior de la página de filtrar por nombre, para lo cual solo debe rellenar el campo, de forma que al ir escribiendo un nombre, se muestran en la página solo los personajes cuyo nombre contiene las letras escritas. Este filtro no es case sensitive, facilitando la búsqueda al usuario. La página como bonus adicional permite filtrar los personajes con dos select, uno para la especie y otro para el estado. Si se busca un texto que no corresponde a ningún personaje, se muestra el siguiente mensaje "Ningún resultado coincide con su búsqueda."

- **Detalle de personajes**: Al hacer click sobre la tarjeta de un personaje, su información aparecerá a pantalla completa. Esta funcionalidad se ha implementado utilizando rutas y React Router DOM. En la pantalla de detalle aparece, además de la foto, nombre y especie, el planeta de origen, el número de episodios en los que aparece y si está vivo o muerto. Junto a la información de la tarjeta, aparecen iconos para hacer más dinámica la página.

- **Bonus**: Se ha realizado una página accesible y responsive, siguiendo la metodología mobile first utilizando un sistema grid para pintar el listado de personajes. Se ha implementado una URL compartible, permitiendo compartir el detalle de los personajes con otros usuarios, que tendrán acceso al mismo. Además el listado de personajes se ha ordenado alfabéticamente por nombre.

<img width="1000" alt="image" src="https://user-images.githubusercontent.com/111798280/207712225-70bbd840-5a68-44bb-b897-28806b3f9468.png">

## Si te gustaría instalarlo, sigue esta guía de inicio rápido

Este proyecto se ha realizado utilizando **React**. Para poder utilizarlo en tu ordenador debes: 

1. **Clona este repositorio en tu ordenador**.
1. **Ábrelo en tu editor de código**.
1. A continuación **abre una terminal e instala las dependencias** locales ejecutando en la terminal de comando: 

```npm install```

Una vez hemos instalado las dependencias, **el proyecto debe arrancarse cada vez que nos pongamos a programar** ejecutando el siguiente comando:

```npm start```

Este comando abre una ventana de Chrome y muestra tu página web en **http://localhost:3000**.

Después de ejecutar ```npm start``` ya puedes empezar a editar todos los ficheros que están dentro de la carpeta ```src/``` y programar cómodamente. 
