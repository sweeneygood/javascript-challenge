// from data.js
var tableData = data;

var tbody = d3.select("tbody");


data.forEach(function(UFO) {
    console.log(UFO);
    var row = tbody.append("tr");

    Object.entries(UFO).forEach(function([key, value]) {
        console.log(key, value);
    
    var cell = row.append("td");        
    cell.text(value);
  });
});
