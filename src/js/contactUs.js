import $ from 'jquery';

export function privacyOpen(item) {
  $(item).each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.contactUs_overlay').toggleClass('contactUs_overlay_show');
      $('.contactUs_overlay').toggleClass('b-show');
    });
  });
}

export function privacyClose(item) {
  $(item).each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.contactUs_overlay').removeClass('contactUs_overlay_show');
      $('.contactUs_overlay').removeClass('b-show');
    });
  });
}
