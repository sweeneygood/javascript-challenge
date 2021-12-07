// from data.js, put the list of dicts into tableData
var tableData = data;

// Select the table 
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


   // d1 = new Date(document.getElementById("date1").value);

    console.log("inputValue");
    console.log(formatDate(inputValue));

    var filteredData = tableData.filter(o => o.datetime === formatDate(inputValue));

    console.log(filteredData);

    // Clear original table
    tbody.html("");

    // Call the displayTable function for the filtered dataset 
    displayTable(filteredData); 

}


function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
 


function displayTable(tableData) {
    tableData.forEach(function (UFOdata) {
        var row = tbody.append("tr");

        Object.entries(UFOdata).forEach(function ([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
