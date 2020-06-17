//1. Create a Class called WhyClass.  This class should have one property, and two methods.  THe property is called
//"purpose", and stores a string.  This string should clearly explain why classes are used in Object Oriented Programming.
// The first method is called explain().  This method should print the contents stored in the purpose 'field' of the class.
//The second method is called pieces().  This 2nd method should print out the various parts that are essential to building a class.
// Instantiate the class, and invoke the method so the results are showing in the console once this file is run.

//your code here...
class WhyClass {
  constructor() {
    this.purpose =
      "Clases are used in OOP to create a blueprint for objects. This way, we can cut down on repated code. We won't have to type out a new class each time we want a new object.";
    this.explain = () => console.log(this.purpose);
    this.pieces = () => {
      console.log("Declaration or expression statement of the class");
      console.log("Invoking a constructor");
    };
  }
}

const facts = new WhyClass();
facts.explain();
facts.pieces();

/*2. You are exploring the rainforests of the Amazon.  You have observed many different 
types of wildlife on your excursion.  To jog your memory, some different types of wildlife 
that you observed are found in the following URL :
https://www.ietravel.com/blog/amazon-rainforest-animals-beginners-guide-21-species.  Feel 
free to use other resources online if you wish.

Create a class that can categorize at least 6 of the creatures that you recall observing the Amazon.  
Each creature should have 3 unique characteristics, and 2 unique actions that it can do. */

//your code here...

class Bird {
  constructor(name, dietType) {
    this.name = name;
    this.dietType = dietType;
  }
  fly = () => console.log(`${this.name} is flapping! Up, up, and away!!`);
}
//First Bird, the Hoatzin
const hoatzin = new Bird("Hoatzin", "herbivore");
hoatzin.slash = function () {
  console.log(`${this.name} cuts you with the claws on its wings!!`);
};
hoatzin.hiss = function () {
  console.log(`${this.name} hisses at you with guttural tones!`);
};
hoatzin.stinkLevel = 7;
hoatzin.mohawkHeight = "2.3 Inches";
hoatzin.wingClawLength = "1 Inch";

//Second Bird, the Harpy
const harpy = new Bird("Harpy Eagle", "carnivore");
harpy.dive = function () {
  console.log(`${this.name} dives and kills its prey on impact!`);
};
harpy.roost = function () {
  console.log(`${this.name} nests on the tops of trees!!`);
};
harpy.apex = "Apex predator of the birds";
harpy.talons = "Largest talson of any living eagle";
harpy.mate = "Mate for life";

//Third Bird, the Hyacinth Macaw
const macaw = new Bird("Hyacinth Macaw", "omnivore");
macaw.crackNuts = function () {
  console.log(`${this.name} cracks nuts with its hooked beak!!`);
};
macaw.talk = function () {
  console.log(`${this.name} wants a cracker! Tweet-tweet!!`);
};
macaw.largest = "Largest parrot in the world by length";
macaw.beak = "Hooked";
macaw.status = "Endangered";

//Fourth Bird, the Spectacled Owl
const specOwl = new Bird("Spectacled Owl", "carnivore");
specOwl.swoop = function () {
  console.log(`${this.name} swoops down on you!!`);
};

specOwl.nightSight = function () {
  console.log(`${this.name} sees you in the dark!`);
};
specOwl.height = "18 Inches";
specOwl.nickname = "Knocking Owl";
specOwl.headTurnRadius = "270 degrees";

//Fifth Bird, the King Vulture
const kingVulture = new Bird("King Vulture", "carnivore");
kingVulture.devour = function () {
  console.log(`${this.name} feasts on dead animals flesh.`);
};
kingVulture.glide = function () {
  console.log(`${this.name} rides thermals and air currents to travel!`);
};
kingVulture.wingspan = "6 feet";
kingVulture.eatingHabits = "Scavenger";
kingVulture.baldHead = "has no feathers on its head";

