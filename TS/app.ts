class One {
  constructor() {}
}

class Two {
  constructor(obj: One) {}
}

class Three {
  constructor(objeTwo: Two) {}
}

class ComponentClass {
  objThree: Three;
  constructor(obj: Three) {
    this.objThree = obj;
  }
}
