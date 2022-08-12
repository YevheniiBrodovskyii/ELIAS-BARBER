import $ from 'jquery';
import { animatedScroll } from './js/animatedScroll';
import { aboutCourseOpen, aboutCourseClose } from './js/courses';
import {
  aboutOpenMaster,
  aboutCloseMaster,
  aboutOpenRaider,
  aboutCloseRaider,
  aboutOpenRaiderBack,
  aboutCloseRaiderBack,
  Back,
} from './js/coursesDetail';

$(function () {
  let closeMasterDetails = document.querySelectorAll(
    '.coursesDetail_modal_btn'
  );

  // ANIMATED SCROLL
  animatedScroll();

  // OPEN MASTER DESCRIPTION
  aboutOpenMaster('#openMasterBtn');
  aboutCloseMaster('#closeMasterBtn');
  aboutOpenRaider('#openRaiderOpen');
  aboutCloseRaider('#openRaiderClose');
  aboutOpenRaiderBack('#openRaiderBack');
  aboutCloseRaiderBack('#closeRaiderBack');
  Back(closeMasterDetails);

  // SHOW COURSE DESCRIPTION
  aboutCourseOpen('.courses_item-btn');
  aboutCourseClose('.courses_modal_btn');
});
