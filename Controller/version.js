const version = (req, res) => {
  res.send({
    status: true,
    description: "Rota para visualizar a Versão do Sistema (2.0.0)",
  });
};

module.exports = { version };
