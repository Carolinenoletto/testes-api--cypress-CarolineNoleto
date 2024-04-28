
describe('Autenticar usuário criado e login', function () {
  let accessToken;
// Verifica o usuário criado e com isso gera o token para conseguir fazer as outras requisições
// Usei emails diferentes para conseguir acessar a base de dados e testar as buscas com Id diferentes
// Uso esse email criado como adm para fazer um update user no usuário que vou criar

 

  it('Autenticar com sucesso', function () {
    cy.request({
      method: 'POST',
      url: 'https://raromdb-3c39614e42d4.herokuapp.com/api/auth/login', 
      body: {
        email: "hermionerogeria3@email.com",
        password: "senha123"
      },
      headers: {
        Authorization: `Bearer ${accessToken}`
        
      }
    }).then(function(response) {
      expect(response.status).to.equal(200);
      
    });
  });
});
describe('Criação de  novo usuário', function () {
  let accessToken;
  let userID;

  it('Criação de novo usuário', function () {
    cy.request({
      method: 'POST',
      url: 'https://raromdb-3c39614e42d4.herokuapp.com/api/users',
      body: {
        name: "Hermione Rogeria Silva",
        email: "hermionerogeriasilva12@email.com",
        password: "senha123",
        
      }
    }).then(function(response) {
      expect(response.status).to.equal(201);
      userID = response.body.id;
      //Caso o usuário seja criado com sucesso 
      
  
    }).then(response => {
    if (response.status === 409) {
      failOnStatusCode: false 
     expect(response.body.message).to.eq('Email already in use');
   
    }
  });
});
      
});




