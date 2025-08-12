import express from "express";
import { playerControllers } from "./playerController";

export const playerRouter = express.Router();

// Route for creating a new player
playerRouter.post("/register", playerControllers.createPlayer);

// Route for logging in a player
playerRouter.post("/login", playerControllers.loginPlayer);
