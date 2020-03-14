/**
 * es6 modules and imports
 */
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
    console.log('Oh no! Something went wrong.\nCheck the console for details.')
    console.log(error);
});
// LOADING.MESSAGE
$(document).ready(function () {
    $('#loadingM').text('Loading...');
});
//TEXT.BOX
$('#addMovieForm').css('margin', 0);
//GENERALSYTLING

$('.container').css('maring-top', '10px');