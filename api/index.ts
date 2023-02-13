import express from "express";
import cors from "cors";
import { routerProduct } from "./routes/produts-routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use(routerProduct);

export { app };
