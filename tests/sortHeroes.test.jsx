import { sortHeroesByHealth } from '../src/sortHeroes.js';

describe('sortHeroesByHealth', () => {
  test('корректно сортирует героев', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];
    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];
    expect(sortHeroesByHealth(heroes)).toEqual(expected);
  });
});