function save() {
    
    console.log("save function called")

    var oldstorage = localStorage.getItem("userInput")

    var userInput = oldstorage + "\n" + document.getElementById("userInput").value

    console.log(userInput)

    localStorage.setItem("userInput", userInput)

    console.log(userInput + " save to local storage")

}

function load() {
    
    var result = localStorage.getItem("userInput")

    console.log("RESULT: " + result)

}