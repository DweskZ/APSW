# Practica3WS

Práctica de CRUD en tiempo real con WebSockets (Socket.IO) y NestJS + TypeORM + SQLite.

## Descripción

Esta práctica implementa tres recursos (`Calificacion`, `Grabacion`, `Usuario`) expuestos como Gateways de WebSocket usando **Socket.IO**. Cada recurso ofrece operaciones CRUD en tiempo real:

- **create...**: crea un nuevo registro y emite el evento `...Created` con la lista actualizada.
- **list...**: lista todos los registros (mediante ack o emisión).
- **update...**: actualiza un registro y emite `...Updated`.
- **delete...**: elimina un registro y emite `...Deleted`.

Se utiliza SQLite para almacenamiento y TypeORM para el mapeo objeto-relacional. Ideal para demostrar comunicaciones en tiempo real y arquitecturas event-driven.

## Estructura del proyecto

```
practica3/
├── src/
│   ├── app.module.ts        # Configuración principal (TypeORM + Gateways)
│   ├── main.ts              # Bootstrap de NestJS
│   ├── calificacion/        # Módulo, entidad, servicio y gateway de Calificacion
│   ├── grabacion/           # Módulo, entidad, servicio y gateway de Grabacion
│   └── usuario/             # Módulo, entidad, servicio y gateway de Usuario
├── app.db                   # Base de datos SQLite (autogenerada)
├── package.json             # Dependencias y scripts
├── tsconfig.json            # Configuración de TypeScript
└── practica3.postman_collection.json  # Colección de Postman para pruebas Socket.IO
```

## Rubrica / Requisitos

1. **Inicialización del proyecto**: NestJS sin repositorio Git interno (`--skip-git`).
2. **Dependencias**: instalación de WebSockets, TypeORM, SQLite, mapped-types, class-validator, class-transformer.
3. **Configuración de TypeORM**: `synchronize: true` para desarrollo.
4. **Entidades**: definición de `Calificacion`, `Grabacion` y `Usuario` con sus columnas y tipos.
5. **Servicios CRUD**: métodos `create`, `findAll`, `findOne`, `update`, `remove` en cada servicio.
6. **Gateways WebSocket**: implementación de `@WebSocketGateway` con métodos `@SubscribeMessage(...)`, emisión de eventos.
7. **Pruebas**: colección de Postman con peticiones Socket.IO para cada evento.
8. **Documentación**: README detallado con instrucciones completas.

## Requisitos previos

- Node.js >= 16
- npm
- Postman (para pruebas Socket.IO) o ejecutar el script `test-sockets.js`.

## Instalación y ejecución

1. Clonar el repositorio:
   ```bash
   git clone <TU_REPO_URL>
   cd practica3
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar el servidor en modo desarrollo:
   ```bash
   npm run start:dev
   ```
   Escuchará en `http://localhost:3000`.

## Uso con Postman (Socket.IO)

**Link público de la colección :**

<https://sad222-2664.postman.co/workspace/My-Workspace~e00fef93-f77d-4335-8af3-4b47eff03c3a/collection/687573cd08f5e6c8537d9648?action=share&creator=44971682>

 - Verás la colección **Practica3WS** con tres carpetas: `Calificacion`, `Grabacion` y `Usuario`.
2. Conectar a un namespace:
   - En cada petición Socket.IO, la URL debe ser:
     ```
     http://localhost:3000/calificacion
     http://localhost:3000/grabacion
     http://localhost:3000/usuario
     ```
3. Probar eventos (`create`, `list`, `update`, `delete`) según el nombre de la carpeta.


*Generado por Dwesk*
