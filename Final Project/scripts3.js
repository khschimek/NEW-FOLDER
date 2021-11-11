function load() {
    
    var result = localStorage.getItem("userInput3")

    document.getElementById("list3").innerHTML = result

}

load()

function save() {
    
    console.log("save function called")

    var oldstorage = localStorage.getItem("userInput3")

    var userInput3 = oldstorage + "<br>" + document.getElementById("userInput3").value

    localStorage.setItem("userInput3", userInput3)

    console.log(userInput3 + " save to local storage")

    document.getElementById("list3").innerHTML = userInput3

}

function remove() {

    localStorage.removeItem("userInput3")

    console.log("local storage emptied")

    document.getElementById("list3").innerHTML = ""

}