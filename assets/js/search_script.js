var searchFormEl = document.querySelector('#search-form');

function getSearchRequest(event) {
  event.preventDefault();

  var userInputVal = document.querySelector('#search-input').value;
  var mediaInputVal = document.querySelector('#media-input').value;

  if (!userInputVal) {
    console.error('Please search Title!');
    return;
  }

  var queryString = './search-results.html?t=' + userInputVal + '&type=' + mediaInputVal;

 location.assign(queryString);

 setLocalStorage(userInputVal, mediaInputVal);
 console.log("local storage is set");
}

searchFormEl.addEventListener('submit', getSearchRequest);