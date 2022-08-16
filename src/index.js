import $ from 'jquery';
import { animatedScroll } from './js/animatedScroll';
import { aboutBarberOpen, aboutBarberClose } from './js/ourTeam';
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
import { privacyOpen, privacyClose } from './js/contactUs';

$(function () {
  let closeMasterDetails = document.querySelectorAll(
    '.coursesDetail_modal_btn'
  );

  // ANIMATED SCROLL
  animatedScroll();

  // OPEN BARBER INFO
  aboutBarberOpen('.ourTeam_item');
  aboutBarberClose('.ourTeam_modal_btn');

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

  //OPEN PRIVACY MODAL
  privacyOpen('.contactUs_privacy');
  privacyClose('.contactUs_modal_btn');
});
