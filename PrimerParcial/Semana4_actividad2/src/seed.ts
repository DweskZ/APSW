// src/seed.ts
import { AppDataSource } from "./data-source";
import { Grabacion } from "./models/Grabacion";
import { Feedback } from "./models/Feedback";
import { Slide } from "./models/Slide";
import { ParametroIdeal } from "./models/ParametroIdeal";
import { NavegacionSlide } from "./models/NavegacionSlide";

async function seed() {
  await AppDataSource.initialize();
  console.log("📦 Base de datos conectada para seed");

  const grabacionRepo = AppDataSource.getRepository(Grabacion);
  const feedbackRepo = AppDataSource.getRepository(Feedback);
  const slideRepo = AppDataSource.getRepository(Slide);
  const parametroRepo = AppDataSource.getRepository(ParametroIdeal);
  const navegacionRepo = AppDataSource.getRepository(NavegacionSlide);

  // Crear Slides
  const slides = await slideRepo.save([
    { titulo: "Intro", contenido: "Bienvenidos a la exposición" },
    { titulo: "Tema", contenido: "Análisis técnico" },
    { titulo: "Ejemplos", contenido: "Casos reales" },
    { titulo: "Discusión", contenido: "Preguntas abiertas" },
    { titulo: "Cierre", contenido: "Conclusiones" },
  ]);

  // Crear Grabaciones
  const grabaciones = await grabacionRepo.save(
    Array.from({ length: 5 }).map((_, i) =>
      grabacionRepo.create({
        usuarioId: 1,
        presentacionId: 1,
        fecha: new Date(Date.now() - i * 86400000),
      })
    )
  );

  // Crear Feedbacks
  const feedbacks = await feedbackRepo.save(
    grabaciones.map((g, i) =>
      feedbackRepo.create({
        grabacion: g,
        contenido: `Feedback automático generado para grabación ${i + 1}`,
      })
    )
  );

  // Crear Parámetros ideales
  await parametroRepo.save([
    { nombre: "velocidad", valorIdeal: 120 },
    { nombre: "claridad", valorIdeal: 90 },
    { nombre: "muletillas", valorIdeal: 5 },
    { nombre: "entonación", valorIdeal: 80 },
    { nombre: "pausas", valorIdeal: 10 },
  ]);

  // Crear Navegaciones
  await navegacionRepo.save(
    grabaciones.flatMap((g) =>
      slides.map((s) =>
        navegacionRepo.create({
          grabacion: g,
          slide: s,
          tiempoAcceso: new Date(),
        })
      )
    )
  );

  console.log("🌱 Seed ejecutado correctamente");
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Error en seed:", err);
  process.exit(1);
});
