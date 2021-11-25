const { users } = require("../users");

module.exports.loginService = (body) => {
  let loginStatus = false;
  for (const user of users) {
    if (user.email === body.email && user.password === body.password) {
      loginStatus = true;
    }
  }
  return {
    status: loginStatus,
    description: "Os dados foram recebidos com sucesso.",
  };
};
