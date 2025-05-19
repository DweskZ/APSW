import express from "express";
import { AppDataSource } from "../data-source";
import { Grabacion } from "../models/Grabacion";

const router = express.Router();
const repo = AppDataSource.getRepository(Grabacion);

// Obtener todas las grabaciones con sus relaciones
router.get("/grabaciones", async function (req: express.Request, res: express.Response) {
  const data = await repo.find({ relations: ["feedbacks", "navegaciones"] });
  res.json(data);
});

// Obtener una grabación por ID
router.get("/grabaciones/:id", async function (req: express.Request, res: express.Response) {
  const id = Number(req.params.id);
  const item = await repo.findOne({
    where: { id },
    relations: ["feedbacks", "navegaciones"]
  });
  if (!item) return res.status(404).json({ message: "No encontrado" });
  res.json(item);
});

// Crear una nueva grabación
router.post("/grabaciones", async function (req: express.Request, res: express.Response) {
  const nuevo = repo.create(req.body);
  const data = await repo.save(nuevo);
  res.status(201).json(data);
});

// Actualizar una grabación existente
router.put("/grabaciones/:id", async function (req: express.Request, res: express.Response) {
  const id = Number(req.params.id);
  const item = await repo.findOneBy({ id });
  if (!item) return res.status(404).json({ message: "No encontrado" });
  repo.merge(item, req.body);
  const data = await repo.save(item);
  res.json(data);
});

// Eliminar una grabación
router.delete("/grabaciones/:id", async function (req: express.Request, res: express.Response) {
  const id = Number(req.params.id);
  const result = await repo.delete(id);
  if (result.affected === 0) return res.status(404).json({ message: "No encontrado" });
  res.json({ message: "Eliminado" });
});

export default router;
