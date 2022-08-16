import $ from 'jquery';

export function aboutOpenMaster(item) {
  $(item).each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('#MasterOpen').toggleClass('coursesDetail_overlay_show');
      $('#MasterOpen').toggleClass('b-show');
    });
  });
}

export function aboutCloseMaster(item) {
  $(item).each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('#MasterClose').toggleClass('coursesDetail_overlay_show');
      $('#MasterClose').toggleClass('b-show');
    });
  });
}

export function aboutOpenRaider(item) {
  $(item).each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('#openRaider').toggleClass('coursesDetail_overlay_show');
      $('#openRaider').toggleClass('b-show');
      $('#MasterOpen').removeClass('coursesDetail_overlay_show');
      $('#MasterOpen').removeClass('b-show');
      $('#MasterClose').removeClass('coursesDetail_overlay_show');
      $('#MasterClose').removeClass('b-show');
    });
  });
}

export function aboutCloseRaider(item) {
  $(item).each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('#closeRaider').toggleClass('coursesDetail_overlay_show');
      $('#closeRaider').toggleClass('b-show');
      $('#MasterOpen').removeClass('coursesDetail_overlay_show');
      $('#MasterOpen').removeClass('b-show');
      $('#MasterClose').removeClass('coursesDetail_overlay_show');
      $('#MasterClose').removeClass('b-show');
    });
  });
}

export function aboutOpenRaiderBack(item) {
  $(item).each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('#openRaider').removeClass('coursesDetail_overlay_show');
      $('#openRaider').removeClass('b-show');
      $('#MasterOpen').toggleClass('coursesDetail_overlay_show');
      $('#MasterOpen').toggleClass('b-show');
    });
  });
}

export function aboutCloseRaiderBack(item) {
  $(item).each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('#closeRaider').removeClass('coursesDetail_overlay_show');
      $('#closeRaider').removeClass('b-show');
      $('#MasterClose').toggleClass('coursesDetail_overlay_show');
      $('#MasterClose').toggleClass('b-show');
    });
  });
}

export function Back(item) {
  $(item).each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('#MasterOpen').removeClass('coursesDetail_overlay_show');
      $('#MasterOpen').removeClass('b-show');
      $('#MasterClose').removeClass('coursesDetail_overlay_show');
      $('#MasterClose').removeClass('b-show');
      $('#openRaider').removeClass('coursesDetail_overlay_show');
      $('#openRaider').removeClass('b-show');
      $('#closeRaider').removeClass('coursesDetail_overlay_show');
      $('#closeRaider').removeClass('b-show');
    });
  });
}
