import Zombie from '../zombie';

test('zombie is created', () => {
  const received = new Zombie('zombie', 'Zombie');
  const expected = {
    name: 'zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});
