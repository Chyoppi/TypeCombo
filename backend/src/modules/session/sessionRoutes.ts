import express from "express";
import { sessionControllers } from "./sessionController";

export const sessionRouter = express.Router();

// Route for posting a session score
sessionRouter.post("/score", sessionControllers.sessionScore);
