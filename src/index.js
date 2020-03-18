/**
 * es6 modules and imports
 */
import {deleteMovie} from "./api";

const $ = require('jquery');
import sayHello from './hello';

const {getMovies} = require('./api.js');
const {postMovie} = require('./api.js');
const {editMovie} = require('./api.js');
// const {deleteMovie} = require('./api');
sayHello('World');

/**
 * require style imports
 */
let bucket = [];
getMovies().then((movies) => {
    movies.forEach(({title, rating,}) => {
        let movieInfoString = (`${title} - rating:  ${rating} <br>`);
        bucket.push(movieInfoString);
    });
    $('.apiOutput').html(`Here are the all the movies:<br> ${bucket}`)
}).catch((error) => {
    console.log('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
});
// LOADING.MESSAGE
$(document).ready(function () {
    $('#loadingM').text('Loading...');
});

$('#addMovieButton').click(function () {
    //userMovieInput variable is supposed to convert the user input to a value
    // let userMovieInput = { title:$('#addMovieText').val(),
    //                         rating: '5'};

    //trying to add both the rating and the title with the same click function
    let userMovieInput = {
        title: $('#addMovieText').val(),
        rating: $('#addMovieRating').val()
    };
    //declared variable for the userMovieRating input
    //these two lines of code will remove the input from the input bars
    $('#addMovieText').val('');
    $('#addMovieRating').val('');

    $('.apiOutput').html('');
    let bucket = [];
    getMovies().then((movies) => {
        movies.forEach(({title, rating}) => {
            let movieInfoString = (`${title} - rating:  ${rating} <br>`);
            bucket.push(movieInfoString);
        });
        $('#card-container').html(`Here are the all the movies:<br> ${bucket}`)
    }).catch((error) => {
        console.log('Oh no! Something went wrong.\nCheck the console for details.');
        console.log(error);
    });
    return postMovie(userMovieInput);
});
//EDIT.MOVIE
let choseMovie = () => {
    let bucket = [];
    return fetch('/api/movies')
        .then(response => response.json()).then(
            response => {
                let movies = response
                movies.forEach(function (movie) {
                    bucket.push(movie.title);
                });
                // console.log(bucket);
                // console.log(bucket);
                return bucket;
            }
        );
};
$('#editButton').click(function (e) {
    let userInput = $('#searchBox').val().toLowerCase();
    let userEdit = {
        title: $('#editTitleText').val(),
        rating: $('#editRatingText').val()
    };
    getMovies().then(movies =>
        movies.forEach(({title, rating, id}) => { //loops through each movie in the array
            let titleToLower = title.toLowerCase();

            if (userInput === titleToLower) {
                console.log(id);
                console.log(titleToLower);
                editMovie(id, userEdit);
            }
            $('.apiOutput').html('');
            $('#searchBox').val('');
            $('#editRatingText').val('');
            $('#editTitleText').val('');
            let bucket = [];
            getMovies().then((movies) => {
                movies.forEach(({title, rating,}) => {
                    let movieInfoString = (`${title} - rating:  ${rating} <br>`);
                    bucket.push(movieInfoString);
                });
                $('.apiOutput').html(`Here are the all the movies:<br> ${bucket}`)
            }).catch((error) => {
                console.log('Oh no! Something went wrong.\nCheck the console for details.');
                console.log(error);
            })
        }));


});

// let finalBucket = [];
// let titleFilter = titleBucket.forEach(function (title) {
//     if (movie === userInput){
//         finalBucket.push(title);
//     }
//     console.log(finalBucket)
// })


// let finalBucket = [];
// let titleFilter = titleBucket.forEach(function (title) {
//     if (movie === userInput) {
//         finalBucket.push(title);
//     }
//     console.log(finalBucket);
// })


//Find a way to chose which movie to edit
// search box : would create a text input, " if input === title " return object, use PUT method to edit object
// drop down : drop write a function that iterates through Json and displays all objects, all objects are clickable, when clicked : returns obj information
// table with link : same as drop but with table.
//

// Allow users to edit existing movies
// Give users the option to edit an existing movie
// A form should be pre-populated with the selected movie's details
// Like creating a movie, this should not involve any page reloads, instead your javascript code should make an ajax request when the form is submitted.

// Request which movie the user wants from the api.
// The display info in text box that can be modifiyed by user.
// Changes that are made by user will be submitted to the api.

$('#delete-movie-btn').click(function () {
    let deleteUserMovie = $('#deleted-movie').val();
    console.log(deleteUserMovie);
    getMovies().then((movies) => {
        let movieNameID;
        movies.forEach((movie) => {
            console.log(movie.title, movie.id);
            if (deleteUserMovie === movie.title) {
                movieNameID = movie.id;
                console.log((movie.id));
                return deleteMovie(movieNameID);
            }
        });
        $('.apiOutput').html('');
        $('#deleted-movie').val('');
        let bucket = [];
        getMovies().then((movies) => {
            movies.forEach(({title, rating,}) => {
                let movieInfoString = (`${title} - rating:  ${rating} <br>`);
                bucket.push(movieInfoString);
            });
            $('.apiOutput').html(`Here are the all the movies:<br> ${bucket}`)
        }).catch((error) => {
            console.log('Oh no! Something went wrong.\nCheck the console for details.');
            console.log(error);
        });
    });
});