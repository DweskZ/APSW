// Variables
const sistemaNombre: string = "Asistente de Prácticas Orales";
let totalGrabaciones: number = 3;

// Interfaces
interface Grabacion {
  id: number;
  id_usuario: number;
  id_presentacion: number;
  archivo_audio: string;
  fecha_grabacion: Date;
}

interface Calificacion {
  id: number;
  id_usuario: number;
  id_grabacion: number;
  puntuacion: number;
  observacion: string;
}

interface NavegacionSlide {
  id: number;
  id_grabacion: number;
  id_slide: number;
  timestamp: number;
}

// Objetos
const grabacion1: Grabacion = {
  id: 1,
  id_usuario: 100,
  id_presentacion: 200,
  archivo_audio: "audio_01.mp3",
  fecha_grabacion: new Date("2025-04-30")
};

const calificacion1: Calificacion = {
  id: 1,
  id_usuario: 100,
  id_grabacion: 1,
  puntuacion: 4.7,
  observacion: "Buen ritmo y claridad"
};

const slideNav1: NavegacionSlide = {
  id: 1,
  id_grabacion: 1,
  id_slide: 1,
  timestamp: 6
};

// Arreglos de Objetos
const grabaciones: Grabacion[] = [grabacion1];
const calificaciones: Calificacion[] = [calificacion1];
const navegaciones: NavegacionSlide[] = [slideNav1];

// Funciones
function crearGrabacion(id: number, usuario: number, presentacion: number, archivo: string): Grabacion {
  return {
    id,
    id_usuario: usuario,
    id_presentacion: presentacion,
    archivo_audio: archivo,
    fecha_grabacion: new Date()
  };
}

function mostrarGrabacion(grabacion: Grabacion): void {
  console.log(`Grabación: ${grabacion.archivo_audio} del usuario ${grabacion.id_usuario}`);
}

// Spread y Rest
const nuevasGrabaciones: Grabacion[] = [
  crearGrabacion(2, 101, 201, "audio_02.mp3"),
  crearGrabacion(3, 102, 202, "audio_03.mp3")
];

const todasGrabaciones: Grabacion[] = [...grabaciones, ...nuevasGrabaciones];

function registrarGrabaciones(...grabs: Grabacion[]) {
  grabs.forEach(g => console.log(`Registrada: ${g.archivo_audio}`));
}

// Callbacks
function procesarGrabacion(grabacion: Grabacion, callback: (g: Grabacion) => void): void {
  callback(grabacion);
}

procesarGrabacion(grabacion1, mostrarGrabacion);

// Promises
function guardarGrabacion(grabacion: Grabacion): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Grabación ${grabacion.archivo_audio} guardada exitosamente.`);
    }, 1000);
  });
}

// Async/Await
async function main() {
  const mensaje = await guardarGrabacion(grabacion1);
  console.log(mensaje);
}

main();
