// hooks to DOM
var searchBtnEl = document.getElementById('btn'); 

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