// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(responseJson) {
            let myAstronautDiv = document.getElementById("container");
            let myAstroCountDiv = document.getElementById("count");
            myAstroCountDiv.innerHTML += ` <br> Astronaut Count: ${responseJson.length}`;
            let content = "";
            responseJson.sort(function(astro1, astro2){return astro2.hoursInSpace - astro1.hoursInSpace});
            for (let index = 0; index < responseJson.length; index++) {
                let activeGreen = "";
                if (responseJson[index].active === true){
                    activeGreen = "activeGreenText";
                }
                content += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${responseJson[index].firstName} ${responseJson[index].lastName}</h3>
                        <ul>
                            <li>Hours in Space: ${responseJson[index].hoursInSpace}</li>
                            <li class="${activeGreen}">Active: ${responseJson[index].active}</li>
                            <li>Skills: ${responseJson[index].skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${responseJson[index].picture}">
                </div>
                `
            }
            myAstronautDiv.innerHTML = content;
        });
    });
});