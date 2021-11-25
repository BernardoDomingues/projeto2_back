const express = require("express");

// Importa Controllers
const { version } = require("./Controller/version");
const { register } = require("./Controller/register");
const PORT = 5000; // Porta

// Configurações do app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.get("/version", version);
app.post("/register", register);

// Declaração do App
app.listen(PORT, () => {
  console.info(`Servidor rodando na porta ${PORT}`);
});
