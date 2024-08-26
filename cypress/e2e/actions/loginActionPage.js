import LoginPage from "../pages/loginPage";

const loginPageLoc = new LoginPage();

export class LoginActionPage {

    login(username, password) {

        loginPageLoc.signInCTA().click();
        loginPageLoc.username().type(username);
        loginPageLoc.password().type(password);
        loginPageLoc.submitCTA().click();
    }

    verifyLogoutCTA() {
        loginPageLoc.logoutCTA().should('be.visible');
    }


}