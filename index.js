import $ from 'jquery';

$(function () {
  let ourTeam_imgWrapper = document.querySelectorAll('.ourTeam_imgWrapper'),
    ourTeam_btn = document.querySelector('.ourTeam_btn');

  // function showButton(item) {
  //   $(item).each(function (i) {
  //     $(this).on('mouseenter', function (e) {
  //       e.preventDefault();
  //       $(ourTeam_btn).eq(i).css('visibility', 'visible');
  //     });
  //     $(this).on('mouseleave', function (e) {
  //       e.preventDefault();
  //       $(ourTeam_btn).eq(i).css('visibility', 'hidden');
  //     });
  //   });
  // }

  // showButton('.ourTeam_imgWrapper');
  // showButton('.ourTeam_btn');
  // showButton('.ourTeam_btn-Wrapper');

  ourTeam_btn.addEventListener('click', () => {
    console.log('123');
  });
});
