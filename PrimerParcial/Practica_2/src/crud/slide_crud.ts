import { Router, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Slide } from "../models/Slide";

const router = Router();
const repo = AppDataSource.getRepository(Slide);

router.get("/slides", async (_: Request, res: Response) => {
  const data = await repo.find({ relations: ["navegaciones"] });
  res.json(data);
});

router.get("/slides/:id", async (req: Request, res: Response) => {
  const item = await repo.findOne({
    where: { id: Number(req.params.id) },
    relations: ["navegaciones"]
  });
  if (!item) return res.status(404).json({ message: "No encontrado" });
  res.json(item);
});

router.post("/slides", async (req: Request, res: Response) => {
  const nuevo = repo.create(req.body);
  const data = await repo.save(nuevo);
  res.status(201).json(data);
});

router.put("/slides/:id", async (req: Request, res: Response) => {
  const item = await repo.findOneBy({ id: Number(req.params.id) });
  if (!item) return res.status(404).json({ message: "No encontrado" });
  repo.merge(item, req.body);
  const data = await repo.save(item);
  res.json(data);
});

router.delete("/slides/:id", async (req: Request, res: Response) => {
  const result = await repo.delete(req.params.id);
  if (result.affected === 0) return res.status(404).json({ message: "No encontrado" });
  res.json({ message: "Eliminado" });
});

export default router;
