describe('Gallery view', () => {
    const imageWithNoDownload = 13
    beforeEach(() => {
        cy.visit('/')
    })
    
    it('Open start page', () => {
        cy.contains('Pictures (30)').should('be.visible')
        cy.get('div.image-thumb').as('imageThumbnail')
        cy.get('@imageThumbnail').should('have.length', 30)
        cy.get('img').each((image) => {
            cy.wrap(image).should('have.css', 'height', '200px')
            cy.get('@imageThumbnail').find('div.info-container').as('infoContainer').find('span')
                .should('not.be.empty').next().should('contain.text', 'Download')
            cy.get('@infoContainer').eq(imageWithNoDownload).find('span')
                .should('not.be.empty').next().should('contain.text', 'no download')
        })
    })
})