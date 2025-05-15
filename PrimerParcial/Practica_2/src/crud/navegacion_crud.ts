import { Router, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { NavegacionSlide } from "../models/NavegacionSlide";

const router = Router();
const repo = AppDataSource.getRepository(NavegacionSlide);

router.get("/navegaciones", async (_: Request, res: Response) => {
  const data = await repo.find({ relations: ["grabacion", "slide"] });
  res.json(data);
});

router.get("/navegaciones/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) return res.status(400).json({ message: "ID inválido" });

  const item = await repo.findOne({
    where: { id },
    relations: ["grabacion", "slide"]
  });
  if (!item) return res.status(404).json({ message: "No encontrado" });

  res.json(item);
});

router.post("/navegaciones", async (req: Request, res: Response) => {
  const nuevo = repo.create(req.body);
  const data = await repo.save(nuevo);
  res.status(201).json(data);
});

router.put("/navegaciones/:id", async (req: Request, res: Response) => {
  const item = await repo.findOneBy({ id: Number(req.params.id) });
  if (!item) return res.status(404).json({ message: "No encontrado" });
  repo.merge(item, req.body);
  const data = await repo.save(item);
  res.json(data);
});

router.delete("/navegaciones/:id", async (req: Request, res: Response) => {
  const result = await repo.delete(req.params.id);
  if (result.affected === 0) return res.status(404).json({ message: "No encontrado" });
  res.json({ message: "Eliminado" });
});

export default router;
