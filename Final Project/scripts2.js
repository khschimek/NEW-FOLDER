function load() {
    
    var result = localStorage.getItem("userInput2")

    document.getElementById("list2").innerHTML = result

}

load()

function save() {
    
    console.log("save function called")

    var oldstorage = localStorage.getItem("userInput2")

    var userInput2 = oldstorage + "<br>" + document.getElementById("userInput2").value

    localStorage.setItem("userInput2", userInput2)

    console.log(userInput2 + " save to local storage")

    document.getElementById("list2").innerHTML = userInput2

}

function remove() {

    localStorage.removeItem("userInput2")

    console.log("local storage emptied")

    document.getElementById("list2").innerHTML = ""

}