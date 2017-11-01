$(document).ready(function() {
  /*
   * Issue: can't use dir instead of http url
   * (2. Server Data exercise > Task 1)
   */
  $.ajax({
    url: "data_from_api/servers_table.json",
    type: 'GET',
    success: function(data){
      var result = '<tr>'
      $.each(data, function(key, val){
          result += '<td>' + val + '</td>'
      });
      result += '</tr>'
      //alert(result);
      $('#viewList').html(result);
    },
    error: function () {
       alert("couldn't get json file");
   }
  });

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
