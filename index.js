/* 
1. Enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button.
2. check and uncheck items on the list by clicking the "Check" button
3. permanently remove items from the list
7. Using DOM manipulation and traversal to dynamically add and remove HTML elements and apply styles
10. Be sure to put both script elements at the bottom of the <body> element.
11. Do not alter index.html or main.css other than adding the links to the external JavaScript inside index.html. Write JavaScript code that works with the existing HTML and CSS to implement the required features.
12. Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), toggleClass(), and closest().
*/

$(document).ready(function(){

    // ADDING A NEW ITEM TO THE LIST
    
      // Define the callback function
      const addItem = function() {
    
        // Declare a variable to capture the input text value
        const $input = $('#shopping-list-entry').val();
        // If the input text field isn't empty, add it to the list as a new item
        if ($input) {
          $('.shopping-list').prepend('<li class="shopping-item"><a class="shopping-item-delete">X</a>' + $input + '<a class="button-label">✔</a></li>');
        }
        // Clear the input text field
        $('.submit').val("");
      };
    
      // Add a new item to the list by clicking "Add" button
      $('.submit').on('click', function(event){
        // (prevents form submit button unwanted default action)
        event.preventDefault();
        // run the callback function
        addItem();
      });
    
      // Add a new item to the list by hitting "Enter"
      $('.submit').keypress(function(event){
        if (event.which === 13) {
          // run the callback function
          addItem();
        }
      });
    
    // DELETING AN ITEM FROM THE LIST
    
      // Clicking an item's delete button:
      $('.shopping-list').on('click', '.shopping-item-delete', function(){
        // removes that item from the list
        $(this).parent().fadeOut(300, function(){
          $(this).remove();
        });
      });
    
    // CHECKING AN ITEM OFF FROM THE LIST
    
      // Clicking an item's check button:
      $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
        // grays everything out
        $(this).parent().toggleClass('.shopping-item__checked');
        $(this).siblings().toggleClass('.shopping-item-delete');
        $(this).toggleClass('.shopping-item__checked');
    
        // moves the element to either the bottom or top of the list
        var $listItem = $(this).parent();
        if ($listItem.hasClass('.shopping-item__checked')) {
          $('.shopping-list').append($listItem);
        } else {
          $('.shopping-list').prepend($listItem);
        }
      });
    
    // MAKING LIST ITEMS SORTABLE
    
      $('.shopping-list').sortable({
          distance: 2,
          revert: 300,
          cancel: ".shopping-item__checked"
      });
    
    });