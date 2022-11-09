import Undead from '../undead';

test('undead is created', () => {
  const received = new Undead('undead', 'Undead');
  const expected = {
    name: 'undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});
