describe('Download link', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Download from start page', () => {
        cy.contains('Download').click();
        cy.verifyDownload('img.jpg')
    })
})