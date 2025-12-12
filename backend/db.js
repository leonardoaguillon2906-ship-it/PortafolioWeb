import mysql from "mysql2/promise";

export const db = await mysql.createConnection({
  host: "127.0.0.1",
  port: 3300,          // puerto real
  user: "root",
  password: "M771699dl*",        // si tienes contraseña, colócala aquí
  database: "auth_system"
});

console.log("Conexión correcta a MySQL en puerto 3300");
