async function makeAPIRequest(requestURL) {

    let response = await fetch(requestURL);

    if (response.ok) { 
        
        return response.json();

    } else {
        console.error("HTTP Error" + response.statusText)
        alert("HTTP-Error: " + response.status);
    }
}

function getdog() {
    getdogpicture("dog1")
    getdogpicture("dog2")
    getdogpicture("dog3")
}

function getdogpicture(picture) {

    console.log("getting dog picture")

    var URL = "https://dog.ceo/api/breeds/image/random"

    makeAPIRequest(URL).then(response => {

        console.log("Full Response 1: ")
        console.log(response)

        console.log("finished making API request 1")

        document.getElementById(picture).src = response.message
    })
}

getdog()