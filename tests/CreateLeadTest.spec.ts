import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { LeadsHomePage } from '../pages/LeadsHomePage';
import { CreateLeadPage } from '../pages/CreateLeadPage';

/**
 * Test suite for creating a lead in Leaftaps application
 * Uses Page Object Model for better maintainability and reusability
 */
test.describe('Leaftaps Lead Creation Tests', () => {
  // Test data
  const username = 'democsr';
  const password = 'crmsfa';

  test('Create a new lead using Page Object Model', async ({ page }) => {
    // Initialize page objects
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const leadsHomePage = new LeadsHomePage(page);
    const createLeadPage = new CreateLeadPage(page);

    // Generate test data using faker
    const leadData = {
      companyName: faker.company.name(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.number()
    };

    console.log('Test Data Generated:');
    console.log(`Company: ${leadData.companyName}`);
    console.log(`Name: ${leadData.firstName} ${leadData.lastName}`);
    console.log(`Email: ${leadData.email}`);
    console.log(`Phone: ${leadData.phone}`);

    // Step 1: Login to the application
    console.log('Step 1: Logging into Leaftaps application');
    await loginPage.login(username, password);

    // Step 2: Navigate to CRM/SFA
    console.log('Step 2: Navigating to CRM/SFA');
    await homePage.clickCrmSfaLink();

    // Step 3: Navigate to Create Lead page
    console.log('Step 3: Navigating to Create Lead page');
    await leadsHomePage.navigateToCreateLead();

    // Step 4: Fill out the create lead form
    console.log('Step 4: Filling out the create lead form');
    await createLeadPage.fillCreateLeadForm(leadData);

    // Step 5: Verify lead creation
    console.log('Step 5: Verifying lead creation');
    await createLeadPage.verifyLeadCreated(leadData.firstName, leadData.lastName);

    console.log('Lead creation test completed successfully');
  });
});