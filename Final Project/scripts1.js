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
    
        userinput1 = oldstorage + "<br>" + document.getElementById("userInput1").value

    } else {
        // userinput1 = document.getElementById()
    }
    // if oldstorage is empty, ignore the next few lines
    // else append user input and set new local storage

    localStorage.setItem("userInput1", userInput1)

    console.log(userInput1 + " save to local storage")

    document.getElementById("list1").innerHTML = userInput1

}

function remove() {

    localStorage.removeItem("userInput1")

    console.log("local storage emptied")

    document.getElementById("list1").innerHTML = ""

}