import { test, expect } from '@playwright/test';
import HomePage from './pages/HomePage.ts';
import CommentArticlePage from './pages/CommentArticlePage.ts';

test.describe('Consult and comment article', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:8000/');
  });

  test('Left a comment on an article', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.openArticle();
    const commentArticlePage = new CommentArticlePage(page);
    const comment = "Ceci est un commentaire";
    await commentArticlePage.writeComment(comment);
    await expect(commentArticlePage.commentMessage).toBeVisible();
  });
  
  test('Filter by category', async ({ page }) => {
    const homePage = new HomePage(page);
    await expect(homePage.articleNoIaCatCard).toBeVisible();
    await homePage.selectIACategory();
    await expect(homePage.articleNoIaCatCard).not.toBeVisible();
  });
});
