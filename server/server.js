import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDb from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/clerkWebHooks.js";

connectDb();
const app = express();
app.use(cors()); //Enable cross-origin resource sharing

//Middleware
app.use(express.json());
app.use(clerkMiddleware());

//API to listen clerk webhooks
app.use("/api/clerk", clerkWebhooks);

app.get("/", (req, res) => res.send("Api is working"));
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on the PORT ${PORT}`));
