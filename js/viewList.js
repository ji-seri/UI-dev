$(document).ready(function() {
  /*
   * Issue: can't use dir instead of http url
   * (2. Server Data exercise > Task 1)
   */
   $.getJSON('data_from_api/servers_table.json', function(data){
     for (i in data){
       var result = '<tr>'
       result += '<td>' + data[i].name + '</td>'
       if (data[i].cmp_state == "running"){
         result += '<td><div class="circle_active"></div></td>'
       }else {
         result += '<td><div class="circle_active inactive"></div></td>'
       }
       if(data[i].cpu_cores == null){
         data[i].cpu_cores = "N/A"
       }
       if(data[i].cpu == null){
         data[i].cpu = "N/A"
       }
       if(data[i].ram_mb == null){
         data[i].ram_mb = "N/A"
       }
       if(data[i].volumes_mb == null){
         data[i].volumes_mb = "N/A"
       }
       result += '<td>' + data[i].account.name + '</td>'
       result += '<td>' + data[i].location.datacenter.name + '</td>'
       result += '<td class="align_right">' + data[i].cpu_cores+ '</td>'
       result += '<td class="align_right">' + data[i].cpu+ '</td>' //cpu is missing
       result += '<td class="align_right">' + data[i].ram_mb+ '</td>'
       result += '<td class="align_right">' + data[i].volumes_mb+ '</td>'
       result += '</tr>'
       $('#viewList').append(result);
     }
    });

  $("tbody#viewList tr").on('click', function(){
      alert("Are you click my tr tag??");
  });
});
