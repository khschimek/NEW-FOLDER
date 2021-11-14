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
    getdog1()
    getdog2()
    getdog3()
}

function getdog1() {

    console.log("getting dog1 image")

    var URL = "https://dog.ceo/api/breeds/image/random"

    makeAPIRequest(URL).then(response => {

        console.log("Full Response 1: ")
        console.log(response)

        console.log("finished making API request 1")

        document.getElementById("dog1").src = response.message
    })
}

function getdog2() {

    console.log("getting dog2 image")

    var URL = "https://dog.ceo/api/breeds/image/random"

    makeAPIRequest(URL).then(response => {

        console.log("Full Response 2: ")
        console.log(response)

        console.log("finished making API request 2")

        document.getElementById("dog2").src = response.message
    })
}

function getdog3() {

    console.log("getting dog3 image")

    var URL = "https://dog.ceo/api/breeds/image/random"

    makeAPIRequest(URL).then(response => {

        console.log("Full Response 3: ")
        console.log(response)

        console.log("finished making API request 3")

        document.getElementById("dog3").src = response.message
    })
}

getdog()