//Sixth Bird, the Toco Toucan
const toucan = new Bird("Toco Toucan", "omnivore");
toucan.peck = function () {
  console.log(`${this.name} pecks you in the eyes with its large beak!!`);
};
toucan.frootLoop = function () {
  console.log(`${this.name} says his new name is Toucan Sam`);
};
toucan.plummage = "Mainly black with a little white";
toucan.beakLength = "6 Inches";
toucan.flock = "Likes to fly with other toucans";

/*3. Convert the following Object Literals into a general class called Shape, and instantiate the class to generate the object literals
 */

class Shape {
  //your code here...
  constructor(name, sides) {
    this.name = name;
    this.radius = null;
    this.sides = sides;
    this.base = null;
    this.length = null;
    this.height = null;
  }
  calcArea = () => {};
  calcPerimeter = () => {};
  calcCircumference = () => {};
}

const triangle = new Shape("triangle", [4, 7, 7]);
triangle.sides = [4, 7, 7];
triangle.base = triangle.sides[0];
triangle.height = Math.sqrt(
  Math.pow(triangle.sides[1], 2) - Math.pow(triangle.base / 2, 2)
);
triangle.calcArea = function () {
  console.log(
    `${this.name}'s area is calculated to be : ${0.5 * this.base * this.height}`
  );
};
triangle.calcPerimeter = function () {
  console.log(
    `${this.name}'s perimeter is calculated to be : ${
      this.base + (this.sides[1] + this.sides[2])
    }`
  );
};

//triangle.base = triangle.sides[0]; //base is the 1st side in the triangle.sides array.
//triangle.height = 6.71; //determine the height using basic geometry.  How do you calculate
//the height of a triangle with 2 equal sides?  If you use the formula to caluclate the height,
//this is a bonus.  If you hard code the correct value here, that will be sufficient, but no bonus :(

console.log(triangle.height);
triangle.calcArea();
triangle.calcPerimeter();

const rectangle = new Shape("rectangle", 4);

rectangle.length = 2;
rectangle.width = 5;
rectangle.calcArea = function () {
  console.log(
    `${this.name}'s area is calculated to be : ${this.length * this.width}`
  );
};
rectangle.calcPerimeter = function () {
  console.log(
    `${this.name}'s perimeter is calculated to be : ${
      2 * this.length + 2 * this.width
    }`
  );
};

rectangle.calcArea();
rectangle.calcPerimeter();

const circle = new Shape("circle", 1);

circle.radius = 5;

circle.calcArea = function () {
  console.log(
    `${this.name}'s area is calculated to be : ${(
      Math.PI *
      this.radius ** 2
    ).toFixed(2)}`
  );
};

circle.calcCircumference = function () {
  console.log(
    `${this.name}'s circumference is calculated to be : ${(
      2 *
      Math.PI *
      this.radius
    ).toFixed(2)}`
  );
};

circle.calcCircumference();
circle.calcArea();

/*********************************************** 
Bonus Exercises:

//4. Create three more instances of the Shape class for a pentagon, hexagon, and an octagon.  
Add in  comments explaining the formulas for calculating the perimeter and the areas of these 3 
shapes.  Also, as noted above, if you use the formula to calculate the height of the triangle 
instead of hard coding it, you will also obtain the bonus for this exercise.  The dimensions for 
the triangle are already provided for you in the triangle object literal.

//Did triangle bonus

//5. Below is a class Earth.  It is instantiated with a earth 'instance'.  Because there is only 
1 known earth, we don't want multiple instances of earth.  Modify the class so the properties are 
usuable WITHOUT instantiating the class.

*/

class Earth {
  name;
  planetNum; //distance from the sun.  1-mercury, 2-venus, 3-earth, ...

  constructor(name, num) {
    this.name = name;
    this.planetNum = num;
  }
}

const earth = new Earth("earth", 3);
console.log(earth);
