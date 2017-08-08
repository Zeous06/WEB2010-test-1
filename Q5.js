// Question 5

// Add a new property to the cars object called 'getYears' WITHOUT typing inside
// the cars definition below.

// The value of the getYears property should be a function that creates an
// empty array called years, then pushes only the years from cars.list to the
// years array, and then returns the years array, similar to how the getBrands
// method works.

// Lastly, log to the console the return value of the getYears method.

const cars = {
    list: [
        {brand: 'honda', model: 'civic', year: 2004},
        {brand: 'ford', model: 'f-150', year: 2016},
        {brand: 'chevrolet', model: 'camaro', year: 1970}
    ],
    getBrands: function() {
        const brands = [];

        cars.list.forEach(function(car) {
            brands.push( car.brand );
        });

        return brands;
    }
};
cars.getYears = function() {
  const years = [];

  cars.list.forEach(function(car) {
    years.push( cars.year);
  });
  return cars;
}
console.log( cars.getYears() );


//answer: Zeous06@DESKTOP-1430KMV MINGW64 ~/code/WEB2010-test-1
//$ node Q5.js
//{ list:
//   [ { brand: 'honda', model: 'civic', year: 2004 },
//     { brand: 'ford', model: 'f-150', year: 2016 },
//     { brand: 'chevrolet', model: 'camaro', year: 1970 } ],
//  getBrands: [Function: getBrands],
//  getYears: [Function] }
