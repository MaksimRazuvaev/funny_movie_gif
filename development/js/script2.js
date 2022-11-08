
// hooks to DOM
// var searchFilterEl = document.getElementById('TBD') // this is the drop down on the seach form
var searchBtnEl = document.getElementById('btn'); 
var movieTitleEl = document.getElementById('title') 
var movieYearEl = document.getElementById('year') 
var movieRatedEl = document.getElementById('rated') 
var movieReleasedEl = document.getElementById('released') 
var movieGenreEl = document.getElementById('genre') 
var movieDirectorEl = document.getElementById('director')
var movieRuntimeEl = document.getElementById('runtime') 
var movieRatingsEl = document.getElementById('ratings') 
var moviePlotEl = document.getElementById('plot') 
var goBackEl = document.getElementById('back-btn') // this is the back button

var gifCollectionEl = document.querySelectorAll('img');




// event listeners

searchBtnEl.addEventListener("click", function (event){
    // display the search results html page 
    window.location = 'search-results.html' // whatever this html is is

})

goBackEl.addEventListener("click", function (event){
    // display the main search html page 
    window.location = 'index.html' 

})