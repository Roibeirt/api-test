const gifImageContainer = document.getElementById("gif-image");
const gifSearchInput = document.getElementById("gif-search");
const gifSearchButton = document.getElementById("gif-search-button");

gifSearchButton.addEventListener("click", () => {displayGif()});

const displayGif = () => {

    let gifSearchString = gifSearchInput.value;
    // console.log(gifSearchString);

    // need to figure out async before this will work I think
    // gifImageContainer.src = giphyApiCall(gifSearchString);

    giphyApiCall(gifSearchString);
    
}

const giphyApiCall = (searchString) => {

    fetch("https://api.giphy.com/v1/gifs/translate?api_key=K0O1K5iGkaJcwATT0QCbHkQX1A6mJwvc&s="+searchString, {mode: "cors"})
    .then(function(response) {
      return(response.json());
    })
    .then(function(response) {
        // console.log(response.data.images.original.url);
        gifImageContainer.src = response.data.images.original.url;
        // return(response.data.images.original.url);
    });

}