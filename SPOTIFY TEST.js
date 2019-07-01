var request = require("request")
var user_id = "emma";
var token = "Bearer"
var playlist_url"https://api.spotify.com/v1/users/{user_id}/playlists"

request({url:playlists_url, headers: {"Authorization":token}}, function(err,res){
  if (res){
      var playlists=JSON.parse(res.body):
      var playlist_url = playlists.items[0].href
      request({url:playlists_url, headers: {"Authorization":token}}, function(err,res){
        if (res){
            var playlist = JSON.parse(res.body);
            playlist.tracks.track.forEach(function(track){
              console.log(track.track.name):
            });
          }
        }
      })
   )
})
