function createObject(nameValue) {
  return {
    'name': nameValue,
    'status': 'active',
    'created': new Date()
  };
}

let myObject = createObject('base');
console.log(myObject);
// Output:
// {
//   name: 'base',
//   status: 'active',
//   created: [current date]
// }
