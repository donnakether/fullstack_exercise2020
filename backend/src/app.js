const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');
const app = express();

app.use(cors()); // quando em produção insere ({ origin: 'http://meuapp.com'})
app.use(express.json());
app.use(routes);
app.use(errors());
/**
 * Rota / Recurso
 */

 /**
  * Método HTTP:
  * GET: Buscar/listar uma informação do backend
  * POST: Criar uma informação no backendo
  * PUT: Alterar uma informação no backend
  * DELETE: Deletar uma informação no backend
  */
 /**
  * Tipos de parâmetros:
  * Query Params: parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: parâmetros utilizados para identificar recursos ex: :id
  * Request Body: Corpos da requisição utilizado para criar ou alterar recursos.
  */
 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB
  */
 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */

module.exports = app;
