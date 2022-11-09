import Bowerman from '../bowerman';

test('bowerman is created', () => {
  const received = new Bowerman('bowerman', 'Bowerman');
  const expected = {
    name: 'bowerman',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});
