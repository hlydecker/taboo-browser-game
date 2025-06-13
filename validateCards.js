const fs = require('fs');
const cards = JSON.parse(fs.readFileSync('cards.json', 'utf8'));
let valid = true;

if (!Array.isArray(cards) || cards.length === 0) {
  console.error('cards.json should contain a non-empty array');
  valid = false;
}

const seen = new Set();
for (const [i, card] of cards.entries()) {
  if (typeof card.mainWord !== 'string' || card.mainWord.trim() === '') {
    console.error(`Card at index ${i} has invalid mainWord`);
    valid = false;
  }
  if (!Array.isArray(card.tabooWords) || card.tabooWords.length !== 5) {
    console.error(`Card at index ${i} must have 5 tabooWords`);
    valid = false;
  }
  const upper = card.mainWord.toUpperCase();
  if (seen.has(upper)) {
    console.error(`Duplicate mainWord found: ${card.mainWord}`);
    valid = false;
  }
  seen.add(upper);
}

if (!valid) {
  process.exit(1);
}
console.log('cards.json validation passed');
