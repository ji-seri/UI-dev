$(document).ready(function() {
    $("div#viewTable table tbody tr").on('click', function(){
        alert("Are you click my tr tag??");
    });
});



// function load() {
  // var template = '<tr><td>{{name}}</td><td>{{cmp_state}}</td>{{#account}}<td>{{name}}</td>{{/account}}{{#location}}{{#datacenter}}<td>{{name}}</td>{{/datacenter}}{{/location}}<td>{{cpu_cores}}</td><td>{{cpu}}</td><td>{{ram_mb}}</td><td>{{volumes_mb}}</td></tr>'
  //
  // var fs = require("fs");
  // var content = fs.readFileSync("../data_from_api/servers_table.json");
  // var obj = JSON.parse(content);
  // console.log(obj);
  /*for(var key in obj) {
    console.log("key:"+ key +", value:"+obj[key]);
  }*/
  //var result = Mustache.render(template, data);

  //document.getElementById("viewList").innerHTML = result;
// };
// load();
