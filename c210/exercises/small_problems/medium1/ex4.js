//input: string with whitespace-separated commands
//output: if the Print command is given, then the value of the register is the output
//
//don't worry about errors--assume all programs correct
//
//parse the string into a list of numbers(not strings) and string-commands
//initialize stack to []
//initialze register to 0;
//
//iterate through list, at each item:
  //if command, do command according to command rules
  //if number, set the register equal to the number
//
//parsing rules:
//if item isNUM, register = item.
//if item is string, command(string)
//
//
//commands:
//n Place a value n in the "register". Do not modify the stack.
//PUSH Push the register value on to the stack. Leave the value in the register. ** needs to continue to next iteration to include number
//ADD Pops a value from the stack and adds it to the register value, storing the result in the register.
//SUB Pops a value from the stack and subtracts it from the register value, storing the result in the register.
//MULT Pops a value from the stack and multiplies it by the register value, storing the result in the register.
//DIV Pops a value from the stack and divides it into the register value, storing the integer result in the register.
//MOD Pops a value from the stack and divides it into the register value, storing the integer remainder of the division in the register.
//POP Remove the topmost item from the stack and place in register.
//PRINT Print the register value;
//
//algo

function minilang(string) {
  var stack = [];
  var register = 0;
  var commands = string.split(' ');

  commands.forEach(function(command) {
    if (!isNaN(command)) {
      register = Number(command);
      return;
    }

    switch(command) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'MOD':
        register = Math.floor(register % stack.pop());
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
    }
  });
}
console.log(minilang('PRINT'));
// 0
console.log(minilang('5 PUSH 3 MULT PRINT'));
// 15
console.log(minilang('5 PRINT PUSH 3 PRINT ADD PRINT'));
// 5
// 3
// 8
console.log(minilang('5 PUSH POP PRINT'));
// 5

console.log(minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'));
// 5
// 10
// 4
// 7
console.log(minilang('3 PUSH PUSH 7 DIV MULT PRINT '));
// 6
console.log(minilang('4 PUSH PUSH 7 MOD MULT PRINT '));
// 12

console.log(minilang('-3 PUSH 5 SUB PRINT'));
// 8

console.log(minilang('6 PUSH'));
// (nothing printed; no PRINT commands)
