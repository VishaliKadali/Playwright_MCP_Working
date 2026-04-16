import { Page } from '@playwright/test';

/**
 * Page Object Model for the Leads Home Page
 * Handles navigation to create lead functionality
 */
export class LeadsHomePage {
  private page: Page;

  // Locator for Leads menu
  private readonly leadsMenu = `text='Leads'`;
  // Locator for Create Lead link
  private readonly createLeadLink = 'a:has-text("Create Lead")';

  /**
   * Constructor for LeadsHomePage
   * @param page - Playwright Page object
   */
  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Click on Leads menu to expand it
   */
  async clickLeadsMenu(): Promise<void> {
    await this.page.locator(this.leadsMenu).click();
  }

  /**
   * Click on Create Lead link
   */
  async clickCreateLeadLink(): Promise<void> {
    await this.page.locator(this.createLeadLink).click();
  }

  /**
   * Navigate to Create Lead page by clicking Leads menu and then Create Lead
   */
  async navigateToCreateLead(): Promise<void> {
    await this.clickLeadsMenu();
    await this.clickCreateLeadLink();
  }
}