$(document).ready(function () {
  const slider = $("#slider").owlCarousel({
    loop: true,
    margin: 5,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      600: {
        items: 3,
      },
      800: {
        items: 4,
      },
      1025: {
        items: 5,
      },
    },
  });
});
