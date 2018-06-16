$(document).ready(function () {
    $("#results-card").hide();

 $(".button").on("click", function (event) {
    var d = new Date();
    var timeStamp = d.getTime();
    console.log(timeStamp);
 
    var system = $("select").val(); 
    var gameURL ="https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com//release_dates/?fields=*&filter[platform][eq]="+ system +"&order=date:asc&filter[date][gt]="+ timeStamp +"&expand=game";
 
    $.ajax({ 
    url: gameURL, 
    method: "GET",
    headers: {
    "user-key":"312d350868fb549677d49341f1b9122a", 
    "Access-Control-Allow-Origin":"*",
    "Access-Control-Allow-Origin": "<origin>",
    "accept":"application/json",
    }
    }).then(function (response) {
        console.log(response);
            var results = response;

            //  $("#search-card").hide();
        $("#results-card").show();

            results.forEach(function(videoGame){

            var game = videoGame.game.name;

            if($("#results-card").contains(videoGame.game).length > 0)
            console.log('yeah baby');
        
            // <img src="${imgSrc}">
        
            var summary = videoGame.game.summary;
            var releaseDate = videoGame.game.release_dates[0].human;
            var rating = videoGame.game.player_perspectives;
            var imgSrc = ("src", videoGame.game.cover.url);
            
        var movieCard = $(`<div class="movie">
                                <h3>${game}</h3>
                                <p>${summary}</p>
                                <img ${imgSrc} alt="">
                                <p>Release Date: ${releaseDate}</p>
                                <p> User Ratings: ${rating}</p>
                            </div>`);

                            
            $("#results-card").append(movieCard);
            $("#results-card").append(imgSrc);

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
