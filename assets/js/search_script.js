
var searchFormEl = document.querySelector('#search-form');


function getSearchReques(event) {
  event.preventDefault();

  var userInputVal = document.querySelector('#search-form').value;
  var mediaInputVal = document.querySelector('#media-input').value;


  console.log(userInputVal);
  console.log(mediaInputVal);


  if (!userInputVal) {
    console.error('Please search Title!');
    return;
  }

  var queryString = './search-results.html?t=' + userInputVal + '&type=' + mediaInputVal;


  console.log(queryString);


  location.assign(queryString);

  //savetolocalstorage(userInputVal, formatInputVal)
}


searchFormEl.addEventListener('search', getSearchReques);
console.log("submit button is clicked");

