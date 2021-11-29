const { users } = require("../users");

module.exports.loginService = (body) => {
  let loginStatus = false;
  let userData = {}
  for (const user of users) {
    if (user.email === body.email && user.password === body.password) {
      loginStatus = true;
      userData = user;
    }
  }
  return {
    status: loginStatus,
    userData: userData,
    description: "Os dados foram recebidos com sucesso.",
  };
};
