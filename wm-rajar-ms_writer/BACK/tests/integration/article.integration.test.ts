// tests/integration/article.integration.test.ts
import { beforeAll, afterAll, beforeEach, describe, it, expect } from 'vitest';
import request from 'supertest';
import { AppDataSource } from '../../src/config/database.js';
import { app } from '../../src/app.js';
import { Article } from '../../src/models/article.model.js';

describe('Article API Integration', () => {
  beforeAll(async () => {
    // Initialisation de la connexion DB
    await AppDataSource.initialize();
  });

  afterAll(async () => {
    // Fermeture de la connexion DB
    await AppDataSource.destroy();
  });

    beforeEach(async () => {
        const repo = AppDataSource.getRepository(Article);
        const articles = await repo.find();
        await repo.remove(articles);
    });

    it('should create article with valid data', async () => {
        const newArticle = {
            title: 'Test Article',
            subtitle: 'Subtitle Test',
            subhead: 'Subhead Test',
            body: 'Ceci est le corps du test.',
            categoryId: 1,
        };

        const response = await request(app)
            .post('/api/articles')
            .send(newArticle);

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('message', 'Article créé avec succès');
        expect(response.body).toHaveProperty('data');
        expect(response.body.data).toHaveProperty('id');
        expect(response.body.data.title).toBe(newArticle.title);
        expect(response.body.data.subtitle).toBe(newArticle.subtitle);
        expect(response.body.data.subhead).toBe(newArticle.subhead);
        expect(response.body.data.body).toBe(newArticle.body);

        const articleInDb = await AppDataSource.getRepository(Article).findOneBy({
            title: newArticle.title,
        });
        expect(articleInDb).not.toBeNull();
        expect(articleInDb?.body).toBe(newArticle.body);
    });

    it('should return 400 if required fields are missing', async () => {
        const incompleteArticle = {
            title: 'Test Article',
            subtitle: 'Subtitle Test',
            body: 'Ceci est le corps du test.',
            categoryId: 1,
        };

        const response = await request(app)
            .post('/api/articles')
            .send(incompleteArticle);

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error');
        expect(response.body.error).toMatch(/Tous les champs sont requis/);
    });

    it('should return 404 if category does not exist', async () => {
        const articleInvalidCategory = {
            title: 'Test Article',
            subtitle: 'Subtitle Test',
            subhead: 'Subhead Test',
            body: 'Ceci est le corps du test.',
            categoryId: 9999,
        };

        const response = await request(app)
            .post('/api/articles')
            .send(articleInvalidCategory);

        expect(response.status).toBe(500);
        expect(response.body).toHaveProperty('status', 'error');
        expect(response.body).toHaveProperty('statusCode', 500);
        expect(response.body).toHaveProperty('message', 'Une erreur interne est survenue');
    });

});