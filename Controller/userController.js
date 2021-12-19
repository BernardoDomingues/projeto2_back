const { registerService } = require("../services/register");

const updateUser = (req, res) => {
  const { body } = req;
  try {
    const response = registerService(body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(error.status || 500).json({
      name: error.name,
      errors: [error.mensage || "Ocorreu um erro Inesperado"],
    });
  }
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const response = registerService(body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(error.status || 500).json({
      name: error.name,
      errors: [error.mensage || "Ocorreu um erro Inesperado"],
    });
  }
};

module.exports = { updateUser, deleteUser };
