const { getMoviesData } = require("../services/getMoviesData");

const moviesData = async (req, res) => {
    const { body } = req
    try {
        const response = await getMoviesData(body.reqType, body.options);
        return res.status(200).json(response);
      } catch (error) {
        return res.status(error.status || 500).json({
          name: error.name,
          errors: [error.mensage ||'Ocorreu um erro Inesperado'],
        });
      }
  };
  
module.exports = { moviesData };
  