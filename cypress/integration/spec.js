describe('page', () => {
  it('reproducing a bug', () => {
    cy.visit('http://www.google.com')
    cy.get('input[type=text]')
      .type('text').waitForDropdownToOpen().type('{uparrow}{enter}')
      .type('Fake Brand 2').waitForDropdownToOpen().type('{uparrow}{enter}')
      .blur()
  })
})
