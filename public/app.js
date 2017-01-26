var data = null;


var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = callback;
  request.send();
}


var populateList = function(albums) {
  var albumListDiv = document.querySelector('#albums');
    var albumList = document.createElement('ul');

    

    // select.innerHTML = "";
    albums.forEach(function(album) {
      var li = document.createElement('li');
      li.innerText = album.name;
      albumList.appendChild(li);
      albumListDiv.appendChild(albumList);
      var li = document.createElement('artists');
      li.innerText = album.artists;
      albumList.appendChild(artists);

    });
 }    



var handleKeyPress = function() {
  var searchQuery = document.querySelector('#search-query');
  // console.log(handleKeyPress);
  textResult.innerText = this.value;
  }

var handleSelectChange = function(){
  var selectResult = document.querySelector('#albums');
  selectResult.innerText = this.value;
  }



var requestComplete = function(){
  if (this.status !== 200) return;
  var jsonString = this.responseText;
  data = JSON.parse(jsonString);
  console.log(data.albums.items);

 populateList(data.albums.items); 
}




var app = function(){
  var url = 'https://api.spotify.com/v1/search?q=christmas&type=album';
  makeRequest(url, requestComplete);

  var input = document.querySelector('input');
  input.onkeyup = handleKeyPress;


}



window.onload = app;