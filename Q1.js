// Question 1

// Write one line of code that calls foo, passes it 'bird' as an
// argument/parameter, and then immediately invokes the function that gets returned.

function foo(string) {
    if (string === 'bird') {
        return function() {
            console.log("Bird is the word!");
        };
    } else {
        return function() {
            console.log("The word is not bird.");
        };
    }
}
foo('bird')();

//answer in Atom: Zeous06@DESKTOP-1430KMV MINGW64 ~/code/WEB2010-test-1
//$ node q1.js
//Bird is the word!
