import { isMobile } from './../../support/utils'

describe('viewpoert iteration', () => {
    // const viewports = ['macbook-16', 'macbook-15', 'macbook-13', 'macbook-11','ipad-2', 'ipad-mini', 'iphone-xr', 'iphone-x', 'iphone-6+', 'iphone-se2', 'iphone-8', 'iphone-7', 'iphone-6', 'iphone-5', 'iphone-4', 'iphone-3', 'samsung-s10', 'samsung-note9'];

    const viewports = ['macbook-16', 'iphone-6+', 'iphone-se2', 'iphone-8'];

    viewports.forEach((viewport) => {
        it('viewport', () => {
            cy.viewport(viewport);
        });
    })
});

describe('viewport hybrid suite', () => {
    it('Main menu test', () => {
        cy.log('Desktop validation');
        if (isMobile()) {
            cy.log('this is a mobile validation')
        }
    });
});