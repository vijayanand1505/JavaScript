

function ShowTime(){
    var today = new Date();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months = ['January', 'February', 'March', 'April',
                'May', 'June', 'July', 'August', 'September',
                'October', 'November', 'December'];
    
    let day = weekday[today.getDay()];
    var date = today.getDate();
    var month = months[today.getMonth()];
    var year = today.getFullYear();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var prepend = (h>=12) ? 'PM ' : ' AM ';

    document.getElementById("dateformat").innerHTML ="Today is "+ date +" "+ month + " "+ year ;
    document.getElementById("date").innerHTML ="Today is " + day ;
    document.getElementById("time").innerHTML = "Current Time is " + h + " "+ prepend+ ":" + m + ":" + s;
    setTimeout("ShowTime()", 1000);
}

function PrintWindow(){
    window.print();
}

function Add(){
    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);
    const isnumber  = number1 + number2;
    document.getElementById("result").innerHTML = isnumber; 
    console.log(`The addition of  ${number1}  and  ${number2}  is  ${isnumber}`);   
}

function Sub(){
    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);
    const isNumber  = number1 - number2;
    document.getElementById("result").innerHTML = isNumber; 
    console.log(`The Subtraction of  ${number1}  and  ${number2}  is  ${isNumber}`);
}

function Mul(){
    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);
    const isnumber  = number1 * number2;
    document.getElementById("result").innerHTML = isnumber; 
    console.log(`The multiplication of  ${number1}  and  ${number2}  is  ${isnumber}`);
}
function Div(){
    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);
    const isnumber  = number1 / number2;
    document.getElementById("result").innerHTML = isnumber; 
    console.log(`The division of  ${number1}  and  ${number2}  is  ${isnumber}`);
}

function ShowURL(){
    alert(document.URL);
}

function split(){
    var answer = prompt("What is your favorite extension?");
    if (answer != null && answer.length !== 0) {
    }
    else {
        var answer = prompt("Please enter a value");
    }
    alert(answer.split(".").pop()); 
}


function submit(){
    var fname = document.getElementById("firstName").value;
    var lname = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;

    sessionStorage.setItem("firstName",fname);
    sessionStorage.setItem("lastName",lname);

    if(fname == "" || lname == "" || email == ""){
        alert("Please fill in all fields");
    }else{
        alert("Thank you " + fname + " " + lname + " for contacting us");
    }   
}

function functionReset(){
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("Password").value = "";
}

