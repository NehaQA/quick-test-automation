class BasePage {
  constructor(page) {
    this.page = page;
  }

  async waitForElement(locatorOrSelector, timeout = 5000) {
    const locator =
      typeof locatorOrSelector === 'string'  // page.locator('selector') → returns a Locator (has .waitFor(), .click(), .fill(), etc.)
        ? this.page.locator(locatorOrSelector) //'selector' (plain string) → does NOT have .waitFor(). 
        : locatorOrSelector;                    //flexible version that works whether you pass a Locator or a string selector:

    await locator.waitFor({ state: 'visible', timeout });
  }

  async fillInput(locatorOrSelector, value) {
    const locator =
      typeof locatorOrSelector === 'string'
        ? this.page.locator(locatorOrSelector)
        : locatorOrSelector;

    await this.waitForElement(locator);
    await locator.fill(value);
  }

  async clickElement(locatorOrSelector) {
    const locator =
      typeof locatorOrSelector === 'string'
        ? this.page.locator(locatorOrSelector)
        : locatorOrSelector;

    await this.waitForElement(locator);
    await locator.click();
  }
}

module.exports = BasePage;
