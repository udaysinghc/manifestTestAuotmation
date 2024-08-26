/// <reference types="cypress"/>

import { LoginActionPage } from "../actions/loginActionPage";

describe('Login test suite', () => {
  before(() => {
    cy.fixture(`${Cypress.env('env')}/credentials.json`).then((credentials) => {
      cy.wrap(credentials).as('credentials');
    });
  });

  it('User login test', () => {

    const loginActionPageLoc = new LoginActionPage();
    cy.visit('/');
    cy.title().should('include', 'Manifest Movies')
    cy.get('@credentials').then((credentials) => {
      loginActionPageLoc.login(credentials.username, credentials.password);
    });
    loginActionPageLoc.verifyLogoutCTA();
  })
})