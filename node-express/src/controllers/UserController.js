const UserModel = require('../models/UserModel');

const createUser = (req, res) => {
    // Simulando a criação de um usuário
    const newUser = new UserModel(1, "Fulano", "fulano@email.com");
    console.log("Usuário criado com sucesso!");
};

module.exports = { createUser };