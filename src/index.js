/**
 * es6 modules and imports
 */
const {postMovie} = require('./api.js');
const $ = require('jquery');
import sayHello from './hello';

sayHello('World');

/**
 * require style imports
 */
const {getMovies} = require('./api.js');
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
// LOADING.MESSAGE
$(document).ready(function () {
    $('#loadingM').text('James...');
});
//TEXT.BOX
//FORM.DIV

//1. associate button with input text (james)
    // take variable userMovieInput and make it argument for postMovie.
    // pass it through postMovie function and verify outcome

    //1.1 modifiy the api       ( still working on this )
//2. append to json file        ( still working on this )
// const {postMovie} = require('./api.js');


//this is the click function that manipulates the user input.
//


$('#addMovieButton').click(function() {
    //userMovieInput variable is supposed to convert the user input to a value
    let userMovieInput = $('#addMovieText').val();
    //this line appends the data to the html page at the div addMovieForm

     return postMovie(userMovieInput);
});
// postMovie('test');

// });
//addMovie
//will target id of 
// $('')
//GENERAL.STYLING
// $('#addMovieForm').css('margin', 0);
// $('.container').css('maring-top', '10px');