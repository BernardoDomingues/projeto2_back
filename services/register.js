const bcrypt = require("bcryptjs"); //Criptografia da senha
const { db } = require('../config/firebaseDb');

module.exports.registerService = async (body) => {
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
body.password = bcrypt.hashSync(body.password,salt);
body.passwordConfirmation = bcrypt.hashSync(body.passwordConfirmation,salt);
  const saveDatabase = await db.collection("users").doc().set(body);
  return {
    status: true,
    saveDatabase,
  };
};
