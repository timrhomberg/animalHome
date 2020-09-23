class Animal {
  name: string;
  chipped: boolean;
  finder: Finder;
  color: Color;

  constructor(name: string, chipped: boolean, finder: Finder, color: Color) {
    this.name = name;
    this.chipped = chipped;
    this.finder = finder;
    this.color = color;
  }
}

class Dog extends Animal {
  breed: string;
  constructor(breed: string, chipped: boolean, color: Color, finder: Finder, name: string) {
    super(name, chipped, finder, color);
    this.breed = breed;
  }
}

class Cat extends Animal {
  constructor(chipped: boolean, color: Color, finder: Finder, name: string) {
    super(name, chipped, finder, color);
  }
}

class Rabbit extends Animal {
  breed: string;
  constructor(breed: string, chipped: boolean, color: Color, finder: Finder, name: string) {
    super(name, chipped, finder, color);
    this.breed = breed;
  }
}
