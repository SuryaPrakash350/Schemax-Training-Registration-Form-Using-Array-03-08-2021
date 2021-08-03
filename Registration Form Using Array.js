function Submit()
{
    var one = document.getElementById("one").value;

    if(one == "" ||one <= 0)
    {
        alert("Enter Frist Name");
        document.getElementById("one").focus();
        return;
    }
    var two = document.getElementById("two").value;

    if(two == "" ||two <= 0)
    {
        alert("Enter Last Name");
        document.getElementById("two").focus();
        return;
    }
     var three = document.getElementById("three").value;

    if(three == "" ||three <= 0)
    {
        alert("Enter Correct Name");
        document.getElementById("three").focus();
        return;
    }
    var four = document.getElementById("four").value;

    if(four == "" ||four <= 0)
    {
        alert("Enter Correct Name");
        document.getElementById("four").focus();
        return;
    }
    var five = document.getElementById("five").value;

    if(five == "" ||five <= 0)
    {
        alert("Enter Correct Number");
        document.getElementById("five").focus();
        return;
    }
    var six = document.getElementById("six").value;

    if(six == "" ||six <= 0)
    {
        alert("Enter Correct Number");
        document.getElementById("six").focus();
        return;
    }

    var seven = document.getElementById("seven").value;

    if(seven == "" ||seven <= 0)
    {
        alert("Enter seven Detalis");
        document.getElementById("seven").focus();
        return;
    }

    var first = one;
    var second = two;
    var third = three;
    var fourth = four;
    var fifth = five;
    var sixth = six; 
    var seventh = seven;   
    
    //var resultDisplay = document.getElementById("answer");
    //resultDisplay.innerHTML =  first+second+third+fourth+fifth+sixth+seventh ;
    
    var a = [];
    a.push(first,second,third,fourth,fifth,sixth,seventh);
    console.log(a);
}
