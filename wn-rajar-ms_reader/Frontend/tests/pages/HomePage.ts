import { test as base, type Page, type Locator } from '@playwright/test';

export default class HomePage {
  public page: Page;
  private articleCard: Locator;
  private categorySelector: Locator;
  public articleNoIaCatCard: Locator;

  constructor(page: Page) {
    this.page = page;
    this.articleCard = this.page.getByRole('link').filter({ hasText: 'Intelligence ArtificielleLes' });
    this.categorySelector = this.page.getByLabel('Articles par catégorie :');
    this.articleNoIaCatCard = this.page.getByRole('link').filter({ hasText: 'TechnologieChangement' });
  }

  async openArticle() {
    await this.articleCard.click();
  }

  async selectIACategory() {
    await this.categorySelector.selectOption('Intelligence Artificielle');
  }

}