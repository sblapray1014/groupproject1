$(document).ready(function () {
$("#results-card").hide();

    $(".button").on("click", function (event) {
        var genre = $("select").val();
        var year = $("#release-year").val();
        console.log(year);

        var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=8abf4717f6a2f21970e78497f3451f44&with_genres="
            + genre + "&primary_release_year=" + year + "&sort_by=vote_average.desc&vote_count.gte=40";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
        var results = response.results;
        console.log(results);
        for (var i = 0; i < results.length; i++) {
        var movie = results[i].title;
        $("#search-card").hide();
        $("#results-card").show();
        var newDiv = $("<div>");
        newDiv.addClass("movie");
        var header = $("<h3>").text(movie);
        var moviePoster = $("<img>");
        moviePoster.addClass("image-poster");
        moviePoster.attr("src", "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + results[i].poster_path);
        var thirdDiv = $("<div>");
        thirdDiv.addClass("paragraph-height");
        var overview = $("<p>").text(results[i].overview);
        var secondDiv = $("<div>");
        secondDiv.addClass("rating-section");
        var ratingImage = $("<img>");
        ratingImage.addClass("rating-image");
        ratingImage.attr("src", "https://www.shareicon.net/download/2015/12/14/687124_empty.svg");
        overview.addClass("overview");
        var rDate = $("<p>").text("Release Date: " + results[i].release_date);
        var vote = $("<p>").text(results[i].vote_average);
        vote.addClass("user-rating");
        secondDiv.append(vote, ratingImage);
        thirdDiv.append(overview);
        newDiv.append(header, moviePoster, rDate, thirdDiv, secondDiv);
        console.log(newDiv);
        $("#results-card").append(newDiv);
    }  if (response.results.length == 0) {
        $("#search-card").hide();
        $("#results-card").show();
        console.log("hello");
        var errorImage = $("<img>");
        errorImage.attr("src", "https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr08/16/1/anigif_enhanced-buzz-20359-1397626437-14.gif");
        errorImage.css({"height":"350px", "width": "550px", "margin": "auto"});
        $("#results-card").append(errorImage);
    }
        });

    $("#release-year").val("");
    $("select").val("0");
    });
});

var d = new Date();
var timeStamp = d.getTime();
console.log(timeStamp);
 
var gameURL ="https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com//release_dates/?fields=*&filter[platform][eq]=48&order=date:asc&filter[date][gt]=1528771788961&expand=game"

$.ajax({ 
 url: gameURL, 
 method: "GET",
 headers: {
 "user-key":"0ca0f25235d5e6e6661ebc4fa43793f3", 
 "Access-Control-Allow-Origin":"*",
 "Access-Control-Allow-Origin": "<origin>",
 "accept":"application/json",
 }
});




