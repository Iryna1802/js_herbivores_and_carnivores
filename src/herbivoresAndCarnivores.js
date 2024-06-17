'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  // died() {
  //   if (this.health <= 0) {
  //     delete Animal.alive.this;
  //   }
  // }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);

    this.name = name;
  }

  bite(name) {
    if (name.hidden === false) {
      name.health -= 50;
    }

    Animal.alive = Animal.alive.filter((element) => element.health !== 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
