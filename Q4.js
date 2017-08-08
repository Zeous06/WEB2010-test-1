// Question 4

// Call console.log and pass to it the return value of the cars.getBrands function.

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
console.log( cars.getBrands() );
console.log( cars['getBrands']() );

//answer:Zeous06@DESKTOP-1430KMV MINGW64 ~/code/WEB2010-test-1
//$ node Q4.js
//[ 'honda', 'ford', 'chevrolet' ]
//[ 'honda', 'ford', 'chevrolet' ]
