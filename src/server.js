const app = require('./app');
require('dotenv').config();

const PORT = 3333;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));