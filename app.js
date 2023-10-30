let restbutton = document.getElementById("resetbutton");
let billtext = document.getElementById("bill");
let numberofpeople = document.getElementById("people");
let totalamount = document.getElementById("total-amount");
let totalpeople = document.getElementById("total-person");
let defaultchecked = document.getElementById("five");
let customvalue = document.getElementById("custom");
let getchecked = document.getElementsByName("tipwaiter");
let warningmessage = document.getElementById("warningzero");
let people;
let bill;
let tip;
let sum;

let runcalculator = function(){
    people = numberofpeople.value;
    bill = billtext.value;
    let roundtip;
    let roundsum;
    let regex = new RegExp("^[0-9]+$");
    if(people !== '' && people !== '0' && regex.test(people)){
        warningmessage.style = "visibility: hidden;";
        for(let i = 0; i < getchecked.length; i++){
            if(getchecked[i].checked === true || getchecked[i].type === "text"){
              if(getchecked[i].value !== ''){
              tip = bill * getchecked[i].value / 100 / people;
              roundtip = Math.round(tip * 100)/100;
              totalamount.innerHTML = "€" + roundtip.toLocaleString();
              sum = bill/people;
              sum += tip;
              roundsum = Math.round(sum * 100)/100;
              totalpeople.innerHTML = "€" + roundsum.toLocaleString();
              }
            }
        }
    } else {
        warningmessage.style = "visibility: visible;";
    }
}

numberofpeople.onchange = function () {
    runcalculator();
}

billtext.onchange = function () {
    runcalculator();
}

restbutton.onclick = function () {
    billtext.value = numberofpeople.value = "0";
    totalamount.innerHTML = totalpeople.innerHTML = "€" +"0.00";
    defaultchecked.checked = true;
    customvalue.value = '';
    warningmessage.style = "visibility: hidden;";
}




