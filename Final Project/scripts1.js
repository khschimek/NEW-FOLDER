function load() {
    
    var result = localStorage.getItem("userInput1")
    
    document.getElementById("list1").innerHTML = result

}
//https://www.w3schools.com/jsref/jsref_pop.asp
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

function remove() {

    localStorage.removeItem("userInput1")

    console.log("local storage emptied")

    document.getElementById("list1").innerHTML = ""

}