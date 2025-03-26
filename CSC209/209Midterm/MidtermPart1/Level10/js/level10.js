//basically my original code for Level 8

function addRow(text, basic, pro){ 
    //I added an id='table' to the table tag, and used getElementById to store it in a constant variable
    const table = document.getElementById("table");

    //inserts row at the end of the table
    let row = table.insertRow(-1);

    //declares variable for each cell in the new row
    let cell1 = row.insertCell(0); 
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    //puts each input value into the correct cell
    cell1.innerHTML = text;
    cell2.innerHTML = "<i class=\"fa " + basic + "\"></i>";
    cell3.innerHTML = "<i class=\"fa " + pro + "\"></i>";
  }

//adds NRROWS number of rows.
function addRows(numRows){
  for(i = 0; i < numRows; i++){
    //chooses text for first cell
    text = texts[i];

    //randomly selects either 'fa-check' or 'fa-remove'
    basic = basicOptions[Math.floor(Math.random() * basicOptions.length)];

    //calls addRow function to create and add the row to the table
    pro = proOptions[Math.floor(Math.random() * proOptions.length)];

    //calls addRow function to create and add the row to the table
    addRow(text, basic, pro);
  }
}
//calls addRows for NRROWS
addRows(NRROWS);