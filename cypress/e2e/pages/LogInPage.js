/// <reference types="cypress" />

class LogInPage {

    // Elements
    static username = 'input[name = "username"]' ;
    static password = 'input[name= "password"]';
    static loginButton = 'button[type= "submit"]';

    // Methods
    
    // Navigate
    static visit() {
        cy.visit("https://opensource-demo.orangehrmlive.com/");

    }


    // Login
    static login(username, password) {
        cy.get(this.username).type(username);
        cy.get(this.password).type(password);
        cy.get(this.loginButton).click();
    }

}

export default LogInPage;