import express from "express";
import controller from "../controllers/enviroData.controller";
import validateResource from "../middleware/validateResource";
import { enviroDataSchema } from "../schema/enviroData.schema";

const router = express.Router();

router.post("/enviro-data", validateResource(enviroDataSchema), controller.createEnviroData);
router.get("/enviro-data", controller.getAllEnviroData);
router.get("/enviro-data/latest", controller.getLatestEnviroData);

export = router;
