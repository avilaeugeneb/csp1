/*************************/
/**                     **/
/** Darken Nav Script   **/
/**                     **/
/*************************/


$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

/********************************/
/**                     	   **/
/**     Go to top Button       **/
/**                            **/
/********************************/

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnbot-top").style.display = "block";
    } else {
        document.getElementById("btnbot-top").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
     $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;

}
