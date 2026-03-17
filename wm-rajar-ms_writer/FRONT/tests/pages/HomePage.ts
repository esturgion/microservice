import { type Page, type Locator } from '@playwright/test';

export default class HomePage {
  public page: Page;
  private searchBar: Locator;
  private searchEnter: Locator;
  private createArticlebtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBar = this.page.getByRole('searchbox', { name: 'Rechercher un article' });
    this.searchEnter = this.page.getByRole('button', { name: 'Rechercher' });
    this.createArticlebtn = this.page.getByRole('link', { name: 'Nouvel article' });
  }

  async fillSearchBar(word : string) {
    await this.searchBar.fill(word);
    await this.searchEnter.click();
  }

  getArticleByName(name: string) {
    return this.page.getByRole('heading', { name });
  }

  async openCreateArticleFiled() {
    await this.createArticlebtn.click();
  }
}