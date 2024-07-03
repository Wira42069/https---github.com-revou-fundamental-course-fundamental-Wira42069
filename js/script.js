function validateForm() {
    const name = document.forms['message-form']['name-input'].value
    
    if (name == ""){
        document.getElementById("error-name").innerHTML = "Name cannot be empty!"
        return false
    }
    
    setName(name);
    
    return false
}


function setName(name) {
    document.getElementById("name").innerHTML = name;
    document.getElementById("error-name").innerHTML = "";
}
















// let nameInput = document.getElementById("name-input")

// document.getElementById("submit").addEventListener("click", function(){
//     const name = nameInput.value
    
//     if (name == ""){
//         document.getElementById("error-name").innerHTML = "name can't be empty!"
//     } else {
//     document.getElementById("name").innerHTML = name
//     }
// })






// function replaceName(){
//     let name = prompt("Hey! What's your name?", "");
//     document.getElementById("name").innerHTML = name
// }

// replaceName()

// document.getElementById("button").addEventListener("click", function(){
//     replaceName();
// })