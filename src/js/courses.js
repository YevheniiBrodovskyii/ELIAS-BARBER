import $ from 'jquery';

export function aboutCourseOpen(item) {
  $(item).each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.courses_overlay').eq(i).toggleClass('courses_overlay_show');
      $('.courses_overlay').eq(i).toggleClass('b-show');
    });
  });
}

export function aboutCourseClose(item) {
  $(item).each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.courses_overlay').eq(i).removeClass('courses_overlay_show');
      $('.courses_overlay').eq(i).removeClass('b-show');
    });
  });
}
