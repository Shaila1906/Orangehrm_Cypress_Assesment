/// <reference types="cypress" />

import LogInPage from '../pages/LogInPage.js';
import DashboardPage from '../pages/DashboardPage.js';
import AdminPage from '../pages/AdminPage.js';
import AddUserPage from '../pages/AddUserPage.js';
import UserListPage from '../pages/UserListPage.js';

describe('OrangeHRM User Management', () => {

  before(() => {

    // Test data setup
    cy.fixture('test-users').as('userData');

  });

  it('should add a new user and verify details', function(){

    const {admin, newUser} = this.userData;

    // Navigate to the web page
    LogInPage.visit();
    

    // Login as Admin
    LogInPage.login(admin.username, admin.password);


    // Go to Admin tab
    DashboardPage.clickAdmin();

    // Click Add button
    AdminPage.clickAdd();

    // Add new user details
    AddUserPage.fillUserInfo(newUser);
    AddUserPage.saveUser();

    // Search for new user
    UserListPage.searchUser(newUser.username);

    // Verify user details
    UserListPage.verifyUserInfo(newUser.username, newUser);



  })

  



});