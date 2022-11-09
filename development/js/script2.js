
// hooks to DOM
var searchBtnEl = document.getElementById('btn'); 





// event listeners

searchBtnEl.addEventListener("click", function (event){
    event.preventDefault();
    handleSearchFormSubmit();
    // display the search results html page 
    window.location = 'search-results.html' // whatever this html is is
    console.log('searched')

})

