import $ from 'jquery';

export function aboutBarberOpen(item) {
  $(item).each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.ourTeam_overlay').eq(i).toggleClass('ourTeam_overlay_show');
      $('.ourTeam_overlay').eq(i).toggleClass('b-show');
    });
  });
}

export function aboutBarberClose(item) {
  $(item).each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.ourTeam_overlay').eq(i).removeClass('ourTeam_overlay_show');
      $('.ourTeam_overlay').eq(i).removeClass('b-show');
    });
  });
}
