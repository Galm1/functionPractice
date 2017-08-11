let names = ['yourmom', 'yourothermom', 'yourmomsmom'];
// find the length of each item in the array


// 1st
function lengths(arr){
  return arr.map(f => f.length);
}
// console.log(lengths(names));

// 2nd
function lengths2(arr) {
  return arr.map(function getLength(e) {
    return e.length
  })
}
// console.log(lengths2(names));

// 3rd
let lengths3Array = []
function lengths3(arr) {
  arr.forEach(function(e) {
  lengths3Array.push(e.length)
  })
  return lengths3Array
}
lengths3(names)
// console.log(lengths3Array);

// 4th
let lengths4Array = []
names.forEach(function(e){
  lengths4Array.push(e.length)
});
// console.log(lengths4Array);

// 5th
console.log(names.map(p => p.length));
