"use strict";


let search = {
    "async": true,
    "crossDomain": true,
    "url": `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${input}`,
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
        "x-rapidapi-key": "93dc77fa6bmsh779ff746556d205p165970jsncb50661a2d97"
    }
};
let ajaxSearch =
$.ajax(search).done(function (response) {

    console.log(response);
});


