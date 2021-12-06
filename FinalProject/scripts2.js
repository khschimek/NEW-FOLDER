function load() {
    
    var result = localStorage.getItem("userInput2")
    
    document.getElementById("list2").innerHTML = result

}

load()

function save() {
    
    console.log("save function called")

    var oldstorage = localStorage.getItem("userInput2")

    var userInput2

    if (oldstorage != null) {
    
        userInput2 = oldstorage + "<br>" + document.getElementById("userInput2").value

    } else {

        userInput2 = document.getElementById("userInput2").value
        
    }

    localStorage.setItem("userInput2", userInput2)

    console.log(userInput2 + " save to local storage")

    document.getElementById("list2").innerHTML = userInput2

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

        var oldstorage = localStorage.getItem("userInput2")

        var userInput2

        if (oldstorage != null) {
        
            userInput2 = oldstorage + "<br>" + response

        } else {

            userInput2 = response
            
        }

        localStorage.setItem("userInput2", userInput2)

        console.log(userInput2 + " save to local storage")

        document.getElementById("list2").innerHTML = userInput2

    })

}

function remove() {

    localStorage.removeItem("userInput2")

    console.log("local storage emptied")

    document.getElementById("list2").innerHTML = ""

}