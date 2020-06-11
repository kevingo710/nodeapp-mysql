# Node connection MySql simple example

### La aplicacion web esta desarrollada en NodeJS y BD en MySql

## Comenzando 🚀

Lo puedes clonar en local y ejecutar el comando --> instalar todos los modules necesarios para funcionar
````
npm install
``````

Empezar a correr el proyecto asegurate de estar en la ubicación del Index.js

```
npm start
````

### Pre-requisitos 📋

_NodeJs instalado_

_Editor de Código_

_DB MySql local o dockerizada_


## Desarrollo del proyecto ⚙️

````
npm -y init
````
para crear el package-lock.json

modulos requeridos para el desarrollo de la app
`````
npm install mysql express ejs bodyparser
`````

package.json -> donde estaran nuestras configuraciones iniciales

### Estructura de carpetas y archivos 📂



🗄️ Servidor: Puertos, Motor de Plantillas, Archivos Estaticos, Middlewares [server.js](https://github.com/kevingo710/nodeapp-mysql/blob/master/src/config/server.js)

💾 Base de Datos definimos host,port,user,passwd,db  exportamos esta funcion para llamar en otro parte del proyect en [dbConnection.js](https://github.com/kevingo710/nodeapp-mysql/blob/master/src/config/dbConnection.js)

📽️ Vistas Lógica creo un carpeta /routes 📜  donde estara la configuracion backend de las vistas, requerimos la funcion creada en el paso anterior y hago consultas a la bd a la vez genera vistas con respuestas en json para generar una api con mis resultados [news.js](https://github.com/kevingo710/nodeapp-mysql/blob/master/src/app/routes/news.js)


🖥️ Vistas Cliente creo una carpeta /views y dentro de ella los archivos ejs (ext. motor de plantillas) de las vista con el mismo nombre de la ruta para que tenga concordancia [news.ejs](https://github.com/kevingo710/nodeapp-mysql/blob/master/src/app/views/news/news.ejs)


## Construido con 🛠️ 

_He usado distintos frameworks y herramientas_

* Servidor web [Express](https://expressjs.com/)
* Docker de [MySql](https://hub.docker.com/_/mysql)
* Estilos CSS [Bootstrap](https://getbootstrap.com/)


### Detalles Adicionales versions 📤

* Base de Datos MYSQL version 8.0 - Dockerizada  
* Server de Azure App de Node version 12.0 desplegada en Azure - Servicio Web APP Node



## Autor ✒️

_Este proyecto fue adapatdo por mi_

* **Kevin Gracia** - *Desarrollo* - [kevingo710](https://github.com/kevingo710)



## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.



---
⌨️ con ❤️ por [kevingo710](https://github.com/kevingo710) 😊

<p>
    <a href="https://twitter.com/intent/follow?screen_name=kevingrac7">
    <img src="https://img.shields.io/twitter/follow/kevingrac7?style=social"
    alt="follow on Twitter">
    </a>
<p>


