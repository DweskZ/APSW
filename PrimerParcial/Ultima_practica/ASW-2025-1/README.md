# Practica 3 Aplicaciones para el servidor web 

Se inicializaron todas las entidades, la entidad con la que trabajamos fue Grabacion.entity. 
Se creo el caso de uso, asi mismo se llego hasta hacer un post y un get con esta entidad. 

Primero, inicializamos con el docker compose up el contenedor docker con nuestra base de datos

Se cambio la sincronizacion a true en la configuracion del datasource

Comenzamos con un npm install y continuamos con un npm run dev

Entonces con la siguiente ruta en postman: 

http://localhost:3000/api/grabaciones

Definiendo en headers, una fila de key content-type / y en value Application/json

Pasamos el siguiente raw JSON 

{
  "usuarioId": 1,
  "presentacionId": 1,
  "archivoAudio": "audio1.mp3",
  "fechaGrabacion": "2025-06-02T20:00:00.000Z",
  "nombreArchivo": "grabacion-clase1.mp3"
}

Tendremos que ver en respuesta algo como 

{
    "id": 1,
    "usuarioId": 1,
    "presentacionId": 1,
    "archivoAudio": "audio1.mp3",
    "fechaGrabacion": "2025-06-02T20:00:00.000Z",
    "nombreArchivo": "grabacion-clase1.mp3",
    "navegaciones": []
}

![alt text](image.png)