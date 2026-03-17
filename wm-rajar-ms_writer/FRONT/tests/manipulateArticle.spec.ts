import { test, expect } from '@playwright/test';
import HomePage from './pages/HomePage.ts';
import CreateArticlePage from './pages/CreateArticlePage.ts';

test.describe('Manipulate article', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:8001/');
  });

  test('Search article', async ({ page }) => {
    const homePage = new HomePage(page);
    const titleArticle = "Les avancées de l'intelligence artificielle en 2025"
    await homePage.fillSearchBar(titleArticle);
    await expect(homePage.getArticleByName(titleArticle)).toBeVisible();
  });
  
  test('Create article', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.openCreateArticleFiled();
    const createArticlePage = new CreateArticlePage(page);
    await createArticlePage.fillCreateArticleFiled("title", "subtitle", "hat", "body" );
    await createArticlePage.validateCreateArticle();
    await expect(createArticlePage.artileCreated).toBeVisible();

  });
});
