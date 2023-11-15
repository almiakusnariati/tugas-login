import express  from "express";
import conn from "./database.js";
import { addUser } from "./route/register.js";

const app = express();
app.use(express.static("public"));
app.use(express.json());
app.post("/api/daftar",addUser);


app.listen(5000, () => {
    console.log("The server starts on port 5000.");
  });