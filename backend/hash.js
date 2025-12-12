// hash.js
import bcrypt from "bcryptjs";

const password = "654321"; // contraseña que quieres hashear
const saltRounds = 10;

bcrypt.hash(password, saltRounds)
  .then(hash => {
    console.log("Hash generado:", hash);
  })
  .catch(err => {
    console.error("Error generando hash:", err);
  });
