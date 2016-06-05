$(function() {
  console.log("Loading cities");

  function loadCities() {
    $.ajaxSetup({cache: false});
    $.getJSON("/api/cities/", function(cities) {
      console.log(cities);
      var message = "No city";
      if (cities.length > 0) {
         message = cities[0].country + " " + cities[0].city;
      }
      $("h3").text(message);
    });
  };

  loadCities();
  setInterval(loadCities, 2000);

});