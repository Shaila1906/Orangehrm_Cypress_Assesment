# Test Automation Assessment - OrangeHRM User Management

## **Project Overview**

This project automates the user creation and validation workflow in **OrangeHRM** using **Cypress**. The test script:

1. Logs in as an Admin.

2. Navigates to the Admin section.

3. Adds a new user with required details.

4. Searches for the newly created user.

5. Verifies the user details in the system.

---

## **Technologies Used**

- **Cypress (v12+)** - JavaScript-based E2E testing framework.
- **JavaScript** - Test scripting.
- [OrangeHRM Demo](opensource-demo.orangehrmlive.com) - Test environment.

---

## **Setup and Installation**

Follow these steps to set up and run the test:

### **Pre-requisites**

- **Node.js**
- **NPM** (Node Package Manager)
- **Cypress**
- **Git**

### **Clone the Repository**

```bash
git clone https://github.com/Shaila1906/Orangehrm_Cypress_Assesment
cd /path/to/your/directory


```

## **Install Cypress and Dependencies**

To get started with Cypress, you'll need to install the required Node.js packages.

1. Install the required packages:

```bash
npm install

```
2. Create Node.js project:

```bash
npm init -y

```
3. Install Cypress:

```bash
npm install Cypress

```

## **How to Run the Tests**

To execute the test:

```bash
    npx Cypress open

```
As the Cypress window opens, select E2E testing. Then select your preferable browser. Browser will open showing the test file. Selecting the test file will run the test.


### **View Test Results**

Test results will be shown on the left panel of the browser.


---

## **Project Structure**

The project follows the Page Object Model (POM) structure for maintainable and scalable test code:

```bash

cypress/
├── e2e/
│ ├── pages/               # Page Object Model (POM) classes
│ │ ├── AddUserPage.js     # User creation actions
│ │ ├── AdminPage.js       # Admin section interactions
│ │ ├── DashboardPage.js   # Dashboard actions
│ │ ├── LoginPage.js       # Login page methods
│ │ └── UserListPage.js    # User search and verify
│ │
│ └── tests/                        # Test specs
│   └── test.add-verify-user.cy.js  # Test: Add + verify user
│
├── fixtures/                       # Test data
│ └── test-users.json               # User data (e.g., roles, credentials)
│
├── support/                        # Reusable utilities
│ ├── commands.js                   # Custom Cypress commands
│
├── .gitignore                      # Ignored files/folders
├── cypress.config.js               # Cypress configuration
├── package.json                    # Project metadata
└── package-lock.json               # Dependency locks

```

---

## **Best Practices Followed**

- **Page Object Model (POM):** Maintains a clean separation between test logic and  web element locators.
- **Assertions:** Validates expected vs actual outcomes for all UI interactions.
- **Reusability:** Centralized and reusable methods for interacting with web elements.
- **Handling Sensitive Data:**
   Normally, sensitive data like email and password etc. should be stored securely in a .env file and accessed using environment variables to ensure privacy and security. However, for the purposes of this assignment, these values were hardcoded directly into the scripts to simplify execution. This approach is not recommended for production environments

---



## **Contact**

For any questions, issues, or feedback, feel free to reach out.