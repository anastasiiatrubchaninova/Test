describe('Detail', () => {
    beforeEach(() => {

        cy.visit('/')
        cy.get('div.image-thumb').as('imageThumbnail')
        cy.get('div.image-thumb').first().click()

    })

    it('Detail view', () => {

        cy.get('@imageThumbnail').should('have.length', 1)
        cy.get('@imageThumbnail').find('div[class="info-container"]').find('span')
            .first().should("have.text", "1) Alejandro Escamilla").next()
            .should('have.text', 'Download')
        cy.contains("Back").should('be.visible')
        cy.get('img').should('have.attr', 'src', 'https://picsum.photos/id/0/5000/3333')
        cy.get('img').should('have.css', 'height', '500px')
    })
})