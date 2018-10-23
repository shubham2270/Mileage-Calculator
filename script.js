let current = document.getElementById("current");
let previous = document.getElementById("previous");
let fuelQty = document.getElementById("fuelQty");
let totalPrice = document.getElementById("totalPrice");
let calculateBtn = document.getElementById("calculate");
let resetBtn = document.getElementById("reset");
let result1 = document.getElementById("result1");
let errMsg1 = document.getElementById("errMsg1");
let errMsg2 = document.getElementById("errMsg2");

function calMileage(){
    if (current.value > previous.value && fuelQty.value > 0){
        let distance = Number(current.value) - Number(previous.value);
        let milage = distance / Number(fuelQty.value);
        let costPerKm = Number(totalPrice.value) / distance;

        result1.textContent = milage.toFixed(2) + " Km/L";
        result2.textContent = "INR " + costPerKm.toFixed(2) + " / " + " Km";
        errMsg1.style.display = "";
        errMsg2.textContent = "";
    } else if (current.value === "" || previous.value === "" || fuelQty.value === "" || fuelQty.value === "0") {
        errMsg1.style.display = "";
        errMsg2.style.display = "block";
        result1.textContent = "";
        errMsg2.textContent = "Error: Please provide all values"
        
    } else {
        errMsg2.style.display = "";
        errMsg1.style.display = "block";
        result1.textContent = "";
        errMsg1.textContent = "Error: Current reading cannot be less then previous reading"
    };
   
};


function reset(){
result1.textContent = "Result Here!"
result2.textContent = ""
errMsg1.style.display = "";
errMsg2.style.display = "";
}


calculateBtn.addEventListener("click", calMileage);
resetBtn.addEventListener("click", reset);