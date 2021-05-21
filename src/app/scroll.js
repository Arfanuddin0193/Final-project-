// ===== Scroll to Top ==== 
import $ from "jquery";

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {    // If page is scrolled more than 50px
        $('#topp').fadeIn("fast");       // Fade in the arrow
    } else {
        $('#topp').fadeOut("fast");      // Else fade out the arrow
    }
});
$('#topp').click(function() {            // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                   // Scroll to top of body
    }, 500);
});