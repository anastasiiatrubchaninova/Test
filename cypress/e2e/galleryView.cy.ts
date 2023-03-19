import { first } from "cypress/types/lodash"

describe('Gallery view', () => {
    beforeEach(() => {

        cy.visit('http://localhost:4200/')
    })

    it('Open start page', () => {
        cy.contains('Pictures (30)').should('be.visible')
        cy.get('div.image-thumb').should('have.length', 30)

        cy.get('img').each((image) => {
            cy.wrap(image).should('have.css', 'height', '200px')
            cy.get('div.image-thumb').find('div[class="info-container"]').find('span')
                .should('not.be.empty').next().should('contain.text', 'ownload')

        })

    })

    it('Click on the image card', () => {

        cy.get('div.image-thumb').first().click()
        cy.get('div.image-thumb').should('exist')
        cy.get('div.image-thumb').eq(1).should('not.exist')
        cy.get('div.image-thumb').find('div[class="info-container"]').find('span')
            .should('not.be.empty').next().should('contain.text', 'ownload')
        cy.contains("Back").should('be.visible')


    })


})