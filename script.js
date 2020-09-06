$(document).ready(function() {
    $("#form").submit(function (event) {

        //functions to get user input from the forms
        function flavor() {
            var pizzaFlavour = document.getElementById("flavor").value;
            return parseInt(pizzaFlavour);
        }
    
        function size() {
            var pizzaSize = document.getElementById("size").value;
            return parseInt(pizzaSize);
        }
        function crust() {
            var pizzaCrust = document.getElementById("crust").value;
            return parseInt(pizzaCrust);
        }
        function topping() {
            var pizzaTopping = document.getElementById("topping").value;
            return parseInt(pizzaTopping);
        }
        function number() {
            var pizzaNumber = document.getElementById("quantity").value;
            return parseInt(pizzaNumber);
        }
        //object for user order
        function Order(flavor, size, crust, topping, quantity) {
            this.newFlavor = flavor;
            this.newSize = size;
            this.newCrust = crust;
            this.newTopping = topping;
            this.newQuantity = quantity;
        }
        //saving user order, getting totals for order
        var userInput = new Order(flavor(), size(), crust(), topping(), number());
        var totalCost = (userInput.newSize + userInput.newCrust + userInput.newTopping + userInput.newFlavor) * userInput.newQuantity;


        event.preventDefault();
            
                                  
    });
});