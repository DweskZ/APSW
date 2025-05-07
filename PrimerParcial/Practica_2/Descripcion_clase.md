
# Clase Introduccion a JSON y ORMs en Node.js y Python 

## Nombre del estudiante:
*Luis Emilio Figueroa Arteaga*


## Descripción:

# Que es un JSON?
    Javascript ? Object 
    Key Value Structure
    Se usa en: 
- ApiRest
- NoSQLBD

# Que es un ORM?
    Objetc Realational Mapping 
    Orientado a objetos
    Ahorra codigo 

# Objetos POCO - POJO 
    Objetos en BD para almacenar informacion 
    Objetos que permiten mapear 

# Ventajas ORM
- Abstraccion 
- Portabilidad 
- Productividad 
- Seguridad 

# ORMs en Node.js
- Prisma 
- Sequelize
- TypeORM


para instalar prisma 
    >npm install prisma --save-dev
    >npx primas init

modelo user 
campos : id,name,email 

configuracion 
.env gestiona conexion a BD

# TypeORM
- Usa decoradores para definir entidades
- Multiples BD 
- Configuracion: Requiere ormconfig.json

- # metodos 
- modelo: clase con @entity, @column
- Actualizar/Eliminar: repo.update(id)  (USAR ESTADOS ACTIVO O ELIMINADO PERO NO ELIMINARLO DIRECTAMENTE)
- Crear: repo.save()
- Leer: repo.read()

