let cityName = document.getElementById("cityName");
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getInfo(cityName.value);
});

function getInfo(city) {
  fetch(
    "http://api.weatherapi.com/v1/current.json?key=844acef0333e4356bca33642231004&q=" +
      city,
    {
      mode: "cors",
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response.current);
    })
    .catch(function (error) {
      console.log("l");
    });
}
