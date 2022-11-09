import Daemon from '../daemon';

test('daemon is created', () => {
  const received = new Daemon('daemon', 'Daemon');
  const expected = {
    name: 'daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});
