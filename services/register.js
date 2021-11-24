module.exports.registerService = (body) => {
  console.log(body);
  return {
    status: true,
    description: "Os dados foram recebidos com sucesso.",
  };
};
