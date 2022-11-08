import Character from './app';

export default class Undead extends Character {
  constructor(name, type = 'Undead') {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

const undead = new Undead('Undead');
console.log(undead);
