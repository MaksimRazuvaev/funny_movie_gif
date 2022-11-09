var searchFormEl = document.querySelector('#media-input');

function getSearchReques(event) {
  event.preventDefault();

  var userInputVal = document.querySelector('#search-form').value;
  var mediaInputVal = document.querySelector('#media-input').value;

  if (!userInputVal) {
    console.error('Please search Title!');
    return;
  }

  var queryString = './search-results.html?t=' + userInputVal + '&type=' + mediaInputVal;

  location.assign(queryString);

  //savetolocalstorage(userInputVal, formatInputVal)
}

searchFormEl.addEventListener('submit', getSearchReques);