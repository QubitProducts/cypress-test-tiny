Cypress.Commands.add(
  'waitForDropdownToOpen',
  { prevSubject: 'element' },
  element => cy
    .wrap(element)
    .parent().parent()
    .get('.foobar')
    .then(() => element)
)
