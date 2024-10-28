import { userData } from "../configure/userConfigure.cy";

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://nidhi.softbd.xyz/');
    cy.get('.css-13420go > [href="/signin"] > .MuiTypography-root').click();
    cy.get('input[name="phone"]').type(userData.phone);
    cy.get('input[name="password"]').type(userData.password);
    cy.get('button[type="submit"]').click();

    cy.get('img[src="/assets/images/dashboard/card-icon/property-logo.svg"]').click();
    cy.get('button').contains('Add property').click();

    cy.contains('p', 'Residential').click();

    //for shop
    const optionToSelect = 'Shop'; // Change this to 'House' dynamically as needed
    cy.get('#mui-component-select-property_type_id').click();
    cy.contains(optionToSelect).click();

    //Select location
  })
})