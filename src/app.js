const express = require('express');
const productRoute = require('./routes/productRoutes');
const salesRoute = require('./routes/salesRoutes');

const app = express();

app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productRoute);
app.use('/sales', salesRoute);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;

// Commit Inicial
