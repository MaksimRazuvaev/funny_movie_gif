
var searchFormEl = document.querySelector('#search-form');


function getSearchRequest(event) {
  event.preventDefault();

  var userInputVal = document.querySelector('#search-input').value;
  var mediaInputVal = document.querySelector('#media-input').value;


  console.log(userInputVal);
  console.log(mediaInputVal);


  if (!userInputVal) {
    console.error('Please search Title!');
    return;
  }

  var queryString = './search-results.html?t=' + userInputVal + '&type=' + mediaInputVal;


  console.log("query string ", queryString);

 location.assign(queryString);

 setLocalStorage(userInputVal, mediaInputVal);

}


searchFormEl.addEventListener('submit', getSearchRequest);

