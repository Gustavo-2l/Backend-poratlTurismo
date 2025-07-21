

const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes')





require('dotenv').config();
const express = require('express')


const cors = require('cors');


const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // frontend (Vite + React)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true // se precisar enviar cookies
}));
 
app.use(express.json());
 
app.get('/', (req, res)=> res.send('api funcionando'))

app.post('/api/register', (req, res) => {
  const { nome, email, senha } = req.body;
  console.log('Recebido:', nome, email, senha);
  res.json({ mensagem: 'Usuário cadastrado com sucesso!' });
});
 
app.use('/api/users', userRoutes)

 
sequelize.authenticate()
  .then(() => {
    console.log('servidor online e conectado com o DB')
    return sequelize.sync();
  })
  .then(() =>{
    console.log('banco de dados sincronizado')
    app.listen(PORT, () => console.log("SERVIDOR RODANDO NA PORTA: " + PORT))
  }).catch(erro => console.log("Erro interno do servidor", erro))


  const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});