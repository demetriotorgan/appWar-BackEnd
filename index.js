const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>console.log('Connectando ao MongoDB!'))
    .catch((err)=>console.log(err));

app.listen(PORT, ()=>console.log(`Rodando na porta ${PORT}`));