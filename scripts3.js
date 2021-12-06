function load() {
    
    var result = localStorage.getItem("userInput3")
    
    document.getElementById("list3").innerHTML = result

}

load()

function save() {
    
    console.log("save function called")

    var oldstorage = localStorage.getItem("userInput3")

    var userInput3

    if (oldstorage != null) {
    
        userInput3 = oldstorage + "<br>" + document.getElementById("userInput3").value

    } else {

        userInput3 = document.getElementById("userInput3").value
        
    }

    localStorage.setItem("userInput3", userInput3)

    console.log(userInput3 + " save to local storage")

    document.getElementById("list3").innerHTML = userInput3

}

async function makeAPIRequest(requestURL) {

    let response = await fetch(requestURL);

    if (response.ok) { 
        
        return response.json();

    } else {

        console.error("HTTP Error" + response.statusText)

        alert("HTTP-Error: " + response.status);

    }

}

// API is from https://random-word-api.herokuapp.com/home
function random() {

    console.log("random word called")

    var URL = "https://random-word-api.herokuapp.com/word?number=1"

    makeAPIRequest(URL).then(response => {

        console.log("full response: ")

        console.log(response)

        console.log("finished making API request")

        var oldstorage = localStorage.getItem("userInput3")

        var userInput3

        if (oldstorage != null) {
        
            userInput3 = oldstorage + "<br>" + response

        } else {

            userInput3 = response
            
        }

        localStorage.setItem("userInput3", userInput3)

        console.log(userInput3 + " save to local storage")

        document.getElementById("list3").innerHTML = userInput3

    })

}

function remove() {

    localStorage.removeItem("userInput3")

    console.log("local storage emptied")

    document.getElementById("list3").innerHTML = ""

}