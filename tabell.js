var el_up = document.getElementById("GFG_UP"); 
          
var list = ['Chassi.json']
  
el_up.innerHTML = "Click on the button to create " 
        +   "the table from the JSON data.<br><br>" 
        + JSON.stringify(list[0]) + "<br>"  
        + JSON.stringify(list[1]) + "<br>" 
        + JSON.stringify(list[2]);    
      
function constructTable(selector) { 
      
    // Getting the all column names 
    var cols = Headers(list, selector);   

    // Traversing the JSON data 
    for (var i = 0; i < list.length; i++) { 
        var row = $('<tr/>');    
        for (var colIndex = 0; colIndex < cols.length; colIndex++) 
        { 
            var val = list[i][cols[colIndex]]; 
              
            // If there is any key, which is matching 
            // with the column name 
            if (val == null) val = "";   
                row.append($('<td/>').html(val)); 
        } 
          
        // Adding each row to the table 
        $(selector).append(row); 
    } 
} 
  
function Headers(list, selector) { 
    var columns = []; 
    var header = $('<tr/>'); 
      
    for (var i = 0; i < list.length; i++) { 
        var row = list[i]; 
          
        for (var k in row) { 
            if ($.inArray(k, columns) == -1) { 
                columns.push(k); 
                  
                // Creating the header 
                header.append($('<th/>').html(k)); 
            } 
        } 
    } 
      
    // Appending the header to the table 
    $(selector).append(header); 
        return columns; }