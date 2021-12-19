const {loginService} = require("../services/login");

const login = async (req, res) => {
    const { body } = req
    try {
        const response = await loginService(body);
        return res.status(200).json(response);
      } catch (error) {
        return res.status(error.status || 500).json({
          name: error.name,
          errors: [error.mensage ||'Ocorreu um erro Inesperado'],
        });
      }
  };
  
module.exports = { login };
  