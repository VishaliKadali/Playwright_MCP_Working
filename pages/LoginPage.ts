import { Page } from '@playwright/test';

/**
 * Page Object Model for the Leaftaps Login Page
 * Handles login functionality for the Leaftaps application
 */
export class LoginPage {
  private page: Page;

  // Locators for login page elements
  private readonly usernameInput = '#username';
  private readonly passwordInput = '#password';
  private readonly loginButton = '.decorativeSubmit';

  /**
   * Constructor for LoginPage
   * @param page - Playwright Page object
   */
  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to the Leaftaps login page
   */
  async navigateToLoginPage(): Promise<void> {
    await this.page.goto('http://leaftaps.com/opentaps/control/main');
  }

  /**
   * Fill the username field
   * @param username - The username to enter
   */
  async enterUsername(username: string): Promise<void> {
    await this.page.locator(this.usernameInput).fill(username);
  }

  /**
   * Fill the password field
   * @param password - The password to enter
   */
  async enterPassword(password: string): Promise<void> {
    await this.page.locator(this.passwordInput).fill(password);
  }

  /**
   * Click the login button
   */
  async clickLoginButton(): Promise<void> {
    await this.page.locator(this.loginButton).click();
  }

  /**
   * Perform complete login process
   * @param username - The username for login
   * @param password - The password for login
   */
  async login(username: string, password: string): Promise<void> {
    await this.navigateToLoginPage();
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }
}