# Intro to TypeScript

## What is TypeScript
TypeScript is an open-source programming language developed by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for development of large applications and transcompiles to JavaScript.

## Benefits of TypeScript
#### Non-technical(ish)
* Easy learning curve coming from JavaScript
* Tooling, like an integrated devlopment environment
* Great [documentation](https://www.typescriptlang.org/docs/home.html)

#### Technical
* Data Typing
* Catching bugs before prodction
* Integrated transpiler
* Interfaces and Classes

## Getting Started
1. First install typescript
```
npm install -g typescript
```
2. Write your code
3. Transpile your code to JS (replace helloworld.ts with the name of your ts file)
  * Before transpiling, consider creating a tsconfig.json file
  * Either create it manually, or use the command
  ```
  tsc --init
  ```
  * This will create a tsconfig.json file
```
tsc helloworld.ts
```