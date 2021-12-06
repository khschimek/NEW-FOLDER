function load() {
    
    var result = localStorage.getItem("userInput1")
    
    document.getElementById("list1").innerHTML = result

}

load()

function save() {
    
    console.log("save function called")

    var oldstorage = localStorage.getItem("userInput1")

    var userInput1

    if (oldstorage != null) {
    
        userInput1 = oldstorage + "<br>" + document.getElementById("userInput1").value

    } else {

        userInput1 = document.getElementById("userInput1").value
        
    }

    localStorage.setItem("userInput1", userInput1)

    console.log(userInput1 + " save to local storage")

    document.getElementById("list1").innerHTML = userInput1

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

        var oldstorage = localStorage.getItem("userInput1")

        var userInput1

        if (oldstorage != null) {
        
            userInput1 = oldstorage + "<br>" + response

        } else {

            userInput1 = response
            
        }

        localStorage.setItem("userInput1", userInput1)

        console.log(userInput1 + " save to local storage")

        document.getElementById("list1").innerHTML = userInput1

    })

}

function remove() {

    localStorage.removeItem("userInput1")

    console.log("local storage emptied")

    document.getElementById("list1").innerHTML = ""

}