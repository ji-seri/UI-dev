$(document).ready(function() {
    /* from the server */
  var tmpl = "<option value='' selected></option>"
  var json = { 'option1':'Cloud Service division', 'option2':'Network Service division', 'option3':'Management Service division', 'option4':'Application Content division'};
  $.each(json, function(key, value){
    //alert('key:' + key + ' / ' + 'value:' + value);
    $('.selectbox').append($('<option>', {
        value: value,
        text : value
    }));
  });
  $("#submit_btn").click(function(){
    alert("Submitted");
    var action = "./server_address.php"
    $("#account_form").submit();
});
});
