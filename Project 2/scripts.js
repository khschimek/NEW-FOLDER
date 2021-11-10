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

    console.log("getting dog image")

    var URL = "https://dog.ceo/api/breeds/image/random"

    makeAPIRequest(URL).then(response => {

        console.log("Full Response: ")
        console.log(response)

        console.log("finished making API request")

        document.getElementById("dog").src = response.message
    })
}