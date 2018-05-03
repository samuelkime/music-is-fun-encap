function ItunesController() {
    var itunesService = new ItunesService()
    //Do Not Modify the getMusic function
    this.getMusic = function getMusic(e) {
        e.preventDefault();
        var artist = e.target.artist.value;
        itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
    }

    //Start coding here
    function draw(results) {
        console.log(results)
        var template = ''
        for (let i = 0; i < results.length; i++) {
            const song = results[i];
            if(song.kind == "song"){
            template += 
            `
            <div class="container">
              <div class="row">
                 <div class="col-12-xs col-3-xl">
                  <div class="media">
                      <div class="media-left">
                          <img src="${song.albumArt}" class="media-object" style="width:60px">
                      </div>
                      <div class="media-body">
                          <h3 class="media-heading">${song.title}</h3>
                          <h4>${song.artist}</h4>
                          <h5>Album: ${song.collection}</h5 
                          <h5>Price: $${song.price}</h5>
                      </div>
                      <div>
                          <audio controls>
                              <source src="${song.preview}" type="audio/mpeg">
                          </audio>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          `
          }
        }
        document.getElementById("songs").innerHTML = template
        document.addEventListener('play', function(e){
            var audios = document.getElementsByTagName('audio');
            for(var i = 0, len = audios.length; i < len;i++){
                if(audios[i] != e.target){
                    audios[i].pause();
                }
            }
        }, true);
    }





}