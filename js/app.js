// 1) Using jquery -- create $(document).ready function

// 2) Within here put a listener on the search button -- it can be in a form or not

// 3) Get the username from the input box and put that into the gitHub api url ( https://api.github.com/users/{username} )

// 4) Use an ajax call to call to this url and get back the json data

// 5) Pull out and put the data that you need to put into the elements on your html page
$(document).ready(function(){
    var apiURL = "https://api.github.com/users/";
    
    $('#custom-button').click(function(e){
        e.preventDefault();
        $('#search-results').empty();
        $.get(apiURL + $('#git-user-search').val(), function (data){}, "json")
            .fail( function(){
                $('#search-results').css('background', 'none');
                $('#search-results').append("<h2 style=\"background: #7470ad; padding: 35px;\">User not found :(</h2>");
            })
            .done( function(data) {
                $('#search-results').append("<img class=\"results\" src=\"" + data.avatar_url + "\" alt=\"User avatar\"></img>");
                $('#search-results').append("<h2 class=\"results\">" + data.login + "</h2>");
                $('#search-results').append("<a class=\"results\" href=\"" + data.html_url + "\">" + data.html_url + "</a>");
                $('#search-results').append("<h3 class=\"results\">Public Repos: " + data.public_repos + "</h3>");
                $('#search-results').append("<h3 class=\"results\">Followers: " + data.followers + "</h3>");
                $('#search-results').css('background', '#7470ad');
            });
    });
});