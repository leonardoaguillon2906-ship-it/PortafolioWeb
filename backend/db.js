import mysql from "mysql2/promise";

export const db = await mysql.createConnection({
  host: mysql.railway.internal,
  port: 3306,
  user: root,
  password: iiurynpOzbammAmMBZCilREmfaNPVnjt,
  database: railway
});

console.log("Conectado correctamente a MySQL (Railway)");
