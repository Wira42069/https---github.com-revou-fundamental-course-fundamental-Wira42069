// username display in intro
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




// code for showing photo banner and autoslide
var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs (n) {
        showDivs((slideIndex += n));
    }
    
    function showDivs(n) {
        var i;
        var imgList = document.getElementsByClassName("mySlides")
        if (n > imgList.length) slideIndex = 1;
        else if (n < 1) slideIndex = imgList.length;
        
        for (i = 0; i < imgList.length; i++) {
            imgList[i].style.display = "none";
        }

        imgList[slideIndex - 1].style.display = 'block'
    }

    setInterval(() => {
        plusDivs(1);
    }, 10000);
  
    


//code for displaying user information
nameInp = document.getElementById("name-input")
bdayInp = document.getElementById("bday-input")
gendInp = document.getElementsByName("gend-input").value
mssgInp = document.getElementById("mssg-input")
btn1 = document.getElementById("submit-message")
btn2 = document.getElementById("clear-message")
nameTgt = document.getElementById("name-target")
bdayTgt = document.getElementById("bday-target")
gendTgt = document.getElementById("gend-target")
mssgTgt = document.getElementById("mssg-target")

function fun1 () {
    if (document.getElementById("male").checked == true) {
        gendTgt.innerHTML = "male"
    }
    else {
        gendTgt.innerHTML = "female"
    }
    nameTgt.innerHTML = nameInp.value;
    bdayTgt.innerHTML = bdayInp.value;
    mssgTgt.innerHTML = mssgInp.value;
}

function fun2() {
    nameTgt.innerHTML = ""
    bdayTgt.innerHTML = ""
    mssgTgt.innerHTML = ""
    gendTgt.innerHTML = ""
}

btn1.addEventListener('click', fun1);
btn2.addEventListener('click', fun2);





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