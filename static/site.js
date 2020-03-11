function stickyHeader() {
  // TOP Menu Sticky
  $(window).on("scroll", function() {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $("#sticky-header").removeClass("sticky-top");
      $("#back-top").fadeIn(500);
    } else {
      $("#sticky-header").addClass("sticky-top");
      $("#back-top").fadeIn(500);
    }
  });
}

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 991px)").matches) {
    $dropdown.hover(
      function() {
        var $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        var $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

jQuery(document).ready(function($) {
  stickyHeader();  
});
