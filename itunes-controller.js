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
        for (var i = 0; i < results.length; i++) {
            const song = results[i];
            if(song.kind == "song"){
            template += 
            `
            <div id="outline" class="col-3 offset-md-1">
                <div class="row">
                  <div class="col d-inline-flex">
                    <span class="border border-dark">
                      <img class="rounded" src="${song.albumArt}" width="150" height="150" alt="">
                    </span>
                  </div>
                  <div class="col d-flex flex-column justify-content-start"> 
                    <h5 class="truncate">Song: ${song.title}</h5>
                    <h5>Artist: ${song.artist} </h5>
                    <h6>Album: ${song.collection}</h6>
                    <h6>Price: $${song.price}</h6>
                  </div>
                </div>     
                <div class="row d-flex justify-content-center">
                    <audio controls>
                        <source src="${song.preview}" type="audio/mpeg">
                    </audio>
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