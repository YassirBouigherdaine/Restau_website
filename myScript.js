// JavaScript source code




function mOver1(obj) {
    obj.style.width = "40%"
    const x = document.getElementsByClassName("myP");
    x[0].style.display = 'block';
}
function mOver2(obj) {
    obj.style.width = "40%"
    const x = document.getElementsByClassName("myP");
    x[1].style.display = 'block'
}
function mOver3(obj) {
    obj.style.width = "40%"
    const x = document.getElementsByClassName("myP");
    x[2].style.display = 'block'
}

function mOut(obj) {
    obj.style.width = "30%"
}


function displayContForm() {
    const c = document.getElementById("Contcontainer");
    c.style.display = "block";
}

function displayReservForm() {
    const r = document.getElementById("reservContainer");
    r.style.display = "block";
}


function validateForm() {
    let n = document.forms["myForm"]["name"].value;
    let p = document.forms["myForm"]["phone"].value;
    let e = document.forms["myForm"]["email"].value;
    let a = document.forms["myForm"]["number of Attendees"].value;
    let d = document.forms["myForm"]["date"].value;
    let t = document.forms["myForm"]["time"].value;
   
    if (n == "" || p == "" || e == "" || a == "" || d == "" || t == "") {
        alert("The form must be filled out completely");
        return false;
    }
    else {
        alert("Your reservation has been successfully made");
        return true;
    }
}





/*function mOver1(obj) {
    const x = document.getElementsByClassName("boxes");
    const p = x.getElementsByTagName("p");

    p[0].innerHTML = myP1

    obj.style.width = "60%"
}

function mOver2(obj) {
    const x = document.getElementsByClassName("boxes");
    const p = x.getElementsByTagName("p");

    p[1].innerHTML = myP2

    obj.style.width = "60%"
}
function mOver3(obj) {
    const x = document.getElementsByClassName("boxes");
    const p = x.getElementsByTagName("p");

    p[2].innerHTML = myP3

    obj.style.width = "60%"
}

function mOut(obj) {
    this.innerWidth = 50 %

}*/
