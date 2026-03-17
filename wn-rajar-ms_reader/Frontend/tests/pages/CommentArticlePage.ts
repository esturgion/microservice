import { test as base, type Page, type Locator } from '@playwright/test';

export default class CommentArticlePage {
  public page: Page;
  private commentInput: Locator;
  private publishBtn: Locator;
  public commentMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.commentInput = this.page.getByRole('textbox', { name: 'Écrire un commentaire...' });
    this.publishBtn = this.page.getByRole('button', { name: 'Publier' });
    this.commentMessage = this.page.getByText('Ceci est un commentaire');
  }

  async writeComment(comment: string) {
    await this.commentInput.fill(comment);
    await this.publishBtn.click();
  }

}