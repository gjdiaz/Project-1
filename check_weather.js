// borrowed from activity 9 Demo Dynamic
// reference https://w3collective.com/fetch-display-api-data-javascript/
var weatherContainer = document.getElementById('weather');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  fetch("https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=3", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
		"x-rapidapi-key": "901cbaf60cmsh5e5bea7d5f1a8bap1edabajsn89697e7fb7b8"
	}})
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          var current = document.createElement('h3');
          current.textContent = data[i].condition.text;
          weatherContainer.append(current);
      };
});

fetchButton.addEventListener('click', getApi);
}