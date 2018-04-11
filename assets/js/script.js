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
/** Show More/Show Less Toggle **/
/**                            **/
/********************************/

