
//Arrays
//Steps for adding new flavors to the Order Form
//1) Add in your new flavor name, becareful to keep the same format or it will not work "New Flavor",
    // "New Pizza Flavor",
var specialtiesOrder = [
  "----Please Choose Your Pizza----",
  "Wake and Bake Breakfast Pizza",
  "Half Baked Pizza",
  "The Maui-Wowi Pizza",
  "The ChimiCHONGa Pizza",
  "Munchie Supreme Pizza",
  "Meat Pizza",
  "HERBivore Pizza",
  "Blueberry Yum-Yum",
  "Special Brownie Pizza",
  ];
var pizzaNumArray = ["Please Choose How Many Pizzas You Want",1,2,3,4,5,6,7,8,9,10];


//Get Element Variables for Order Page
var pizzaOptions = document.getElementById('pizzaType');
var numOptions = document.getElementById('numPizzas');
var thankYouOrder = document.getElementById('thankYou');
var thankName = document.getElementById('firstName');
var phoneNumber = document.getElementById('phone');

//Math Variables for Order Page
//Taking value numOptions and applying the price to figure out correct totals


//Filling in the select box for the number of pizzas ordered
for (var i = 0; i < pizzaNumArray.length; i++) {
    numOptions.innerHTML += '<option value="'+ pizzaNumArray[i]  + '">' + pizzaNumArray[i] + '</option>'
}

//Filling in the select box to choose which type of Pizza
for (var i = 0; i < specialtiesOrder.length; i++) {
    pizzaOptions.innerHTML += '<option value="'+ specialtiesOrder[i] + '">' + specialtiesOrder[i] + '</option>'
}

//Order Summary Section ~ This fills in the div section on the order page
function calculateOrder() {

  var total =  (numOptions.value * 12.99);
  //Figuring Tax
  var tax = (total * .076);
  //Figuring Grand Total for the order
  var grandTotal = (total + tax);


  thankYouOrder.innerHTML += '<h3>Thank You ' + thankName.value + ' For Your Order!</h3></br>';
  thankYouOrder.innerHTML += '<p>You Ordered ' + numOptions.value + ' ' +  pizzaOptions.value + '(s) </p> </br>';
  thankYouOrder.innerHTML += '<p>Subtotal: $ ' + total.toFixed(2) + ' </p>';
  thankYouOrder.innerHTML += '<p>Tax: $ ' + tax.toFixed(2) + ' </p>';
  thankYouOrder.innerHTML += '<p>Grand Total: $ ' + grandTotal.toFixed(2) + ' </p>';
  thankYouOrder.innerHTML += '<p>If we need to contact you for any reason we will call ' + phoneNumber.value + '</p>';

}

//Submit Button Event for the order page
document.getElementById("submit").
  addEventListener("click", calculateOrder, false);
