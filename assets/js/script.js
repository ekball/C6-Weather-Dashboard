function getApi() {

    var requestUrl = "https://api.openweathermap.org/"
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })

      .then(function (data) {
        // Use the console to examine the response
        console.log(data);

      })

};





// API Key = 8dc431793fa117a46c92a939890cc1fc