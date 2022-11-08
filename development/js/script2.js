
// hooks to DOM
// var searchFilterEl = document.getElementById('TBD') // this is the drop down on the seach form
var searchBtnEl = document.getElementById('btn'); // this is the search button
var movieTitleEl = document.getElementById('title') // this is the movie title
var movieYearEl = document.getElementById('year') // this is the movie year
var movieRatedEl = document.getElementById('rated') // this is the movie year
var movieReleasedEl = document.getElementById('released') // this is the movie released
var movieGenreEl = document.getElementById('genre') // this is the movie released
var movieDirectorEl = document.getElementById('director') // this is the movie released
var movieRuntimeEl = document.getElementById('runtime') // this is the movie released
var movieRatingsEl = document.getElementById('ratings') // this is the movie released
var moviePlotEl = document.getElementById('plot') // this is the movie released
var goBackEl = document.getElementById('TBD') // this is the back button
// var searchNameEl = document.getElementById('TBD') // this is the text field on form

// declare variables
// variables to be passed to the API
// var searchType = searchFilterEl.value;
// var searchWord = searchNameEl.value;




// event listeners

searchBtnEl.addEventListener("click", function (event){
    // display the search results html page 
    window.location = 'search-results.html' // whatever this html is is

})

// goBackEl.addEventListener("click", function (event){
//     // display the main search html page 
//     window.location = 'index.html' // whatever this html is is

// })