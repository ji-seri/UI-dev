$(document).ready(function() {
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
