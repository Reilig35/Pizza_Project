/*Writer: William Twomey
Project: Pizza Menu*/

//Getting the size of the pizza
function getReceipt() {
    //Setting the vareables needed
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size")

    //For Loop 
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize +"<br>";
        }
    }
    if (selectedSize === "Single Slice") {
        sizeTotal = 4;
    } else if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "XL Pizza") {
        sizeTotal = 14;
    }
    
    //Console Log to check the code is working
    runningTotal = sizeTotal;
    console.log(selectedSize + " = &euro;" + sizeTotal + ".00");
    console.log("size text1:" + text1);
    console.log("subtotal: &euro;" + runningTotal + ".00")
    //variables to be passed to the next function
    getTopping(runningTotal, text1);
};



//Function to get the toppings
function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+ toppingArray[j].value +")");
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }

    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "&euro;" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "&euro;" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: &euro;" + runningTotal + ".00" + "</h3>"
}