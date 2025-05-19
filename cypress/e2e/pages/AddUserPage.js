/// <reference types="cypress" />



class AddUserPage {

    // Elements
    static addUserForm = '.oxd-form'; 
    static userRoleDropdown = '.oxd-select-text'; //first
    static AdminRoleOption = '.oxd-select-option'; // .eq(1)
    static statusDropdown = '.oxd-select-text'; // .eq(1)
    static enableStatusOption = '.oxd-select-option'; // eq(1)
    static employeeNameInput = 'input[placeholder="Type for hints..."]';
    static suggestionDropdown = '.oxd-autocomplete-dropdown';
    static nameSuggestions = '.oxd-autocomplete-option'; //first()
    static userNameInput = '.oxd-input.oxd-input--active'; // .eq(1)
    static passwordInput = 'input[type= "password"]'; //.first()
    static confirmPassInput = 'input[type = "password"]'; // .eq(1)
    static saveButton = 'button[type = "submit"]';


    // Methods

    static fillUserInfo(user) {

        // Waiting for Form to be visible
        cy.get(this.addUserForm).should("be.visible");

        // User Role
        cy.get(this.userRoleDropdown).first().click();
        cy.get(this.AdminRoleOption).eq(1).should('contain', user.role).click();
 
        // User employee Name
        cy.get(this.employeeNameInput).type('a');   // Typing a letter for suggestion dropdown to appear
        cy.wait(2000);                              // as the orangehrm doesn't take customised employee name
        cy.get(this.suggestionDropdown).should('be.visible');


            // To get the first name on the suggestion dropdown
        cy.get(this.nameSuggestions)
            .first()
            .invoke('text')
            .then((employeeName) => {
                const trimmedName = employeeName.trim();
                cy.log(`Captured employee: ${trimmedName}`);

                // to update fixtures file's employeeName
                cy.fixture('test-users').then((fixture) => {
                    fixture.newUser.employeeName = trimmedName;
                    cy.writeFile('cypress/fixtures/test-users.json', JSON.stringify(fixture, null, 2));
                });  
            });
        cy.get(this.nameSuggestions).first().click();   
        
        
        // User Status
        cy.get(this.statusDropdown).eq(1).click();
        cy.get(this.enableStatusOption).eq(1).should('contain', user.status).click();

        // UserName
        cy.get(this.userNameInput).eq(1).type(user.username);

        // Password
        cy.get(this.passwordInput).first().type(user.password);

        // Confirm Password
        cy.get(this.confirmPassInput).eq(1).type(user.password);

    }


    static saveUser() {

        cy.get(this.saveButton).click();


    }




}

export default AddUserPage;