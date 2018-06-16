$(document).ready(function () {
    $("#results-card").hide();

    $(".button").on("click", function (event) {
        var d = new Date();
        var timeStamp = d.getTime();
        console.log(timeStamp);

        var system = $("select").val();
        var gameURL = "https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com//release_dates/?fields=*&filter[platform][eq]=" + system + "&order=date:asc&filter[date][gt]=" + timeStamp + "&expand=game";

        $.ajax({
            url: gameURL,
            method: "GET",
            headers: {
                "user-key": "37905d1e3217ff06e9e4078eae9dcb03",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Origin": "<origin>",
                "accept": "application/json",
            }
        }).then(function (response) {
            console.log(response);
            var results = response;

            //  $("#search-card").hide();
            $("#results-card").show();


                for (var i = 0; i < results.length; i++) {
                    var game = results[i].game.name;
                    $("#search-card").hide();
                    $("#results-card").show();
                    var newDiv = $("<div>");
                    newDiv.addClass("game-name");
                    var header = $("<h3>").text(game);
                    var gamePoster = $("<img>");
                    gamePoster.addClass("game-poster");
                    gamePoster.attr("src", "https:" + results[i].game.cover.url);
                    var thirdDiv = $("<div>");
                    thirdDiv.addClass("paragraph-height");
                    var overview = $("<p>").text(results[i].game.summary);
                    var secondDiv = $("<div>");
                    secondDiv.addClass("rating-section");
                    var ratingImage = $("<img>");
                    ratingImage.addClass("rating-image");
                    ratingImage.attr("src", "https://www.shareicon.net/download/2015/12/14/687124_empty.svg");
                    overview.addClass("overview");
                    var rDate = $("<p>").text("Release Date: " + results[i].human);
                    var vote = $("<p> User Ratings:").text(results[i].game.player_perspectives);
                    vote.addClass("user-rating");
                    secondDiv.append(vote, ratingImage);
                    thirdDiv.append(overview);
                    newDiv.append(header, gamePoster, rDate, thirdDiv, secondDiv);
                    console.log(newDiv);
                    $("#results-card").append(newDiv);
                }
                if (response.results == 0) {
                    $("#search-card").hide();
                    $("#results-card").show();
                    console.log("hello");
                    var errorImage = $("<img>");
                    errorImage.attr("src", "https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr08/16/1/anigif_enhanced-buzz-20359-1397626437-14.gif");
                    errorImage.css({ "height": "350px", "width": "550px", "margin": "auto" });
                    $("#results-card").append(errorImage);
                }
            });

        });
    });

// <<<<<<< jsFix
//   });

// =======
// $.ajax({ 
//  url: gameURL, 
//  method: "GET",
//  headers: {
//  "user-key":"0ca0f25235d5e6e6661ebc4fa43793f3", 
//  "Access-Control-Allow-Origin":"*",
//  "Access-Control-Allow-Origin": "<origin>",
//  "accept":"application/json",
//  }
// >>>>>>> master
// });
