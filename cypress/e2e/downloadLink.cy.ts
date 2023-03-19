import { first } from "cypress/types/lodash"

describe('Download link', () => {
    beforeEach(() => {

        cy.visit('http://localhost:4200/')
        

    })

    it('The image has at least 4 Megapixel (4 x 106 pixel) and the width, respectively height have min 2000px', () => {
        cy.get('div.image-thumb').first().click()

        

    })

    it('Download from the detail view of the image ', () => {
        cy.get('div.image-thumb').first().click()

        
    })
    
    it('Download from start page', () => {
        
        
    })


})