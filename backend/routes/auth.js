import express from "express";
import bcrypt from "bcryptjs";
import { db } from "../db.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const [rows] = await db.execute(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  if (rows.length === 0) {
    return res.status(401).json({ error: "Credenciales incorrectas" });
  }

  const user = rows[0];

  const valid = await bcrypt.compare(password, user.password_hash);
  if (!valid) {
    return res.status(401).json({ error: "Credenciales incorrectas" });
  }

  res.json({
    message: "Autenticado correctamente",
    userId: user.id,
    name: user.name
  });
});

export default router;
