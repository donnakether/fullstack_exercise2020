# Semanaomnistack

Node backend with React and ReactNative.

First contact with this type of project.

#### Screens ###

Login 
![](/login_page.png)


Register new user
![](/register_user.png)


Entidades representam tudo que vai ser salvo no banco dados

1. ONG (NGO)
2. Casos (Incident)

Funcionalidades para cada entidade

Login de ONG
Logout de ONG
Cadastro de ONG
Cadastrar novos casos
Deletar casos
Listar casos específicos de uma ONG
Listar todos os casos
Entrar em contato com a ONG

## Backend

Para inicializar um projeto node na pasta Backend - Cria o arquivo package.json

**npm init -y**

Instala pacote express micro Framework com módulos básicos para iniciar a aplicação, como rotas e envio de parâmetros. Dentro do package.json cria objeto dependencias: express.  

**npm install express**

Criar arquivo index.js - arquivo base para rodar o backend.
Nele precisamos das seguintes linhas:

const express = require(‘express’); - cria constante de requisição dos módulos do express, importa e deixa as funcionalidades do express disponíveis.

const app = express(); - cria a aplicação propriamente, instancia a aplicação, nela teremos as rotas e todas as outras funcionalidades 

*app.listen(3333); - app “escuta” a porta 3333 localhost:3333*

Para executar a aplicação no terminal:

**node index.js**

Mas antes disso precisa criar a rota:

... 
app.get(‘/‘, (request, response) => {
    return response.send(‘Hello world’);
});

app.get(‘/‘, (request, response) => {
    return response.json({
		evento: ‘Semana OmniStack’;
		aluna: ’Donna Kether’;
    });
});
...
 
O servidor para ver atualização no arquivo precisa ser encerrado e reiniciado: ˆC para finalizar no terminal.


Criar os recursos /users por exemplo geralmente associado a uma entidade do banco de dados.

...
app.get(‘/users‘, (request, response) => {
    return response.json({
		evento: ‘Semana OmniStack’;
		aluna: ’Donna Kether’;
    });
});
...

Métodos HTTP:

GET - Busca informação no back end
POST - 
PUT -
DELETE -

No navegador não conseguimos ver os outros métodos. Para visualizar precisamos do software Insomnia

Parâmetros:

Query:
*http://localhost:3333/users?name=Donna* requisição direto no navegador pela rota users.

Route:
*http://localhost:3333/users/:id*

...
app.get('/users/:id', (request, response) => {
    const params = request.params;

    console.log (params);

    return response.json({
        evento : 'Semana OmniStack',
        aluna: 'Donna Kether'
    });
});
...

Request Body:
Método post pelo insomnia, cria um objeto Json.
É preciso também que o app entenda o objeto Json para isso inserimos antes da rota:

...
app.use(express.json());

app.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        evento : 'Semana OmniStack',
        aluna: 'Donna Kether'
    });
});
...

Para não precisar reiniciar o tempo inteiro o node, usamos a dependência nodemon, instalar na pasta do projeto com o comando:

**npm install nodemon -D**

-D serve para criar uma dependência que irá rodar apenas no ambiente de desenvolvimento.

Ferramenta para trabalhar com os query builder dentro do projeto com node
*Knex.js* - Instalar via NPM 

Organizar o projeto com a pasta SRC na raiz pasta Source para armazenar o código criado. Trocar no package,json o caminho do nodemon.

Separar as rotas do arquivo index criando na pasta SRC o arquivo routes.js, importar o express, criar variável routes pelo express.

Exportar as rotas pelo module.exports = routes;
Importar no index.js require(‘./routes’) o ./ é para diferenciar arquivo de pacote. ../ para outra pasta. ./ para a mesma pasta.
app.use(‘routes’);

No *knexfile.js* trocar o filename, criar a pasta database.

Pelo arquivo Knexfile.js criar migrations em development: *{directory:’caminho para pasta migrations’}*, pasta migrations dentro da pasta database.(aprofundar na documentação do knew.js)

*npx knex migrate:make create_ongs*

Editar o migrate com createTable…

Outros comandos npx knew lista os comandos
*npx knex migrate:rollback desfaz a última*
*npx knex migrate:latest - cria a tabela propriamente*

Cadastro de uma nova Ong através do arquivo *routes.js*

Método POST sempre com request.body;

Organização do projeto seguindo padrão …

Criar pasta controllers para as funcionalidades/entidades de cada rota.

Exportar e importar os controllers tornando a lógica mais abstrata.

Validação de informação pelo backend. Entrada dos dados formatados corretamente, o que pode o que não pode, segurança. 

Colocar no arquivo Routes, nas rotas de criação e validação.
Primeiro a validação depois a entrada, as coisa acontecem em sequência.

Biblioteca nova Celebrate usa por baixo dos panos a biblioteca Foi. O que o Celebrate integra o Joi com o Express, nosso framework no Node.


## Frontend

Na pasta do projeto como geral criar a pasta frontend com o comando:

**npx create-react-app frontend**

O npx executa um pacote externo sem precisa instalar de forma global.

Entrar na pasta frontend e executar o comando:

**npm start**

Na porta *localhost:3000* vemos o react já rodando.

O arquivo app.js modifica a primeira página do react no browser.

Front end - React
Limpeza dos arquivos desnecessários 

Componente em React são Funções que retornam Html.

Quando o HTML está integrado no javascript = JSX (javascript/XML)

Propriedades são como os atributos do HTML, mas não atributos passados para os componentes. Passadas como parâmetros (props) na função do componente.({children}) - {children}
Usar variável no html sempre com {}

Estados (variáveis no React) - para que as alterações de variável sejam refletidas no frontend precisa importar { useState }   //Retorna Array [value, functionAtualizar]
Toda vez que o componente precisar armazenar uma informação dentro dele usamos um estado para conseguir atualizar a informação e ela reflete as alterações na interface.

Imutabilidade - Não podemos alterar valor de variável diretamente, por isso usamos estados.

Cliente HTTP npm install axios, chamada para o api do backend e obter respostas.

*"emmet.syntaxProfiles": { "javascript": "jsx" },*
*"emmet.includeLanguages": { "javascript": "javascriptreact" }*

## Mobile ##

Mobile com ReactNative - **Expo npm install -g expo**

ReactNative não usa tags html. Usamos <view> para containers e <text> para todos os textos, títulos ou parágrafos.

Não há classes ou ids style={styles.container} 

Todos os componentes já tem display: flex; por padrão.

Estilo Camel case para substituir hifens no css exemplo background-color = backgroundColor.

Não existe herança de estilo. Estilo próprio por elemento. 

### Test ###

TDD ( Test-driven Development) - Criar os testes antes das funcionalidades
Um mapa das características das funcionalidades, regras de negócio, ex: marcar horários, marcar como o usuário quer, não agendar no mesmo horário.
Aprofundar.

Configurar Jest - framework de teste para Node e React etc




