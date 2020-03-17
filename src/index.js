/**
 * es6 modules and imports
 */
const $ = require('jquery');
import sayHello from './hello';

const {getMovies} = require('./api.js');
const {postMovie} = require('./api.js');
const {editMovie} = require('./api.js');

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
    $('.container').html(`Here are the all the movies:<br> ${bucket}`)
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
    $('.container').html('');
    let bucket = [];
    getMovies().then((movies) => {
        movies.forEach(({title, rating}) => {
            let movieInfoString = (`${title} - rating:  ${rating} <br>`);
            bucket.push(movieInfoString);
        });
        $('.container').html(`Here are the all the movies:<br> ${bucket}`)
    }).catch((error) => {
        console.log('Oh no! Something went wrong.\nCheck the console for details.');
        console.log(error);
    });
    return postMovie(userMovieInput);
});
//EDIT.MOVIE
// let choseMovie = () => {
//     let bucket = [];
//     return fetch('/api/movies')
//         .then(response => response.json()).then(
//             response => {
//                 let movies = response
//                 movies.forEach(function (movie) {
//                     bucket.push(movie.title);
//                 })
//                 // console.log(bucket);
//                 // console.log(bucket);
//                 return bucket;
//             }
//         );
// }
$('#selectMovieToEdit').click(function (e) {
  let userInput = $('#searchBox').val().toLowerCase();
  let bucket = [];
  getMovies().then(response =>
      response.forEach(function (movie) {
          console.log(movie);
      if (userInput === movie.title){
          bucket.push(movie.id) };


  })).then(console.log(bucket[0]));
    // let selectedMovie = bucket[0];
    // console.log(selectedMovie);
    // return selectedMovie;
})



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


