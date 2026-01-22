import type { Express } from "express";
import type { Server } from "http";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/subscribers", async (req, res) => {
    // Mock success without database
    res.status(201).json({ message: "Subscription successful (mocked)" });
  });

  return httpServer;
}
