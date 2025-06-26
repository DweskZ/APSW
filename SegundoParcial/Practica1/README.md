# ExposIA API — Práctica 1  
_API REST CRUD con NestJS + TypeORM (SQLite)_

> **Contexto:** práctica de aula — tres entidades independientes (Usuario, Grabacion, NotaSlide) y 15 endpoints CRUD listos para probar con Postman.

---

## ✨ Características

| Bloque | Detalle |
|--------|---------|
| **Stack** | NestJS 10 · TypeORM 0.3 · SQLite 3 |
| **Validación** | `class-validator` / `class-transformer` (pipe global) |
| **Prefijo versión** | Todas las rutas empiezan en `/api/v1` |
| **Colección Postman** | `postman/exposia_postman_collection_v2.json` |
| **Base de datos** | `db.sqlite` (creada automáticamente — ignorada en Git) |
| **Scripts útiles** | `npm run start:dev`, `npm run build`, `npm run format` |

---

## 🛠️ Requisitos

* Node.js **20 LTS** (o superior)
* npm 10 +

---

## 🚀 Instalación y arranque

```bash
git clone 
cd exposia-api
npm install            # instala dependencias
npm run start:dev      # servidor en http://localhost:3000/api/v1


Autor
Dwesk — Ingeniería de Software @ ULEAM

¡Disfruta la práctica y siéntete libre de abrir issues o enviar pull requests!