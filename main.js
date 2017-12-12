// Initiate a scroll animation to the selected navbar link
$(".scroll").on("click", function(){
	var section = $(this).attr("href");
	$("html, body").animate({ scrollTop: $(section).offset().top }, 1000);
});

// Reference link: https://codepen.io/rdallaire/pen/apoyx
// Return to top button functionality
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $("#return-to-top").fadeIn(200);    // Fade in the arrow
    } else {
        $("#return-to-top").fadeOut(200);   // Else fade out the arrow
    }
});

$("#return-to-top").click(function() {      // When arrow is clicked
    $("body,html").animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

// Toggle recommendations
$(".rec_toggle").on("click", function(){
    var content_obj = $(this).siblings(".rec_content");
    var content_text = $(content_obj).text();
    var content_toggle = "Show Less";
    var visibility = "visible";
    var rec_text = $(content_obj).attr("value");

    // If the content is already extended, shorten it
    // "... ".length === 4 
    if(content_text.length > 304){
        content_toggle = "Read More";
        visibility = "hidden";
        rec_text = $(content_obj).attr("value").substring(0, 300) + "... ";
    }

    // Change toggle text, author visibility, and recommendation content
    $(this).text(content_toggle);
    $(this).siblings(".rec_author").css("visibility", visibility);
    $(content_obj).text(rec_text);
});