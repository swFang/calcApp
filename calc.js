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
        case "+":
            ans = add(operand1, operand2);
            return ans;
        case "-" :
            ans = subtract(operand1, operand2);
            return ans;
        case "*" :
            ans = multiply(operand1, operand2);
            return ans;
        case "/" :
            ans = divide(operand1, operand2);
            return ans;
    }
}

