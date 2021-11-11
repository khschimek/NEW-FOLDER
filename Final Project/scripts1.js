function save() {
    
    console.log("save function called")

    var oldstorage = localStorage.getItem("userInput1")

    var userInput1 = oldstorage + "\n" + document.getElementById("userInput1").value

    localStorage.setItem("userInput1", userInput1)

    console.log(userInput1 + " save to local storage")

    document.getElementById("list1").innerHTML = userInput1

}

function remove() {

    localStorage.removeItem("userInput1")

    console.log("local storage emptied")

    document.getElementById("list1").innerHTML = ""

}