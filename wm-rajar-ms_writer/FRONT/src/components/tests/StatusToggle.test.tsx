import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import StatusToggle from '../ArticleList/StatusToggle';

vi.mock('../../services/article.service', () => {
  return {
    articleService: {
      deleteArticle: vi.fn(),
      restoreArticle: vi.fn(),
    },
  };
});

import { articleService } from '../../services/article.service';

describe('StatusToggle', () => {
  const articleId = 123;
  let onStatusChange: (id: number, isActive: boolean) => void;

  beforeEach(() => {
    (articleService.deleteArticle as unknown as ReturnType<typeof vi.fn>).mockClear();
    (articleService.restoreArticle as unknown as ReturnType<typeof vi.fn>).mockClear();
    onStatusChange = vi.fn<(id: number, isActive: boolean) => void>();
  });

  it('appelle deleteArticle et onStatusChange quand isActive est true', async () => {
    render(
      <StatusToggle articleId={articleId} isActive={true} onStatusChange={onStatusChange} />
    );

    const button = screen.getByRole('switch');

    await fireEvent.click(button);

    expect(articleService.deleteArticle).toHaveBeenCalledWith(articleId);
    expect(onStatusChange).toHaveBeenCalledWith(articleId, false);
  });

  it('appelle restoreArticle et onStatusChange quand isActive est false', async () => {
    render(
      <StatusToggle articleId={articleId} isActive={false} onStatusChange={onStatusChange} />
    );

    const button = screen.getByRole('switch');

    await fireEvent.click(button);

    expect(articleService.restoreArticle).toHaveBeenCalledWith(articleId);
    expect(onStatusChange).toHaveBeenCalledWith(articleId, true);
  });
});
