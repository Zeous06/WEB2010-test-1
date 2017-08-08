// Question 3

// Create a new variable called bar and assign to it the function definition of foo.

// Then call console.log and pass it the return value of passing 3 to bar.

function foo(num) {
  return num + 2;
}

const bar = foo

console.log( foo(3) );
console.log( bar(3) );

  //answer: Zeous06@DESKTOP-1430KMV MINGW64 ~/code/WEB2010-test-1
  // $ node Q3.js
  //  5
  // 5
