// get user input from search form
function handleSearchFormSubmit() {

  var searchParamsArr = document.location.search.split('&');

  // Get the input and media type values
  var searchInputVal = searchParamsArr[0].split('=').pop();
  
  var mediaTypetVal = searchParamsArr[1].split('=').pop();

  searchOMBdApi(searchInputVal, mediaTypetVal);
  searchGIFApi(searchInputVal);
}

  // request OMBdApi
function searchOMBdApi(query, type) {
  var oMBdAPI = "https://www.omdbapi.com/?i=tt3896198&apikey=f90595f6";

  oMBdAPI = oMBdAPI + '&t=' + query;

  if (type) {
    oMBdAPI = oMBdAPI + '&type=' + type;
  }

  fetch(oMBdAPI)
    .then(function (response) {
      if (!response.ok) {
        throw response.json();
      }

      return response.json();
    })
    .then(function (oMBdreply) {

      if (!oMBdreply.Title) {
        console.log('No results found!');
      } else {
          printResults(oMBdreply);
      }
    })
    .catch(function (error) {
      console.error(error);
    });
}

// request GIFs
function searchGIFApi(query) {

  var gifyAPIKey = 'https://api.giphy.com/v1/gifs/search?api_key=6mOQAyZsL07sX4D85ogu42AL0qo2p0Hh&limit=4&rating=g&lang=en&';

  gifyAPIKey = gifyAPIKey + 'q=' + query;

  fetch(gifyAPIKey)
    .then(function (response) {
      if (!response.ok) {
        throw response.json();
      }
      return response.json();
    })
    .then(function (gifyReply) {

      if (!gifyReply.data) {
        console.log('No results found!');
      } else {
          printGifs(gifyReply);
      }
    })
    .catch(function (error) {
      console.error(error);
    });
}

// function to print result for oMBD
function printResults(oMBdreply){
  movieTitleEl.innerHTML = oMBdreply.Title;
  movieYearEl.innerHTML = "Year: " + oMBdreply.Year;
  movieRatedEl.innerHTML = "Rated:" + oMBdreply.Rated;
  movieReleasedEl.innerHTML = "Released: " + oMBdreply.Released;
  movieGenreEl.innerHTML = "Genre: " + oMBdreply.Genre;
  movieDirectorEl.innerHTML = "Director: " + oMBdreply.Director;
  movieRuntimeEl.innerHTML = "Runtime: " + oMBdreply.Runtime;
  movieRatingsEl.innerHTML = "Rating: " + oMBdreply.Ratings[1].Value + " Source: " + oMBdreply.Ratings[1].Source;
  moviePlotEl.innerHTML = "Plot: " + oMBdreply.Plot;
}

// function to print gifs
function printGifs(gifs){
  for(i=0; i<4; i++) {
    gifCollectionEl[i].setAttribute("src", gifs.data[i].images.fixed_height_small.url);
  }
}

function displaySearchResultsLocStor(){
  var searchList = [];
  var namesList = localStorage.getItem("searchInput");
  searchList = JSON.parse(namesList);

  var namList = localStorage.getItem("mediaType");
  var mediaList = JSON.parse(namList);

  // display past search for 6 elements
  for(var i=searchList.length-1; i >= 0; i--) {
    var appendedLi = document.getElementsByTagName("li");
    if (appendedLi.length == 6){
      appendedLi[6].remove();
    }else{
    // display search list
    var searchedMoviesEl = document.getElementById('searchedMovies')
    var newLi = document.createElement("li");
    var newBtn = document.createElement("button");
    newBtn.classList.add("pastSearchBtn");
    searchedMoviesEl.append(newLi);
    newLi.append(newBtn);
    newBtn.textContent = searchList[i] + " / " + mediaList[i];
    }
  }
}

handleSearchFormSubmit();
displaySearchResultsLocStor();