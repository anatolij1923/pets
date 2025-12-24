import express from "express";
import * as trpcExpress from "@trpc/server/adapters/express";
import { trpcRouter } from "./trpc.js";

const expressApp = express();
expressApp.get("/ping", (req, res) => {
  res.send("IDI HAXYU");
});

// expressApp.get("/posts", (req, res) => {
//   res.send(posts);
// });

expressApp.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: trpcRouter,
  }),
);

expressApp.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

export type { TrpcRouter } from "./trpc.js";
