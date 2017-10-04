
let search = document.getElementById("search");
let displayResults = document.querySelector(".results");

search.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    displayResults.innerHTML = '';
    let url = "https://itunes.apple.com/search?term=" + search.value;


    axios.get(url).then(function (response) {
      let arr = response.data.results;
      for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].artworkUrl100);

        const albumCover =
          `<div class="boxes">
              <img src="${arr[i].artworkUrl100}" id="${arr[i].previewUrl}" />
              <p>${arr[i].trackName}, ${arr[i].artistName}</p>
              
          </div>`;

        displayResults.innerHTML += albumCover;
      }
    });
  }
});

displayResults.addEventListener("click", function (e) {
  if (e.target && e.target.nodeName == "IMG") {
    let song = e.target.getAttribute("id");
    let player = document.querySelector(".musicPlayer");
    player.setAttribute("src", song);
  }
});







