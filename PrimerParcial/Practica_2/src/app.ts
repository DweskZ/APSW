import express from "express";
import { AppDataSource } from "./data-source";
import grabacionRoutes from "./crud/grabacion_crud";
import feedbackRouter from "./crud/feedback_crud";
import slideRoutes from "./crud/slide_crud";
import parametroRoutes from "./crud/parametro_ideal_crud";
import navegacionRoutes from "./crud/navegacion_crud";

async function main() {
  await AppDataSource.initialize();
  console.log("📦 Base de datos conectada");

  const app = express();
  const PORT = 3000;

  app.use(express.json());

  app.use("/api", grabacionRoutes);
  app.use("/api", feedbackRouter);
  app.use("/api", slideRoutes);
  app.use("/api", parametroRoutes);
  app.use("/api", navegacionRoutes);

  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
}

main().catch((err) => {
  console.error("❌ Error en el arranque:", err);
});


