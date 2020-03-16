module.exports = {
    getMovies: () => {
        return fetch('/api/movies')
            .then(response => response.json());
    },
    // postMovie: (newMovie) => {
    //     return fetch('/api/movies', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(newMovie)
    //     })
    //         .then(response => response.json());
    // },
    postMovie: (input) => {
        fetch('/api/movies', {
            method: 'post',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(input),
        })
            .then(function (data) {
                console.log('Request succeeded with JSON response', data);
            })
            .catch(function (error) {
                console.log('Request failed', error);
            });
    },
};




// declare a function that pulls the date

//create code that will link this to the other javascript files

//create a variable that will export the user movie input to the json file?
    //will use a filter

// postMovie: (newMovie) => {
//     return fetch ({title},{rating}{
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newMovie),
// });
//     .then(/* post was created successfully */)
//     .catch(/* handle errors */);
//


// const movieDetails = {title, rating};

// postMovies: (newMovie) = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(movieDetails),
// };

// postMovie: (newMovie) => {
// //     return fetch('api/movies', {
// //         method: 'POST',
// //         headers: {
// //             'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(newMovie)
// //     })
// //         .then(response => response.json());
// // },