# Portal Nova Serra Verde - Backend

API backend construída com Express.js para gerenciar usuários, autenticação e dados do Portal Nova Serra Verde.  
Inclui segurança com bcrypt para hash de senhas e comunicação com frontend via Axios.

---

## Tecnologias Utilizadas

- **Express.js** — framework web para Node.js  
- **Bcrypt** — hash seguro de senhas  
- **Axios** — para chamadas HTTP internas (se aplicável)  
- **MySQL** — banco de dados relacional (não no frontend, mas relevante para o backend)

---

## Instalação e Execução Local

### Pré-requisitos

- Node.js (versão 16+ recomendada)  
- MySQL instalado e configurado

### Passos

1. Clone o repositório (ou acesse a pasta do backend):  
   ```bash
   git clone https://github.com/seuusuario/portal-nova-serra-verde.git
   cd portal-nova-serra-verde/backend
2. Instale as dependências:

bash
Copiar
Editar
npm install
3. Configure as variáveis de ambiente criando um arquivo .env na raiz do backend, por exemplo:

env
Copiar
Editar
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=nova_serra_verde_db
JWT_SECRET=sua_chave_secreta
PORT=5000
4. Crie o banco de dados MySQL conforme configurado.

5. Inicie o servidor:

bash
Copiar
Editar
npm start
6. O servidor ficará disponível em http://localhost:5000 (ou porta configurada).

### Funcionalidades Principais
Registro e autenticação de usuários com hash seguro de senha (bcrypt)

Rotas protegidas usando JWT para autenticação

CRUD para gerenciamento das atrações turísticas e dados do portal

Comunicação segura e eficiente com o frontend via endpoints REST

Tratamento de erros e respostas padronizadas

### Estrutura do Projeto
bash
Copiar
Editar
backend/
├── controllers/       # Funções que controlam a lógica das rotas
├── middlewares/       # Middlewares de autenticação, validação, etc.
├── models/            # Modelos para interação com banco (MySQL)
├── routes/            # Definição das rotas da API
├── utils/             # Utilitários (ex: geração de token, hash)
├── config/            # Configurações (ex: conexão com DB)
├── app.js             # Configuração principal do Express
├── server.js          # Inicialização do servidor
├── package.json       # Dependências e scripts
└── .env               # Variáveis de ambiente (não versionar)
### Scripts Úteis
npm start — inicia o servidor (modo produção)

npm run dev — inicia o servidor em modo desenvolvimento (com nodemon, se configurado)

### Como contribuir
Fork este repositório

Crie uma branch para sua feature (git checkout -b feature/nome-da-feature)

Faça commit das alterações (git commit -m 'Descrição da feature')

Envie para o repositório remoto (git push origin feature/nome-da-feature)

Abra um Pull Request para revisão

Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Contato
Email: dri.khedira@gmail.com

GitHub: https://github.com/Gustavo-2l

### Agradecimentos
Obrigado por colaborar com o backend do Portal Nova Serra Verde!