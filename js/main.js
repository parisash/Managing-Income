incomeInput=[];
expenseInput=[];
var incomeSum=0;
var expenseSum=0;

function saveIncome() {
     incomeInput.push(document.getElementById("income").value);
     var incomeValue=document.getElementById("income").value;
     document.getElementById("showIncome").innerHTML += '<p>' + incomeValue + '</p>'; 
}  

function saveExpense() {
     expenseInput.push(document.getElementById("expense").value);
     var expenseValue=document.getElementById("expense").value;
     document.getElementById("showExpense").innerHTML += '<p>' + expenseValue + '</p>';
}

function compareValues() {
    for(var i = 0; i < incomeInput.length; i++) {
        incomeSum+=Number(incomeInput[i]);
    }

    for(var i = 0; i < expenseInput.length; i++) {
        expenseSum+=Number(expenseInput[i]);
    }

    var saving=incomeSum-expenseSum;

    document.getElementById("showResult").innerHTML="Your saving:"+saving;

    if(saving>0) {
        document.getElementById("compareValue").innerHTML="Your expense is less than your income";
    }
    else if(saving<0) {
        document.getElementById("compareValue").innerHTML="Your expense is more than your income";
    }
    else {
        document.getElementById("compareValue").innerHTML="Your expense is equal to your income";
    }
}


