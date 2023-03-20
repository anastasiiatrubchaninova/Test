import { first } from "cypress/types/lodash"
describe('Download link', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/')
    })
    it('Download from start page', () => {
        cy.contains('Download').click();
        cy.readFile('cypress/downloads/img.jpg')
    })
})