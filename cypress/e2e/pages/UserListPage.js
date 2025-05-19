/// <reference types="cypress" />

class UserListPage {


    // Elements
    static searchFormTable = '.oxd-table-filter';
    static searchForm = '.oxd-form-row';
    static searchButton = 'button[type="submit"]';

    static tableRow = '.oxd-table-card';
    static tableCell = '.oxd-table-cell';
    
    // Column Indexes
    static COLUMNS = {
        CHECKBOX: 0,
        USERNAME: 1,
        USER_ROLE: 2,
        EMPLOYEE_NAME: 3,
        STATUS: 4,
        ACTIONS: 5
    };
    


    // Methods
    static searchUser(username) {

        // Waiting for the search form to appear
        cy.get(this.searchFormTable, { timeout: 10000 }).should('be.visible');

        // To type in username for searching
        cy.get(this.searchForm)
            .contains('label', 'Username')
            .parents('.oxd-input-group')
            .find('input')
            .type(username);

        cy.get(this.searchButton).click();
    }

    
    // For finding/selecting the new user 
    static getUserRow(username) {
        return cy.get(this.tableRow)
            .find(this.tableCell)
            .contains(username)
            .closest(this.tableRow);
    }


    // For Verifying the info
    static verifyUserInfo(username, expectedData) {
        this.getUserRow(username).within(() => {

            // User Name
            cy.get(this.tableCell).eq(this.COLUMNS.USERNAME)
                .should('contain', username);

            // User Role
            cy.get(this.tableCell).eq(this.COLUMNS.USER_ROLE)
                .should('contain', expectedData.role);


            // Employee Name
            cy.get(this.tableCell).eq(this.COLUMNS.EMPLOYEE_NAME)
                .should('contain', expectedData.employeeName);

            // User Status
            cy.get(this.tableCell).eq(this.COLUMNS.STATUS)
                .should('contain', expectedData.status);
        });
    }



}

export default UserListPage;

