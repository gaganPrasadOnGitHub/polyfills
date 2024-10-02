// Push
const myPushArray = [];
console.log('Array:', myPushArray);
myPushArray.myPush(1, 2, 3, 4, 5);
console.log('Array my push:', myPushArray);

// Pop
const myPopArray = [1, 2, 3, 4, 5];
console.log('Array:', myPopArray);
myPopArray.myPop();
console.log('Array my pop:', myPopArray);

// unShift
const myUnShiftArray = [1, 2, 3, 4, 5];
console.log('Array:', myUnShiftArray);
myUnShiftArray.myUnshift(-2, -1, 0);
console.log('Array my unShift:', myUnShiftArray);

// Shift
const myShiftArray = [1, 2, 3, 4, 5];
console.log('Array:', myShiftArray);
myShiftArray.myShift();
console.log('Array my shift:', myShiftArray);

// Reverse
const myReverseArray = [1, 2, 3, 4, 5];
const reversedArray = [...myReverseArray].myReverse();

console.log('Array:', myReverseArray);
console.log('Array my reverse:', reversedArray);

// Slice
const mySliceArray = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const slicedArray = mySliceArray.slice(2, -1);

console.log('Array:', mySliceArray);
console.log('Array my slice:', slicedArray);

// Find
const myFindArray = [5, 12, 8, 130, 5, 44, 12];
const foundElement = myFindArray.myFind((element, index, array) => {
  return array.indexOf(element) === array.lastIndexOf(element);
});
console.log('Array:', myFindArray);
console.log('Array 1st unique element my find:', foundElement);

// Every
const myEveryArray = [1, 2, 3, 4, 5];
const isAllPositive = myEveryArray.myEvery((value) => value > 0);

console.log('Array:', myEveryArray);
console.log('Array is all positive element my every:', isAllPositive);

// Some
const mySomeArray = [1, 2, 3, 4, 5];
const hasEven = mySomeArray.mySome((value) => value % 2 === 0);

console.log('Array:', mySomeArray);
console.log('Array contain even element my some:', hasEven);

// Flat
const myFlatArray = [1, 2, [3, 4], [5, [6, 7]]];
const flatArray = myFlatArray.myFlat(2);

console.log('Array:', myFlatArray);
console.log('Array my flat:', flatArray);

// Map
const myMapArray = [1, 2, 3, 4, 5];
const mappedArray = myMapArray.myMap((element) => element * 2);

console.log('Array:', myMapArray);
console.log('Array multiple of 2 my map:', mappedArray);

// Filter
const myFilterArray = [1, 2, 3, 4, 5];
const filteredArray = myFilterArray.myFilter((element) => element > 2);

console.log('Array:', myFilterArray);
console.log('Array greater than 2 filter:', filteredArray);

// Reduce
const myReduceArray = [1, 2, 3, 4, 5];
const sum = myReduceArray.myReduce((acc, curr, index, array) => {
  return acc + curr;
}, 0);

console.log('Array:', myReduceArray);
console.log('Array sum my reduce:', sum);

// Sort
const mySortArray = [1, 3, 4, 1, 5, 9];
console.log('Array:', mySortArray);
mySortArray.mySort();
console.log('Array my sort:', mySortArray);

// string concat
const myConcatString = 'Hello';
console.log('String:', myConcatString);
const concatenatedString = myConcatString.myStringConcat(' ', 'World', 123);
console.log('String my concat:', concatenatedString);

// call
function greet(FirstName, LastName) {
  console.log(`Hello ${FirstName} ${LastName}`);
}

const person1 = {
  FirstName: 'Person 1',
};

greet.myCall(person1, person1.FirstName, 'Call');

// apply
const person2 = {
  FirstName: 'Person 2',
};
greet.myApply(person2, [person2.FirstName, 'Apply']);

// bind
const person3 = {
  FirstName: 'Person 3',
};
const greetMessage = greet.myBind(person2, person3.FirstName);

console.log('greetMessage function from bind', greetMessage);
greetMessage('Bind');
