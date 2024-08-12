import { formatDimensions, trimArtistName, trimArtName, validationSchema } from '@src/index';
import { beforeEach, describe, expect, it } from 'vitest';

describe('Utility Functions', () => {
  beforeEach(() => {
    // Используем vi.fn() для мокирования dispatch
    localStorage.clear();
  });
  it('trimArtistName should remove unwanted characters and trim the name', () => {
    const result = trimArtistName('John Doe\n');
    expect(result).toBe('John Doe');
  });

  it('trimArtName should truncate the art name to a given maxLength', () => {
    expect(trimArtName('Very Long Artwork Title', 10)).toBe('Very Long...');
  });

  it('formatDimensions should format dimensions correctly', () => {
    const dimensions = 'Sheet: 50cm x 70cm (20in x 28in); Framed: Yes';
    const result = formatDimensions(dimensions);
    expect(result).toBe('Sheet: 20in x 28in (50cm x 70cm)');
  });

  it('validationSchema should validate search query', async () => {
    const validQuery = await validationSchema.isValid({ searchQuery: 'Some Search' });
    expect(validQuery).toBe(true);

    const invalidQuery = await validationSchema.isValid({ searchQuery: 'Неправильные символы' });
    expect(invalidQuery).toBe(false);
  });
});
