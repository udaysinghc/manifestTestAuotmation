class LoginPage {

    signInCTA() {
        return cy.get('a[href*="my-account/"]').first()
    }

    username() {
        return cy.get('input[id="username"]')
    }

    password() {
        return cy.get('input[id="password"]')
    }

    submitCTA() {
        return cy.get('[type="submit"]')
    }

    logoutCTA() {
        return cy.get('a[href*="customer-logout"]')
    }

    successAlert() {
        return cy.get('.alert')
    }

}
export default LoginPage; 