const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const routesUser = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use(cors({
    origin:'*',
}));
app.use((req,res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    next();    
  });


mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Conectado ao MongoDB!'))
  .catch((err) => console.error('Erro MongoDB:', err));

// Rotas
// app.get('/ping', (req, res) => {
//   res.send('Servidor está rodando 🚀');
// });
// app.use((req, res, next) => {
//   console.log("👉 Requisição recebida:", req.method, req.url);
//   next();
// });
app.use('/', routesUser);

app.listen(PORT, () => console.log(`🚀 Rodando na porta ${PORT}`));
