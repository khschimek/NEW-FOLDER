var result = localStorage.getItem("userInput1")

if(result == null)

   result = " "

function load() {
    
    document.getElementById("list1").innerHTML = result

}

load()

function save() {
    
    console.log("save function called")

    var oldstorage

    var userInput1 = document.getElementById("userInput1").value

    if(userInput1 != null) {

        oldstorage = localStorage.getItem("userInput1")

    }

    else {

        oldstorage = ""

    }

    userInput1 = oldstorage + "<br>" + document.getElementById("userInput1").value

    localStorage.setItem("userInput1", userInput1)

    console.log(userInput1 + " save to local storage")

    document.getElementById("list1").innerHTML = userInput1

}

function remove() {

    localStorage.removeItem("userInput1")

    console.log("local storage emptied")

    document.getElementById("list1").innerHTML = ""

}