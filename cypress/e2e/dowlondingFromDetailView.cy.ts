describe('Download link', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('div.image-thumb').first().click()
    })
    it('Download from the detail view of the image ', () => {
        cy.contains('Download').click();
        cy.verifyDownload('img.jpg')
    })
})