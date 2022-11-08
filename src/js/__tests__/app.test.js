import Character from '../app';
import Bowerman from '../bowerman';

test('character is created', () => {
  const newCharacter = new Character('bowerman', 'Bowerman');
  expect(newCharacter.name).toBe('bowerman');
  expect(newCharacter.type).toBe('Bowerman');
});

test('error name', () => {
  expect(() => {
    const character = new Character('b', 'Bowerman');
    console.log(character);
  }).toThrowError('Некорректная длина имени');
});

test('error type', () => {
  expect(() => {
    const character = new Character('bowerman', 'bowmann');
    console.log(character);
  }).toThrowError('Некорректный тип');
});

test('check levelUp', () => {
  const character = new Bowerman('bowerman', 'Bowerman');
  character.levelUp();
  expect(character.level).toBe(2);
  expect(character.attack).toBe(30);
  expect(character.defence).toBe(30);
  expect(character.health).toBe(100);
});

test('check levelUp imposibe', () => {
  const character = new Bowerman('bowerman', 'Bowerman');
  character.health = 0;
  expect(() => character.levelUp()).toThrow('Нельзя повысить левел умершего');
});

test('check demage health > 0', () => {
  const character = new Bowerman('bowerman', 'Bowerman');
  character.health = 100;
  character.damage(25);
  expect(character.health).toBe(81.25);
});

test('check demage health = 0', () => {
  const character = new Bowerman('bowerman', 'Bowerman');
  character.health = 0;
  character.damage(25);
  expect(character.health).toBe(0);
});
