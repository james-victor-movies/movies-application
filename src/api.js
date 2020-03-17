'use strict';
module.exports = {
    getMovies: () => {
        return fetch('/api/movies')
            .then(response => response.json());
    },
    postMovie: (input) => {
    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(input)
    };
    return fetch('/api/movies', options)
        .then(response => response.json());
},
    //this is the put method that will let users edit the movie they selected
    editMovie: () => {
        let titleBucket = [];
    return fetch('/api/movies')
        .then(response => response.json().then(response => {
            let movies = (response)
            return (movies);
        }
    }

// if (coffee.roast === selectedRoast) {
//     filteredCoffees.push(coffee);
// }

// once post is found button will select it
// create div to display search results in html
// create bucket which will fill html
// push items int to bucket
// write function which filters through array of list of titles
// array from list of titles
//Generate list of titles (done)
// fetch for list of titles. (done)
