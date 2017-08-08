// Question 2

// Create a function called adventureSelector that takes 1 argument/parameter
// called num. adventureSelector should return 1 of 3 different anonymous
// functions, based on the number that is passed into it.
//
// Each of the three anonymous functions should console.log the following messages:
//
// If the number is 1:
//
//    You selected the Vines of Doom!
//
// If the number is 2:
//
//    Looks like you want the Lake of Despair!
//
// If the number is 3:
//
//    The Caves of Catastrophe!
//
// Lastly, test your adventureSelector function by immediately invoking the
// function it returns when you pass it the number 2.
const adventureSelector = function(num) {
  if(num) {
    return function() {
      console.log('You selected the Vines of Doom!')
    }
  }
  else {
    return function() {
      console.log('Looks like you want the Lake of Despair!')
    }
  }

  }

adventureSelector(1)();
  //answer: Zeous06@DESKTOP-1430KMV MINGW64 ~/code/WEB2010-test-1
    //$ node Q2.js
      //You selected the Vines of Doom!
