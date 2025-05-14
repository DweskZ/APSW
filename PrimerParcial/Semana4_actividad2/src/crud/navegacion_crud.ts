// src/endpoints/navegacionSlide.ts
import { Router } from "express";
import { AppDataSource } from "../data-source";
import { NavegacionSlide } from "../models/NavegacionSlide";

const router = Router();
const repo = AppDataSource.getRepository(NavegacionSlide);

router.get("/navegaciones", async (_, res) => {
  const data = await repo.find();
  res.json(data);
});

router.get("/navegaciones/:id", async (req, res) => {
  const item = await repo.findOneBy({ id: Number(req.params.id) });
  if (!item) return res.status(404).json({ message: "No encontrado" });
  res.json(item);
});

router.post("/navegaciones", async (req, res) => {
  const nuevo = repo.create(req.body);
  const data = await repo.save(nuevo);
  res.status(201).json(data);
});

router.put("/navegaciones/:id", async (req, res) => {
  const item = await repo.findOneBy({ id: Number(req.params.id) });
  if (!item) return res.status(404).json({ message: "No encontrado" });
  repo.merge(item, req.body);
  const data = await repo.save(item);
  res.json(data);
});

router.delete("/navegaciones/:id", async (req, res) => {
  const result = await repo.delete(req.params.id);
  if (result.affected === 0) return res.status(404).json({ message: "No encontrado" });
  res.json({ message: "Eliminado" });
});

export default router;
