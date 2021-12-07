const firebase = require("firebase");
const config = require("../config/database");
const app = firebase.initializeApp(config);
const db = firebase.firestore(app);

module.exports.registerService = async (body) => {
  const saveDatabase = await db.collection("users").doc().set(body);
  return {
    status: true,
    saveDatabase,
  };
};
