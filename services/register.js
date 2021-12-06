const firebase = require("firebase");
const config = require("../config/database");
firebase.initializeApp(config);
const db = firebase.firestore();

module.exports.registerService = async (body) => {
  const saveDatabase = await db.collection("users").doc().set(body);
  return {
    status: true,
    saveDatabase,
  };
};
