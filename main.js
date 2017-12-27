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
    // Obtain actual content object to extract text
    var content_obj = $(this).siblings(".rec_content");
    // Text before the toggle
    var before_text = $(content_obj).text();
    // Text after the toggle which is stored within the content element
    var after_text = $(content_obj).attr("value");

    // Display appropriate toggle text and the author after the first toggle
    var content_toggle = "Show Less";
    var visibility = "visible";

    // If the content is already fully displayed, shorten it and hide the author
    if($(this).text() === content_toggle){
        content_toggle = "Read More";
        visibility = "hidden";
    }

    // Change toggle text, author visibility, and recommendation content
    $(this).text(content_toggle);
    $(this).siblings(".rec_author").css("visibility", visibility);
    $(content_obj).text(after_text);
    $(content_obj).attr("value", before_text);
});