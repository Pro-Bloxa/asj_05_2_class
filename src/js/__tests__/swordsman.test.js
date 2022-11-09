import Swordsman from '../swordsman';

test('swordsman is created', () => {
  const received = new Swordsman('swordsman', 'Swordsman');
  const expected = {
    name: 'swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});

