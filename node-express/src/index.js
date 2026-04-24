const express = require('express');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(express.json());
app.use(userRoutes); // Conecta suas rotas

app.listen(3000, () => console.log('Servidor Node rodando em http://localhost:3000'));