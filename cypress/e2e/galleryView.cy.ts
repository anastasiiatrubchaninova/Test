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
            // If the image has at least 4 Megapixel (4 x 10^6 pixel) and the width, 
            //respectively height have min 2000px (11-19, 27)then the download link is active. 
            // !! All image has at least 4 Megapixel (4 x 10^6 pixel) 
            cy.get('@imageThumbnail').find('div[class="info-container"]').find('span')
                .should('not.be.empty').next().should('contain.text', 'Download')

            cy.get('@imageThumbnail').find('div[class="info-container"]').eq(13).find('span')
                .should('not.be.empty').next().should('contain.text', 'no download')


        })









    })




})