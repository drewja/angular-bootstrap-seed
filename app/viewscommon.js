$(function() {
//for small screens toggle the menu when link is clicked    
$("#navbar").bind("click", function() {
     if ($("button.navbar-toggle").is(':visible'))
        {
          $(".navbar-collapse").collapse('toggle')
        };
    });
});
