import express from "express";
import controller from "../controllers/airParticulate.controller";
import validateResource from "../middleware/validateResource";
import { airParticulateSchema } from "../schema/airParticulate.schema";

const router = express.Router();

router.post("/air-particulate", validateResource(airParticulateSchema), controller.createAirParticulateData);
router.get("/air-particulate", controller.getAllAirParticulate);
router.get("/air-particulate/latest", controller.getLatestAirParticulate);

export = router;
