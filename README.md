# Gestion Motor® #

## Introducción ##

Primera aplicacion de CSS Consultan Solutions and Servicies©. Está organizado como un EPR, del modo que distintas piezas, modulos o componentes, forman todo el software.

El proyecto está desarrollado con react/redux, para la parte Front-End o cliente, para la parte Back-End, se ha usado XXXXX y para la base de datos se ha optado por MongoDB. Entrando en la parte Front, se apoya, en la libreria boostrap 4, en su version alpha, en el empaquetador webpack 3, Express4 como servidor de Mocks. Más adelante, en el capítulo de versiones, se detallarán las versiones usadas para cada fase y a lo que afecta el cambio.





### What is this repository for? ###

* [Quick summary](#quick)
* [Version](#version)

### How do I get set up? ###

* [Summary of set up](#summary)
* [Configuration](#configuration)
* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

<a name="quick"></a>
#### Quick Summary:

* Instalación de proyecto
* Tecnologías que se usan
* Cómo agregar nuevas tareas
    - webpack
    - scripts
    

<a name="summary"></a>
#### Summary of set up:

Se puede realizar la instalación mediante yarn o mediante npm:

`npm`: npm install

`yarn`: yarn install

<a name="configuration"></a>
#### Configuration:

Se definen los siguientes SCRIPTS para cada tarea:
1. `build`: Construye en modo de desarrollo
2. `dist`: Construye los archivos para exportarlos como los necesita el SIP
3. `clean`: Borra la carpeta `./dist`
4. `start`: Arranca en local la tarea con `mocks`
5. `mocks`: Levanta servidor de MOCKS local
6. `serve`: Levanta el servidor de webpack sin `mocks`
7. `test`: Ejecuta los test de del proyecto
8. `eslint`: Valida el codigo con la configuracion de AirBnB
9. `eslint:flag`: Valida un archivo en concreto
10. `sass`: Construcción de estilos de la aplicación

Todos ellos se deberán de ejectuar como `npm run xxx` excepto el de `start` y `test` que se ejecutarán en consola como: `npm start` o como `npm test`.

Para empezar a construir, se empezarían con las tareas (**./task_modules/**). Para poder preparar todo el proyecto y que sea de una forma
mucho más abstracta y reutilizable, en el archivo `webpack.constants.js`, hay un apartado que explica las variables a modificar para cada proyecto. 

    ATENCIÓN!
        ¡Sólo modificar las variables que aparecen señaladas, el resto forma parte del core del scaffold y modificarlas podría dar lugar a 
        que dejase de funcionar ya que son las que se injectan en webpack!


### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

In this scaffold, uses it the AirBnB style-guide. For more info, you can click in this [link](https://github.com/airbnb/javascript)

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact