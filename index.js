/*----------Contents---------
I--Airplane Class
  I-a takeOff Method
  I-b landing Method
II--Person Class
  II-a eat Method
  II-b poop Method
  II-c toString Method
III--Car Class
  III-a fill Method
  III-b drive Method
IV--Lambdasian Class
  IV-a speak Method
V--Instructor class
  V-a demo Method
  V-b grade Method
  V-c grading Method (stretch)
VI--Student Class
    V-a listSubjects Method
    V-b PRAssignment Method
    V-c standup Method
    V-d graduate Method
VII--Project Manager Class
*/

/*
  EXAMPLE TASK:
    - Write an Airplane class whose constructor initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` property of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property gets set to true.
        + If a plane lands, its `isFlying` property gets set to false.
*/

// EXAMPLE SOLUTION CODE:
class Airplane {
  // I--Airplane Class constructor takes a name property and sets isFlying to false
  constructor(name) {
    this.name = name;
    this.isFlying = false;
  }
  // I-a takeOff Method sets isFlying property to true when called
  takeOff() {
    this.isFlying = true;
  }
  // I-b land Method sets isFlying property to false when called
  land() {
    this.isFlying = false;
  }
}

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person class whose constructor initializes `name` and `age` from arguments.
    - All instances of Person should also initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

class Person {
  //II-- Person Class constructor with name, age, and an empty array assigned to stomach
  constructor(name, age) {
    (this.name = name), (this.age = age), (this.stomach = []);
  }
  // II-a eat Method to add items ("Food") to the stomach array property
  eat(food) {
    if (this.stomach.length < 10) {
      return this.stomach.push(food);
    }
  }
  // II-b poop Method to clear out the stomach array
  poop() {
    this.stomach = [];
  }
  // II-c toString Method Simply output objects `name, age` property as a string literal
  toString() {
    return `${this.name}, ${this.age}`;
  }
}

/*
  TASK 2
    - Write a Car class whose constructor initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with a `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

class Car {
  // III--Car Class Constructor with property  model, miles per gallon passed in during instantiation, also creats a tank and odometer property and sets them to zero
  constructor(model, milesPerGallon) {
    (this.model = model),
      (this.milesPerGallon = milesPerGallon),
      (this.tank = 0),
      (this.odometer = 0);
  }
  //III-a Method to add gas to tank in gallons
  fill(gallons) {
    this.tank += gallons;
  }
  // III-b Method that takes a number (the distance wanted to travel)
  drive(distance) {
    const maxDistance = this.tank * this.milesPerGallon; //checks how far car can go with current gas
    if (distance <= maxDistance) {
      //checks if desired distance to travel is less than or equal to max distance  car can travel
      this.tank -= distance / this.milesPerGallon;
      this.odometer += distance; //empties tank an amount equal to distance travelled / miles per gallon of car, increases odometer by distance amount
    } else {
      //executed if distance is greater than max travel distance of car
      this.odometer += maxDistance;
      this.tank = 0;
      return `I ran out of fuel at ${this.odometer} miles!`;
    }
  }
}
/*

  TASK 3
    - Write a Lambdasian class.
    - Its constructor takes a single argument - an object with the following keys:
        + name
        + age
        + location
    - Its constructor should initialize `name`, `age` and `location` properties on the instance.
    - Instances of Lambdasian should be able to `.speak()`:
        + Speaking should return a phrase `Hello my name is {name}, I am from {location}`.
        + {name} and {location} of course come from the instance's own properties.
*/

