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
        // strikes out checked item and undo when checked agian
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
        
    
        // moves element to either the bottom or top of the list
        const listItem = $(this).closest('li');
        if (listItem.hasClass('.shopping-item__checked')) {
          $('.shopping-list').prepend(listItem);
        } else {
          $('.shopping-list').append(listItem);
        }
      });