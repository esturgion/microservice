import "reflect-metadata";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();

export const app = express(); // ← export pour les tests

// Configuration CORS
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", routes);

app.get("/", (_, res) => {
  res.json({
    message: "Bienvenue sur l'API wm-rajar-ms_writer",
    status: "running",
  });
});

app.get("/health", (_, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.use(errorHandler);