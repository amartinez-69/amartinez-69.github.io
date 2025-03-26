function addRow(text, basic, pro){ //unfinished, need to add e desired options to be placed on a row in the BASIC and PRO columns
    
    //I added an id='table' to the table tag, and used getElementById to store it in a constant variable
    const table = document.getElementById("table");

    //declares variable that stores a string for the html code for the new row being added to the innerHTML of the table. Concatention is used to add each substring into a separate cell.
    let row = "<tr> <td>" + text + "</td> <td> <i class=\"fa " + basic + "\"></i>" + "</td> <td> <i class=\"fa " + pro + "\"></i>" + "</td> </tr>";
    
    //adds row to table using innerHTML. Believe it or not, it somehow took me an hour to work this out, because the row kept replacing the whole table instead of being added.    
    table.innerHTML += row; 


    /* ORIGINAL CODE 
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0); 
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = text;
    cell2.innerHTML = basic;
    cell3.innerHTML = pro; */
  }

//adds NRROWS number of rows.
function addRows(numRows){
  for(i = 0; i < numRows; i++){
      //chooses text for first cell
    text = texts[i];

      //randomly selects either 'fa-check' or 'fa-remove'
    basic = basicOptions[Math.floor(Math.random() * basicOptions.length)];
    
      //randomly selects either 'fa-check' or 'fa-remove'
    pro = proOptions[Math.floor(Math.random() * proOptions.length)];
    
      //calls addRow function to create and add the row to the table
    addRow(text, basic, pro);
  }
}
//calls addRows
addRows(NRROWS);