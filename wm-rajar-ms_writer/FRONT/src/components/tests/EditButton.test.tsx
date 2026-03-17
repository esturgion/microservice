import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import EditButton from '../ArticleList/Button';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe('EditButton', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('appelle navigate avec la bonne route au clic', () => {
    const articleId = 123;
    render(<EditButton articleId={articleId} />);

    const button = screen.getByText('Modifier');
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith(`/articles/${articleId}/edit`);
  });
});
