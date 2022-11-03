describe('API methods', () => {
    it('GET', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1');
    });
    it('POST', () => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
            title: 'title #101',
            body: 'bar #101',
            userId: 1,
        }).then(response => {
            cy.log("response", response);
        })
    });
});