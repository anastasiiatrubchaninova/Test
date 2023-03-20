import { first } from "cypress/types/lodash"

describe('Gallery view', () => {
    beforeEach(() => {

        cy.visit('http://localhost:4200/')
    })

    it('Open start page', () => {
        cy.contains('Pictures (30)').should('be.visible')
        cy.get('div.image-thumb').as('imageThumbnail')
        cy.get('@imageThumbnail').should('have.length', 30)

        cy.get('img').each((image) => {
            cy.wrap(image).should('have.css', 'height', '200px')
            cy.get('@imageThumbnail').find('div[class="info-container"]').find('span')
                .should('not.be.empty').next().should('contain.text', 'ownload')

        })

    })

    it('Click on the image card', () => {


        cy.get('div.image-thumb').as('imageThumbnail')
        cy.get('@imageThumbnail').first().click()
        cy.get('@imageThumbnail').find('div[class="info-container"]').find('span')
            .first().should("have.text", "1) Alejandro Escamilla").next()
            .should('have.text', 'Download')
        cy.get('@imageThumbnail').should('have.length', 1)
        cy.contains("Back").should('be.visible')



    })


})