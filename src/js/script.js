function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find('.burger-menu_button', '.burger-menu_lines');
  let links = menu.find('.burger-menu_link');
  let overlay = menu.find('.burger-menu_overlay');

  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass('burger-menu_active');

    if (menu.hasClass('burger-menu_active')) {
      $('body').css('overlow', 'hidden');
    } else {
      $('body').css('overlow', 'visible');
    }
  }
}
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 2,
      nav: true,
      loop: true,
    },
    1440: {
      stagePadding: 260,
      items: 3,
      nav: true,
      loop: true,
    },
  },
});

var owl = $('.owl-carousel');
owl.owlCarousel();

$('.next').click(function () {
  owl.trigger('next.owl.carousel');
});

$('.previous').click(function () {
  owl.trigger('prev.owl.carousel');
});

burgerMenu('.burger-menu');
