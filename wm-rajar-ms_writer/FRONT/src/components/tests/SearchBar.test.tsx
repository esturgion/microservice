/// <reference types="vitest" />
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import SearchBar, { type SearchBarType } from '../ArticleList/SearchBar';

describe('SearchBar', () => {
  let onQueryChange: (newQuery: string) => void;
  let onSearch: () => void;
  const initialSearch: SearchBarType = { query: '' };

  beforeEach(() => {
    onQueryChange = vi.fn<(newQuery: string) => void>();
    onSearch = vi.fn<() => void>();
  });

  it('appelle onQueryChange quand le texte dans l’input change', () => {
    render(
      <SearchBar searchBar={initialSearch} onQueryChange={onQueryChange} onSearch={onSearch} />
    );

    const input = screen.getByLabelText('Rechercher un article') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'React' } });

    expect(onQueryChange).toHaveBeenCalledWith('React');
  });

  it('appelle onSearch quand le formulaire est soumis', () => {
    render(
      <SearchBar searchBar={initialSearch} onQueryChange={onQueryChange} onSearch={onSearch} />
    );

    const form = screen.getByRole('search');

    fireEvent.submit(form);

    expect(onSearch).toHaveBeenCalled();
  });
});
