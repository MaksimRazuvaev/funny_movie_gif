
// hooks to DOM
var searchBtnEl = document.getElementById('btn'); 

// variables to store the local storage
// var arrSearchInput = [];
// var arrMediaType = [];

// localStorage.setItem("searchInput", JSON.stringify(arrSearchInput));
// localStorage.setItem("mediaType", JSON.stringify(arrMediaType));
// event listeners

// searchBtnEl.addEventListener("click", function (event){
//     event.preventDefault();
//     console.log("hit script2")
//     getSearchRequest(event);
//     // display the search results html page 
//     //window.location = 'search-results.html' // whatever this html is is
//     console.log('searched')

// })

// function to set search data to local storage arrays

function setLocalStorage(searchInputVal, mediaTypetVal){

    if(localStorage.hasOwnProperty("searchInput")) {
        var namesList = localStorage.getItem("searchInput");
        var arrSearchInput = JSON.parse(namesList);

        var namesList = localStorage.getItem("mediaType");
        var arrMediaType = JSON.parse(namesList);

        arrSearchInput.push(searchInputVal);
        arrMediaType.push(mediaTypetVal);
    
        localStorage.setItem("searchInput", JSON.stringify(arrSearchInput));
        localStorage.setItem("mediaType", JSON.stringify(arrMediaType));

    }else{
        var arrSearchInput = [];
        var arrMediaType = [];

        arrSearchInput.push(searchInputVal);
        arrMediaType.push(mediaTypetVal);
    
        localStorage.setItem("searchInput", JSON.stringify(arrSearchInput));
        localStorage.setItem("mediaType", JSON.stringify(arrMediaType));
    }





}