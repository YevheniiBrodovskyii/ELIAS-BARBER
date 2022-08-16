import $ from 'jquery';

export function animatedScroll() {
  $('#menu').on('click', 'a', function (event) {
    event.preventDefault();

    const id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 500);
  });
}
