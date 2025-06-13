const cards = require('../cards.json');

describe('cards.json structure', () => {
  test('cards is an array', () => {
    expect(Array.isArray(cards)).toBe(true);
  });

  test('cards are not empty', () => {
    expect(cards.length).toBeGreaterThan(0);
  });

  test('each card has mainWord and 5 tabooWords', () => {
    for (const card of cards) {
      expect(typeof card.mainWord).toBe('string');
      expect(Array.isArray(card.tabooWords)).toBe(true);
      expect(card.tabooWords.length).toBe(5);
      for (const word of card.tabooWords) {
        expect(typeof word).toBe('string');
      }
    }
  });

  test('no duplicate mainWord entries (case-insensitive)', () => {
    const seen = new Set();
    for (const card of cards) {
      const upper = card.mainWord.toUpperCase();
      expect(seen.has(upper)).toBe(false);
      seen.add(upper);
    }
  });
});
