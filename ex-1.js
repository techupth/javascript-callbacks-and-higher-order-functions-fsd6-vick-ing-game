// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(operation(array[i]));
  }
  return result;
}

function salariesIncreseBy5000(num) {
  return num + 5000;
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
let newEmployeeSalaries = [];

// Using `forEach` function here
newEmployeeSalaries = forEach(employeeSalaries, salariesIncreseBy5000);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
