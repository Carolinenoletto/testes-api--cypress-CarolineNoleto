describe('Cenário de filmes', function () {
it('Deve consultar um filme', () => {
    cy.request({
      method: 'GET',
      url: 'https://raromdb-3c39614e42d4.herokuapp.com/api/movies'
    }).then(response => {
      expect(response.status).to.eq(200);
      
    });
  });
});