
var formFill = true;

var UIController = (function () {

    // Create an object to save all DOM strings to reduce bugs

    var DOMStrings = {
        InputName: '#name',
        InputLastName: '#lastName',
        InputOccupation: '#occupation',
        InputDateOfBirth: '#dateOfBirth',
        InputAddress: '#address'
    }
    return {
        getInput: function () {
            // Retun object with both properties

            return {
                name: document.querySelector(DOMStrings.InputName).value, // Values of Input name in the form
                fulName: document.querySelector(DOMStrings.InputLastName).value, // Values of Input fullname in the form
                occupation: document.querySelector(DOMStrings.InputOccupation).value,
                dateOfBirth: document.querySelector(DOMStrings.InputDateOfBirth).value,
                address: document.querySelector(DOMStrings.InputAddress).value
            };

        },

        clearFields: function () {
            var fields, fieldsArray;
            fields = document.querySelectorAll(DOMStrings.InputName + ',' + DOMStrings.InputLastName + ',' + DOMStrings.InputOccupation + ',' + DOMStrings.InputDateOfBirth + ',' + DOMStrings.InputAddress);
            // QuerySelector Returns list not arrays So we convert List to an Array, Trick is to use Array method slice, slice return the copy of Array

            var fieldsArray = Array.prototype.slice.call(fields);
            // For each (loop) method for every field
            fieldsArray.forEach(function (current, index, array) {
                current.value = "";

            });

            fieldsArray[0].focus();
        },

        emptyFields: function () {
            if (fields === "") {
                alert(' Please Enter Your Information');
                return false;

            };
        }
    };



})();

// Form Controller
var printForm = (function (UICtrl) {


    var ctrlAddItem = function (event) {
        console.log(event);
        event.preventDefault();
        // To Do List

        // 1. Get the Form input Data

        var input = UICtrl.getInput();

        // 2 Display the Item on the UI  
        //2.1 Create div Element
        var table = document.querySelector('.table-box');
        var divElement = document.createElement('div');
        divElement.classList.add("oddEven-data", "table-data-grid", "padding-two-sides");

        // 2.2 Loop through object values 


        Object.values(input).forEach(inputValue => {

            var pElement = document.createElement('p');
            pElement.innerHTML = inputValue;
            divElement.append(pElement);

        });
        table.append(divElement);

        // 3 Clearing the Fields

        UICtrl.clearFields();
    }

    document.querySelector('#form').addEventListener('submit', ctrlAddItem);

    document.addEventListener('keypress', function (event) {
        // event.which for other or old browsers
        if (event.keycode === 13 || event.which === 13) {

            ctrlAddItem();
        }

    });

})(UIController);

// UI Controler  to get our input :public method we want to use it in other function

/**var UIControler = (function(){

    // return input data first and write a method for it
   return  {
       getInput: function(){

       }
   }

})();

var inputData = (function () {

    var DOMStrings = {
        inputName: '#name',
        inputLastName: '#lastName',
        inputOccupation: '#occupation',
        inputDateOfBirth: '#dateOfBirth',
        inputAddress: '#address'
    }
    return {
        name: document.querySelector(DOMStrings.inputName).value,
        fullName: document.querySelector(DOMStrings.inputLastName).value,
        occupation: document.querySelector(DOMStrings.inputOccupation).value,
        dateOfBirth: document.querySelector(DOMStrings.inputDateOfBirth).value,
        address: document.querySelector(DOMStrings.inputAddress).value,

    }
})();


var printForm = (function () {

    var ctrlAddItem = function() {
        // TO DO LIST

        // 1. Get the input field data of Form


        // 2. Print it on the UI
        console.log('It works')

    }

    document.querySelector('.button1').addEventListener('click',ctrlAddItem);

    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    })

})();
printForm;
 */