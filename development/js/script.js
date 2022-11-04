
var gifyAPIKey = 'api_key=8B8Dz13cq4e3mCGPxdNdRL48IPTUIdbT';
var oMBdAPI = "http://www.omdbapi.com/?i=tt3896198&apikey=f90595f6";

// http://www.omdbapi.com/?i=tt3896198&apikey=f90595f6&s=avengers&y=2005&type=movie

// send this url
// 

// get user input from search form
function handleSearchFormSubmit(event) {
    event.preventDefault();
  
    var searchInputVal = document.querySelector('#search-input').value;
    var formatInputVal = document.querySelector('#format-input').value;
  
    if (!searchInputVal) {
      console.error('You need a search input value!');
      return;
    }
  
    searchApi(searchInputVal, formatInputVal);
  }

  // create url string
  function searchApi(query, format) {
    var locQueryUrl = 'https://www.loc.gov/search/?fo=json';
  
    if (format) {
      locQueryUrl = 'https://www.loc.gov/' + format + '/?fo=json';
    }
  
    locQueryUrl = locQueryUrl + '&q=' + query;
  
    fetch(locQueryUrl)
      .then(function (response) {
        if (!response.ok) {
          throw response.json();
        }
  
        return response.json();
      })
      .then(function (locRes) {
        // write query to page so user knows what they are viewing
        resultTextEl.textContent = locRes.search.query;
  
        console.log(locRes);
  
        if (!locRes.results.length) {
          console.log('No results found!');
          resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';
        } else {
          resultContentEl.textContent = '';
          for (var i = 0; i < locRes.results.length; i++) {
            printResults(locRes.results[i]);
          }
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }



