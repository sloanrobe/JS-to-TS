class Person {
    // Properties
    name: string;
    age: number;
  
    // The constructor method
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    // Method
    greet(): string {
      return `Hello, my name is ${this.name}.`;
    }
  
    // Another method
    calculateBirthYear(): number {
      return new Date().getFullYear() - this.age;
    }
  }
  
  // Create an instance of the Person class
  const person = new Person("John Doe", 30);
  console.log(person.greet()); // Output: Hello, my name is John Doe.
  