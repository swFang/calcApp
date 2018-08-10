var curNum = 0;
var storedNum = null;
var storedOp = null; 
var prevAns = null; 
var decimal = false;



//ALL CALCULATOR FUNCTIONS ARE A operator B 
//EX. subtract(a,b) == a - b     
//    divide(a,b)   == a / b
function add(a,b){
    return (a+b);
}

function subtract(a,b){
    return(a-b);
}

function multiply(a,b){
    return (a*b); 
}

function divide(a,b){
    if(b == 0){
        return "ERROR"
    } 
    return (a/b);
}


//calls the correct operator on operand1 and operand 2 in that order 
function operate(operator, operand1, operand2){
    var ans;
    switch(operator){
        case "add":
            ans = add(operand1, operand2);
            return ans;
        case "minus" :
            ans = subtract(operand1, operand2);
            return ans;
        case "times" :
            ans = multiply(operand1, operand2);
            return ans;
        case "divide" :
            ans = divide(operand1, operand2);
            return ans;
    }
}

function addListensers(){
   var tmp = document.getElementsByTagName("button");
   var arr = Array.prototype.slice.call(tmp);
  
   arr.forEach(function(child){
       child.addEventListener("click", clicked);
   })
}


function clicked(){
    var classes = this.getAttribute("class");
    
    
    if(classes.includes("num")){
        prevAns = null;
        if(curNum > 999999999999){
            updateDisplay("NUM TOO BIG!");
            classes[0] = "reset";
        } else if (decimal == true){
            tmp = numClicked(this.id);
            curNum = "" + curNum + "." + tmp;
            curNum = parseFloat(curNum);
            updateDisplay(curNum);
        } else{

        tmp = numClicked(this.id);
        if(curNum == 0){
            curNum = tmp;
        } else {
            curNum = "" + curNum + tmp; 
            curNum = parseInt(curNum);
        }
        updateDisplay(curNum);
       }
    } else if (classes.includes("op")){
        decimal = false;    
        if (prevAns != null) {
            storedNum = prevAns;
            curNum = 0;
            storedOp = this.id; 
           
          
            //check bedmas ordering
        } else if (storedNum == null){
            storedNum = curNum;
            curNum = 0;
            storedOp = this.id; 
        } else {
            var ans = operate(storedOp,storedNum,curNum)
            storedNum = ans;
            curNum = 0; 
            storedOp = this.id;
            updateDisplay(storedNum);
        }

        prevAns = null;
       
    } else if (classes.includes("dec")){
        decimal = true;
        updateDisplay(curNum+".");
    } else if (classes.includes("reset")){
        curNum = 0;
        storedOp = null;
        storedNum = null;
        decimal = false;
        prevAns = null;
        updateDisplay(curNum);
    } else {

        if (storedOp != null){
            


        var ans = operate(storedOp,storedNum,curNum);
        curNum = 0;
        storedOp = null;
        storedNum = null;
        decimal = false;
        prevAns = ans;
        console.log("hit equals");
    
        updateDisplay(ans);
        }
    }
}

function numClicked(number){
    var num = getIntValue(number);
    return num;
}

function getIntValue(str){
    switch(str){
        case "zero":
            return 0 ;
        case "one":
           return 1;
        case "two":
           return 2;
        case "three":
           return 3;
        case "four":
           return 4;
        case "five":
           return 5;
        case "six":
           return 6;
        case "seven":
           return 7;
        case "eight":
           return 8;
        case "nine":
           return 9;
    }
}

function updateDisplay(toDisplay){
    //document.getElementsByTagName('div')[0].innerHTML = xxx 
    //updates display

    var tmp = toDisplay.toString();
    console.log(tmp);
    if(tmp.length >= 13) {
        tmp = tmp.substring(0, 13);
    }
    document.getElementsByTagName('div')[1].innerHTML = tmp;
}


function main(){
    addListensers();
}

main();

