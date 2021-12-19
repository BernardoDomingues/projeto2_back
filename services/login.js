const bcrypt = require("bcryptjs"); //Criptografia da senha
const { db } = require("../config/firebaseDb");

module.exports.loginService = async (body) => {
  let returnValue = {};
  await db
    .collection("users")
    .where("email", "==", body.email)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        const comparePassword = bcrypt.compareSync(
          body.password,
          userData.password
        );
        if (comparePassword) {
          console.log(userData);
          returnValue = {
            status: true,
            userData: {...userData, id: doc.id},
            description: "Os dados foram recebidos com sucesso.",
          };
        } else {
          returnValue = {
            status: false,
            userData: {},
            description: "Dados Incorretos.",
          };
        }
      });
    });
  return returnValue;
};
