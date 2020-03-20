window.addEventListener("load",function() {
	fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
          response.json().then( function(json) {
				json.sort();
				let container = document.getElementById("container");
				for (let i = 0; i < json.length; i++) {
				let colorizerStart = "";
				let colorizerEnd = "";
				if (json[i].active === true) {
					colorizerStart = "<font color='green'>";
					colorizerEnd = "</font>";
				}
				container.innerHTML += `<div class="astronaut">
				<div class="bio">
				<h3>${json[i].firstName} ${json[i].lastName}</h3>
				<ul>
				<li>Hours in space: ${json[i].hoursInSpace}</li>
				<li>${colorizerStart}Active: ${json[i].active}${colorizerEnd}</li>
				<li>Skills: ${json[i].skills}</li>
				</ul>
				</div>
				<img class="avatar" src="images/${json[i].firstName.charAt(0).toLowerCase()+json[i].firstName.slice(1)}-${json[i].lastName.charAt(0).toLowerCase()+json[i].lastName.slice(1)}.jpg">
				</div>`
				}
				let astroCount = document.getElementById("astronautCount");
				astroCount.innerHTML += `<b><font size="72">Astronaut Count: ${json.length}`;
				});
	});
});