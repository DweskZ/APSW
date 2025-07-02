# 🎯 API GraphQL de Evaluación de Grabaciones

Este proyecto implementa una API funcional con **NestJS** y **GraphQL** usando una **arquitectura por capas**. Permite gestionar usuarios, grabaciones y calificaciones de presentaciones orales.

---

## 📌 Entidades implementadas

### 1. `Usuario`
- `id`: UUID
- `nombre`: string
- `email`: string
- `rol`: string (ej. estudiante, docente)

### 2. `Grabacion`
- `id`: UUID
- `titulo`: string
- `url`: string
- `fecha`: Date
- `usuarioId`: string (ID del usuario que la subió)

### 3. `Calificacion`
- `id`: UUID
- `puntaje`: number (0 a 100)
- `comentario`: string
- `fecha`: Date
- `usuarioId`: string (ID del calificador)
- `grabacionId`: string (ID de la grabación calificada)

---

## ⚙️ Tecnologías usadas

- NestJS
- GraphQL (Code First)
- TypeORM
- SQLite (DB local)
- class-validator
- Apollo Server

---

## 🚀 Instalación y ejecución

```bash
# 1. Clonar repositorio
git clone <URL-de-tu-repo>

# 2. Entrar al proyecto
cd practica2

# 3. Instalar dependencias
npm install

# 4. Crear archivo .env con la ruta de la base de datos
echo DATABASE=./db.sqlite > .env

# 5. Ejecutar en modo desarrollo
npm run start:dev

# 6. Acceso al Playground GraphQL

http://localhost:3000/graphql

Dwesk
Estudiante de Ingeniería en Software
Universidad Laica Eloy Alfaro de Manabí