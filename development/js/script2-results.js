var movieTitleEl = document.getElementById('title') 
var movieYearEl = document.getElementById('year') 
var movieRatedEl = document.getElementById('rated') 
var movieReleasedEl = document.getElementById('released') 
var movieGenreEl = document.getElementById('genre') 
var movieDirectorEl = document.getElementById('director')
var movieRuntimeEl = document.getElementById('runtime') 
var movieRatingsEl = document.getElementById('ratings') 
var moviePlotEl = document.getElementById('plot') 
var goBackEl = document.getElementById('back-button') // this is the back button

var gifCollectionEl = document.querySelectorAll('img');

goBackEl.addEventListener("click", function (event){
    // display the main search html page 
    window.location = 'index.html' 

})