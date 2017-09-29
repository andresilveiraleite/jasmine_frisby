// Instanciar a bibliteca do Frisby (Necessário no NODE.JS)
var frisby = require('frisby');

frisby.create('Acessando API do GMAIL')
.get('https://developers.google.com/gmail/api/?hl=en')
// .auth('')  //Caso seja necessário alguma autenticação, deveremos incluir aqui.
.expectHeaderContains('content-type', 'text/html; charset=utf-8') //Header - Validando se o retorno do serviço está no formato JSON
.expectStatus(200) // Validando retorno de sucesso da chamada a API.
.toss()