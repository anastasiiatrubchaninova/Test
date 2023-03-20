import { first } from "cypress/types/lodash"
describe('Cards', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/')
        cy.get('div.image-thumb').first().click()
    })

    it('Click on the button "Back"', () => {
        cy.contains('Back').click()
        cy.contains('Pictures (30)').should('be.visible')
    })

})