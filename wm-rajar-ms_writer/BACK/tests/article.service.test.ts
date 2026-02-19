import { describe, it, expect, vi, beforeEach } from 'vitest';
import { articleService } from '../src/services/article.service.js';
import { articleRepository } from '../src/repository/article.repository.js';

vi.mock('../src/repository/article.repository', () => {
  return {
    articleRepository: {
      create: vi.fn(),
    },
  };
});


describe('Article Service - createArticle', () => {

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should create article with valid data', async () => {

    const input = {
      title: 'Test',
      subtitle: 'Subtitle',
      subhead: 'Subhead',
      body: 'Body content',
      categoryId: 1,
    };

    const createdArticle = {
      id: 1,
      ...input,
    };

    (articleRepository.create as any).mockResolvedValue(createdArticle);

    const result = await articleService.createArticle(input);

    expect(articleRepository.create).toHaveBeenCalledWith(input);
    expect(result).toEqual(createdArticle);
  });

  it('should throw error if title is missing', async () => {

    const input = {
      title: '',
      subtitle: 'Subtitle',
      subhead: 'Subhead',
      body: 'Body content',
      categoryId: 1,
    };

    await expect(
      articleService.createArticle(input)
    ).rejects.toThrow();
  });

});
