// JavaScript does not (yet) include a class syntax, although at the time
// of this writing a class syntax has been proposed in ECMAScript 6.

// Right now, classes or type descriptions are made using functions. Functions
// act as both procedural subroutines and (sort of magically) as object
// constructors when invoked with the new keyword.

// This is intended only as a brief review and reminder of how ECMAScript
// "classes" or "types" can be constructed.

console.log("Note that native types themselves are functions.");
console.log( typeof Object );
console.log( typeof Array );
console.log( typeof Function );



// Functions setup to work as classes tend to be styled with TitleCase
// vs. the non-first-letter camelCase usually used in JavaScript.
var Robot = function() {
    this.rusty = true;

    this.isRusty = function() {
        return this.rusty;
    };
};
// Functions provide a prototype that is the more JavaScript way of building
// a "class" template.
Robot.prototype.hungry = "not hungry";

// JavaScript doesn't prevent "class" functions from being called.
// In non-strict mode, this will modify the global object, which in the
// browser is window.
console.log("Accidentally modifying the global and then proving it.");
Robot();
console.log( window.rusty );
console.log( window.isRusty() );
console.log("Prototype methods are only available to true instances.");
console.log( window.hungry );



// The canonical way of creating an instance from a function object is
// to use the new keyword.
console.log("Building an instance from a function object.");
var r = new Robot();
console.log( r.isRusty() );
console.log( r.hungry );



// The canonical way of extending an/inheriting from a class.
var Terminator = function() {
    // We can explicitly enforce instance properties provided through the
    // constructor.
    Robot.call(this);

    // Change our own terminator specific properties.
    this.rusty = false;
};
// And automagically enforce inheritance.
Terminator.prototype = new Robot();
// Extend the robot.
Terminator.prototype.speak = function() {
    return "I'll be back.";
};

// Build a new terminator.
var arnold = new Terminator();
// Test for inheritance.
console.log( "Is arnold rusty? " + arnold.isRusty() );
console.log( "arnold says: " + arnold.speak() );
console.log( "is arnold hungry? " + arnold.hungry );
// What are we instances of?
console.log( "arnold instanceof Terminator: " + (arnold instanceof Terminator) );
console.log( "arnold instanceof Robot: " + (arnold instanceof Robot) );
console.log( "arnold instanceof Object: " + (arnold instanceof Object) );
// What are we not instances of?
console.log( "arnold instanceof Function: " + (arnold instanceof Function) );
console.log( "arnold instanceof Array: " + (arnold instanceof Array) );
