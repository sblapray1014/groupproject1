$(document).ready(function () {

    $(".button").on("click", function (event) {
        var genre = $("select").val();
        var year = $("release-year").val();

        var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=8abf4717f6a2f21970e78497f3451f44&with_genres="
            + genre + "&primary_release_year=" + year + "&sort_by=vote_average.desc&vote_count.gte=40";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
        
        });

    $("#release-year").val("");
    $("select").val("0");
    });
});

var d = new Date();
var timeStamp = d.getTime();
console.log(timeStamp);
 
var gameURL ="https://api-endpoint.igdb.com//release_dates/?fields=*&filter[platform][eq]=48&order=date:asc&filter[date][gt]=1528771788961&expand=game"

$.ajax({ 
 url: gameURL, 
 method: "GET",
 headers: {
 "user-key":"e67ff0c6f63dbc0333511e5f9d22b691", 
 "Access-Control-Allow-Origin":"*",
 "Access-Control-Allow-Origin": "<origin>",
 "accept":"application/json",
 }
});




