/// <reference types="cypress" />

class DashboardPage{
    
    // Elements
    static adminMenu = '.oxd-main-menu-item:contains("Admin")';
  
    // Methods
    
    static clickAdmin(){
        cy.get(this.adminMenu).click();
    }


}

export default DashboardPage;