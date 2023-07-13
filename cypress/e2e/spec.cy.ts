describe('Cocktail Genius e2e tests', () => {
  it('Renders properly the home page with title and button', () => {
    cy.visit('/')
    cy.get('.brand').should('exist').and('contain', 'Cocktail Genius')
    cy.get('.magic-button').should('exist')
  })
  it('Renders 3 cocktails on load', () => {
    cy.visit('/')
    cy.get('.cocktail-card').should('have.lengthOf', 3)
  })
  it('Refetch 3 new cocktails on magic-button click', () => {
    cy.visit('/')
    const initialTitles: string[] = []
    cy.get('.cocktail-card .card-title').each(($title) => {
      initialTitles.push($title.text())
    })
    cy.get('.magic-button').click()
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1500)
    cy.get('.cocktail-card .card-title').each(($title, $i) => {
      expect($title.text()).to.not.equal(initialTitles[$i])
    })
  })
})
