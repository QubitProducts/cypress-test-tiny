describe('page', () => {
  it('check that something does not exist', () => {
    cy.visit('http://www.google.com')
    cy.get('.foobar').should('not.exist')
  })
})
