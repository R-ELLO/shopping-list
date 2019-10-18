/* 
1. Enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button.
2. check and uncheck items on the list by clicking the "Check" button
3. permanently remove items from the list
7. Using DOM manipulation and traversal to dynamically add and remove HTML elements and apply styles
10. Be sure to put both script elements at the bottom of the <body> element.
12. Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), toggleClass(), and closest().
*/

$('.container').ready(function(){

    // Adding items to the list
    
      // Define callback function
      const addItem = function() {
        // Declare variable to capture input text value
        const text = $('#shopping-list-entry').val();
        // If the input text field isn't empty, add it to the list as a new item
        if (text) {
          $('#shopping-list-entry').prepend('<li class="shopping-item"><a class="shopping-item-delete">delete</a>' + text + '<a class="shopping-item-toggle">check</a></li>');
        }
        // Clear input text field
        $('.submit').val("");
      };
    
      // Add new item to list by clicking "Add" button
      $('.submit').on('click', function(event){
        // (prevents form submit button unwanted default action)
        event.preventDefault();
        // run callback function
        addItem();
      });
    
      // Add new item to the list by hitting "Enter"
      $('.submit').keypress(function(event){
        if (event.which === 13) {
          // run callback function
          addItem();
        }
      });
    
    // Deleting items from list
    
      // Clicking item's delete button:
      $('.shopping-list').on('click', '.shopping-item-delete', function(){
        // removes clicked item from the list
        $(this).parent().fadeOut(300, function(){
          $(this).remove();
        });
      });
    
    // Checking item off list
    
      // Clicking item's check button:
      $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
        // grays everything out
        $(this).parent().toggleClass('.shopping-item__checked');
        $(this).siblings().toggleClass('.shopping-item-delete');
        $(this).toggleClass('.shopping-item__checked');
    
        // moves element to either the bottom or top of the list
        var $listItem = $(this).parent();
        if ($listItem.hasClass('.shopping-item__checked')) {
          $('.shopping-list').append($listItem);
        } else {
          $('.shopping-list').prepend($listItem);
        }
      });
    });