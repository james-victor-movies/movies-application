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
    $('#loadingM').text('James...');
});

// 1 add a text box for rating
// reload get movies after add
// fix jqeury
// clear textbox after submit 


$('#addMovieButton').click(function() {
    //userMovieInput variable is supposed to convert the user input to a value
    let userMovieInput = { title:$('#addMovieText').val(),
                            rating: '5'};
   return postMovie(userMovieInput);
})
