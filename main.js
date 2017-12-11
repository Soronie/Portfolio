// Initiate a scroll animation to the selected navbar link
$(".scroll").on("click", function(){
	var section = $(this).attr("href");
	$("html, body").animate({ scrollTop: $(section).offset().top }, 1000);
});

// Reference link: https://codepen.io/rdallaire/pen/apoyx
// Return to top button functionality
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});

$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});