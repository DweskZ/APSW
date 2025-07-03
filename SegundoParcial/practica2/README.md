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
## Consultas de la API en GraphQL Sandbox
### Consultas y Mutaciones

```graphql
mutation {
  createUsuario(createUsuarioInput: {
    nombre: "Dwesk",
    email: "dwesk@example.com",
    rol: "estudiante"
  }) {
    id
    nombre
  }
}

query {
  usuarios {
    id
    nombre
    email
    rol
  }
}


mutation {
  updateUsuario(updateUsuarioInput: {
    id: "ad0dedae-7425-4c11-8211-f6783046eb9d",
    nombre: "Dwesk Modificado",
    email: "nuevo@example.com",
    rol: "docente"
  }) {
    id
    nombre
  }
}


mutation {
  removeUsuario(id: "bef1f4dd-83a7-4288-8312-4eff68a48fd0") {
    id
    nombre
    email
    rol
  }
}


Grabacion 

mutation {
  createGrabacion(createGrabacionInput: {
    titulo: "Exposición final",
    url: "https://videos.com/final.mp4",
    fecha: "2025-07-02T17:00:00.000Z",
    usuarioId: "040c7038-8b5b-461a-9307-9421f14c43bd"
  }) {
    id
    titulo
    fecha
    usuarioId
  }
}

query {
  grabaciones {
    id
    titulo
    url
    fecha
    usuarioId
  }
}

mutation {
  updateGrabacion(
    updateGrabacionInput: {
      id: "e2fb639e-6d2a-43ba-9469-ee497a35c43e"
      titulo: "Demo Final Editado"
      url: "https://videos.com/demo-editado.mp4"
      fecha: "2025-07-03T14:30:00.000Z"
    }
  ) {
    id
    titulo
    url
    fecha
    usuarioId
  }
}


mutation {
  removeGrabacion(id: "63c69b42-1b15-4c84-b180-31e30b466815") {
    id
    titulo
    url
    fecha
    usuarioId
  }
}

Calificacion 

mutation {
  createCalificacion(createCalificacionInput: {
    puntaje: 90,
    comentario: "Gran presentación",
    fecha: "2025-07-02T18:00:00.000Z",
    usuarioId: "040c7038-8b5b-461a-9307-9421f14c43bd",
    grabacionId: "7ea30e0c-dcaa-4c68-92e1-99112d84d327"
  }) {
    id
    puntaje
    comentario
    fecha
  }
}

query {
  calificaciones {
    id
    puntaje
    comentario
    fecha
    usuarioId
    grabacionId
  }
}


mutation {
  updateCalificacion(updateCalificacionInput: {
    id: "6b96de06-3f23-45c7-b4ef-80bb080f66cc",
    puntaje: 100,
    comentario: "Presentación impecable",
    fecha: "2025-07-02T20:00:00.000Z",
    usuarioId: "040c7038-8b5b-461a-9307-9421f14c43bd",
    grabacionId: "7ea30e0c-dcaa-4c68-92e1-99112d84d327"
  }) {
    id
    puntaje
    comentario
    fecha
  }
}


mutation {
  removeCalificacion(id: "09bc0980-701a-4e6d-a81a-35214d5bc6c5") {
    id
    puntaje
    comentario
    fecha
    usuarioId
    grabacionId
  }
}

```

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