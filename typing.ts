// Basic Types
  let variableName: type;

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


