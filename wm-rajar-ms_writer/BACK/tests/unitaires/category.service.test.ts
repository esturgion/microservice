import { describe, it, expect, vi, beforeEach } from 'vitest';
import { categoryService } from '../../src/services/category.service.js';
import { categoryRepository } from '../../src/repository/category.repository.js';
import { ValidationError } from '../../src/errors/ValidationError.js';
import { NotFoundError } from '../../src/errors/NotFoundError.js';

vi.mock('../../src/repository/category.repository', () => {
  return {
    categoryRepository: {
      findById: vi.fn(),
    },
  };
});

describe('Category Service - getCategoryById', () => {

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should throw ValidationError if id is missing", async () => {
    await expect(
      categoryService.getCategoryById(undefined as any)
    ).rejects.toThrow(ValidationError);
  });

  it("should throw ValidationError if id is invalid", async () => {
    await expect(
      categoryService.getCategoryById(0)
    ).rejects.toThrow(ValidationError);

    await expect(
      categoryService.getCategoryById(-1)
    ).rejects.toThrow(ValidationError);

    await expect(
      categoryService.getCategoryById(NaN)
    ).rejects.toThrow(ValidationError);
  });

  it("should throw NotFoundError if category does not exist", async () => {

    (categoryRepository.findById as any).mockResolvedValue(null);

    await expect(
      categoryService.getCategoryById(1)
    ).rejects.toThrow(NotFoundError);

    expect(categoryRepository.findById).toHaveBeenCalledWith(1);
  });

  it("should return category if found", async () => {

    const fakeCategory = {
      id: 1,
      name: 'Tech',
    };

    (categoryRepository.findById as any).mockResolvedValue(fakeCategory);

    const result = await categoryService.getCategoryById(1);

    expect(categoryRepository.findById).toHaveBeenCalledWith(1);
    expect(result).toEqual(fakeCategory);
  });

});
