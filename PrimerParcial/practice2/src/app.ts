
//Práctica en clases 
// Nombre: Asistente de Exposición
// Autor: Luis Emilio Figueroa Arteaga
// Fecha: 2025-04-30


// Variables de configuración del sistema
const sistemaNombre: string = "Asistente de Exposición";

let totalGrabaciones: number = 3;

//Interfaz para las grabaciones

interface Grabacion {
    id: number;
    id_usuario: number;
    id_presentacion: number;
    archivo_audio: string;
    fecha_grabacion: Date;
}

// Objetos de grabaciones

const grabacion1: Grabacion = {
    id: 1.
    id_usuario: 100,
    id_presentacion: 200,
    archivo__audio: "audio_01.mp3",
    fecha_grabacion: new Date("2025-04-30")
};

const grabacion2: Grabacion = {
    id: 2,
    id_usuario: 101,
    id_presentacion: 201,
    archivo_audio: "audio_02.mp3",
    fecha_grabacion: new Date("2025-05-01")
};

//Arrays de grabaciones

const grabaciones: Grabacion[] = [grabacion1, grabacion2];

// Funciones

function crearGrabacion(id: number, id_usuario: number, id_presentacion: number, archivo: string): Grabacion {
    return {
        id,
        id_usuario,
        id_presentacion,
        archivo_audio: archivo
        fecha_grabacion: new Date()
    };
}

function mostrarGrabacion(grabacion: Grabacion): void {
    console.log(`Audio: ${grabacion.archivo.audio} | Usuario: ${grabacion.id_usaurio}`);
}

// Spread y Rest

const 