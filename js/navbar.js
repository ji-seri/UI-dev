
var json_obj = [{
    "class_name": "dashboard",
    "href": "/cmp/dashboard",
    "title": "Dashboard"
}, {
    "href": null,
    "menu": [{
        "href": "/cmp/",
        "title": "Overview"
    }, {
        "href": "/cmp/resources/",
        "title": "All"
    }, {
        "href": "/cmp/resources/#servers",
        "title": "Servers"
    }, {
        "href": "/cmp/resources/#networks",
        "title": "Network"
    }, {
        "href": "/cmp/resources/#storage",
        "title": "Storage"
    }, {
        "href": "/cmp/resources/#compute-pools",
        "title": "Compute Pools"
    }, {
        "href": "/cmp/resources/#appliances",
        "title": "Appliances"
    }],
    "title": "Resources"
}, {
    "href": null,
    "menu": [{
        "href": "/cmp/logs/",
        "title": "Logs"
    }],
    "title": "Reporting"
}, {
    "href": null,
    "menu": [{
        "href": "/cmp/resources/#accounts",
        "title": "Accounts"
    }, {
        "href": "/cmp/resources/#applications",
        "title": "Applications"
    }, {
        "href": "/cmp/resources/#departments",
        "title": "Departments"
    }, {
        "href": "/cmp/access-control/",
        "title": "Access Control"
    }, {
        "href": "/cmp/metadata/",
        "title": "Metadata"
    }],
    "title": "Admin"
}, {
    "href": null,
    "menu": [{
        "href": "/cmp/op/identity",
        "title": "Identity"
    }, {
        "href": "/cmp/op/policy",
        "title": "Policy"
    }, {
        "href": "/cmp/op/spend",
        "title": "Spend"
    }, {
        "href": "/cmp/op/logs",
        "title": "Audit"
    }, {
        "href": "/cmp/op/status",
        "title": "Status"
    }, {
        "href": "/cmp/op/babel/customers",
        "title": "Babel"
    }, {
        "href": "/cmp/op/alerts",
        "title": "Alerts"
    }, {
        "href": "/cmp/op/rules",
        "title": "Alert Rules"
    }, {
        "href": "/cmp/op/orbit/messages",
        "title": "Orbit Messages"
    }, {
        "href": "/cmp/op/orbit/templates",
        "title": "Orbit Templates"
    }, {
        "href": "/cmp/op/notifications",
        "title": "Notifications"
    }],
    "title": "Operator"
}]


$(document).ready(function() {
    /*
    for (i in json_obj){
      var result = '<div class="dropdown"><button class="dropbtn"><a href="' + json_obj[i].href + '">' + json_obj[i].title + '</a></button><div class="dropdown-content">'
      for (j in json_obj[i].menu) {
        result +='<a href="' + json_obj[i].menu[j].href + '">' + json_obj[i].menu[j].title + '</a>'
      }
      result += '</div></div>'
      //alert(result);
      $('.navbar').append(result);
    }
    */

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
