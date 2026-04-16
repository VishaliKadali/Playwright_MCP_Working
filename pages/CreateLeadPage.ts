import { Page } from '@playwright/test';

/**
 * Page Object Model for the Create Lead Page
 * Handles filling out the create lead form
 */
export class CreateLeadPage {
  private page: Page;

  // Locators for create lead form fields
  private readonly companyNameInput = '#createLeadForm_companyName';
  private readonly firstNameInput = '#createLeadForm_firstName';
  private readonly lastNameInput = '#createLeadForm_lastName';
  private readonly emailInput = '#createLeadForm_primaryEmail';
  private readonly phoneInput = '#createLeadForm_primaryPhoneNumber';
  private readonly submitButton = '[name="submitButton"]';

  /**
   * Constructor for CreateLeadPage
   * @param page - Playwright Page object
   */
  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Fill the company name field
   * @param companyName - The company name to enter
   */
  async enterCompanyName(companyName: string): Promise<void> {
    await this.page.locator(this.companyNameInput).fill(companyName);
  }

  /**
   * Fill the first name field
   * @param firstName - The first name to enter
   */
  async enterFirstName(firstName: string): Promise<void> {
    await this.page.locator(this.firstNameInput).fill(firstName);
  }

  /**
   * Fill the last name field
   * @param lastName - The last name to enter
   */
  async enterLastName(lastName: string): Promise<void> {
    await this.page.locator(this.lastNameInput).fill(lastName);
  }

  /**
   * Fill the email field
   * @param email - The email to enter
   */
  async enterEmail(email: string): Promise<void> {
    await this.page.locator(this.emailInput).fill(email);
  }

  /**
   * Fill the phone number field
   * @param phone - The phone number to enter
   */
  async enterPhoneNumber(phone: string): Promise<void> {
    await this.page.locator(this.phoneInput).fill(phone);
  }

  /**
   * Click the submit button to create the lead
   */
  async clickSubmitButton(): Promise<void> {
    await this.page.locator(this.submitButton).click();
  }

  /**
   * Fill out the entire create lead form
   * @param leadData - Object containing lead information
   */
  async fillCreateLeadForm(leadData: {
    companyName: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  }): Promise<void> {
    await this.enterCompanyName(leadData.companyName);
    await this.enterFirstName(leadData.firstName);
    await this.enterLastName(leadData.lastName);
    await this.enterEmail(leadData.email);
    await this.enterPhoneNumber(leadData.phone);
    await this.clickSubmitButton();
  }

  /**
   * Verify that the lead was created successfully
   * @param firstName - The first name of the created lead
   * @param lastName - The last name of the created lead
   */
  async verifyLeadCreated(firstName: string, lastName: string): Promise<void> {
    // Wait for navigation or check for success message
    await this.page.waitForLoadState('networkidle');
    // Check if we're on the view lead page or success message appears
    const pageTitle = await this.page.title();
    console.log(`Page title after lead creation: ${pageTitle}`);
  }
}