const { users } = require("../users");

module.exports.registerService = (body) => {
  users.push(body);
  return {
    status: true,
    description: "Os dados foram recebidos com sucesso.",
  };
};
