/* 
1. Create the following classes:
    - Book class. It should have an author and publisher property.
    - Author class. It should have a name and books property.
    - Publisher class.  It should have an authors and books property.
    - Review class.  It should have a rating and user property.
    -Prevent the properties from being accessed by outside code, using 
    the encapsulation concept of "private variables".  Create methods 
    that return the values of these private variables in case other
    pieces of the code need to access the data of the 4 classes.  
    Also create methods that allow outside code to "set" new values 
    for the properties on the classes, without directly manipulating 
    the values themselves. 

    //your code here...*/

class Book {
  #author;
  #publisher;
  constructor(author, publisher) {
    this.#author = author;
    this.#publisher = publisher;
  }
  getAuthor() {
    return this.#author;
  }
  setAuthor(value) {
    this.#author = value;
  }
  getPublisher() {
    return this.#publisher;
  }
  setPublisher(value) {
    this.#publisher = value;
  }
}
class Author {
  #name;
  #books;
  constructor(name, books) {
    this.#name = name;
    this.#books = books;
  }
  getName() {
    return this.#name;
  }
  setName(value) {
    this.#name = value;
  }
  getBooks() {
    return this.#books;
  }
  setBooks(value) {
    this.#books = value;
  }
}
class Publisher {
  #authors;
  #books;
  constructor(authors, books) {
    this.#authors = authors;
    this.#books = books;
  }
  getAuthors() {
    return this.#authors;
  }
  setAuthors(value) {
    this.#authors = value;
  }
  getBooks() {
    return this.#books;
  }
  setBooks(value) {
    this.#books = value;
  }
}
class Review {
  #rating;
  #user;
  constructor(rating, user) {
    this.#rating = rating;
    this.#user = user;
  }
  getRating() {
    return this.#rating;
  }
  setRating(value) {
    this.#rating = value;
  }
  getUser() {
    return this.#user;
  }
  setUser(value) {
    this.#user = value;
  }
}

/*
2. Create the following classes:
    - Umbrella class.  It should have a an organization name.  It should only have a single instance.
    Umbrella is the "Parent Organization" e.g. Allegis Group
    - Company class. It should have a company name and # of employees.  Create at least 3 different 
    companies that are children of the Umbrella Organization.  (e.g. TEKsystems, Aerotek, etc.)
    - Site class. It should have the name of the company, and the location of the site.  It is a
    child class that inherits from the Company class.  Create 3 sites for each company.
    - Employee class. It should have a employee name, job title, and salary properties. Create
    10 employee instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor,
    1 Marketer, 1 HR Personnel, 1 Lawyer.  Feel free to add other employee roles at your own discretion.
    
    - For each class, add 2 properties and 2 methods to each.  The properties and methods should make sense,
    considering what the classes are supposed to be representing.

    //your code here...*/

class Umbrella {
  name;
  constructor(name) {
    this.name = name;
    this.networth = "12 Billion USD";
    this.founder = "Steve Bisciotti";
  }
  goPublic() {
    console.log("Buy our stocks if you want to get rich");
  }
  goPrivate() {
    console.log("Sorry, we keep our money to ourselves");
  }
}
const allegis = new Umbrella("Allegis Group");

console.log(allegis);

class Company {
  name;
  numOfEmployees;
  constructor(name, numOfEmployees) {
    this.name = name;
    this.numOfEmployees = numOfEmployees;
    this.saleStatus = false;
    this.hiringStatus = true;
  }
  hiringProcess() {
    console.log("Would you like a job?");
  }
  trainingProcess() {
    console.log(`Welcome to ${this.name}! Let's get you started`);
  }
}

const tekSystems = new Company("TEKSystems", 2000);
const aerotek = new Company("Aerotek", 1000);
const astonCarter = new Company("Aston Carter Group", 1500);

console.log(tekSystems);
console.log(aerotek);
console.log(astonCarter);

class Site extends Company {
  location;
  constructor(company, location) {
    super();
    this.name = company.name;
    this.numOfEmployees = company.numOfEmployees;
    this.location = location;
  }
  payBills() {
    console.log("This is why we need to install auto-lights");
  }
  holdCharity() {
    console.log(
      `Here in ${this.location}, we're always open to support events for the others in need.`
    );
  }
}

const dallasSite = new Site(tekSystems, "Dallas");
const torontoSite = new Site(tekSystems, "Toronto");
const miamiSite = new Site(tekSystems, "Miami");

const laSite = new Site(aerotek, "Los Angeles");
const rioSite = new Site(aerotek, "Rio");
const parisSite = new Site(aerotek, "Paris");

const barcelonaSite = new Site(astonCarter, "Barcelona");
const romeSite = new Site(astonCarter, "Rome");
const londonSite = new Site(astonCarter, "London");

console.log(dallasSite);
console.log(torontoSite);
console.log(miamiSite);

console.log(laSite);
console.log(rioSite);
console.log(parisSite);

console.log(barcelonaSite);
console.log(romeSite);
console.log(londonSite);

class Employee {
  name;
  title;
  salary;
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.vacationStatus = false;
    this.stockOptions = true;
  }
  askForPromotion() {
    console.log(
      "I believe I can do more for this company and earn more while I'm at it."
    );
  }
  retire() {
    console.log("I've done my duties all my life; now its time to turn in.");
  }
}

const emp0 = new Employee("Maria", "CEO", 200000);
const emp1 = new Employee("Louis", "Manger", 85000);
const emp2 = new Employee("Jessica", "Secretary", 40000);
const emp3 = new Employee("Leyladin", "Engineer", 75000);
const emp4 = new Employee("John", "Engineer", 75000);
const emp5 = new Employee("Joseph", "Financial Officer", 175000);
const emp6 = new Employee("Bill", "Janitor", 30000);
const emp7 = new Employee("Robert", "Marketer", 65000);
const emp8 = new Employee("Naiara", "HR Personnel", 55000);
const emp9 = new Employee("Hakim", "Lawyer", 125000);

/*
/****************************************************************************************************************************************************************************************   
Bonus Exercise:

3. Building on Exercise 1, Do the following : 
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.  

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book. 
This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
*/

//your code here...
