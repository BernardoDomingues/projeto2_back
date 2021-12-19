const express = require("express");

// Importa Controllers
const { version } = require("./Controller/version");
const { register } = require("./Controller/register");
const { login } = require("./Controller/login");
const { moviesData } = require("./Controller/moviesData");
const { updateUser, deleteUser } = require("./Controller/users");
const cors = require("./config/cors");
const PORT = 5000; // Porta

// Configurações do app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors);

// Rotas
app.get("/", version);
app.post("/register", register);
app.post("/login", login);
app.post("/movies", moviesData);
app.put("/updateUser/:id", updateUser);
app.delete("/deleteUser/:id", deleteUser);

// Declaração do App
app.listen(PORT, () => {
  console.info(`Servidor rodando na porta ${PORT}`);
});
