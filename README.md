/* Test de aplicación Cliente / Servidor */

/*Tecnologías usadas */

-	FrontEnd: Angular 12.2.1
-	BackEnd: Nestjs
-	DataBase: MongoDB

Requisitos: NodeJs, TypeScript, Docker, npm, GIT

/*Repositorios monorepo*/
Esta en capsulado en un archivo principal llamado ./test-regin-rm y dentro de este, está distribuido en Frontend ./app-regin y BackEnd ./api-reguin, para descargar el repo se debe clonar desde github: https://github.com/rennymontano/test-regin-rm

      >$ git clone https://github.com/rennymontano/test-regin-rm.git

Nota: para que pueda funcionar debe tener instalado en tu maquina: NodeJs la versión LST, Angular-cli, npm, NestJs
Luego de tener el repositorio en su ambiente se utiliza cualquier editor de código, yo uso .vscode lo abrimos y tenemos dos opciones arrastrar la carpeta del proyecto a el vscode o buscarla por el menú de archivo > abrir carpeta y buscamos la ruta, una ves en el ,vscode, abrimos una terminal y colocamos en ella

  > $ npm install

Esto nos cargara todas las dependencias del proyecto para ambas capas
Existen dos forma de ejecutar los proyectos cliente servidor:

    1# es sin Dockerizar directo desde sus carpetas por comandos npm

      Opción 1: desde la carpeta raíz ./test-regin-rm
          Terminal 1: >$ npm run start:api
          Terminal 2: >$ npm run start:app

      Esto nos levanta el servidor de back y front

      Opción 2: desde cada una de las carpetas raíz front  y back.
      (./api-regin)Terminal 1: >$ npm run start:dev
      (./app-regin)Terminal 2: >$ npm  start

      	NOTA si va a levantar los servicios por estos métodos tiene que cambiar la dirección del servidor api en app.module la línea 
        
        MongooseModule.forRoot('mongodb://mongo:27017/nest-articles'), 
          Por 
        MongooseModule.forRoot('mongodb://localhost/nest-articles'), 


    2# Doquerizar el Proyecto desde la carpeta principal de proyecto usamos Docker-Compose (para esto se debe tener instalado Docker)

        >$ docker-compose build
      
        Este comando crea las imágenes de cada una de las capas, incluido mongo, luego para levantar las imágenes se usa el siguiente comando.
        
        >$ docker-compose up

    Para ambos casos, entramos a nuestro navegador
        Front:  http://localhost:4200
        Back:  http://localhost:3001/api/*

/*Funcionalidades para FrontEnd*/

La app está en http://localhost:4200 como lo menciono anteriormente, es una simple web que muestra un encabezado donde se pueden observar dos títulos y un icono que al cliquear refresca la grilla de los datos esta también sirve para iniciar la Base de Dato.
Luego en la grilla tenemos dos acciones uno al hacer clic en una de las filas te redirecciona a una nueva pestaña donde muestra su contenido, también un tacho que nos permite eliminarla de la grilla definitivamente. (Lo que hace en la base de dato es poner una variable en true o false).

/*Funcionalidades de BackEnd*/

El servidor cuenta con dos servicios api, uno que retorna todos los datos de mongo, el otro para actualizar los datos que no se quieren mostrar según eliminado en el front, cuenta con una tarea que se ejecuta automáticamente cada hora (Cron Jobs) para por medio de una consulta a un api externo popular los datos.

    getAllData:  http://localhost:3001/api/articles
    UpdateData: http://localhost:3001/api/delete?articleID=617a20411ec1c536500cb75f


