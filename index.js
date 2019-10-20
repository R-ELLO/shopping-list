/* 
2. check and uncheck items on the list by clicking the "Check" button
12. Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), toggleClass(), and closest().
*/

// Adding items to the list
    
    // Define callback function
      const addItem = function() {
        // Declare variable to capture input text value
        const text = $('#shopping-list-entry').val();
        //console.log('text', text);
        // If the input text field isn't empty, add it to the list as a new item
        if (text) {
          $('.shopping-list').prepend(`
          <li>
            <span class="shopping-item">${text}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                <span class="button-label">check</span>
                </button>
             <button class="shopping-item-delete">
                <span class="button-label">delete</span>
             </button>
            </div>
          </li>`);
        }
        // Clear input text field
        $('#shopping-list-entry').val("");
      };
    
      // Add new item to list by clicking "Add" button
      $('#js-shopping-list-form').submit( function(event){
        // (prevents form submit button unwanted default action)
        event.preventDefault();
        // run callback function
        addItem();
      });
    
    // Deleting items from list
    
      // Clicking item's delete button:
      $('.shopping-list').on('click' , '.shopping-item-delete', function(event){
        // removes clicked item from the list
        $(this).closest('li').remove();
      });
     
    // Checking item off list
    
      // Clicking item's check button:
      $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
        // strikes out checked item
        $(this).closest('li').css('text-decoration', 'line-through');
        
    
        // moves element to either the bottom or top of the list
        const listItem = $(this).closest();
        if (listItem.hasClass('.shopping-item')) {
          $('.shopping-list').append(listItem);
        } else {
          $('.shopping-list').prepend(listItem);
        }
      });