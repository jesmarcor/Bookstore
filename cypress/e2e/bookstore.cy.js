describe('Search test cases',function(){
  it('Search with results',function () {

    cy.visit('https://demoqa.com/books');
    cy.get('#searchBox').type('sp').clear().type('gi').clear().type('lea').clear().type('un');
  })
})

