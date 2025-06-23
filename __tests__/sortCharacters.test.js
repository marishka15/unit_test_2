import sortCharacters from '../src/sortCharacters';

test('should sort characters by health descending', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(sortCharacters(input)).not.toBe(input);

  expect(sortCharacters(input)).toEqual(expected);
});

test('should not mutate original array', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
  ];

  const sorted = sortCharacters(input);
  expect(sorted).not.toBe(input); 
  expect(input[0].health).toBe(10);
});