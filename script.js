window.onload=function() {
var limit,output,zero,period,operator;

var button=document.getElementById('answer');

var elem = document.querySelectorAll(".num");
var len = elem.length;
    for(var i = 0; i < len; i++ ) {
        elem[i].addEventListener("click",function() {
        num = this.value;
        output = button.innerHTML +=num;
        limit = output.length;
        if(limit > 16 ) {
        alert("Sorry no more input is allowed"); }
        },false);
    } 

document.querySelector(".zero").addEventListener("click",function() {
        zero = this.value;
        if(button.innerHTML === "") {
             output = button.innerHTML = zero;  
        }
        else if(button.innerHTML === output) {
             output = button.innerHTML +=zero;
        }
    },false);
    
document.querySelector(".dot").addEventListener("click",function() {
        period = this.value;
        if(button.innerHTML === "") {
           output = button.innerHTML = button.innerHTML.concat("0.");
        }
        else if(button.innerHTML === output) {
           button.innerHTML = button.innerHTML.concat(".");
        }
    },false);
    
document.querySelector("#equal").addEventListener("click",function() {
        if(button.innerHTML === output) {
          button.innerHTML = eval(output);
        }
        else {
          button.innerHTML = "";
        }
    },false);
    
document.querySelector("#cancel").addEventListener("click",function() {
        button.innerHTML = "";
    },false);
    
   
var elem1 = document.querySelectorAll(".op");
var len1 = elem1.length;
  for(var i = 0; i < len1; i++ ) {
    elem1[i].addEventListener("click",function() {
      operator = this.value;
        if(button.innerHTML === "") {
          button.innerHTML = button.innerHTML.concat("");
        }
        else if(output) {
          button.innerHTML = output.concat(operator);
        }
    },false);
  }   


}
