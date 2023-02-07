const gifImageContainer = document.getElementById("gif-image");
const gifSearchInput = document.getElementById("gif-search");
const gifSearchButton = document.getElementById("gif-search-button");

gifSearchButton.addEventListener("click", () => {
  displayGif();
});

const displayGif = async () => {
  // prevent additional calls until resolved
  gifSearchButton.disabled = true;

  const apiResponse = await giphyTranslateApiCall(gifSearchInput.value);
  gifImageContainer.src = apiResponse.data.images.original.url;

  gifSearchButton.disabled = false;
};

const giphyTranslateApiCall = async (searchString) => {
  return await fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=K0O1K5iGkaJcwATT0QCbHkQX1A6mJwvc&s=" +
      searchString,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      return response;
    });
};
