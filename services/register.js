const firebase = require("firebase");
const config = require("../config/database");
const app = firebase.initializeApp(config);
const db = firebase.firestore(app);
const bcrypt = require("bcryptjs"); //Criptografia da senha

module.exports.registerService = async (body) => {
const saltRounds = 10;
const salt = await bcrypt.genSaltSync(saltRounds);
body.password = bcrypt.hashSync(body.password,salt);
body.passwordConfirmation = bcrypt.hashSync(body.passwordConfirmation,salt);
  const saveDatabase = await db.collection("users").doc().set(body);
  return {
    status: true,
    saveDatabase,
  };
};