class Lambdasian {
  // IV--Lambdasian Class Constructor, takes an object with optional name,age,location properties
  constructor(attributes) {
    (this.name = attributes.name),
      (this.age = attributes.age),
      (this.location = attributes.location);
  }
  // IV-a Speak Method returns a string literal containing objects name and location (if any)
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

/*
  TASK 4
    - Write an Instructor class extending Lambdasian.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `specialty`: what the instance of Instructor is good at, i.e. 'redux'
        + `favLanguage`: i.e. 'JavaScript, Python, Elm etc.'
        + `catchPhrase`: i.e. `Don't forget the homies`.
    - The constructor calls the parent constructor passing it what it needs.
    - The constructor should also initialize `specialty`, `favLanguage` and `catchPhrase` properties on the instance.
    - Instructor instances have the following methods:
        + `demo` receives a `subject` string as an argument and returns the phrase 'Today we are learning about {subject}' where subject is the param passed in.
        + `grade` receives a `student` object and a `subject` string as arguments and returns '{student.name} receives a perfect score on {subject}'
*/
class Instructor extends Lambdasian {
  // IV Instructor Class Constructor, subclass of Lambdasian, takes an object with optional name,age,location,specialty,favLanguage,catchphrase property
  constructor(instructorAttr) {
    super(instructorAttr),
      (this.specialty = instructorAttr.specialty),
      (this.favLanguage = instructorAttr.favLanguage),
      (this.catchPhrase = instructorAttr.catchPhrase);
  }
  // IV-a demo Method takes a subject string and returns a string literal containing subject
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  // IV-b grade Method takes a student object and a subject String, returns string literal with student.name property and the subject
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
  // IV-c grading method that takes a student object adds a random grades assignment array and updates student grade property
  grading(student) {
    //New grade is a random number between 1-100 rounded to nearest whole number and pushes it to students assignment array
    const newGrade = Math.round(Math.floor(Math.random() * 101));
    student.assignments.push(newGrade);
    //Uses reduce on student assignment property and then divides total by assignment property length assigns it to the grade property
    student.grade = Math.round(
      student.assignments.reduce((sum, grade) => sum + grade) /
        student.assignments.length
    );
    return student.grade;
  }
}

/*
  TASK 5
    - Write a Student class extending Lambdasian.
    - Its constructor takes a single argument -  an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `previousBackground` i.e. what the Student used to do before Lambda School
        + `className` i.e. CS132
        + `favSubjects`. i.e. an array of the student's favorite subjects ['HTML', 'CSS', 'JS']
    - The constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `previousBackground`, `className` and `favSubjects` properties on the instance.
    - Student instances have the following methods:
        + `listSubjects` a method that returns all of the student's favSubjects in a single string: `Loving HTML, CSS, JS!`.
        + `PRAssignment` a method that receives a subject as an argument and returns `student.name has submitted a PR for {subject}`
        + `sprintChallenge` similar to PRAssignment but returns `student.name has begun sprint challenge on {subject}`
*/
class Student extends Lambdasian {
  // V--Student Class Constructor, subclass of Lambdasian, takes a student object with optional: name(str),age(num),location(str),previousBackground(str),className(str:ex"Math Class"),favSubjects(array:ex["java","html"])
  constructor(studentAttr) {
    super(studentAttr),
      (this.previousBackground = studentAttr.previousBackground),
      (this.className = studentAttr.className),
      (this.favSubjects = studentAttr.favSubjects),
      (this.grade = 0),
      (this.assignments = []);
  }
  // V-a returns str literal with students favSubject array
  listSubjects() {
    return `Loving ${this.favSubjects}`;
  }
  // V-b takes subject(str) returns string literal with students.name and subject
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  // V-c takes a subject(str) and returns a string literal with $subject and $objects name
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
  // V-d checks if students assignment array has at least 5 items in it, then checks grade property
  graduate() {
    if (this.assignments.length >= 5) {
      if (this.grade >= 70) {
        return `You're ready to graduate, Congratulations`;
      } else {
        return `You have to get your grade up, get back to studying`;
      } //end of if/else block line 244
    } //End of if statment line 234
    return `Your coursework isn't done, you\'ve only completed ${this.assignments.length} out of 5`;
  }
}

/*
  TASK 6
    - Write a ProjectManager class extending Instructor.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Instructor.
        + `gradClassName`: i.e. CS1
        + `favInstructor`: i.e. Sean
    - Its constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `gradClassName` and `favInstructor` properties on the instance.
    - ProjectManager instances have the following methods:
        + `standUp` a method that takes in a slack channel and returns `{name} announces to {channel}, @channel standy times!`
        + `debugsCode` a method that takes in a student object and a subject and returns `{name} debugs {student.name}'s code on {subject}`
*/
class ProjectManager extends Instructor {
  // VI--ProjectManager, subclasses Instructor, takes an object with optional:optional: name(str),age(num),location(str),gradClassName(str:ex CS101), favInstructor(str)
  constructor(PMAttrs) {
    super(PMAttrs),
      (this.gradClassName = PMAttrs.gradClassName),
      (this.favInstructor = PMAttrs.favInstructor);
  }
  // VI-a takes a channel str and returns a string literal with student name and channel
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }
  // VI-b takes a Student object and a subject(str) returns objects name property, students name property and subject
  debugsCode(student, subject) {
    return `${this.name} degugs ${student.name}\'s code on ${subject}`;
  }
}

/*
  STRETCH PROBLEM (no tests!)
    - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
    - Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
    - Add a graduate method to a student.
      + This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
      + If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== "undefined") {
  module.exports = module.exports || {};
  if (Airplane) {
    module.exports.Airplane = Airplane;
  }
  if (Person) {
    module.exports.Person = Person;
  }
  if (Car) {
    module.exports.Car = Car;
  }
  if (Lambdasian) {
    module.exports.Lambdasian = Lambdasian;
  }
  if (Instructor) {
    module.exports.Instructor = Instructor;
  }
  if (Student) {
    module.exports.Student = Student;
  }
  if (ProjectManager) {
    module.exports.ProjectManager = ProjectManager;
  }
}
