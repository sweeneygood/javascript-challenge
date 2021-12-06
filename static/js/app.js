// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runFilter);
form.on("submit", runFilter);

displayTable(tableData); 

function runFilter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datefilter1");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    //var filteredData = tableData.filter(tableData => Date(tableData.datetime) === inputValue);

    Object.entries(data).forEach(([key, value]) => {
         filteredData = filteredData.filter(row => row[key] === value);
       });

    console.log(filteredData);
    displayTable(filteredData); 
}


function displayTable(tableData) {
    tableData.forEach(function (UFO) {
        var row = tbody.append("tr");

        Object.entries(UFO).forEach(function ([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
