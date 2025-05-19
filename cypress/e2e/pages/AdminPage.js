/// <reference types="cypress" />

class AdminPage{
    
    // Elements
    static addButton = 'button:contains("Add")';


    // Methods
    
    static clickAdd(){
        cy.get(this.addButton).click();
        
    }

}

export default AdminPage;