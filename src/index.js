/**
 * es6 modules and imports
 */
const $ = require('jquery');
import sayHello from './hello';
const {getMovies} = require('./api.js');
const {postMovie} = require('./api.js');

sayHello('World');

/**
 * require style imports
 */
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
    $('#loadingM').text('Loading...');
});

// 1 add a text box for rating (done)
// reload get movies after add (done)
// fix jqeury (done)
// clear textbox after submit (done)


$('#addMovieButton').click(function() {
    //userMovieInput variable is supposed to convert the user input to a value
    // let userMovieInput = { title:$('#addMovieText').val(),
    //                         rating: '5'};

    //trying to add both the rating and the title with the same click function
    let userMovieInput = {
        title:$('#addMovieText').val(),
        rating:$('#addMovieRating').val()
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

// Allow users to edit existing movies
// Give users the option to edit an existing movie
// A form should be pre-populated with the selected movie's details
// Like creating a movie, this should not involve any page reloads, instead your javascript code should make an ajax request when the form is submitted.
//
