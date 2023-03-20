import { first } from "cypress/types/lodash"

describe('Cards', () => {
    beforeEach(() => {

        cy.visit('http://localhost:4200/')
        cy.get('div.image-thumb').as('imageThumbnail')
        cy.get('div.image-thumb').first().click()

    })

    it('Click on the button "Back"', () => {

        cy.get('@imageThumbnail').should('have.length', 1)

        cy.get('@imageThumbnail').find('div[class="info-container"]').find('span')
            .first().should("have.text", "-1) Alejandro Escamilla").next()
            .should('have.text', 'Download')
        
        cy.contains("Back").should('be.visible')



        cy.get('img').should('have.css', 'height', '500px')
    })






})