$('#input').val()

var userSearch = 'Halo';
var releaseYear = '2013'
var genre = "Action"

var gameURL = "https://api-endpoint.igdb.com/games/?search=" + userSearch + "&order=popularity:asc"


$.ajax({
    url: gameURL,
    method: "GET",
    headers: {
        "user-key": "e67ff0c6f63dbc0333511e5f9d22b691",
        "accept": "application/json"
    }
  });