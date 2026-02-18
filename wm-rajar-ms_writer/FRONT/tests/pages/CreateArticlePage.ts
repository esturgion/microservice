import { test as base, type Page, type Locator } from '@playwright/test';

export default class CreateArticlePage {
  public page: Page;
  private titleInput: Locator;
  private categorySelect: Locator;
  private subtitleInput: Locator;
  private hatInput: Locator;
  private bodyInput: Locator;
  private createArticle: Locator;
  public artileCreated: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titleInput = this.page.getByRole('textbox', { name: 'Titre *', exact: true })
    this.categorySelect = this.page.getByLabel('Catégorie *');
    this.subtitleInput = this.page.getByRole('textbox', { name: 'Sous-titre *' })
    this.hatInput = this.page.getByRole('textbox', { name: 'Chapeau *' })
    this.bodyInput = this.page.getByRole('textbox', { name: 'Corps de l\'article *' })
    this.createArticle = this.page.getByRole('button', { name: 'Créer l\'article' }); 
    this.artileCreated = this.page.getByRole('heading', { name: 'Article créé' });
  }

  async fillCreateArticleFiled(title: string, subtitle : string, hat:string, body : string){
    await this.titleInput.fill(title);
    await this.categorySelect.selectOption('1');
    await this.subtitleInput.fill(subtitle);
    await this.hatInput.fill(hat);
    await this.bodyInput.fill(body);
  }

  async validateCreateArticle() {
    await this.createArticle.click();
  }

}