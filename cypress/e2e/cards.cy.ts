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

    it('Open the detail view of the image', () => {
        cy.get('div.image-thumb').find('div[class="info-container"]').find('span')
            .should('not.be.empty').next().should('contain.text', 'ownload')
    })
    
    it('Verify the content and the height', () => {
        
        cy.get('img').should('have.css', 'height', '500px') 

    })


})