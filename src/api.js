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
    editMovie: (id, userEdit) => {
        const options = {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userEdit)
        };
        return fetch(`/api/movies/${id}`, options)
            .then(response => response.json());
    },
    deleteMovie: (id) => {
        console.log(JSON.stringify({id}));
        return fetch(`/api/movies/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id})
        })
            .then(response => response.json());
    }
};
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
