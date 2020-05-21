// Type decloration
  // implicit
  let life = 42

  //explicit
  let happiness:string
  happiness = 'cupcakes'

// Basic Types
  // Boolean
  let isEqual: boolean = false;

  //Number
  let lucky: number = 7;

  // String
  let catchphrase: string = 'Hack the Planent'

  // Array
  let numberArray: number[] = [1, 2, 3];
  let stringArray: string[] = ['a', 'b', 'c'];
  let mixedArray: (number | string)[] = [1, 'a', 2, 'b']

  //Tuple, an array with only 2 values [a, b]
  let hash: [string, number];
  hash = ['hello', 23];
  hash = [23, 'hello'];

  // Enum
  enum Color {Red, Green, Blue}
  let c: Color = Color.Green;

  // Any
  let unsure: any = 4;
  unsure = 'string'
  unsure = false

  // Void
    // opposite of Any, usually use for functions without return values
    // not the same as Null or Undefined
  function warnUser(): void {
    console.log("This is my warning message");
  }

  // Null and Undefined
    // By default, null and undefined are subtypes of all other types
    // This can be changed with strictNullChecks in your compilier
  let u: undefined = undefined;
  let n: null = null;

  // Never
    // Unreachable end point, not an absence of value
  function infiniteLoop(): never {
    while (true) {
    }
  }

  // Object
   declare function create(o: object): void;

  create({ prop: 0 });
  create(42);

  // defining own types
  type Style = 'bold' | 'italic'
  let font: Style = 'bold'
  font = 'oblique'

  // Type Assertion
    // Angle-bracket syntax
    let someValue: any = "this is a string";
    let strLength: number = (<string>someValue).length;

    // 'as' syntax
    let thisValue: any = "this is a string";
    let thisStrLength: number = (thisValue as string).length;

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// Typing with functions

function sum(x, y) {
  return x + y
}

sum('cat', 'dog')

// function sum(x: number, y:number): number {
//   return x + y
// }

// sum('cat', 'dog')

let count = 0;

function incrementCount(): void {
  count += 1;
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// Typing with classes/ interfaces
  //an interface declares the shape you expect an object to be

  interface Person {
    first: string,
    last: string,
    id: number,
    // [key: string]: any
  }

  const person1: Person = {
    first: 'Zeke',
    last: 'Deckert',
    id: 1
  }

  const person2: Person = {
    first: 'Jack',
    last: 'Black',
    id: 2,
    // bodacious: true
  }

  // Properties can be marked optional with ?
  interface UserAccount {
    username: string,
    first: string,
    mi?: string,
    last: string,
    id: number,
    phonenumber?: number,
    email?: string
  }

  const myaccount: UserAccount = {
    username: 'zdeckert',
    first: 'Zeke',
    last: 'Deckert',
    id: 1,
    email: 'zdeckert@email.com'
  }

  //properties can be marked as readonly

  interface Point {
    readonly x: number;
    readonly y: number;
  }

  const midpoint: Point = {
    x: 7,
    y: -8
  }

  midpoint.x = 17;
