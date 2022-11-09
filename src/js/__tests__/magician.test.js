import Magician from '../magician';

test('magician is created', () => {
  const received = new Magician('magician', 'Magician');
  const expected = {
    name: 'magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});
