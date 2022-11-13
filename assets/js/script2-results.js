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
var searchedMoviesEl = document.getElementById('searchedMovies')

var gifCollectionEl = document.querySelectorAll('img');

// event listener to return to search page
goBackEl.addEventListener("click", function (event){
    // display the main search html page 
    window.location = 'index.html';
    console.log("go back button is clicked first log");
    removePastSearch();
    console.log("go back button is clicked second log");
})

// event listener to view past search results

searchedMoviesEl.addEventListener("click", function(event){
    var element = event.target;
    if (element.matches(".pastSearchBtn")) {
    var searchResults= element.textContent.split('/');

    var searchName = searchResults[0];
    var searchType = searchResults[1];

    searchOMBdApi(searchName, searchType);
    searchGIFApi(searchName);
    }        
});