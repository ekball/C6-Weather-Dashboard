// search button handler must be written in order to get input before rest of code runs

function getApi(city) {

    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=8dc431793fa117a46c92a939890cc1fc"
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })

      .then(function (data) {
        // Use the console to examine the response
        console.log(data);

        // find the coordinates for longitude and latitude
        var longitude = data.coord.lon;
        console.log(longitude);
  
        var latitude = data.coord.lat;
        console.log(latitude);

        var longLatUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=hourly,daily&appid=8dc431793fa117a46c92a939890cc1fc"

      })

      





    //   var getRepoIssues = function (repo) {
    //     var apiUrl = 'https://api.github.com/repos/' + repo + '/issues?direction=asc';
      
    //     fetch(apiUrl).then(function (response) {
    //       if (response.ok) {
    //         response.json().then(function (data) {
    //           displayIssues(data);
      
    //           // What is this checking for? Under what condition will this be `true`?
    //           // TODO: Write your answer here
      
    //           //// this is looking to see if there are more responses than can be viewed
    //           //// issues that are the most recent will most likely not show due to the ascending sort
    //           if (response.headers.get('Link')) {
    //             displayWarning(repo);
    //           }
    //         });
    //       } else {
    //         document.location.replace('./index.html');
    //       }
    //     });
      
    


};

function searchBar() {

    

};

$("#search-button").click(function () {

    var city = $("#search-bar").val();
    console.log(city);

    getApi(city);

});





function futureForecast () {

    getApi();

    // find the forecast card elements
        // card for 1 day out
        var dayOne = $('#day1').append("<li></li>")

        // card for 2 days out
        var dayTwo = $('#day2')

        // card for 3 days out
        var dayThree = $('#day3')

        // card for 4 days out
        var dayFour = $('#day4')

        // card for 5 days out
        var dayFive = $('#day5')




    // Create a list element
    var listItem = document.createElement('li');
    var list = document.createElement('ul');

    // Set the text of the list element to the JSON response's .html_url property
    listItem.textContent = "User: " + data[i].login + " Url: " + data[i].html_url;

    // Append the li element to the id associated with the ul element.
    list.appendChild(listItem);
    userContainer.appendChild(list);

};

function currentForecast () {



};

function main() {

searchBar();

// getApi(city);

};

main();




// API Key = 8dc431793fa117a46c92a939890cc1fc