$(document).ready(function() {
   $.getJSON('data_from_api/menus.json', function(data){
    for (i in data){
      var result = '<div class="dropdown"><button class="dropbtn"><a href="' + data[i].href + '">' + data[i].title + '</a></button><div class="dropdown-content">'
      for (j in data[i].menu) {
        result +='<a href="' + data[i].menu[j].href + '">' + data[i].menu[j].title + '</a>'
      }
      result += '</div></div>'
      //alert(result);
      $('.navbar').append(result);
    }
   });

    $("div.dropdown-content a").on('click', function(){
      var basic_url = 'file:///Users/seri/html-exercises/navbar.html'
      var menu_c = $(this).html();
      var menu_b = $(this).parent().parent().find("button")
      var menu_b_val = menu_b.html();
      var menu_b_url = menu_b.attr('href');

      var breadcrumb = "<li><a href='#'>Overview</a></li><li><a href=" + menu_b_url + ">" + menu_b_val + "</a></li><li>" + menu_c + "</li>"
      $( "ul.breadcrumb" ).html(breadcrumb);
    });
});
