$(function () {
  $("#my_links li a").css('color', 'blue');
  $("#my_links li a[href^='documents']").css({'color': 'darkorange'});

  $("td").css({'border': '3px solid gray', 'padding': '10px','font-size': '20pt'});
  $("table").css({'border-collapse': 'collapse'});
  $("table#moto_table tr:nth-child(even) > td:last-child").css({'background-color': 'red','color': 'white'});
});