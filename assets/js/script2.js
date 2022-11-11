
// hooks to DOM
var searchBtnEl = document.getElementById('btn'); 

// variables to store the local storage
let arrSearchInput = [];
let arrMediaType = [];


// event listeners

searchBtnEl.addEventListener("click", function (event){
    event.preventDefault();
    handleSearchFormSubmit();
    // display the search results html page 
    window.location = 'search-results.html' // whatever this html is is
    console.log('searched')

})

// function to set search data to local storage arrays

function setLocalStorage(searchInputVal, mediaTypetVal){

    arrSearchInput.push(searchInputVal);
    arrMediaType.push(mediaTypetVal);

    localStorage.setItem("searchInput", JSON.stringify(arrSearchInput));
    localStorage.setItem("mediaType", JSON.stringify(arrMediaType));


}

