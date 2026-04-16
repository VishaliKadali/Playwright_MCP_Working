import { Page } from '@playwright/test';

/**
 * Page Object Model for the Leaftaps Home Page
 * Handles navigation after login to CRM/SFA
 */
export class HomePage {
  private page: Page;

  // Locator for CRM/SFA link
  private readonly crmSfaLink = `text='CRM/SFA'`;

  /**
   * Constructor for HomePage
   * @param page - Playwright Page object
   */
  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Click on CRM/SFA link to navigate to CRM application
   */
  async clickCrmSfaLink(): Promise<void> {
    await this.page.locator(this.crmSfaLink).click();
  }

  /**
   * Get the title of the current page
   * @returns The page title
   */
  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  /**
   * Verify that we are on the home page by checking for CRM/SFA link
   */
  async verifyOnHomePage(): Promise<void> {
    await this.page.locator(this.crmSfaLink).waitFor({ state: 'visible' });
  }
}