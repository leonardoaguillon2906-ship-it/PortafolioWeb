import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", authRoutes);

app.listen(3000, () => {
  console.log("Servidor iniciado en http://localhost:3000");
});
