import { first } from "cypress/types/lodash"

describe('Download link', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/')
        cy.get('div.image-thumb').first().click()
    })
    it('Download from the detail view of the image ', () => {
        cy.contains('Download').click();
        cy.readFile('cypress/downloads/img.jpg')
    })
})