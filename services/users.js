const { db } = require("../config/firebaseDb");

const update = async (id, data) => {
  const user = await db.collection("users").doc(id);
  await user.update(data);
  const getAttData = await db.collection("users").doc(id).get();
  const attData = await getAttData.data();
  return { ...attData, id: id };
};

const del = (id) => db.collection("users").doc(id).delete()(id);

module.exports = { update, del };
