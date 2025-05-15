import { Router, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Grabacion } from "../models/Grabacion";

const router = Router();
const repo = AppDataSource.getRepository(Grabacion);

router.get("/grabaciones", async (_, res) => {
  const data = await repo.find();
  res.json(data);
});

router.get("/grabaciones/:id", async (req, res) => {
  const item = await repo.findOneBy({ id: Number(req.params.id) });
  if (!item) return res.status(404).json({ message: "No encontrado" });
  res.json(item);
});

router.post("/grabaciones", async (req, res) => {
  const nuevo = repo.create(req.body);
  const data = await repo.save(nuevo);
  res.status(201).json(data);
});

router.put("/grabaciones/:id", async (req, res) => {
  const item = await repo.findOneBy({ id: Number(req.params.id) });
  if (!item) return res.status(404).json({ message: "No encontrado" });
  repo.merge(item, req.body);
  const data = await repo.save(item);
  res.json(data);
});

router.delete("/grabaciones/:id", async (req, res) => {
  const result = await repo.delete(req.params.id);
  if (result.affected === 0) return res.status(404).json({ message: "No encontrado" });
  res.json({ message: "Eliminado" });
});

export default router;