class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    console.log(`Имя: ${this.name}, Возраст: ${this.age}`);
  }
}

class Car {
  constructor(brand, model, year, number, owner) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.number = number;
    this.owner = null;
    this.attributeOwner(owner);
  }

  attributeOwner(owner) {
    if (owner.age >= 18) {
      this.owner = owner;
    } else {
      console.log("Владелец должен быть не моложе 18 лет.");
    }
  }

  displayInfo() {
    console.log(`Марка: ${this.brand}, Модель: ${this.model}, Год: ${this.year}, номер: ${this.number}`);
    if (this.owner) {
      console.log("Владелец:");
      this.owner.displayInfo();
    } else {
      console.log("Владелец отсутствует");
    }
  }
}
const person1 = new Human("Виталий", 25);
const person2 = new Human("Джейсон", 18);
const person3 = new Human("Стив", 60);
const person4 = new Human("Альберт", 43);

const car1 = new Car("Toyota", "Hilux", 2023, "AE0001BO", person1);
const car2 = new Car("Honda", "Civic", 2012, "AE0002BO", person2);
const car3 = new Car("Ford", "Raptor", 2008, "AE0003BO", person3);
const car4 = new Car("Nissan", "Patrol", 2020, "AE0004BO", person4);

car1.displayInfo();
car2.displayInfo();
car3.displayInfo();
car4.displayInfo();
