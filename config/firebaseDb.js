const firebase = require("firebase");
const config = require("../config/database");
const app = firebase.initializeApp(config);
const db = firebase.firestore(app);

module.exports = { db };