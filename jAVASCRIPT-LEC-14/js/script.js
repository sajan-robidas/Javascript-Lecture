"use strict";

// Construct Function

// const Person = function (fullName, birthYear) {
//   this.fullName = fullName;
//   this.birthYear = birthYear;
// };

// const John = new Person("John", 1997);
// console.log(John);

// const raj = new Person("raj", 1997);
// console.log(raj);

// console.log(John instanceof Person);

// // Coding Challenge #1

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} going at ${this.speed} km/h `);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} going at ${this.speed} km/h `);
// };

// const car = new Car("BMW", 120);
// console.log(car);
// car.accelerate();
// car.accelerate();
// car.accelerate();

// car.brake();
// car.brake();
// car.brake();

// Es6 classes

// Classes Expression

// const ParsonCl = class {};

// classes declaration

// class ParsonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2024 - this.birthYear);
//   }

//   // getter
//   get age() {
//     return 2024 - this.birthYear;
//   }
//   // setter
//   set fullName(name) {
//     if (name.includes(" ")) this._fullName = name;
//     else alert(`${name} not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
// }

// ParsonCl.prototype.das = function () {
//   console.log(2037 - this.birthYear);
// };

// const sajan = new ParsonCl("Sajan Das ", 1997);
// console.log(sajan);

// // sajan.calcAge();
// sajan.das();
// console.log(sajan.age);
// console.log(sajan._fullName);

// Setter and getter

const account = {
  Owner: "sajan",
  movement: [200, 300, 400, 500],

  get latest() {
    return this.movement.slice(-1).pop();
  },

  set latest(value) {
    this.movement.push(value);
  },
};

console.log(account);
console.log(account.movement);

console.log(account.latest);

account.latest = 50;
console.log(account.movement);

// Object.create

// const parson = {
//   calcAge() {
//     console.log(2040 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const pronita = Object.create(parson);

// pronita.name = "sajan";
// pronita.birthYear = 1997;
// pronita.calcAge();

// const sara = Object.create(parson);

// sara.init("sara", 2000);
// sara.calcAge();

// Coding Challenge #2

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    const sara = this.speed / 1.6;
    console.log(sara);
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

CarCl.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

CarCl.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

const ford = new CarCl("Ford", 120);

console.log(ford);
ford.speedUS;
ford.speedUS = 50;
console.log(ford);
console.log();
ford.accelerate();
ford.accelerate();
ford.brake();
ford.accelerate();
ford.brake();

// inharitance between classes constructor Function

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2024 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linked Prototype
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} I am study ${this.course}`);
// };

// const sanju = new Student("Sanju", 1997, "Computer Science");

// sanju.introduce();
// sanju.calcAge();

// Coding Challenge #3

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} km/h  `);
};

Car.prototype.brake = function () {
  this.speed -= 5;

  console.log(`${this.make} going at ${this.speed} km/h `);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}% `
  );
};

const roja = new EV("Tesla", 120, 23);
// console.log(roja);

roja.chargeBattery(90);
console.log(roja);
roja.accelerate();
roja.brake();

// inharitance between classes ES6 classes

class ParsonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2024 - this.birthYear);
  }

  // getter
  get age() {
    return 2024 - this.birthYear;
  }
  // setter
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} not a full name`);
  }

  get fullName() {
    return this._fullName;
  }
}

class StudentCl extends ParsonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} I am study ${this.course}`);
  }
}

const jones = new StudentCl("Sajan Robidas", 1997, "Computer Science");
console.log(jones);
jones.introduce();
jones.calcAge();
console.log(jones.age);

// inharitance between classes Object.create Function

// Object.create Function;

const parson = {
  calcAge() {
    console.log(2040 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const martha = Object.create(parson);

const student = Object.create(parson);

student.init = function (firstName, birthYear, course) {
  parson.init.call(this, firstName, birthYear);
  this.course = course;
};

student.introduce = function () {
  console.log(`My name is ${this.firstName} I am study ${this.course}`);
};

const joy = Object.create(student);
joy.init("jones", 1997, "computer science");

joy.introduce();
joy.calcAge();

// Another Class Example

// public fields
// private fields
// public method
// private method

class accounts {
  // 1) public fields (instance)
  locale = navigator.language;

  // 2) public fields
  #movements = [];

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    // this.movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for ${this.owner} open the account`);
  }

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLond(val) {
    return true;
  }

  requestLond(val) {
    if (this.approveLond) {
      this.deposit(val);
      console.log("Lond Approved");
    }
  }
}

const acc = new accounts("sajan", "EUR", 1111);

// acc.movements.push(450);
// acc.movements.push(-240);

acc.deposit(450);
acc.withdraw(250);
acc.approveLond(1000);
acc.requestLond(1000);
// console.log(acc.#getMovements());
console.log(acc);
// console.log(acc.#accounts);
