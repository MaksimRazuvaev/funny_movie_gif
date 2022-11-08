
var gifyAPIKey = 'api_key=8B8Dz13cq4e3mCGPxdNdRL48IPTUIdbT';
var oMBdAPI = "http://www.omdbapi.com/?i=tt3896198&apikey=f90595f6";

// http://www.omdbapi.com/?i=tt3896198&apikey=f90595f6&s=avengers&y=2005&type=movie

// send this url
// 

// get user input from search form
function handleSearchFormSubmit(event) {
    event.preventDefault();
  
    var searchInputVal = document.querySelector('#search-input').value;
    var mediaTypetVal = document.querySelector('#media-input').value;
  
    if (!searchInputVal) {
      console.error('You need a search input value!');
      return;
    }
  
    searchOMBdApi(searchInputVal, mediaTypetVal);
  }



  // request 
  function searchOMBdApi(query, type) {
    var oMBdAPI = "http://www.omdbapi.com/?i=tt3896198&apikey=f90595f6";
  
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

        if (!oMBdreply.title) {
          console.log('No results found!');
        } else {
          resultContentEl.textContent = '';
          for (var i = 0; i < locRes.results.length; i++) {
            printResults(oMBdreply);
          }
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }

// function to print result for oMBD
function printResults(oMBdreply){
  
  //DOM hook   .innerHTML = searchResult.title;
  //DOM hook   .innerHTML = searchResult.year;
  //DOM hook   .innerHTML = searchResult.rated;
  //DOM hook   .innerHTML = searchResult.released;
  //DOM hook   .innerHTML = searchResult.genre;
  //DOM hook   .innerHTML = searchResult.director;
  //DOM hook   .innerHTML = searchResult.runtime;
  //DOM hook   .innerHTML = searchResult.ratings;
  //DOM hook   .innerHTML = searchResult.plot;
}
