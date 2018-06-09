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