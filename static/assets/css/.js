/*-----------------------------------------------------------------------------------

    
    CSS INDEX
    =========================================
    01. header css here
    02. slider area css here
    03. product section css here
    04. banner section css here 
    05. blog area css here
    06. newsletter area css here
    07. footer area css here
    08. shop page css here
    09. error page css heer 
    10. about page css here
    11. blog page css here 
    12. blog details css here
    13. cart page css here
    14. checkout page css here
    15. contact page css here
    16. faq page css here
    17. login page css here
    18. my account css here
    19. portfolio page css here
    20. services page css here
    21. shipping css here
    22. wishlist css here
    23. newsletter popup css here
    24. modal css here
    25. compare css here
    26. coming soon css here
    
    

-----------------------------------------------------------------------------------*/
@import url("https://fonts.googleapis.com/css?family=Rubik:300,300i,400,400i,500,500i,700,700i,900&amp;display=swap");
* {
  box-sizing: border-box;
}

/* transition */
/* flex */
/* transform */
/* opacity */
/*----------------------------------------*/
/*  01. Theme default CSS
/*----------------------------------------*/
/*-- Google Font --*/
/*-- Common Style --*/
*, *::after, *::before {
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

body {
  line-height: 24px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  visibility: visible;
  font-family: "Rubik", sans-serif;
  color: #222222;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 400;
  margin-top: 0;
}

h1 {
  font-size: 48px;
  line-height: 1;
  font-weight: 700;
}

h2 {
  font-size: 36px;
  line-height: 36px;
}

h3 {
  font-size: 30px;
  line-height: 30px;
}

h4 {
  font-size: 16px;
  line-height: 19px;
  font-weight: 700;
}

h5 {
  font-size: 14px;
  line-height: 18px;
}

h6 {
  font-size: 12px;
  line-height: 14px;
}

p:last-child {
  margin-bottom: 0;
}

a, button {
  color: inherit;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
}

a, button, img, input, span {
  transition: all 0.3s ease 0s;
}

*:focus {
  outline: none !important;
}

a:focus {
  color: inherit;
  outline: none;
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

button, input[type="submit"] {
  cursor: pointer;
}

img {
  max-width: 100%;
  height: auto;
}

ul {
  list-style: outside none none;
  margin: 0;
  padding: 0;
}

figure {
  padding: 0;
  margin: 0;
}

/*-- 
    - Common Classes
-----------------------------------------*/
.fix {
  overflow: hidden;
}

.hidden {
  display: none;
}

.clear {
  clear: both;
}

.container {
  max-width: 1430px;
}

@media only screen and (max-width: 767px) {
  .container {
    width: 450px;
  }
}
@media only screen and (max-width: 479px) {
  .container {
    width: 100%;
  }
}
.capitalize {
  text-transform: capitalize;
}

.uppercase {
  text-transform: uppercase;
}

.no-gutters > .col, .no-gutters > [class*="col-"] {
  padding-right: 0;
  padding-left: 0;
  margin: 0;
}

/*-- 
    - Background color
-----------------------------------------*/
.bg-white {
  background-color: #ffffff;
}

.bg-light-grey {
  background-color: #f6fafb;
}

.bg-grey {
  background-color: #f8f8f8;
}

.bluewood-bg {
  background: #354b65;
}

/*- Overlay Color BG -*/
.bluewood-bg-overlay {
  position: relative;
}
.bluewood-bg-overlay::before {
  background: rgba(70, 90, 112, 0.9);
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.overly-bg-black {
  position: relative;
}
.overly-bg-black::after {
  background: rgba(0, 0, 0, 0.3);
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

/*-- 
    - color
-----------------------------------------*/
/*-- 
    - Input Placeholder
-----------------------------------------*/
input:-moz-placeholder, textarea:-moz-placeholder {
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}

input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}

/*-- 
    Scroll Up 
-----------------------------------------*/
#scrollUp {
  background: #009035 none repeat scroll 0 0;
  bottom: 85px;
  color: #ffffff;
  cursor: pointer;
  display: none;
  font-size: 20px;
  height: 45px;
  line-height: 39px;
  position: fixed;
  right: 12px;
  text-align: center;
  width: 45px;
  z-index: 9999;
  border-radius: 50%;
  border: 2px solid #fff;
  -webkit-transition: .3s;
  transition: .3s;
}
#scrollUp:hover i {
  animation-name: fadeInUp;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
}

/*-- 
    - Main Wrapper
-----------------------------------------*/
.main-wrapper.header-transparent {
  padding: 0 !important;
  margin: 0 !important;
}

/*-- 
    - Section Padding
-------------------------------------*/
.section-ptb {
  padding: 100px 0;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .section-ptb {
    padding: 90px 0;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .section-ptb {
    padding: 80px 0;
  }
}
@media only screen and (max-width: 767px) {
  .section-ptb {
    padding: 70px 0;
  }
}
@media only screen and (max-width: 479px) {
  .section-ptb {
    padding: 60px 0;
  }
}

.section-pt {
  padding-top: 100px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .section-pt {
    padding-top: 90px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .section-pt {
    padding-top: 80px;
  }
}
@media only screen and (max-width: 767px) {
  .section-pt {
    padding-top: 70px;
  }
}
@media only screen and (max-width: 479px) {
  .section-pt {
    padding-top: 60px;
  }
}

.section-pt-70 {
  padding-top: 70px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .section-pt-70 {
    padding-top: 60px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .section-pt-70 {
    padding-top: 50px;
  }
}
@media only screen and (max-width: 767px) {
  .section-pt-70 {
    padding-top: 40px;
  }
}
@media only screen and (max-width: 479px) {
  .section-pt-70 {
    padding-top: 30px;
  }
}

.section-pb-70 {
  padding-bottom: 80px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .section-pb-70 {
    padding-bottom: 60px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .section-pb-70 {
    padding-bottom: 50px;
  }
}
@media only screen and (max-width: 767px) {
  .section-pb-70 {
    padding-bottom: 40px;
  }
}
@media only screen and (max-width: 479px) {
  .section-pb-70 {
    padding-bottom: 30px;
  }
}

.section-pb {
  padding-bottom: 100px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .section-pb {
    padding-bottom: 90px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .section-pb {
    padding-bottom: 80px;
  }
}
@media only screen and (max-width: 767px) {
  .section-pb {
    padding-bottom: 70px;
  }
}
@media only screen and (max-width: 479px) {
  .section-pb {
    padding-bottom: 60px;
  }
}

.pb-60 {
  padding-bottom: 60px;
}

.mt-20 {
  margin-top: 20px;
}

.mt-23 {
  margin-top: 23px;
}

.mt-30 {
  margin-top: 30px;
}

.mt-40 {
  margin-top: 40px;
}

.mt-50 {
  margin-top: 50px;
}

.mt-45 {
  margin-top: 45px;
}

.mt-55 {
  margin-top: 55px;
}

.mt-57 {
  margin-top: 57px;
}

.mt-60 {
  margin-top: 60px;
}

.mb-10 {
  margin-bottom: 10px;
}

.mb-15 {
  margin-bottom: 15px;
}

.mb-30 {
  margin-bottom: 30px;
}

.mb-25 {
  margin-bottom: 25px;
}

.mb-35 {
  margin-bottom: 35px;
}

.mb-40 {
  margin-bottom: 40px;
}

.mb-45 {
  margin-bottom: 45px;
}

.mb-50 {
  margin-bottom: 50px;
}

.mb-55 {
  margin-bottom: 55px;
}

.mb-58 {
  margin-bottom: 58px;
}

.mb-46 {
  margin-bottom: 46px;
}

.mb-47 {
  margin-bottom: 47px;
}

.mb-60 {
  margin-bottom: 60px;
}

.mb-65 {
  margin-bottom: 65px;
}

.mb-66 {
  margin-bottom: 66px;
}

.mb-68 {
  margin-bottom: 68px;
}

.mb-70 {
  margin-bottom: 70px;
}

/* 02. Element */
.button {
  background: #009035;
  box-shadow: none;
  color: #ffffff;
  display: inline-block;
  height: 45px;
  line-height: 45px;
  padding: 0 22px;
  text-transform: uppercase;
  font-size: 13px;
  border-radius: 3px;
}

/* 2. Home 1 Header css here */
/* 01. header css here */
.off_canvars_overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  cursor: crosshair;
  background: #222222;
  top: 0;
}
.off_canvars_overlay.active {
  opacity: 0.5;
  visibility: visible;
}

.Offcanvas_menu {
  display: none;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .Offcanvas_menu {
    display: block;
  }
}
@media only screen and (max-width: 767px) {
  .Offcanvas_menu {
    display: block;
  }
}

.Offcanvas_menu_wrapper {
  width: 290px;
  position: fixed;
  background: #fff;
  z-index: 99;
  top: 0;
  height: 100vh;
  transition: .5s;
  left: 0;
  margin-left: -300px;
  padding: 50px 20px 30px;
  overflow-y: auto;
}
.Offcanvas_menu_wrapper.active {
  margin-left: 0;
}
.Offcanvas_menu_wrapper .slinky-theme-default {
  background: inherit;
  min-height: 300px;
  overflow-y: auto;
}
.Offcanvas_menu_wrapper .search_container {
  display: block;
}
.Offcanvas_menu_wrapper .header_configure_area {
  display: block;
  margin-bottom: 20px;
  display: flex;
  margin-bottom: 25px;
}

.offcanvas_main_menu > li.menu-item-has-children.menu-open > span.menu-expand {
  transform: rotate(180deg);
}
.offcanvas_main_menu > li ul li.menu-item-has-children.menu-open span.menu-expand {
  transform: rotate(180deg);
}

.offcanvas_main_menu li {
  position: relative;
}
.offcanvas_main_menu li:last-child {
  margin: 0;
}
.offcanvas_main_menu li span.menu-expand {
  position: absolute;
  right: 0;
}
.offcanvas_main_menu li a {
  font-size: 14px;
  font-weight: 400;
  text-transform: capitalize;
  display: block;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #ebebeb;
}
.offcanvas_main_menu li a:hover {
  color: #009035;
}
.offcanvas_main_menu li ul.sub-menu {
  padding-left: 20px;
}

.Offcanvas_footer {
  margin-top: 50px;
  padding-bottom: 50px;
  text-align: center;
}
.Offcanvas_footer span a {
  font-size: 14px;
}
.Offcanvas_footer span a:hover {
  color: #009035;
}
.Offcanvas_footer ul {
  margin-top: 20px;
}
.Offcanvas_footer ul li {
  display: inline-block;
  margin-right: 4px;
}
.Offcanvas_footer ul li:last-child {
  margin-right: 0;
}
.Offcanvas_footer ul li a {
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 50%;
  font-size: 13px;
  color: #ffffff;
}
.Offcanvas_footer ul li.facebook a {
  background: #3c5b9b;
}
.Offcanvas_footer ul li.facebook a:hover {
  background: #009035;
}
.Offcanvas_footer ul li.twitter a {
  background: #1DA1F2;
}
.Offcanvas_footer ul li.twitter a:hover {
  background: #009035;
}
.Offcanvas_footer ul li.pinterest a {
  background: #BD081B;
}
.Offcanvas_footer ul li.pinterest a:hover {
  background: #009035;
}
.Offcanvas_footer ul li.google-plus a {
  background: #DD4D42;
}
.Offcanvas_footer ul li.google-plus a:hover {
  background: #009035;
}
.Offcanvas_footer ul li.linkedin a {
  background: #010103;
}
.Offcanvas_footer ul li.linkedin a:hover {
  background: #009035;
}

.slinky-theme-default a:not(.back) {
  padding: 10px 0;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 400;
}
.slinky-theme-default a:not(.back):hover {
  background: inherit;
  color: #009035;
}

.canvas_close {
  position: absolute;
  top: 10px;
  right: 13px;
}
.canvas_close a {
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 500;
  width: 32px;
  height: 32px;
  display: block;
  text-align: center;
  line-height: 31px;
  border: 1px solid #ebebeb;
  border-radius: 50%;
}
.canvas_close a:hover {
  background: #009035;
  border-color: #009035;
  color: #fff;
}

.canvas_open {
  position: absolute;
  right: 21px;
  top: 32px;
  z-index: 9;
}
@media only screen and (max-width: 767px) {
  .canvas_open {
    right: 24px;
    top: 24px;
  }
}
.canvas_open a {
  font-size: 30px;
  color: #222222;
  width: 43px;
  height: 41px;
  display: block;
  line-height: 39px;
  text-align: center;
  border: 1px solid #222222;
}
@media only screen and (max-width: 767px) {
  .canvas_open a {
    width: 35px;
    height: 34px;
    line-height: 34px;
    font-size: 24px;
  }
}
.canvas_open a:hover {
  color: #009035;
  border-color: #009035;
}

.Offcanvas_menu_two .canvas_close a:hover {
  background: #0066c0;
  border-color: #0066c0;
}
.Offcanvas_menu_two .offcanvas_main_menu li a:hover {
  color: #0066c0;
}
.Offcanvas_menu_two .Offcanvas_footer span a:hover {
  color: #0066c0;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .main_header {
    padding-bottom: 30px;
  }
}
@media only screen and (max-width: 767px) {
  .main_header {
    padding-bottom: 25px;
  }
}
.main_header.header_padding {
  padding-bottom: 0;
}

.sticky-header.sticky {
  position: fixed;
  z-index: 99;
  width: 100%;
  top: 0;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.11);
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 900ms;
  animation-duration: 900ms;
  -webkit-animation-timing-function: cubic-bezier(0.2, 1, 0.22, 1);
  animation-timing-function: cubic-bezier(0.2, 1, 0.22, 1);
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  -webkit-animation-direction: normal;
  animation-direction: normal;
  -webkit-animation-fill-mode: none;
  animation-fill-mode: none;
  -webkit-animation-play-state: running;
  animation-play-state: running;
  border-bottom: 0;
  display: block;
  padding: 6px 20px;
  left: 0;
  right: 0;
}
@media only screen and (min-width: 1200px) and (max-width: 1600px) {
  .sticky-header.sticky {
    padding: 6px 0;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .sticky-header.sticky {
    position: inherit;
    -webkit-box-shadow: inherit;
    box-shadow: inherit;
    -webkit-animation-name: inherit;
    animation-name: inherit;
    padding: 0;
    background: inherit;
    opacity: inherit;
  }
}
@media only screen and (max-width: 767px) {
  .sticky-header.sticky {
    position: inherit;
    -webkit-box-shadow: inherit;
    box-shadow: inherit;
    -webkit-animation-name: inherit;
    animation-name: inherit;
    padding: 0;
    background: inherit;
    opacity: inherit;
  }
}

.sticky_header_area {
  display: none;
}

.sticky_header_right {
  display: flex;
  justify-content: flex-end;
}
.sticky_header_right .main_menu {
  margin-left: 0;
  margin-right: 50px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .sticky_header_right .main_menu {
    margin-right: 44px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .sticky_header_right .main_menu nav > ul > li {
    margin-right: 24px;
  }
}
.sticky_header_right .main_menu nav > ul > li > a {
  color: #222222;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .sticky_header_right .main_menu nav > ul > li > a {
    font-size: 13px;
  }
}
.sticky_header_right .main_menu nav > ul > li > a.active {
  color: #009035;
}
.sticky_header_right .main_menu nav > ul > li > a::before {
  display: none;
}
.sticky_header_right .main_menu nav > ul > li:hover > a {
  color: #009035;
}

/*header top css here*/
.header_top {
  border-bottom: 1px solid #ebebeb;
}
@media only screen and (max-width: 767px) {
  .header_top {
    display: none;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header_top {
    display: none;
  }
}

@media only screen and (max-width: 767px) {
  .antomi_message {
    text-align: center;
    margin-bottom: 18px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .antomi_message {
    text-align: center;
    margin-bottom: 18px;
  }
}
.antomi_message p {
  font-size: 14px;
  line-height: 50px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .antomi_message p {
    font-size: 13px;
    line-height: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
@media only screen and (max-width: 767px) {
  .antomi_message p {
    font-size: 13px;
    line-height: 21px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .antomi_message p {
    font-size: 13px;
    line-height: 21px;
  }
}

@media only screen and (max-width: 767px) {
  .header_top_settings {
    text-align: center !important;
    margin-bottom: 21px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header_top_settings {
    text-align: center !important;
    margin-bottom: 21px;
  }
}
.header_top_settings ul li {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  text-transform: capitalize;
  margin-right: 20px;
  padding-right: 20px;
  position: relative;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .header_top_settings ul li {
    font-size: 13px;
    margin-right: 10px;
    padding-right: 10px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header_top_settings ul li {
    font-size: 13px;
    line-height: 18px;
    margin-right: 15px;
    padding-right: 0;
  }
}
@media only screen and (max-width: 767px) {
  .header_top_settings ul li {
    font-size: 13px;
    line-height: 18px;
    margin-right: 15px;
    padding-right: 0;
  }
}
.header_top_settings ul li::before {
  background: #ebebeb;
  content: '';
  display: block;
  height: 20px;
  position: absolute;
  right: 0;
  top: 50%;
  width: 1px;
  z-index: 9;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header_top_settings ul li::before {
    display: none;
  }
}
@media only screen and (max-width: 767px) {
  .header_top_settings ul li::before {
    display: none;
  }
}
.header_top_settings ul li:last-child {
  margin-right: 0;
  padding-right: 0;
}
.header_top_settings ul li:last-child::before {
  display: none;
}
.header_top_settings ul li a:hover {
  color: #009035;
}

/*header top css end*/
/* 2.2 header middel css here */
@media only screen and (max-width: 767px) {
  .logo a img {
    max-width: 140px;
  }
}

.header_middle {
  padding: 27px 0;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header_middle {
    padding: 30px 0;
  }
}
@media only screen and (max-width: 767px) {
  .header_middle {
    padding: 25px 0;
  }
}

/* 2.4 main menu css here */
.menu_position {
  position: relative;
}

.main_menu {
  margin-left: 20px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .main_menu {
    margin-left: 0;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .main_menu {
    display: none;
  }
}
@media only screen and (max-width: 767px) {
  .main_menu {
    display: none;
  }
}
.main_menu nav > ul > li {
  display: inline-block;
  position: relative;
  margin-right: 35px;
  padding: 13px 0;
}
.main_menu nav > ul > li:last-child {
  margin-right: 0;
}
@media only screen and (min-width: 1200px) and (max-width: 1600px) {
  .main_menu nav > ul > li {
    margin-right: 32px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .main_menu nav > ul > li {
    margin-right: 26px;
  }
}
.main_menu nav > ul > li:hover ul.sub_menu {
  opacity: 1;
  visibility: visible;
  transform: perspective(600px) rotateX(0deg);
}
.main_menu nav > ul > li:hover .mega_menu {
  opacity: 1;
  visibility: visible;
  transform: perspective(600px) rotateX(0deg);
}
.main_menu nav > ul > li:hover > a::before {
  left: 0;
  right: 0;
  width: 100%;
}
.main_menu nav > ul > li > a {
  display: block;
  font-size: 14px;
  line-height: 30px;
  text-transform: uppercase;
  font-weight: 500;
  position: relative;
  color: #222222;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .main_menu nav > ul > li > a {
    font-size: 13px;
  }
}
.main_menu nav > ul > li > a i {
  margin-left: 3px;
}
.main_menu nav > ul > li > a.active::before {
  left: 0;
  right: 0;
  width: 100%;
}
.main_menu nav > ul > li > a::before {
  background: #222222;
  bottom: 0;
  content: '';
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  right: 50%;
  top: auto;
  width: 0;
  z-index: 9;
  -webkit-transition: .3s ease;
  -moz-transition: .3s ease;
  -ms-transition: .3s ease;
  -o-transition: .3s ease;
  transition: .3s ease;
}
.main_menu nav > ul > li ul.sub_menu {
  position: absolute;
  min-width: 200px;
  padding: 24px 30px;
  background: #fff;
  border: 1px solid #ebebeb;
  -webkit-transform: perspective(600px) rotateX(-90deg);
  transform: perspective(600px) rotateX(-90deg);
  -webkit-transform-origin: 0 0 0;
  transform-origin: 0 0 0;
  left: 0;
  right: auto;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  z-index: 99;
  top: 100%;
  text-align: left;
}
.main_menu nav > ul > li ul.sub_menu li a {
  font-size: 13px;
  font-weight: 400;
  display: block;
  line-height: 32px;
  text-transform: capitalize;
  font-size: 13px;
}
.main_menu nav > ul > li ul.sub_menu li a:hover {
  color: #009035;
}
.main_menu nav > ul > li.mega_items {
  position: static;
}
.main_menu nav > ul > li .mega_menu {
  position: absolute;
  min-width: 100%;
  padding: 25px 30px 30px 30px;
  background: #fff;
  border: 1px solid #ebebeb;
  -webkit-transform: perspective(600px) rotateX(-90deg);
  transform: perspective(600px) rotateX(-90deg);
  -webkit-transform-origin: 0 0 0;
  transform-origin: 0 0 0;
  left: 0;
  right: auto;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  z-index: 99;
  top: 100%;
  text-align: left;
}

.mega_menu_inner {
  display: flex;
  justify-content: space-between;
}
.mega_menu_inner > li > a {
  font-size: 14px;
  line-height: 24px;
  text-transform: capitalize;
  font-weight: 500;
  display: block;
  margin-bottom: 8px;
}
.mega_menu_inner > li > a:hover {
  color: #009035;
}
.mega_menu_inner > li ul li {
  display: block;
}
.mega_menu_inner > li ul li a {
  font-size: 13px;
  font-weight: 400;
  display: block;
  line-height: 28px;
  text-transform: capitalize;
}
.mega_menu_inner > li ul li a:hover {
  color: #009035;
}

/*main menu css end*/
.header_configure_area {
  display: flex;
  justify-content: flex-end;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header_configure_area {
    display: none;
    justify-content: center;
  }
}
@media only screen and (max-width: 767px) {
  .header_configure_area {
    display: none;
    justify-content: center;
  }
}

.header_wishlist {
  margin-right: 40px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .header_wishlist {
    margin-right: 30px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header_wishlist {
    margin-right: 30px;
  }
}
@media only screen and (max-width: 767px) {
  .header_wishlist {
    margin-right: 30px;
  }
}
.header_wishlist a {
  border: 2px solid #ebebeb;
  display: block;
  height: 50px;
  line-height: 46px;
  position: relative;
  text-align: center;
  width: 50px;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
}
.header_wishlist a:hover {
  color: #009035;
}
.header_wishlist a i {
  font-size: 20px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header_wishlist a i {
    font-size: 18px;
  }
}
@media only screen and (max-width: 767px) {
  .header_wishlist a i {
    font-size: 18px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .header_wishlist a {
    height: 46px;
    width: 46px;
    line-height: 42px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header_wishlist a {
    height: 40px;
    line-height: 36px;
    width: 40px;
  }
}
@media only screen and (max-width: 767px) {
  .header_wishlist a {
    height: 40px;
    line-height: 36px;
    width: 40px;
  }
}
.header_middle.sticky-header.sticky .logo {
    width: 150px;
}
.header_wishlist a span.wishlist_count {
  background: #009035;
  color: #fff;
  font-size: 13px;
  height: 22px;
  left: -12px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translatey(-50%);
  width: 22px;
  z-index: 9;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header_wishlist a span.wishlist_count {
    font-size: 12px;
    height: 20px;
    left: -16px;
    line-height: 20px;
    width: 20px;
  }
}
@media only screen and (max-width: 767px) {
  .header_wishlist a span.wishlist_count {
    font-size: 12px;
    height: 20px;
    left: -16px;
    line-height: 20px;
    width: 20px;
  }
}

.mini_cart_wrapper {
  position: relative;
}
.mini_cart_wrapper > a:hover {
  color: #009035;
}
.mini_cart_wrapper > a i.ion-ios-arrow-down {
  margin-left: 4px;
}
.mini_cart_wrapper > a i.fa-shopping-bag {
  border: 2px solid #ebebeb;
  display: inline-block;
  height: 50px;
  line-height: 46px;
  text-align: center;
  width: 50px;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  font-size: 20px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .mini_cart_wrapper > a i.fa-shopping-bag {
    height: 46px;
    width: 46px;
    line-height: 42px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .mini_cart_wrapper > a i.fa-shopping-bag {
    height: 40px;
    line-height: 36px;
    width: 40px;
  }
}
@media only screen and (max-width: 767px) {
  .mini_cart_wrapper > a i.fa-shopping-bag {
    height: 40px;
    line-height: 36px;
    width: 40px;
  }
}
.mini_cart_wrapper > a span.cart_count {
  background: #009035;
  color: #fff;
  font-size: 13px;
  height: 22px;
  left: -12px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translatey(-50%);
  width: 22px;
  z-index: 9;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .mini_cart_wrapper > a span.cart_count {
    font-size: 12px;
    height: 20px;
    left: -16px;
    line-height: 20px;
    width: 20px;
  }
}
@media only screen and (max-width: 767px) {
  .mini_cart_wrapper > a span.cart_count {
    font-size: 12px;
    height: 20px;
    left: -16px;
    line-height: 20px;
    width: 20px;
  }
}
.mini_cart_wrapper > a span.cart_price {
  font-size: 14px;
  font-weight: 500;
  margin-left: 5px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .mini_cart_wrapper > a span.cart_price {
    font-size: 13px;
  }
}
@media only screen and (max-width: 767px) {
  .mini_cart_wrapper > a span.cart_price {
    font-size: 13px;
  }
}
.mini_cart_wrapper:hover .mini_cart {
  max-height: 532px;
  padding: 18px 30px 30px;
  visibility: visible;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .mini_cart_wrapper:hover .mini_cart {
    padding: 10px 15px 15px;
    visibility: inherit;
  }
}
@media only screen and (max-width: 767px) {
  .mini_cart_wrapper:hover .mini_cart {
    padding: 10px 15px 15px;
    visibility: inherit;
  }
}

.mini_cart {
  position: absolute;
  min-width: 355px;
  padding: 0 30px 0;
  background: #fff;
  border: 0;
  z-index: 999;
  right: 0;
  top: 115%;
  max-height: 0;
  visibility: hidden;
  overflow: hidden;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border: 1px solid #ebebeb;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .mini_cart {
    display: none;
    transition: unset;
    max-height: 500px;
    min-width: 260px;
    border: 1px solid #ebebeb;
    left: -108px;
    visibility: inherit;
    padding: 10px 15px 15px;
  }
}
@media only screen and (max-width: 767px) {
  .mini_cart {
    display: none;
    transition: unset;
    max-height: 500px;
    min-width: 260px;
    border: 1px solid #ebebeb;
    left: -108px;
    visibility: inherit;
    padding: 10px 15px 15px;
  }
}

.cart_img {
  width: 90px;
  margin-right: 10px;
  border: 1px solid #ebebeb;
}
.cart_img:hover {
  border-color: #009035;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .cart_img {
    width: 70px;
  }
}
@media only screen and (max-width: 767px) {
  .cart_img {
    width: 70px;
  }
}

.cart_info {
  width: 63%;
}
.cart_info a {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: block;
  margin-bottom: 6px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .cart_info a {
    font-size: 13px;
  }
}
@media only screen and (max-width: 767px) {
  .cart_info a {
    font-size: 13px;
  }
}
.cart_info a:hover {
  color: #009035;
}
.cart_info p {
  font-size: 12px;
}
.cart_info p span {
  font-weight: 600;
}

.cart_remove a {
  font-size: 15px;
  border: 1px solid #ebebeb;
  width: 20px;
  height: 20px;
  display: block;
  line-height: 20px;
  text-align: center;
  border-radius: 50%;
}
.cart_remove a:hover {
  background: #009035;
  border-color: #009035;
  color: #ffffff;
}

.cart_item {
  overflow: hidden;
  padding: 11px 0;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  justify-content: space-between;
}

.mini_cart_table {
  padding: 23px 0;
}

.cart_total {
  display: flex;
  justify-content: space-between;
}
.cart_total span {
  font-size: 14px;
  font-weight: 400;
}
.cart_total span.price {
  font-weight: 700;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .cart_total span {
    font-size: 13px;
  }
}
@media only screen and (max-width: 767px) {
  .cart_total span {
    font-size: 13px;
  }
}

.cart_button:first-child {
  margin-bottom: 15px;
}
.cart_button a {
  text-transform: uppercase;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 500;
  background: #eef0f1;
  border: 1px solid #ebebeb;
  display: block;
  text-align: center;
  line-height: 20px;
  margin-bottom: 0;
  padding: 13px 0px 11px;
}
.cart_button a:hover {
  background: #009035;
  border-color: #009035;
  color: #ffffff;
}

/*header middel css end*/
/*mobaile menu css here*/
.mean-container .mean-bar {
  background: inherit;
  position: absolute;
  z-index: 9;
  top: 43px;
  left: 0;
  width: 100%;
}
.mean-container .mean-bar::after {
  top: -33px;
  left: 22px;
  color: #fff;
}
@media only screen and (max-width: 767px) {
  .mean-container .mean-bar::after {
    left: 22px;
    font-size: 15px;
  }
}
.mean-container .mean-nav {
  max-height: 300px;
  overflow: auto;
}
.mean-container .mean-nav ul li a {
  font-weight: 400;
}
.mean-container a.meanmenu-reveal {
  float: left;
  right: 17px;
  top: -34px;
  color: #fff;
}
@media only screen and (max-width: 767px) {
  .mean-container a.meanmenu-reveal {
    right: 15px;
    top: -34px;
  }
}
.mean-container a.meanmenu-reveal span {
  background: #fff;
}

.mobile-menu {
  border: 1px solid #ddd;
  height: 45px;
  top: -31px;
  position: relative;
}
@media only screen and (max-width: 767px) {
  .mobile-menu {
    top: 19px;
  }
}

/*header bottom css heer*/
.header_bottom .column1 {
  flex: 0 0 21%;
  max-width: 21%;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header_bottom .column1 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}
@media only screen and (max-width: 767px) {
  .header_bottom .column1 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
.header_bottom .column2 {
  flex: 0 0 56%;
  max-width: 56%;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header_bottom .column2 {
    display: none;
  }
}
.header_bottom .column3 {
  flex: 0 0 23%;
  max-width: 23%;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header_bottom .column3 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}
@media only screen and (max-width: 767px) {
  .header_bottom .column3 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

/*search container css here*/
.hover_category {
  position: relative;
  border-radius: 4px 0 0 4px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  background: #ebebeb;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .hover_category {
    margin-left: 0;
  }
}
@media only screen and (max-width: 767px) {
  .hover_category {
    margin-left: 0;
  }
}
.hover_category:hover {
  background: #009035;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .hover_category:hover {
    background: inherit;
  }
}
@media only screen and (max-width: 767px) {
  .hover_category:hover {
    background: inherit;
  }
}
.hover_category:hover > .select_option span.current {
  color: #ffffff;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .hover_category:hover > .select_option span.current {
    color: #222222;
  }
}
@media only screen and (max-width: 767px) {
  .hover_category:hover > .select_option span.current {
    color: #222222;
  }
}
.hover_category:hover > .select_option::after {
  border-bottom: 2px solid #ffffff;
  border-right: 2px solid #ffffff;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .hover_category:hover > .select_option::after {
    border-bottom: 2px solid #999;
    border-right: 2px solid #999;
  }
}
@media only screen and (max-width: 767px) {
  .hover_category:hover > .select_option::after {
    border-bottom: 2px solid #999;
    border-right: 2px solid #999;
  }
}
.hover_category::before {
  content: "";
  width: 1px;
  height: 16px;
  background: #a1a1a1;
  position: absolute;
  top: 50%;
  margin-top: -8px;
  right: 0;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .hover_category::before {
    display: none;
  }
}
@media only screen and (max-width: 767px) {
  .hover_category::before {
    display: none;
  }
}
.hover_category .select_option {
  border: 0;
  background: inherit;
  height: 54px;
  line-height: 54px;
  padding-left: 25px;
  padding-right: 40px;
  font-size: 14px;
  min-width: 180px;
  border-radius: 4px 0 0 4px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .hover_category .select_option {
    padding-left: 17px;
    padding-right: 30px;
    min-width: 145px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .hover_category .select_option {
    height: 34px;
    line-height: 35px;
    font-size: 13px;
    padding-left: 41px;
    padding-right: 50px;
    border: 1px solid #ebebeb;
  }
}
@media only screen and (max-width: 767px) {
  .hover_category .select_option {
    height: 34px;
    line-height: 35px;
    font-size: 13px;
    padding-left: 41px;
    padding-right: 50px;
    border: 1px solid #ebebeb;
  }
}
.hover_category .select_option::after {
  top: 54%;
  right: 24px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .hover_category .select_option::after {
    right: 15px;
  }
}
.hover_category .select_option ul.list {
  max-height: 300px;
  overflow: auto;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .search_container {
    margin-bottom: 22px;
    display: none;
  }
}
@media only screen and (max-width: 767px) {
  .search_container {
    margin-bottom: 22px;
    display: none;
  }
}
.search_container form {
  display: flex;
  border-radius: 5px;
  background: #fff;
  width: 100%;
  justify-content: space-between;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .search_container form {
    width: 530px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .search_container form {
    flex-direction: column-reverse;
    border: 0;
    width: 100%;
    align-items: center;
  }
}
@media only screen and (max-width: 767px) {
  .search_container form {
    flex-direction: column-reverse;
    border: 0;
    width: 100%;
    align-items: center;
  }
}

.search_box {
  position: relative;
  width: 100%;
  border-top: 2px solid #ebebeb;
  border-right: 2px solid #ebebeb;
  border-bottom: 2px solid #ebebeb;
  border-radius: 0 5px 5px 0;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .search_box {
    margin-bottom: 25px;
    border-left: 2px solid #ebebeb;
    border-radius: 4px;
  }
}
@media only screen and (max-width: 767px) {
  .search_box {
    margin-bottom: 25px;
    border-left: 2px solid #ebebeb;
    border-radius: 4px;
  }
}
.search_box input::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #222222;
}
.search_box input::-moz-placeholder {
  /* Firefox 19+ */
  color: #222222;
}
.search_box input:-ms-input-placeholder {
  /* IE 10+ */
  color: #222222;
}
.search_box input:-moz-placeholder {
  /* Firefox 18- */
  color: #222222;
}
.search_box input {
  border: 0;
  background: inherit;
  width: 100%;
  height: 50px;
  color: #222222;
  font-size: 14px;
  font-weight: 400;
  padding: 0 145px 0 20px;
  opacity: 0.7;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .search_box input {
    padding: 0 118px 0 20px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .search_box input {
    font-size: 12px;
    padding: 0 92px 0 10px;
    width: 100%;
    height: 34px;
  }
}
@media only screen and (max-width: 767px) {
  .search_box input {
    font-size: 12px;
    padding: 0 92px 0 10px;
    width: 100%;
    height: 34px;
  }
}
.search_box button {
  font-size: 12px;
  text-transform: uppercase;
  border: 0;
  position: absolute;
  top: -2px;
  bottom: -2px;
  right: -2px;
  background: #009035;
  color: #fff;
  font-weight: 500;
  padding: 0 20px;
  min-width: 128px;
  border-radius: 0 5px 5px 0;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.search_box button:hover {
  background: #333;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .search_box button {
    padding: 0 17px;
    min-width: 100px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .search_box button {
    min-width: 78px;
    padding: 0 14px;
    top: -1px;
    bottom: -1px;
    right: -1px;
  }
}
@media only screen and (max-width: 767px) {
  .search_box button {
    min-width: 78px;
    padding: 0 14px;
    top: -1px;
    bottom: -1px;
    right: -1px;
  }
}

/*search container css end*/
.header_bigsale a {
  background: #333;
  color: #fff;
  display: block;
  font-size: 14px;
  font-weight: 500;
  height: 54px;
  line-height: 54px;
  padding: 0 10px;
  text-align: center;
  white-space: nowrap;
  width: 100%;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}
.header_bigsale a:hover {
  background: #009035;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header_bigsale a {
    height: 45px;
    line-height: 45px;
  }
}
@media only screen and (max-width: 767px) {
  .header_bigsale a {
    height: 40px;
    line-height: 40px;
    font-size: 13px;
  }
}

/*-- 2.3 Categories menu css here --*/
.categories_menu {
  position: relative;
}
@media only screen and (max-width: 767px) {
  .categories_menu {
    margin-bottom: 24px;
  }
}

.categories_title {
  background: #009035;
  padding: 0 30px;
  position: relative;
  cursor: pointer;
  height: 52px;
  line-height: 52px;
  border-radius: 4px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .categories_title {
    height: 45px;
    line-height: 46px;
  }
}
@media only screen and (max-width: 767px) {
  .categories_title {
    height: 40px;
    line-height: 40px;
  }
}
.categories_title::before {
  content: "\f394";
  color: #fff;
  display: inline-block;
  font-family: Ionicons;
  position: absolute;
  font-size: 22px;
  line-height: 0px;
  right: 20px;
  top: 50%;
  transform: translatey(-50%);
}
.categories_title h2 {
  font-size: 13px;
  font-weight: 500;
  line-height: 26px;
  color: #fff;
  cursor: pointer;
  margin-bottom: 0;
  display: inline-block;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .categories_title h2 {
    font-size: 14px;
  }
}
@media only screen and (max-width: 767px) {
  .categories_title h2 {
    font-size: 13px;
    line-height: 22px;
  }
}

.categories_menu_toggle {
  padding: 13px 0 7px;
  border: 2px solid #009035;
  background: #fff;
  position: absolute;
  width: 100%;
  top: 140%;
  z-index: 9;
}
@media only screen and (min-width: 1200px) and (max-width: 1600px) {
  .categories_menu_toggle {
    padding: 11px 0 2px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .categories_menu_toggle {
    display: none;
    max-height: 350px;
    overflow: auto;
  }
}
@media only screen and (max-width: 767px) {
  .categories_menu_toggle {
    display: none;
    max-height: 350px;
    overflow: auto;
    padding: 13px 10px 7px 20px;
  }
}
.categories_menu_toggle > ul > li {
  position: relative;
}
.categories_menu_toggle > ul > li > a {
  font-size: 14px;
  line-height: 43px;
  text-transform: capitalize;
  font-weight: 400;
  display: block;
  cursor: pointer;
  padding: 0 20px 0 30px;
}
@media only screen and (min-width: 1200px) and (max-width: 1600px) {
  .categories_menu_toggle > ul > li > a {
    line-height: 41px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .categories_menu_toggle > ul > li > a {
    line-height: 34px;
    padding: 0 6px 0 15px;
  }
}
@media only screen and (max-width: 767px) {
  .categories_menu_toggle > ul > li > a {
    line-height: 35px;
    padding: 0;
  }
}
.categories_menu_toggle > ul > li > a i.fa-angle-right {
  float: right;
  font-size: 15px;
  line-height: 35px;
  transition: .3s;
  -webkit-transition: .3s;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .categories_menu_toggle > ul > li > a i.fa-angle-right {
    display: none;
  }
}
@media only screen and (max-width: 767px) {
  .categories_menu_toggle > ul > li > a i.fa-angle-right {
    display: none;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .categories_menu_toggle > ul > li > a:hover {
    color: #009035;
  }
}
@media only screen and (max-width: 767px) {
  .categories_menu_toggle > ul > li > a:hover {
    color: #009035;
  }
}
.categories_menu_toggle > ul > li:last-child > a {
  border-bottom: 0;
}
.categories_menu_toggle > ul > li:hover ul.categories_mega_menu {
  opacity: 1;
  visibility: visible;
  left: 100%;
}
.categories_menu_toggle > ul > li:hover > a {
  color: #009035;
}
.categories_menu_toggle > ul > li ul.categories_mega_menu {
  position: absolute;
  left: 120%;
  width: 720px;
  border: 1px solid #ebebeb;
  background: #fff;
  padding: 25px 20px 23px;
  overflow: hidden;
  top: 0;
  -webkit-transition: .3s;
  transition: .3s;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .categories_menu_toggle > ul > li ul.categories_mega_menu {
    width: 680px;
  }
}
@media only screen and (max-width: 767px) {
  .categories_menu_toggle > ul > li ul.categories_mega_menu {
    display: none;
    opacity: inherit !important;
    visibility: inherit !important;
    left: inherit !important;
    width: 100%;
    top: 100%;
    max-height: 350px;
    overflow: auto;
    transition: unset;
    box-shadow: inherit;
    position: inherit;
    padding: 6px 20px 0px 22px;
    border: 0;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .categories_menu_toggle > ul > li ul.categories_mega_menu {
    display: none;
    opacity: inherit !important;
    visibility: inherit !important;
    left: inherit !important;
    width: 100%;
    top: 100%;
    max-height: 350px;
    overflow: auto;
    transition: unset;
    box-shadow: inherit;
    position: inherit;
    padding: 6px 20px 0px 40px;
    border: 0;
  }
}
.categories_menu_toggle > ul > li ul.categories_mega_menu.open {
  display: block;
  left: 0;
}
.categories_menu_toggle > ul > li ul.categories_mega_menu > li {
  padding: 0 15px;
  width: 25%;
  float: left;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .categories_menu_toggle > ul > li ul.categories_mega_menu > li {
    width: 100%;
    padding: 0;
  }
}
@media only screen and (max-width: 767px) {
  .categories_menu_toggle > ul > li ul.categories_mega_menu > li {
    width: 100%;
    padding: 0;
  }
}
.categories_menu_toggle > ul > li ul.categories_mega_menu > li > a {
  line-height: 30px;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  display: block;
  margin-bottom: 10px;
}
.categories_menu_toggle > ul > li ul.categories_mega_menu > li > a:hover {
  color: #009035;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .categories_menu_toggle > ul > li ul.categories_mega_menu > li.menu_item_children > a {
    text-transform: capitalize;
    font-weight: 400;
  }
}
@media only screen and (max-width: 767px) {
  .categories_menu_toggle > ul > li ul.categories_mega_menu > li.menu_item_children > a {
    text-transform: capitalize;
    font-weight: 400;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .categories_menu_toggle ul li.menu_item_children > a {
    position: relative;
  }
  .categories_menu_toggle ul li.menu_item_children > a::before {
    position: absolute;
    content: "+";
    right: 15px;
    top: 50%;
    transform: translatey(-50%);
    font-size: 20px;
  }
}
@media only screen and (max-width: 767px) {
  .categories_menu_toggle ul li.menu_item_children > a {
    position: relative;
  }
  .categories_menu_toggle ul li.menu_item_children > a::before {
    position: absolute;
    content: "+";
    right: 15px;
    top: 50%;
    transform: translatey(-50%);
    font-size: 20px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .categories_menu_toggle ul li.menu_item_children.open > a::before {
    display: none;
  }
  .categories_menu_toggle ul li.menu_item_children.open > a::after {
    position: absolute;
    content: "-";
    right: 15px;
    top: 50%;
    transform: translatey(-50%);
    font-size: 30px;
  }
}
@media only screen and (max-width: 767px) {
  .categories_menu_toggle ul li.menu_item_children.open > a::before {
    display: none;
  }
  .categories_menu_toggle ul li.menu_item_children.open > a::after {
    position: absolute;
    content: "-";
    right: 15px;
    top: 50%;
    transform: translatey(-50%);
    font-size: 30px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .categorie_sub_menu {
    display: none;
    padding: 1px 0 9px 30px;
  }
}
@media only screen and (max-width: 767px) {
  .categorie_sub_menu {
    display: none;
    padding: 1px 0 9px 30px;
  }
}
.categorie_sub_menu li a {
  color: #222222;
  text-transform: capitalize;
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 30px;
}
.categorie_sub_menu li a:hover {
  color: #009035;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .categorie_sub_menu li a {
    line-height: 33px;
  }
}
@media only screen and (max-width: 767px) {
  .categorie_sub_menu li a {
    line-height: 33px;
  }
}

.categories_menu_toggle ul li ul.categories_mega_menu.column_3 {
  width: 620px;
}
@media only screen and (max-width: 767px) {
  .categories_menu_toggle ul li ul.categories_mega_menu.column_3 {
    width: 100%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .categories_menu_toggle ul li ul.categories_mega_menu.column_3 {
    width: 100%;
  }
}

.categories_menu_toggle ul li ul.categories_mega_menu.column_3 > li {
  width: 33.33%;
}
@media only screen and (max-width: 767px) {
  .categories_menu_toggle ul li ul.categories_mega_menu.column_3 > li {
    width: 100%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .categories_menu_toggle ul li ul.categories_mega_menu.column_3 > li {
    width: 100%;
  }
}

.categories_menu_toggle ul li ul.categories_mega_menu.column_2 {
  width: 500px;
}
@media only screen and (max-width: 767px) {
  .categories_menu_toggle ul li ul.categories_mega_menu.column_2 {
    width: 100%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .categories_menu_toggle ul li ul.categories_mega_menu.column_2 {
    width: 100%;
  }
}

.categories_menu_toggle ul li ul.categories_mega_menu.column_2 > li {
  width: 50%;
}
@media only screen and (max-width: 767px) {
  .categories_menu_toggle ul li ul.categories_mega_menu.column_2 > li {
    width: 100%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .categories_menu_toggle ul li ul.categories_mega_menu.column_2 > li {
    width: 100%;
  }
}

.categorie_sub {
  opacity: 0;
  z-index: 999;
  position: absolute;
  right: -2px;
  left: -2px;
  border-left: 2px solid #009035;
  border-right: 2px solid #009035;
  border-bottom: 2px solid #009035;
  background: #fff;
  -webkit-transition: .3s;
  transition: .3s;
  top: 65%;
  visibility: hidden;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .categorie_sub {
    width: 100%;
    left: 0px;
    border-left: 0;
    border-right: 0;
    border-bottom: 0;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .categorie_sub {
    border-left: 0;
    border-right: 0;
    border-bottom: 0;
  }
}
.categorie_sub.open {
  top: 95%;
  opacity: 1;
  visibility: visible;
}

.categories_menu_toggle ul li.has-sub > a::before {
  position: absolute;
  content: "\f055";
  font-family: FontAwesome;
  top: 0;
  right: 20px;
  font-size: 18px;
  pointer-events: none;
}

.categories_menu_toggle ul li.has-sub > a.open::before {
  content: "\f056";
}

.categories_menu_toggle ul li.has-sub ul.categorie_sub li a {
  text-transform: capitalize;
  font-size: 13px;
  font-weight: 400;
  padding-bottom: 16px;
  padding-left: 30px;
  display: block;
}

.categories_menu_toggle ul li.has-sub ul.categorie_sub li a:hover {
  color: #009035;
}

.categories_menu_toggle ul li.has-sub {
  padding-bottom: 10px;
}

.categories_menu_toggle ul li ul.categories_mega_menu > li:first-child {
  padding-left: 0;
}

.categories_menu_toggle ul li ul.categories_mega_menu > li:last-child {
  padding-right: 0;
}

.categorie_banner {
  position: absolute;
  bottom: 0;
  right: 20px;
  width: 500px;
}
@media only screen and (max-width: 767px) {
  .categorie_banner {
    display: none;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .categorie_banner {
    display: none;
  }
}
.categorie_banner a img:hover {
  opacity: 0.8;
}

/*-- 2.7 Categories menu css end --*/
/*home two css here*/
.categories_three .categories_menu_toggle {
  display: none;
}

/*home four css here*/
.Offcanvas_four .canvas_open a {
  color: #ffffff;
  border: 1px solid #ffffff;
}
.Offcanvas_four .canvas_open a:hover {
  color: #009035;
  border-color: #009035;
}

.sticky_header_four {
  display: none;
}
.sticky_header_four.sticky-header.sticky {
  display: block;
}

.header_four {
  background: #232f3e;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header_four {
    margin-bottom: 30px;
  }
}
@media only screen and (max-width: 767px) {
  .header_four {
    margin-bottom: 30px;
  }
}
.header_four .header_top {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.header_four .antomi_message p {
  color: #ffffff;
}
.header_four .header_top_settings ul li {
  color: #ffffff;
}

.header_middle_style4 {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header_middle_style4 {
    border-bottom: 0;
  }
}
.header_middle_style4 .column1 {
  flex: 0 0 21%;
  max-width: 21%;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header_middle_style4 .column1 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}
@media only screen and (max-width: 767px) {
  .header_middle_style4 .column1 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
.header_middle_style4 .column2 {
  flex: 0 0 56%;
  max-width: 56%;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header_middle_style4 .column2 {
    display: none;
  }
}
.header_middle_style4 .column3 {
  flex: 0 0 23%;
  max-width: 23%;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header_middle_style4 .column3 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}
@media only screen and (max-width: 767px) {
  .header_middle_style4 .column3 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
.header_middle_style4 .search_container {
  padding-right: 10px;
}

.menu_four nav > ul > li > a {
  color: #ffffff;
}
.menu_four nav > ul > li > a::before {
  background: #ffffff;
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .header_configure_four .header_wishlist {
    margin-right: 25px;
  }
}
.header_configure_four .header_wishlist a {
  color: #ffffff;
}
.header_configure_four .header_wishlist a:hover {
  color: #009035;
}
.header_configure_four .mini_cart_wrapper > a {
  color: #ffffff;
}
.header_configure_four .mini_cart_wrapper > a:hover {
  color: #009035;
}

.categories_four .categories_title {
  background: #232f3e;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .categories_four .categories_title {
    background: #009035;
  }
}
@media only screen and (max-width: 767px) {
  .categories_four .categories_title {
    background: #009035;
  }
}
.categories_four .categories_title h2 {
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.categories_four .categories_title h2:hover {
  color: #009035;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .categories_four .categories_title h2:hover {
    color: #ffffff;
  }
}
@media only screen and (max-width: 767px) {
  .categories_four .categories_title h2:hover {
    color: #ffffff;
  }
}
.categories_four .categories_menu_toggle {
  top: 100%;
  display: none;
}

.h_bigsale_four a {
  background: none;
  color: #fbcf00;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .h_bigsale_four a {
    background: #009035;
    color: #ffffff;
  }
}
@media only screen and (max-width: 767px) {
  .h_bigsale_four a {
    background: #009035;
    color: #ffffff;
  }
}
.h_bigsale_four a:hover {
  background: none;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .h_bigsale_four a:hover {
    background: #009035;
  }
}
@media only screen and (max-width: 767px) {
  .h_bigsale_four a:hover {
    background: #009035;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header_padding {
    padding-bottom: 0;
  }
}
@media only screen and (max-width: 767px) {
  .header_padding {
    padding-bottom: 0;
  }
}

/*extra css heer*/
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header_account {
    display: none;
    margin-bottom: 10px;
    text-align: center;
  }
}
@media only screen and (max-width: 767px) {
  .header_account {
    display: none;
    margin-bottom: 10px;
    text-align: center;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header_account.bottom {
    margin-bottom: 15px;
  }
}
@media only screen and (max-width: 767px) {
  .header_account.bottom {
    margin-bottom: 15px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header_account.bottom > ul > li > a i {
    font-size: 14px;
  }
}
@media only screen and (max-width: 767px) {
  .header_account.bottom > ul > li > a i {
    font-size: 14px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header_account.bottom > ul > li > a i.ion-chevron-down {
    font-size: 10px;
  }
}
@media only screen and (max-width: 767px) {
  .header_account.bottom > ul > li > a i.ion-chevron-down {
    font-size: 10px;
  }
}
.header_account > ul > li {
  display: inline-block;
  position: relative;
  margin-right: 20px;
  padding-right: 20px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .header_account > ul > li {
    margin-right: 12px;
    padding-right: 12px;
  }
}
.header_account > ul > li:last-child {
  margin-right: 0;
  padding-right: 0;
}
.header_account > ul > li:last-child::before {
  display: none;
}
.header_account > ul > li::before {
  content: "";
  display: block;
  width: 1px;
  background: #ccc;
  height: 16px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  transform: translateY(-50%);
  position: absolute;
  z-index: 9;
  right: 0;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header_account > ul > li::before {
    display: none;
  }
}
@media only screen and (max-width: 767px) {
  .header_account > ul > li::before {
    display: none;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header_account > ul > li {
    margin-right: 0;
  }
  .header_account > ul > li:hover > a {
    color: #ffffff;
  }
}
@media only screen and (max-width: 767px) {
  .header_account > ul > li {
    margin-right: 0;
  }
}
.header_account > ul > li:hover ul.dropdown_currency, .header_account > ul > li:hover ul.dropdown_language, .header_account > ul > li:hover ul.dropdown_links {
  visibility: visible;
  max-height: 200px;
}
.header_account > ul > li:hover > a {
  color: #009035;
}
.header_account > ul > li > a {
  line-height: 45px;
  font-size: 14px;
  display: inline-block;
  font-weight: 400;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .header_account > ul > li > a {
    font-size: 13px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header_account > ul > li > a {
    line-height: 22px;
    font-size: 13px;
  }
}
@media only screen and (max-width: 767px) {
  .header_account > ul > li > a {
    line-height: 22px;
    font-size: 13px;
  }
}
.header_account > ul > li > a i {
  font-size: 10px;
  margin-left: 3px;
}

.header_account > ul > li:hover a:not([href]):not([tabindex]) {
  color: #009035;
}

.dropdown_currency, .dropdown_language, .dropdown_links {
  position: absolute;
  background: #fff;
  border: 1px solid #ebebeb;
  min-width: 130px;
  text-align: left;
  top: 100%;
  left: 0;
  -webkit-transition: all .5s ease-out;
  transition: all .5s ease-out;
  overflow: hidden;
  z-index: 9999;
  border-radius: 3px;
  visibility: hidden;
  max-height: 0;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .dropdown_currency, .dropdown_language, .dropdown_links {
    left: -30px;
  }
}
@media only screen and (max-width: 767px) {
  .dropdown_currency, .dropdown_language, .dropdown_links {
    left: -30px;
  }
}
.dropdown_currency li a, .dropdown_language li a, .dropdown_links li a {
  text-transform: capitalize;
  display: block;
  font-size: 12px;
  white-space: nowrap;
  padding: 8px 8px 8px 20px;
  line-height: 20px;
  color: #222222;
}
.dropdown_currency li a:hover, .dropdown_language li a:hover, .dropdown_links li a:hover {
  color: #009035;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .dropdown_language {
    left: -10px;
  }
}
@media only screen and (max-width: 767px) {
  .dropdown_language {
    left: -10px;
  }
}

.dropdown_links {
  right: 0;
  left: auto;
}

/*extra css end*/
/* 02. slider area css here */
.slider_s_one .col-lg-6 {
  flex: 0 0 56%;
  max-width: 56%;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .slider_s_one .col-lg-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
@media only screen and (max-width: 767px) {
  .slider_s_one .col-lg-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
.slider_s_one .offset-lg-3 {
  margin-left: 21%;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .slider_s_one .offset-lg-3 {
    margin-left: 0;
  }
}
@media only screen and (max-width: 767px) {
  .slider_s_one .offset-lg-3 {
    margin-left: 0;
  }
}
.slider_s_one .s_banner {
  flex: 0 0 23%;
  max-width: 23%;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .slider_s_one .s_banner {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
@media only screen and (max-width: 767px) {
  .slider_s_one .s_banner {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

.single_slider {
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
  height: 445px;
  margin-right: 0 !important;
}
@media only screen and (min-width: 1200px) and (max-width: 1600px) {
  .single_slider {
    height: 418px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .single_slider {
    height: 351px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .single_slider {
    height: 330px;
    background-position: 55%;
  }
}
@media only screen and (max-width: 767px) {
  .single_slider {
    background-position: 10%;
    height: 300px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .slider_section {
    margin-top: 0;
  }
}
@media only screen and (max-width: 767px) {
  .slider_section {
    margin-top: 0;
    margin-bottom: 30px;
  }
}

.slider_area .owl-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translatex(-50%);
}
@media only screen and (max-width: 767px) {
  .slider_area .owl-dots {
    bottom: 10px;
  }
}
.slider_area .owl-dots .owl-dot {
  width: 8px;
  height: 8px;
  background: rgba(255, 255, 255, 0.5);
  display: inline-block;
  margin: 0 7px;
  border-radius: 50%;
  position: relative;
}
.slider_area .owl-dots .owl-dot::before {
  position: absolute;
  content: "";
  width: 11px;
  height: 11px;
  left: -2px;
  top: -2px;
  background: #ffffff;
  border-radius: 50%;
  opacity: 0;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.slider_area .owl-dots .owl-dot.active::before {
  opacity: 1;
}
.slider_area .owl-dots .owl-dot:hover::before {
  opacity: 1;
}

.slider_content {
  padding-left: 50px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .slider_content {
    padding-left: 30px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .slider_content {
    padding-left: 60px;
  }
}
@media only screen and (max-width: 767px) {
  .slider_content {
    padding-left: 30px;
  }
}
.slider_content h3 {
  font-size: 14px;
  line-height: 22px;
  font-weight: 500;
  text-transform: uppercase;
  color: #009035;
  margin-bottom: 10px;
}
.slider_content h1 {
  font-size: 40px;
  line-height: 42px;
  font-weight: 400;
  text-transform: capitalize;
  margin-bottom: 0;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .slider_content h1 {
    font-size: 28px;
    line-height: 30px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .slider_content h1 {
    font-size: 28px;
    line-height: 30px;
  }
}
@media only screen and (max-width: 767px) {
  .slider_content h1 {
    font-size: 20px;
    line-height: 22px;
  }
}
.slider_content p {
  margin: 38px 0 44px;
  font-size: 18px;
  line-height: 25px;
  text-transform: capitalize;
}
.slider_content p span {
  color: #009035;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .slider_content p {
    font-size: 15px;
    line-height: 22px;
    margin: 20px 0 26px;
    max-width: 432px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .slider_content p {
    margin: 18px 0 23px;
    font-size: 15px;
    line-height: 20px;
  }
}
@media only screen and (max-width: 767px) {
  .slider_content p {
    margin: 17px 0 22px;
    font-size: 12px;
    line-height: 20px;
    max-width: 360px;
  }
}
@media only screen and (max-width: 479px) {
  .slider_content p {
    max-width: 100%;
  }
}
.slider_content a {
  font-size: 13px;
  font-weight: 500;
  padding: 0 35px;
  display: inline-block;
  border-radius: 4px;
  height: 48px;
  line-height: 48px;
  color: #ffffff;
  background: #009035;
}
.slider_content a:hover {
  color: #ffffff;
  background: #222222;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .slider_content a {
    padding: 0 20px;
    height: 43px;
    line-height: 39px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .slider_content a {
    padding: 0 15px;
    height: 43px;
    line-height: 41px;
    font-size: 13px;
  }
}
@media only screen and (max-width: 767px) {
  .slider_content a {
    font-size: 12px;
    height: 35px;
    line-height: 31px;
    padding: 0 13px;
  }
}
.slider_content.color_white h3 {
  color: #ffffff;
}
.slider_content.color_white h1 {
  color: #ffffff;
}
.slider_content.color_white p {
  color: #ffffff;
}
.slider_content.color_white p span {
  color: #ffde00;
}

.active .slider_content h1, .active .slider_content h2, .active .slider_content h3, .active .slider_content a, .active .slider_content p, .active .slider_content span {
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}

.active .slider_content h2 {
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}

.active .slider_content h3, .active .slider_content span {
  -webkit-animation-delay: 0.7s;
  animation-delay: 0.7s;
}

.active .slider_content p {
  -webkit-animation-delay: 0.7s;
  animation-delay: 0.7s;
}

.active .slider_content a {
  -webkit-animation-delay: 0.9s;
  animation-delay: 0.9s;
}

.gallery-thumbs {
  height: 60px;
  box-sizing: border-box;
  border-left: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.gallery-thumbs .swiper-slide {
  border-right: 1px solid #ebebeb;
  padding: 8px 16px;
  text-align: center;
  line-height: 20px;
  font-size: 13px;
  cursor: pointer;
  position: relative;
  width: 25%;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .gallery-thumbs .swiper-slide {
    line-height: 41px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .gallery-thumbs .swiper-slide {
    padding: 8px 8px;
  }
}
@media only screen and (max-width: 767px) {
  .gallery-thumbs .swiper-slide {
    padding: 8px 3px;
    font-size: 12px;
  }
}
.gallery-thumbs .swiper-slide:hover {
  color: #009035;
}
.gallery-thumbs .swiper-slide::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 2px;
  background: #009035;
  bottom: 0;
  left: 0;
  opacity: 0;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  z-index: 99;
}
.gallery-thumbs .swiper-slide-thumb-active {
  color: #009035;
}
.gallery-thumbs .swiper-slide-thumb-active::before {
  opacity: 1;
}

.swiper-pagination-bullet-active {
  opacity: 1;
  background: #ffffff;
}

/*home two css here*/
.slider_s_two .single_slider {
  height: 450px;
}
@media only screen and (min-width: 1200px) and (max-width: 1600px) {
  .slider_s_two .single_slider {
    height: 418px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .slider_s_two .single_slider {
    height: 351px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .slider_s_two .single_slider {
    height: 330px;
    background-position: 55%;
  }
}
@media only screen and (max-width: 767px) {
  .slider_s_two .single_slider {
    background-position: 10%;
    height: 300px;
  }
}
.slider_s_two .col-lg-9 {
  flex: 0 0 79%;
  max-width: 79%;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .slider_s_two .col-lg-9 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
@media only screen and (max-width: 767px) {
  .slider_s_two .col-lg-9 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
.slider_s_two .offset-lg-3 {
  margin-left: 21%;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .slider_s_two .offset-lg-3 {
    margin-left: 0;
  }
}
@media only screen and (max-width: 767px) {
  .slider_s_two .offset-lg-3 {
    margin-left: 0;
  }
}
.slider_s_two .slider_content {
  padding-left: 72px;
  text-align: center;
}
@media only screen and (max-width: 767px) {
  .slider_s_two .slider_content {
    padding-left: 0;
    width: 100%;
  }
}
.slider_s_two .gallery-thumbs .swiper-slide {
  padding: 8px 43px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .slider_s_two .gallery-thumbs .swiper-slide {
    line-height: 21px;
    padding: 8px 10px;
  }
}
@media only screen and (max-width: 767px) {
  .slider_s_two .gallery-thumbs .swiper-slide {
    padding: 8px 0px;
  }
}

/*home three css here*/
.slider_s_three .single_slider {
  height: 510px;
}
@media only screen and (min-width: 1200px) and (max-width: 1600px) {
  .slider_s_three .single_slider {
    height: 418px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .slider_s_three .single_slider {
    height: 351px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .slider_s_three .single_slider {
    height: 330px;
    background-position: 55%;
  }
}
@media only screen and (max-width: 767px) {
  .slider_s_three .single_slider {
    background-position: 10%;
    height: 300px;
  }
}

.slider_c_three {
  text-align: center;
  padding-left: 0;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .slider_c_three p {
    max-width: 100%;
  }
}

/*home four css here*/
.slider_s_four .col-lg-6 {
  flex: 0 0 58%;
  max-width: 58%;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .slider_s_four .col-lg-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
@media only screen and (max-width: 767px) {
  .slider_s_four .col-lg-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
.slider_s_four .col-lg-3 {
  flex: 0 0 21%;
  max-width: 21%;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .slider_s_four .col-lg-3 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}
@media only screen and (max-width: 767px) {
  .slider_s_four .col-lg-3 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
.slider_s_four .single_slider {
  height: 450px;
  background-position: center center;
}
@media only screen and (min-width: 1200px) and (max-width: 1600px) {
  .slider_s_four .single_slider {
    height: 420px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .slider_s_four .single_slider {
    height: 380px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .slider_s_four .single_slider {
    height: 330px;
  }
}
@media only screen and (max-width: 767px) {
  .slider_s_four .single_slider {
    height: 300px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .slider_s_four .slider_area {
    margin-bottom: 30px;
  }
}
@media only screen and (max-width: 767px) {
  .slider_s_four .slider_area {
    margin-bottom: 30px;
  }
}

/*  04. banner section css here  */
@media only screen and (max-width: 767px) {
  .banner_area {
    margin-bottom: 25px;
  }
}

@media only screen and (max-width: 767px) {
  .single_banner {
    margin-bottom: 30px !important;
  }
}

.banner_thumb {
  position: relative;
  overflow: hidden;
}
.banner_thumb:hover img {
  transform: scale(1.05);
}
@media only screen and (max-width: 767px) {
  .banner_thumb a {
    width: 100%;
  }
}
.banner_thumb a img {
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
@media only screen and (max-width: 767px) {
  .banner_thumb a img {
    width: 100%;
  }
}

.banner_style2 .col-lg-3 {
  flex: 0 0 28%;
  max-width: 28%;
}
@media only screen and (max-width: 767px) {
  .banner_style2 .col-lg-3 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
.banner_style2 .col-lg-6 {
  flex: 0 0 44%;
  max-width: 44%;
}
@media only screen and (max-width: 767px) {
  .banner_style2 .col-lg-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .sidebar_banner_area {
    display: flex;
    margin-top: 30px;
  }
}
@media only screen and (max-width: 767px) {
  .sidebar_banner_area {
    margin-top: 30px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .sidebar_banner_area .single_banner {
    margin-right: 20px;
    margin-bottom: 0;
  }
  .sidebar_banner_area .single_banner:last-child {
    margin-right: 0;
  }
}

/*home three css here*/
@media only screen and (max-width: 767px) {
  .banner_three_bottom {
    margin-bottom: 30px;
  }
}

/*home four css here*/
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .slider_s_four .banner_thumb a img {
    width: 100%;
  }
}

@media only screen and (max-width: 767px) {
  .banner_style4 {
    margin-bottom: 30px;
  }
}

/* 03. product section css here */
.tab-content > .tab-pane.active {
  display: block;
  height: auto;
  opacity: 1;
  overflow: visible;
}

.tab-content > .tab-pane {
  display: block;
  height: 0;
  opacity: 0;
  overflow: hidden;
}

.categories_product_inner {
  overflow: hidden;
  border-left: 1px solid #ebebeb;
  border-top: 1px solid #ebebeb;
}

.home_section_bg {
  background: #F5F5F9;
  padding: 60px 0 132px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .home_section_bg {
    padding: 60px 0 79px;
  }
}
@media only screen and (max-width: 767px) {
  .home_section_bg {
    padding: 60px 0 57px;
  }
}

.single_categories_product {
  display: flex;
  align-items: center;
  width: 20%;
  float: left;
  padding: 7px 10px;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #ebebeb;
  border-right: 1px solid #ebebeb;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  position: relative;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .single_categories_product {
    width: 25%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .single_categories_product {
    width: 50%;
  }
}
@media only screen and (max-width: 767px) {
  .single_categories_product {
    width: 100%;
  }
}
.single_categories_product:hover {
  z-index: 2;
  -webkit-box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.15);
}

.categories_sidebar_slider {
  width: auto;
  margin: 0 -10px;
}
.categories_sidebar_slider .owl-stage-outer {
  padding: 10px;
  margin: -20px -10px;
}
.categories_sidebar_slider .owl-stage-outer .owl-item {
  padding: 10px;
}

.categories_sidebar_slide {
  display: flex;
  flex-direction: column;
  padding: 0.5px 0;
  flex: 1 0 100%;
}
.categories_sidebar_slide .single_categories_product {
  width: 100% !important;
  border: 1px solid #ebebeb;
  margin: -0.5px 0;
}

.categories_product_content {
  width: 60%;
  padding: 10px;
}
.categories_product_content h4 {
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  margin-bottom: 9px;
}
.categories_product_content h4 a:hover {
  color: #009035;
}
.categories_product_content p {
  font-size: 13px;
  line-height: 23px;
}

.categories_product_thumb {
  width: 40%;
}

.section_title {
  margin-bottom: 28px;
}
@media only screen and (max-width: 767px) {
  .section_title {
    margin-bottom: 15px;
  }
}
.section_title h2 {
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 0;
  padding-bottom: 7px;
  text-transform: capitalize;
  border-bottom: 3px solid #009035;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .section_title h2 {
    font-size: 20px;
    line-height: 25px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .section_title h2 {
    font-size: 17px;
    line-height: 22px;
    padding-bottom: 6px;
  }
}
@media only screen and (max-width: 767px) {
  .section_title h2 {
    font-size: 17px;
    line-height: 20px;
  }
}

.product_area .owl-carousel .owl-stage-outer {
  padding-bottom: 60px;
}

.product_carousel .owl-stage-outer {
  padding-left: 2px;
  padding-right: 2px;
}

.single_product {
  border-radius: 4px;
  background: #ffffff;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  border-left: 1px solid #ebebeb;
}
.single_product:hover {
  -webkit-box-shadow: 0px 0px 13.5px 1.5px rgba(0, 0, 0, 0.07);
  -moz-box-shadow: 0px 0px 13.5px 1.5px rgba(0, 0, 0, 0.07);
  box-shadow: 0px 0px 13.5px 1.5px rgba(0, 0, 0, 0.07);
}
.single_product:hover .action_links {
  opacity: 1;
  visibility: visible;
}
.single_product:hover .product_thumb a.secondary_img {
  opacity: 1;
  visibility: visible;
}
.single_product:hover .add_to_cart {
  visibility: visible;
  opacity: 1;
  bottom: -61px;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);
}

.product_thumb {
  position: relative;
  padding: 10px;
}
.product_thumb a.secondary_img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0;
  visibility: hidden;
}
@media only screen and (max-width: 767px) {
  .product_thumb a img {
    width: 100%;
  }
}

.product_content_inner {
  padding: 20px 20px 25px 20px;
}
@media only screen and (min-width: 1200px) and (max-width: 1600px) {
  .product_content_inner {
    padding: 20px 16px 25px 16px;
  }
}

.product_content {
  position: relative;
  text-align: center;
}
.product_content h4 {
  font-size: 14px;
  line-height: 19px;
  font-weight: 400;
  color: #0066c0;
  margin-bottom: 13px;
}
.product_content h4 a:hover {
  color: #009035;
  text-decoration: underline;
}

.add_to_cart {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
  visibility: hidden;
  z-index: 9;
  opacity: 0;
  -webkit-transition: .3s ease;
  -moz-transition: .3s ease;
  -ms-transition: .3s ease;
  -o-transition: .3s ease;
  transition: .3s ease;
  background: #fff;
  padding: 20px 10px 25px;
}
.add_to_cart a {
  border: 2px solid #ebebeb;
  height: 45px;
  line-height: 41px;
  display: inline-block;
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 4px;
  max-width: 220px;
  width: 100%;
}
.add_to_cart a:hover {
  background: #009035;
  border-color: #009035;
  color: #ffffff;
}
@media only screen and (max-width: 767px) {
  .add_to_cart a {
    height: 38px;
    line-height: 34px;
    font-size: 13px;
    width: 150px;
  }
}

.price_box span {
  line-height: 16px;
  font-size: 14px;
}
.price_box span.old_price {
  text-decoration: line-through;
  font-weight: 400;
  margin-right: 6px;
}
@media only screen and (max-width: 767px) {
  .price_box span.old_price {
    font-size: 13px;
  }
}
.price_box span.current_price {
  font-size: 16px;
  font-weight: 500;
  color: #009035;
}

.countdown_text p {
  font-size: 14px;
  line-height: 25px;
}
.countdown_text p span {
  font-weight: 700;
  color: #009035;
}

.product_timing {
  margin-top: 15px;
}

.single_countdown {
  display: inline-block;
  margin-right: 6px;
}
.single_countdown:last-child {
  margin-right: 0;
}
@media only screen and (min-width: 1200px) and (max-width: 1600px) {
  .single_countdown {
    margin-right: 5px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .single_countdown {
    margin-right: 3px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .single_countdown {
    margin-right: 3px;
  }
}
@media only screen and (max-width: 767px) {
  .single_countdown {
    margin-right: 4px;
  }
}

.countdown_title {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0;
  line-height: 18px;
}

.countdown_number {
  font-size: 15px;
  font-weight: 500;
  line-height: 50px;
  width: 50px;
  height: 50px;
  background: #F5F5F9;
  text-align: center;
  border-radius: 50%;
  margin-bottom: 10px;
}
@media only screen and (min-width: 1200px) and (max-width: 1600px) {
  .countdown_number {
    line-height: 46px;
    width: 46px;
    height: 46px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .countdown_number {
    line-height: 46px;
    width: 46px;
    height: 46px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .countdown_number {
    line-height: 46px;
    width: 46px;
    height: 46px;
  }
}
@media only screen and (max-width: 767px) {
  .countdown_number {
    line-height: 47px;
    width: 47px;
    height: 47px;
  }
}

.action_links {
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10px;
  z-index: 9;
  text-align: center;
}
.action_links ul li {
  display: inline-block;
}
.action_links ul li a {
  font-size: 21px;
  border: 2px solid #ebebeb;
  height: 43px;
  width: 43px;
  line-height: 39px;
  text-align: center;
  background: #ffffff;
  display: block;
}
.action_links ul li a:hover {
  background: #009035;
  border-color: #009035;
  color: #ffffff;
}

.product_rating ul {
  display: flex;
}
.product_rating ul li {
  line-height: 23px;
  margin-right: 3px;
}
.product_rating ul li:last-child {
  margin-right: 0;
}
.product_rating ul li a {
  font-size: 20px;
  color: #ffc600;
}

.product_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .product_header {
    margin-bottom: 20px;
  }
}
@media only screen and (max-width: 767px) {
  .product_header {
    flex-direction: column;
    align-items: inherit;
    margin-bottom: 20px;
  }
}
.product_header .section_title {
  margin-bottom: 0;
}
@media only screen and (max-width: 767px) {
  .product_header .product_tab_btn {
    margin-top: 15px;
  }
}

.product_tab_btn ul li {
  margin-right: 35px;
}
.product_tab_btn ul li:last-child {
  margin-right: 0;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .product_tab_btn ul li {
    margin-right: 18px;
  }
}
@media only screen and (max-width: 767px) {
  .product_tab_btn ul li {
    margin-right: 13px;
  }
}
.product_tab_btn ul li a {
  font-size: 14px;
  line-height: 25px;
  text-transform: capitalize;
  display: block;
}
.product_tab_btn ul li a:hover {
  color: #009035;
}
.product_tab_btn ul li a.active {
  color: #009035;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .product_tab_btn ul li a {
    font-size: 13px;
  }
}
@media only screen and (max-width: 767px) {
  .product_tab_btn ul li a {
    line-height: 27px;
  }
}

.label_product span {
  position: absolute;
}
.label_product span.label_sale {
  top: 15px;
  right: 15px;
  text-transform: capitalize;
  color: #ffffff;
  background: #62ab00;
  font-size: 10px;
  height: 40px;
  width: 40px;
  line-height: 40px;
  text-align: center;
  display: block;
  border-radius: 50%;
}
.label_product span.label_new {
  top: 20px;
  right: 20px;
  width: 50px;
  height: 23px;
  text-align: center;
  line-height: 23px;
  color: #ffffff;
  background: #222222;
  font-size: 12px;
  border-radius: 3px;
  text-transform: capitalize;
  z-index: 3;
}

.product_carousel .owl-stage {
  display: flex;
}
.product_carousel .owl-stage .owl-item {
  display: flex;
  flex-wrap: wrap;
}
.product_carousel .owl-stage .owl-item .product_items {
  display: flex;
  flex-direction: column;
  height: auto;
}
.product_carousel .owl-stage .owl-item .product_items .single_product {
  flex: 1 0 50%;
  margin-right: 1px;
}
.product_carousel .owl-item.last .single_product {
  border-right: 1px solid #ebebeb;
}
.product_carousel .product_thumb a img {
  width: inherit;
  margin: 0 auto;
}
@media only screen and (max-width: 767px) {
  .product_carousel .product_thumb a img {
    width: 100%;
  }
}
.product_carousel .col-lg-3 {
  flex: 0 0 100%;
  max-width: 100%;
}
.product_carousel:hover .owl-nav div {
  opacity: 1;
  visibility: visible;
}
.product_carousel .owl-nav div {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 46%;
  transform: translatey(-50%);
  font-size: 24px;
  border: 1px solid #ebebeb;
  width: 65px;
  height: 65px;
  line-height: 63px;
  border-radius: 50%;
  background: #ffffff;
  text-align: center;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  left: -30px;
}
@media only screen and (min-width: 1200px) and (max-width: 1600px) {
  .product_carousel .owl-nav div {
    left: 0;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .product_carousel .owl-nav div {
    left: 0;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .product_carousel .owl-nav div {
    left: 0;
  }
}
@media only screen and (max-width: 767px) {
  .product_carousel .owl-nav div {
    left: 0;
    width: 38px;
    height: 38px;
    line-height: 37px;
    font-size: 20px;
  }
}
.product_carousel .owl-nav div:hover {
  color: #ffffff;
  background: #009035;
  border-color: #009035;
}
.product_carousel .owl-nav div.owl-next {
  right: -30px;
  left: auto;
}
@media only screen and (min-width: 1200px) and (max-width: 1600px) {
  .product_carousel .owl-nav div.owl-next {
    right: 0;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .product_carousel .owl-nav div.owl-next {
    right: 0;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .product_carousel .owl-nav div.owl-next {
    right: 0;
  }
}
@media only screen and (max-width: 767px) {
  .product_carousel .owl-nav div.owl-next {
    right: 0;
  }
}

.product_items .single_product:first-child {
  border-bottom: 0;
}
.product_items .single_product:hover {
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.15);
}

.product_footer {
  position: relative;
}

.product_sidebar_slider .owl-item.active .single_product {
  border-right: 2px solid #ebebeb;
}
.product_sidebar_slider .owl-item.active.last .single_product {
  border-right: 0px solid #ebebeb;
}
.product_sidebar_slider .single_product {
  border: none;
}
.product_sidebar_slider .single_product .add_to_cart {
  position: static;
  visibility: visible;
  opacity: 1;
  padding: 0;
}
.product_sidebar_slider .single_product:hover {
  box-shadow: none;
}
.product_sidebar_slider .single_product:hover .add_to_cart {
  box-shadow: none;
}

/*custom product area css here*/
.small_product_area.product_bg {
  padding: 45px 0 30px;
}

.small_p_container .single_product {
  display: flex;
  align-items: center;
  padding: 15px 15px;
}
.small_p_container .single_product:hover .product_cart_button {
  opacity: 1;
  visibility: visible;
}
.small_p_container .product_content {
  width: 62%;
  padding-left: 15px;
  text-align: left;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .small_p_container .product_content {
    width: 66%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .small_p_container .product_content {
    width: 67%;
  }
}
@media only screen and (max-width: 767px) {
  .small_p_container .product_content {
    width: 70%;
    padding-left: 12px;
  }
}
.small_p_container .product_thumb {
  width: 38%;
  padding: 0;
}
@media only screen and (max-width: 767px) {
  .small_p_container .product_thumb {
    width: 29%;
  }
}
.small_p_container .product_name h4 {
  margin-bottom: 12px;
}

.product_cart_button {
  position: absolute;
  bottom: 0;
  right: 5px;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.product_cart_button a {
  font-size: 18px;
  height: 43px;
  width: 43px;
  line-height: 39px;
  border: 2px solid #ebebeb;
  border-radius: 4px;
  display: inline-block;
  text-align: center;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .product_cart_button a {
    font-size: 16px;
    height: 40px;
    width: 40px;
    line-height: 36px;
  }
}
@media only screen and (max-width: 767px) {
  .product_cart_button a {
    font-size: 15px;
    height: 40px;
    width: 40px;
    line-height: 36px;
  }
}
.product_cart_button a:hover {
  color: #009035;
  border-color: #009035;
}

.small_product_style2 .product_thumb {
  width: 24%;
}
.small_product_style2 .product_content {
  width: 76%;
}
.small_product_style2 .product_items .single_product:last-child {
  border-top: 0;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .small_product_list {
    margin-bottom: 54px;
  }
}
@media only screen and (max-width: 767px) {
  .small_product_list {
    margin-bottom: 54px;
  }
}

/*home two css here*/
.deals_product_style2 .single_product {
  overflow: hidden;
}
.deals_product_style2 .product_thumb {
  float: left;
  width: 43%;
}
@media only screen and (max-width: 767px) {
  .deals_product_style2 .product_thumb {
    width: 100%;
  }
}
.deals_product_style2 .product_content {
  float: left;
  padding: 15px 0 15px 15px;
  width: 57%;
  text-align: left;
}
@media only screen and (max-width: 767px) {
  .deals_product_style2 .product_content {
    width: 100%;
    padding: 15px 0 0 0;
  }
}
.deals_product_style2 .price_box {
  margin-bottom: 13px;
}

/*home three css here*/
.s_title_style3 {
  position: relative;
  padding: 5px 0 5px 15px;
}
@media only screen and (max-width: 767px) {
  .s_title_style3 {
    padding: 3px 0 3px 15px;
  }
}
.s_title_style3::before {
  position: absolute;
  content: '';
  background: #009035;
  bottom: 0;
  left: 0;
  top: 0;
  width: 4px;
}
.s_title_style3 h2 {
  font-size: 20px;
  line-height: 24px;
  padding-bottom: 0;
  border-bottom: 0;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .s_title_style3 h2 {
    font-size: 18px;
    line-height: 22px;
  }
}
@media only screen and (max-width: 767px) {
  .s_title_style3 h2 {
    font-size: 17px;
    line-height: 22px;
  }
}

/*home four css here*/
.home_style4_inner .col-lg-2 {
  flex: 0 0 20.3%;
  max-width: 20.3%;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .home_style4_inner .col-lg-2 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}
@media only screen and (max-width: 767px) {
  .home_style4_inner .col-lg-2 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
.home_style4_inner .col-lg-4 {
  flex: 0 0 29.7%;
  max-width: 29.7%;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .home_style4_inner .col-lg-4 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}
@media only screen and (max-width: 767px) {
  .home_style4_inner .col-lg-4 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
.home_style4_inner .product_content_inner {
  padding: 21px 16px 24px 16px;
}
@media only screen and (min-width: 1200px) and (max-width: 1600px) {
  .home_style4_inner .product_content_inner {
    padding: 18px 16px 21px 16px;
  }
}
.home_style4_inner .single_banner {
  height: 92%;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .home_style4_inner .single_banner {
    height: 100%;
  }
}
@media only screen and (max-width: 767px) {
  .home_style4_inner .single_banner {
    height: 100%;
    margin-bottom: 0 !important;
  }
}
.home_style4_inner .banner_thumb {
  height: 100%;
}
.home_style4_inner .banner_thumb a img {
  height: 100%;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .home_style4_inner .banner_thumb a img {
    width: 100%;
  }
}
@media only screen and (max-width: 767px) {
  .home_style4_inner .banner_thumb a img {
    width: 100%;
  }
}
.home_style4_inner .add_to_cart a {
  width: 180px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .home_style4_inner .product_area {
    margin-top: 30px;
  }
}
@media only screen and (max-width: 767px) {
  .home_style4_inner .product_area {
    margin-top: 30px;
  }
}

.category_menu {
  background: #ffffff;
  height: 92%;
  position: relative;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .category_menu {
    height: 100%;
  }
}
@media only screen and (max-width: 767px) {
  .category_menu {
    height: 94%;
    margin-bottom: 30px;
  }
}

.category_menu_img {
  position: absolute;
  bottom: 0;
  left: 30px;
}

.category_menu_content {
  padding: 30px 20px 100px 20px;
}
@media only screen and (max-width: 767px) {
  .category_menu_content {
    padding: 30px 20px 160px 20px;
  }
}
.category_menu_content ul li {
  padding: 5px 0;
  border-bottom: 1px solid #ebebeb;
}
.category_menu_content ul li a {
  display: block;
}
.category_menu_content ul li a:hover {
  color: #009035;
}

/* 05. blog area css here */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .blog_area {
    margin-bottom: 54px;
  }
}
@media only screen and (max-width: 767px) {
  .blog_area {
    margin-bottom: 55px;
  }
}

.blog_container {
  border: 1px solid #ebebeb;
}
.blog_container:hover .owl-nav div {
  opacity: 1;
  visibility: visible;
}
.blog_container .owl-nav.disabled {
  display: block;
}
.blog_container .owl-nav div {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 50%;
  transform: translatey(-50%);
  font-size: 24px;
  border: 1px solid #ebebeb;
  width: 65px;
  height: 65px;
  line-height: 63px;
  border-radius: 50%;
  background: #ffffff;
  text-align: center;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  left: -30px;
}
@media only screen and (min-width: 1200px) and (max-width: 1600px) {
  .blog_container .owl-nav div {
    left: 0;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .blog_container .owl-nav div {
    left: 0;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .blog_container .owl-nav div {
    left: 0;
  }
}
@media only screen and (max-width: 767px) {
  .blog_container .owl-nav div {
    left: 0;
    width: 38px;
    height: 38px;
    line-height: 37px;
    font-size: 20px;
  }
}
.blog_container .owl-nav div:hover {
  color: #ffffff;
  background: #009035;
  border-color: #009035;
}
.blog_container .owl-nav div.owl-next {
  right: -30px;
  left: auto;
}
@media only screen and (min-width: 1200px) and (max-width: 1600px) {
  .blog_container .owl-nav div.owl-next {
    right: 0;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .blog_container .owl-nav div.owl-next {
    right: 0;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .blog_container .owl-nav div.owl-next {
    right: 0;
  }
}
@media only screen and (max-width: 767px) {
  .blog_container .owl-nav div.owl-next {
    right: 0;
  }
}
.blog_container .col-lg-3 {
  flex: 0 0 100%;
  max-width: 100%;
}

.single_blog {
  background: #ffffff;
  border-right: 1px solid #ebebeb;
  padding: 20px;
}

.blog_content {
  padding: 20px 0 7px 0;
  text-align: center;
}
.blog_content h4 {
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 0;
}
@media only screen and (max-width: 767px) {
  .blog_content h4 {
    font-size: 13px;
  }
}
.blog_content h4 a:hover {
  color: #009035;
}
.blog_content .post_meta p {
  font-size: 13px;
  line-height: 23px;
}
.blog_content .post_meta p a {
  color: #009035;
}
.blog_content .post_meta p a:hover {
  text-decoration: underline;
}
.blog_content .post_desc {
  margin-top: 14px;
}
.blog_content .post_readmore {
  margin-top: 14px;
}
.blog_content .post_readmore a {
  color: #009035;
}
.blog_content .post_readmore a:hover {
  text-decoration: underline;
}

/*06. newsletter area css here*/
.newsletter_area {
  margin-top: -73px;
}
@media only screen and (max-width: 767px) {
  .newsletter_area {
    margin-top: -50px;
  }
}

.newsletter_inner {
  padding: 45px 35px;
  border: 1px solid #ebebeb;
  background: #ffffff;
}
@media only screen and (max-width: 767px) {
  .newsletter_inner {
    padding: 30px 15px;
    text-align: center;
  }
}

@media only screen and (max-width: 767px) {
  .newsletter_sing_up {
    margin-bottom: 14px;
  }
}
.newsletter_sing_up h3 {
  font-size: 20px;
  line-height: 27px;
  font-weight: 500;
  text-transform: capitalize;
  margin-bottom: 5px;
}
@media only screen and (max-width: 767px) {
  .newsletter_sing_up h3 {
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 3px;
  }
}
.newsletter_sing_up p {
  font-size: 14px;
  line-height: 25px;
  font-weight: 400;
}
.newsletter_sing_up p span {
  color: #009035;
}
@media only screen and (max-width: 767px) {
  .newsletter_sing_up p {
    font-size: 13px;
    line-height: 22px;
  }
}

@media only screen and (max-width: 767px) {
  .subscribe_content {
    margin-bottom: 22px;
  }
}
.subscribe_content p {
  font-size: 14px;
  line-height: 25px;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .subscribe_form {
    margin-top: 25px;
  }
}
@media only screen and (max-width: 767px) {
  .subscribe_form {
    width: 100%;
  }
}
.subscribe_form form {
  width: 100%;
  position: relative;
  background: #ffffff;
  border-radius: 4px;
}
.subscribe_form form input::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #666;
}
.subscribe_form form input::-moz-placeholder {
  /* Firefox 19+ */
  color: #666;
}
.subscribe_form form input:-ms-input-placeholder {
  /* IE 10+ */
  color: #666;
}
.subscribe_form form input:-moz-placeholder {
  /* Firefox 18- */
  color: #666;
}
.subscribe_form form input {
  width: 100%;
  border: 1px solid #ebebeb;
  background: none;
  padding: 0 158px 0 15px;
  height: 50px;
  font-size: 14px;
  color: #666;
  border-radius: 4px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .subscribe_form form input {
    padding: 0 125px 0 15px;
  }
}
@media only screen and (max-width: 767px) {
  .subscribe_form form input {
    height: 40px;
    font-size: 12px;
    padding: 0 106px 0 15px;
  }
}
.subscribe_form form button {
  position: absolute;
  right: 0;
  top: 0;
  padding: 0 20px;
  width: 140px;
  background: #009035;
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  height: 100%;
  border: 0;
  display: block;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  border-radius: 0 4px 4px 0;
}
.subscribe_form form button:hover {
  color: #ffffff;
  background: #222222;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .subscribe_form form button {
    width: 110px;
  }
}
@media only screen and (max-width: 767px) {
  .subscribe_form form button {
    font-size: 12px;
    padding: 0 8px;
    width: 94px;
  }
}

.mailchimp-error {
  text-align: left;
  color: green;
}

.mailchimp-success {
  text-align: left;
  max-width: 510px;
  color: green;
}
.mailchimp-success.active {
  margin-top: 20px;
}

/* 21. shipping css here */
.shipping_inner {
  overflow: hidden;
  border: 1px solid #ebebeb;
}

.single_shipping {
  display: flex;
  align-items: center;
  width: 20%;
  float: left;
  padding: 25px 10px 25px 20px;
  border-right: 1px solid #ebebeb;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .single_shipping {
    padding: 25px 10px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .single_shipping {
    width: 33.33%;
    border-bottom: 1px solid #ebebeb;
  }
  .single_shipping:last-child {
    border-right: 1px solid #ebebeb !important;
    border-bottom: 0;
  }
  .single_shipping:nth-child(3) {
    border-right: 0;
  }
  .single_shipping:nth-child(4) {
    border-bottom: 0;
  }
}
@media only screen and (max-width: 767px) {
  .single_shipping {
    width: 100%;
    justify-content: center;
    border-bottom: 1px solid #ebebeb;
    border-right: 0;
  }
  .single_shipping:last-child {
    border-bottom: 0;
  }
}
.single_shipping:last-child {
  border-right: 0;
}

.shipping_icone {
  margin-right: 15px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .shipping_icone {
    margin-right: 7px;
  }
}
@media only screen and (max-width: 767px) {
  .shipping_icone {
    margin-right: 20px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .shipping_icone img {
    width: 30px;
  }
}

.shipping_content h4 {
  font-size: 14px;
  line-height: 18px;
  text-transform: capitalize;
  font-weight: 500;
  margin-bottom: 3px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .shipping_content h4 {
    font-size: 13px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .shipping_content h4 {
    font-size: 13px;
  }
}
@media only screen and (max-width: 767px) {
  .shipping_content h4 {
    font-size: 13px;
  }
}
.shipping_content p {
  font-size: 13px;
  line-height: 22px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .shipping_content p {
    font-size: 13px;
    line-height: 20px;
  }
}

/*brand css here*/
.brand_area {
  padding: 40px 0;
}

.brand_container .single_brand img {
  width: inherit;
  margin: 0 auto;
}
.brand_container:hover .owl-nav div {
  opacity: 1;
  visibility: visible;
}
.brand_container .owl-nav.disabled {
  display: block;
}
.brand_container .owl-nav div {
  position: absolute;
  top: 50%;
  transform: translatey(-50%);
  left: 0;
  font-size: 18px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #a2a2a2;
  border-radius: 3px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  opacity: 0;
  visibility: hidden;
  background: #ffffff;
}
.brand_container .owl-nav div:hover {
  color: #ffffff;
  background: #009035;
  border-color: #009035;
}
.brand_container .owl-nav div.owl-next {
  right: 0;
  left: auto;
}

/*  07. footer area css here */
.footer_top {
  padding: 55px 0 56px;
  border-bottom: 1px solid #ebebeb;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .footer_top {
    padding: 55px 0 5px;
  }
}
@media only screen and (max-width: 767px) {
  .footer_top {
    padding: 55px 0 5px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .widgets_container {
    margin-bottom: 50px;
  }
}
@media only screen and (max-width: 767px) {
  .widgets_container {
    margin-bottom: 55px;
  }
}
@media only screen and (max-width: 767px) {
  .widgets_container.widget_menu {
    margin-bottom: 51px;
  }
}
.widgets_container h3 {
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 30px;
  text-transform: uppercase;
  font-weight: 500;
  display: inline-block;
  position: relative;
  padding-bottom: 11px;
}
.widgets_container h3::before {
  position: absolute;
  background: #009035;
  content: '';
  display: block;
  height: 3px;
  width: 40px;
  bottom: 0;
  left: 0;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .widgets_container h3 {
    font-size: 13px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .widgets_container h3 {
    margin-bottom: 22px;
  }
}
@media only screen and (max-width: 767px) {
  .widgets_container h3 {
    margin-bottom: 22px;
  }
}

.aff_content {
  margin-bottom: 25px;
}
@media only screen and (max-width: 767px) {
  .aff_content {
    margin-bottom: 17px;
  }
}
.aff_content p {
  font-size: 14px;
  line-height: 25px;
}

.app_img {
  margin-bottom: 10px;
}
.app_img:last-child {
  margin-bottom: 0;
}

.footer_contact > p {
  font-size: 14px;
  line-height: 25px;
}

.footer_menu ul li {
  margin-bottom: 12px;
}
.footer_menu ul li:last-child {
  margin-bottom: 0;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .footer_menu ul li {
    margin-bottom: 13px;
  }
}
@media only screen and (max-width: 767px) {
  .footer_menu ul li {
    margin-bottom: 14px;
  }
}
.footer_menu ul li a {
  display: block;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}
.footer_menu ul li a:hover {
  color: #009035;
}
@media only screen and (max-width: 767px) {
  .footer_menu ul li a {
    font-size: 13px;
    line-height: 18px;
  }
}

.footer_social {
  margin-top: 17px;
}
@media only screen and (max-width: 767px) {
  .footer_social {
    text-align: left;
  }
}
.footer_social ul li {
  display: inline-block;
  margin-right: 5px;
}
.footer_social ul li:last-child {
  margin-right: 0;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .footer_social ul li {
    margin-right: 2px;
  }
}
@media only screen and (max-width: 767px) {
  .footer_social ul li {
    margin-right: 3px;
  }
}
.footer_social ul li a {
  width: 42px;
  height: 42px;
  line-height: 42px;
  display: block;
  text-align: center;
  font-size: 16px;
  border-radius: 4px;
  color: #ffffff;
}
.footer_social ul li a:hover {
  background: #009035;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .footer_social ul li a {
    width: 37px;
    height: 37px;
    line-height: 37px;
  }
}
@media only screen and (max-width: 767px) {
  .footer_social ul li a {
    width: 35px;
    height: 35px;
    line-height: 35px;
    font-size: 15px;
  }
}
.footer_social ul li a.facebook {
  background: #3b5998;
}
.footer_social ul li a.facebook:hover {
  background: #009035;
}
.footer_social ul li a.twitter {
  background: #00aced;
}
.footer_social ul li a.twitter:hover {
  background: #009035;
}
.footer_social ul li a.instagram {
  background: #bc2a8d;
}
.footer_social ul li a.instagram:hover {
  background: #009035;
}
.footer_social ul li a.linkedin {
  background: #007bb6;
}
.footer_social ul li a.linkedin:hover {
  background: #009035;
}
.footer_social ul li a.rss {
  background: #f26522;
}
.footer_social ul li a.rss:hover {
  background: #009035;
}

.footer_contact_inner {
  display: flex;
  margin-bottom: 15px;
}

.contact_text {
  margin-left: 15px;
}
.contact_text p {
  font-size: 14px;
  line-height: 25px;
}
.contact_text p strong {
  color: #009035;
}

@media only screen and (max-width: 767px) {
  .copyright_area {
    text-align: center;
    margin-bottom: 15px;
  }
}
.copyright_area p {
  text-transform: capitalize;
  line-height: 25px;
  font-size: 14px;
}
@media only screen and (max-width: 767px) {
  .copyright_area p {
    font-size: 13px;
  }
}
.copyright_area p a {
  color: #009035;
}
.copyright_area p a:hover {
  text-decoration: underline;
}

.footer_bottom {
  padding: 30px 0;
}
@media only screen and (max-width: 767px) {
  .footer_bottom {
    padding: 20px 0 25px;
  }
}

.footer_payment p {
  font-size: 14px;
  line-height: 23px;
  text-transform: capitalize;
  font-style: italic;
  margin-bottom: 8px;
}

/* 10. shop page css here */
.breadcrumbs_area {
  padding: 20px 0;
}

.breadcrumb_content ul li {
  display: inline-block;
  text-transform: capitalize;
  font-size: 14px;
  margin-right: 20px;
  padding-right: 20px;
  position: relative;
  color: #009035;
}
.breadcrumb_content ul li::before {
  position: absolute;
  content: ">";
  right: -4px;
  top: 50%;
  transform: translatey(-50%);
}
.breadcrumb_content ul li:last-child {
  margin-right: 0;
}
.breadcrumb_content ul li:last-child::before {
  display: none;
}
.breadcrumb_content ul li a {
  color: #222222;
}
.breadcrumb_content ul li a:hover {
  color: #009035;
}

.shop_area {
  background: #F5F5F9;
  padding: 60px 0 133px;
}
@media only screen and (max-width: 767px) {
  .shop_area {
    padding: 60px 0 110px;
  }
}

.sidebar_widget {
  background: #ffffff;
  border: 1px solid #ebebeb;
  padding: 20px;
}
.sidebar_widget .single_banner {
  border: 0;
}
@media only screen and (max-width: 767px) {
  .sidebar_widget .single_banner {
    margin-bottom: 0;
  }
}
@media only screen and (max-width: 767px) {
  .sidebar_widget .single_banner a {
    width: 100%;
  }
}
@media only screen and (max-width: 767px) {
  .sidebar_widget .single_banner a img {
    width: 100%;
  }
}

.widget_list {
  margin-bottom: 44px;
}
.widget_list:last-child {
  margin-bottom: 0;
}
.widget_list h3 {
  font-size: 14px;
  margin-bottom: 25px;
  padding-bottom: 8px;
  text-transform: uppercase;
  font-weight: 500;
  position: relative;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .widget_list h3 {
    font-size: 13px;
  }
}
.widget_list h3::before {
  position: absolute;
  content: "";
  display: block;
  width: 40px;
  height: 3px;
  background: #009035;
  bottom: 0;
}
.widget_list > ul > li {
  border-bottom: 1px solid #ebebeb;
}
.widget_list > ul > li:first-child a {
  padding-top: 0;
}
.widget_list > ul > li:last-child {
  border-bottom: 0;
}
.widget_list > ul > li:last-child a {
  padding-bottom: 0;
}
.widget_list > ul > li > a {
  font-size: 14px;
  display: block;
  line-height: 25px;
  padding: 10px 0;
}
.widget_list > ul > li > a:hover {
  color: #009035;
}
.widget_list > ul > li.widget_sub_categories > a {
  position: relative;
}
.widget_list > ul > li.widget_sub_categories > a::before {
  content: '\f107';
  cursor: pointer;
  font-family: FontAwesome;
  font-size: 12px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translatey(-50%);
}
.widget_list > ul > li.widget_sub_categories > a.active::before {
  content: '\f106';
  cursor: pointer;
  font-family: FontAwesome;
  font-size: 12px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translatey(-50%);
}
.widget_list > ul > li ul {
  padding-left: 15px;
}
.widget_list > ul > li ul li {
  border-bottom: 1px solid #ebebeb;
}
.widget_list > ul > li ul li:first-child {
  border-top: 1px solid #ebebeb;
}
.widget_list > ul > li ul li:last-child {
  border-bottom: 0;
}
.widget_list > ul > li ul li a {
  padding-bottom: 10px;
  padding: 10px 0;
  display: block;
}
.widget_list.banner_area {
  padding: 0;
  border: 0;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .widget_list .banner_thumb {
    width: 33%;
    margin: 0 auto;
  }
}
.widget_list .banner_thumb a img {
  width: 100%;
}

.ui-slider-horizontal .ui-slider-range {
  background: #009035;
  height: 5px;
}

.ui-slider-horizontal {
  height: 3px;
  background: #dbdbdb;
  border: none;
  width: 92%;
  margin: 0 auto;
  margin-bottom: 22px;
}

.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default {
  background: #fff;
  border: 0;
  border-radius: 0;
  width: 19px;
  height: 19px;
  top: -7px;
  cursor: pointer;
  border-radius: 50%;
  border: 5px solid #009035;
}

.widget_list.widget_filter form {
  padding-top: 10px;
}
.widget_list.widget_filter form input {
  background: none;
  border: none;
  font-size: 12px;
  float: right;
  text-align: right;
  line-height: 31px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .widget_list.widget_filter form input {
    width: 65px;
  }
}
.widget_list.widget_filter form button {
  height: 30px;
  line-height: 30px;
  padding: 0 20px;
  text-transform: capitalize;
  color: #ffffff;
  background: #222222;
  border: 0;
  border-radius: 30px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.widget_list.widget_filter form button:hover {
  background: #009035;
}

.recent_product_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.recent_product_list {
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 20px;
  margin-bottom: 20px;
  flex: 1 0 100%;
  max-width: 100%;
  overflow: hidden;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .recent_product_list {
    flex: 1 0 calc(50% - 10px);
    max-width: calc(50% - 10px);
    border: 1px solid #ddd;
    padding: 20px;
  }
}
.recent_product_list:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: 0;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .recent_product_list:last-child {
    border: 1px solid #ddd;
    padding: 20px;
  }
}
.recent_product_list:hover .product_thumb a.secondary_img {
  opacity: 1;
  visibility: visible;
}
.recent_product_list .product_thumb {
  width: 33%;
  float: left;
  margin-bottom: 0;
  padding: 0;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .recent_product_list .product_thumb {
    width: 33%;
  }
}
.recent_product_list .product_content {
  width: 67%;
  float: left;
  padding-left: 15px;
  text-align: left;
}
.recent_product_list .product_content h4 {
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  margin-bottom: 9px;
}
.recent_product_list .product_content h4 a:hover {
  color: #009035;
  text-decoration: underline;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .recent_product_list .product_content {
    padding-left: 10px;
    width: 67%;
  }
}
.recent_product_list .price_box {
  margin-bottom: 0;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .recent_product_list .price_box span.current_price {
    font-size: 14px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .recent_product_list .price_box span.old_price {
    font-size: 13px;
  }
}

.tag_cloud a {
  margin: 0 5px 12px 0;
  padding: 5px 15px;
  text-transform: capitalize;
  display: inline-block;
  border: 1px solid #ebebeb;
  background: #ffffff;
  border-radius: 3px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .tag_cloud a {
    padding: 5px 10px;
  }
}
.tag_cloud a:hover {
  background: #009035;
  border-color: #009035;
  color: #ffffff;
}

.shop_banner_thumb {
  text-align: center;
}

.shop_toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e5e5e5;
  padding: 8px 10px;
  margin: 0 0 40px;
}
@media only screen and (max-width: 767px) {
  .shop_toolbar {
    flex-direction: column-reverse;
    padding: 10px 10px 18px;
  }
}

.select_option {
  display: flex;
  align-items: center;
}
@media only screen and (max-width: 767px) {
  .select_option {
    flex-direction: column;
  }
}
.select_option .nice-select {
  border: 0;
  height: 30px;
  line-height: 29px;
}
.select_option .nice-select ul.list {
  top: 114%;
  right: 0;
  width: 200px;
  max-height: 200px;
  overflow: auto;
}

@media only screen and (max-width: 767px) {
  .niceselect_option {
    margin-bottom: 16px;
  }
}

@media only screen and (max-width: 767px) {
  .page_amount {
    margin-bottom: 12px;
  }
}
@media only screen and (max-width: 767px) {
  .page_amount p {
    padding-left: 0;
    margin-left: 0;
    border-left: 0;
  }
}

.list_button ul li {
  margin-right: 12px;
}
.list_button ul li:last-child {
  margin-right: 0;
}
.list_button ul li a:hover {
  color: #C39456;
}
.list_button ul li a i {
  margin-right: 5px;
  border-radius: 100%;
  height: 30px;
  width: 30px;
  line-height: 30px;
  text-align: center;
}
.list_button ul li a.active {
  color: #009035;
}
.list_button ul li a.active i {
  background: #C39456;
  color: #ffffff;
}

.product_ratting ul li {
  display: inline-block;
}
.product_ratting ul li a {
  color: #C39456;
}

@media only screen and (max-width: 767px) {
  .product_list_item .product_thumb {
    margin-bottom: 18px;
  }
}
.product_list_item .product_content h3 {
  margin-bottom: 10px;
}
.product_list_item .product_ratting {
  margin-bottom: 10px;
}

@media only screen and (max-width: 767px) {
  .pagination {
    margin-top: 19px;
  }
}
.pagination ul li {
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: #f1f1f1;
  border-radius: 3px;
  margin-left: 3px;
}
.pagination ul li:first-child {
  margin-left: 0;
}
.pagination ul li a {
  display: block;
  border-radius: 3px;
}
.pagination ul li a:hover {
  background: #009035;
  color: #ffffff;
}
.pagination ul li.current {
  background: #009035;
  color: #ffffff;
}
.pagination ul li.next {
  width: 40px;
}

.shop_toolbar.t_bottom {
  justify-content: center;
  margin-bottom: 0;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .shop_toolbar.t_bottom {
    margin-bottom: 60px;
  }
}
@media only screen and (max-width: 767px) {
  .shop_toolbar.t_bottom {
    padding: 15px 10px 15px;
    margin-bottom: 60px;
  }
}
@media only screen and (max-width: 767px) {
  .shop_toolbar.t_bottom .pagination {
    margin-top: 0;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .shop_reverse .tab-content .row {
    flex-direction: row;
  }
}
@media only screen and (max-width: 767px) {
  .shop_reverse .tab-content .row {
    flex-direction: row;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .grid_view .quick_button {
    bottom: 5px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .grid_view .quick_button a {
    line-height: 37px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .grid_view .action_button ul li a {
    width: 43px;
    height: 40px;
    line-height: 38px;
  }
}
.grid_view .hover_action a {
  width: 43px;
  height: 40px;
  line-height: 38px;
}

/* shop page css here*/
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .shop_reverse .row {
    flex-direction: column-reverse;
  }
}
@media only screen and (max-width: 767px) {
  .shop_reverse .row {
    flex-direction: column-reverse;
  }
}

.row.shop_wrapper {
  flex-direction: row;
}

.shop_toolbar_btn > button {
  margin-right: 10px;
  border: 0;
  background: inherit;
}
.shop_toolbar_btn > button.btn-grid-3 {
  background: url(../img/icon/bkg_grid.png) no-repeat scroll center center;
  width: 20px;
  height: 20px;
}
.shop_toolbar_btn > button.btn-grid-3.active {
  background: url(../img/icon/bkg_grid_hover.png) no-repeat scroll center center !important;
}
.shop_toolbar_btn > button.btn-grid-4 {
  background: url(../img/icon/bkg_grid4.png) no-repeat scroll center center;
  width: 26px;
  height: 22px;
}
.shop_toolbar_btn > button.btn-grid-4.active {
  background: url(../img/icon/bkg_grid4_hover.png) no-repeat scroll center center !important;
}
.shop_toolbar_btn > button.btn-list {
  background: url(../img/icon/bkg_list.png) no-repeat scroll center center;
  width: 20px;
  height: 20px;
}
.shop_toolbar_btn > button.btn-list.active {
  background: url(../img/icon/bkg_list_hover.png) no-repeat scroll center center !important;
}

.product_content.list_content {
  display: none;
}
.product_content.list_content .add_to_cart {
  position: inherit;
  padding: 0;
  opacity: inherit;
  visibility: inherit;
  bottom: inherit;
  box-shadow: none;
  text-align: left;
  margin-bottom: 20px;
}
.product_content.list_content .add_to_cart a {
  text-align: center;
}

.grid_content .product_rating {
  margin-bottom: 4px;
}
.grid_content .product_rating ul {
  justify-content: center;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .grid_content .action_links ul li.add_to_cart a {
    width: 110px;
  }
}
.grid_content h4.product_name {
  margin-bottom: 15px;
}

.grid_list .product_name {
  display: none;
}
.grid_list .product_rating {
  display: none;
}
.grid_list .product_thumb .action_links {
  display: none;
}

.grid_list .product_content.grid_content {
  display: none;
}

.grid_list .product_content.list_content {
  flex: 0 0 73%;
  max-width: 73%;
  float: left;
  padding-left: 30px;
  text-align: left;
  margin-top: 0;
  display: block;
}
@media only screen and (max-width: 767px) {
  .grid_list .product_content.list_content {
    flex-direction: column;
    flex: 0 0 100%;
    min-width: 100%;
    padding-left: 0;
  }
}
.grid_list .product_content.list_content .product_rating {
  display: block;
  margin-bottom: 3px;
}
.grid_list .product_content.list_content .product_name {
  display: block;
}
.grid_list .product_content.list_content .price_box {
  margin-bottom: 13px;
}
.grid_list .product_content.list_content .action_links {
  opacity: inherit;
  visibility: visible;
  text-align: left;
  transform: inherit;
  position: inherit;
  padding: 0;
  box-shadow: inherit;
  background: inherit;
  bottom: inherit;
}
.grid_list .product_content.list_content .action_links ul li {
  display: block;
  margin-bottom: 4px;
}
.grid_list .product_content.list_content .action_links ul li:last-child {
  margin-bottom: 0;
}
.grid_list .product_content.list_content .action_links ul li a {
  transform: inherit;
  width: inherit;
  height: inherit;
  display: inline-block;
  line-height: 22px;
  border: 0;
  font-size: 14px;
}
.grid_list .product_content.list_content .action_links ul li a i {
  font-size: 20px;
  margin-right: 10px;
}
.grid_list .product_content.list_content .action_links ul li a:hover {
  background: inherit;
  color: #009035;
}
.grid_list .product_content.list_content .product_desc {
  display: inline-block;
  margin-bottom: 18px;
}
.grid_list .product_content.list_content .product_desc p {
  font-size: 14px;
  line-height: 24px;
}

.grid_list .single_product {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 20px;
}
@media only screen and (max-width: 767px) {
  .grid_list .single_product {
    flex-direction: column;
  }
}

.grid_list .product_thumb {
  margin-bottom: 0;
  flex: 0 0 27%;
  max-width: 27%;
  float: left;
  padding: 0;
  width: 200px;
  height: 200px;
}
@media only screen and (max-width: 767px) {
  .grid_list .product_thumb {
    flex: 0 0 100%;
    min-width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
}

.col-cust-5 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 20%;
  flex: 0 0 20%;
  max-width: max-width;
  padding-right: 15px;
  padding-left: 15px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .col-cust-5 {
    -ms-flex: 0 0 33%;
    flex: 0 0 33%;
  }
}
@media only screen and (max-width: 767px) {
  .col-cust-5 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}
@media only screen and (max-width: 479px) {
  .col-cust-5 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

.shop_wrapper > div {
  -webkit-transition: all 1s ease;
  transition: all 1s ease;
}

.shop_toolbar_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  padding: 8px 10px;
  margin: 0 0 30px;
}
@media only screen and (max-width: 767px) {
  .shop_toolbar_wrapper {
    flex-direction: column;
    padding: 15px 10px 5px;
  }
}

@media only screen and (max-width: 767px) {
  .shop_toolbar_btn {
    margin-bottom: 20px;
  }
}

.shop_wrapper {
  margin-bottom: 60px;
  border-top: 1px solid #ebebeb;
  border-radius: 4px;
  border-right: 1px solid #ebebeb;
  background: #ffffff;
}
@media only screen and (max-width: 767px) {
  .shop_wrapper .product_thumb a img {
    width: 100%;
  }
}
.shop_wrapper .single_product {
  position: relative;
  border-top: 0;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .shop_wrapper .col-lg-3 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
}

/* shop page css end*/
/*shop fullwidth css here*/
.shop_fullwidth .shop_wrapper.grid_3 .product_thumb a img {
  width: 100%;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .shop_fullwidth .shop_toolbar.t_bottom {
    margin-bottom: 0;
  }
}
@media only screen and (max-width: 767px) {
  .shop_fullwidth .shop_toolbar.t_bottom {
    margin-bottom: 0;
  }
}

/* 15. product details css here */
.product_page_bg {
  background: #F5F5F9;
  padding: 60px 0 75px;
}
@media only screen and (max-width: 767px) {
  .product_page_bg {
    padding: 60px 0 50px;
  }
}

.product_details_wrapper {
  background: #ffffff;
  border: 1px solid #ebebeb;
}

.product_details {
  padding: 30px 30px 55px;
}
@media only screen and (max-width: 767px) {
  .product_details {
    padding: 30px 20px 52px;
  }
}

#img-1 {
  border: 1px solid #ebebeb;
}

.header_product {
  border-bottom: 1px solid #ebebeb;
}

.product_d_right h3 {
  text-transform: capitalize;
  line-height: 20px;
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 22px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .product_d_right h3 {
    font-size: 19px;
  }
}
@media only screen and (max-width: 767px) {
  .product_d_right h3 {
    margin-bottom: 17px;
    font-size: 18px;
  }
}
.product_d_right h3 a:hover {
  color: #009035;
}
.product_d_right .product_rating {
  margin-bottom: 17px;
}
@media only screen and (max-width: 767px) {
  .product_d_right .product_rating {
    margin-bottom: 12px;
  }
}
.product_d_right .product_rating ul li.review a {
  color: #222222;
  margin-left: 10px;
  font-size: 14px;
}
.product_d_right .product_rating ul li.review a:hover {
  color: #009035;
}
.product_d_right .price_box {
  margin-bottom: 14px;
}
@media only screen and (max-width: 767px) {
  .product_d_right .price_box {
    margin-bottom: 9px;
  }
}
.product_d_right .price_box span.current_price {
  font-size: 23px;
}
@media only screen and (max-width: 767px) {
  .product_d_right .price_box span.current_price {
    font-size: 18px;
  }
}
.product_d_right .price_box span.old_price {
  font-size: 20px;
  margin-right: 10px;
}
@media only screen and (max-width: 767px) {
  .product_d_right .price_box span.old_price {
    font-size: 17px;
  }
}
.product_d_right .product_desc {
  margin-bottom: 19px;
  padding-bottom: 24px;
  border-bottom: 1px solid #ebebeb;
}
@media only screen and (max-width: 767px) {
  .product_d_right .product_desc {
    margin-bottom: 15px;
    padding-bottom: 18px;
  }
}
.product_d_right .product_desc::before {
  display: none;
}
.product_d_right .product_desc p {
  font-size: 14px;
  line-height: 26px;
}
.product_d_right .priduct_social ul li {
  display: inline-block;
  margin-right: 7px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .product_d_right .priduct_social ul li {
    margin-right: 2px;
  }
}
@media only screen and (max-width: 767px) {
  .product_d_right .priduct_social ul li {
    margin-right: 0;
  }
}
.product_d_right .priduct_social ul li:last-child {
  margin-right: 0;
}
.product_d_right .priduct_social ul li a {
  color: #fff;
  font-size: 12px;
  line-height: 24px;
  padding: 0 8px;
  border-radius: 3px;
  text-transform: capitalize;
  display: block;
}
@media only screen and (max-width: 767px) {
  .product_d_right .priduct_social ul li a {
    padding: 0 3px;
    font-size: 11px;
  }
}
.product_d_right .priduct_social ul li a:hover {
  opacity: 0.8;
}
.product_d_right .priduct_social ul li a.facebook {
  background: #3B5999;
}
.product_d_right .priduct_social ul li a.twitter {
  background: #1DA1F2;
}
.product_d_right .priduct_social ul li a.pinterest {
  background: #CB2028;
}
.product_d_right .priduct_social ul li a.google-plus {
  background: #fe6d4c;
}
.product_d_right .priduct_social ul li a.linkedin {
  background: #010103;
}
.product_d_right .product_timing {
  margin-bottom: 20px;
  margin-top: 26px;
  width: 260px;
}
@media only screen and (max-width: 767px) {
  .product_d_right .product_timing {
    margin-bottom: 16px;
    margin-top: 25px;
  }
}
.product_d_right .countdown_title {
  text-align: center;
}

.product_nav {
  float: right;
  position: relative;
  top: -46px;
}
@media only screen and (max-width: 767px) {
  .product_nav {
    display: none;
  }
}
.product_nav ul li {
  display: inline-block;
  margin-left: 3px;
}
.product_nav ul li:first-child {
  margin-left: 0;
}
.product_nav ul li a {
  background: #009035;
  border-radius: 3px;
  color: #ffffff;
  display: block;
  font-size: 15px;
  height: 30px;
  width: 30px;
  line-height: 28px;
  text-align: center;
}
.product_nav ul li a:hover {
  background: #222222;
}

.product_variant.quantity {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
@media only screen and (max-width: 767px) {
  .product_variant.quantity {
    margin-bottom: 16px;
  }
}
.product_variant.quantity label {
  font-weight: 500;
  text-transform: capitalize;
  font-size: 14px;
  margin-bottom: 0;
}
.product_variant.quantity input {
  width: 130px;
  border: 1px solid #ebebeb;
  background: none;
  height: 42px;
  padding: 0 12px;
  border-radius: 5px;
  margin-left: 15px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .product_variant.quantity input {
    width: 110px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .product_variant.quantity input {
    width: 80px;
  }
}
@media only screen and (max-width: 767px) {
  .product_variant.quantity input {
    width: 65px;
    margin-left: 10px;
  }
}
.product_variant.quantity button {
  border: 0;
  font-size: 16px;
  margin-left: 20px;
  background: #009035;
  height: 42px;
  line-height: 42px;
  text-transform: capitalize;
  min-width: 270px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .product_variant.quantity button {
    min-width: 240px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .product_variant.quantity button {
    min-width: 170px;
  }
}
@media only screen and (max-width: 767px) {
  .product_variant.quantity button {
    min-width: inherit;
    margin-left: 10px;
    padding: 0 12px;
    font-size: 14px;
  }
}
.product_variant.quantity button:hover {
  background: #3E444A;
}
.product_variant.color {
  margin-bottom: 26px;
}
@media only screen and (max-width: 767px) {
  .product_variant.color {
    margin-bottom: 18px;
  }
}
.product_variant.color h3 {
  font-weight: 500;
  text-transform: capitalize;
  font-size: 18px;
  margin-bottom: 0;
  margin-right: 40px;
}
.product_variant.color label {
  font-size: 15px;
  font-weight: 500;
  text-transform: capitalize;
}
.product_variant.color ul li {
  display: inline-block;
  padding: 2px;
  border: 1px solid #ccc;
  margin-right: 5px;
}
.product_variant.color ul li:hover {
  border-color: #E88888;
}
.product_variant.color ul li:last-child {
  margin-right: 0;
}
.product_variant.color ul li a {
  width: 30px;
  height: 30px;
  display: block;
}
.product_variant.color ul li.color1 a {
  background: #000000;
}
.product_variant.color ul li.color2 a {
  background: #BEBEBE;
}
.product_variant.color ul li.color3 a {
  background: #FE0000;
}
.product_variant.color ul li.color4 a {
  background: #FFFF01;
}
.product_variant.size {
  margin-bottom: 30px;
}
.product_variant.size label {
  font-size: 15px;
  font-weight: 500;
  text-transform: capitalize;
}
.product_variant.size .niceselect_option {
  float: inherit;
  max-width: 200px;
}

.product_d_action {
  margin-bottom: 14px;
}
.product_d_action ul li a {
  font-size: 14px;
  line-height: 28px;
}
.product_d_action ul li a:hover {
  color: #009035;
}

.product_meta {
  margin-bottom: 24px;
}
@media only screen and (max-width: 767px) {
  .product_meta {
    margin-bottom: 20px;
  }
}
.product_meta span {
  font-weight: 500;
}
.product_meta span a {
  margin-left: 10px;
  font-weight: 400;
}
.product_meta span a:hover {
  color: #009035;
}

.product_info_button {
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 15px;
  margin-bottom: 29px;
}
@media only screen and (max-width: 767px) {
  .product_info_button ul li {
    margin-bottom: 5PX;
  }
  .product_info_button ul li:last-child {
    margin-bottom: 0;
  }
}
.product_info_button ul li a {
  display: block;
  float: left;
  text-transform: capitalize;
  font-size: 20px;
  color: #555;
  font-weight: 500;
  margin-right: 35px;
  line-height: 26px;
  position: relative;
}
@media only screen and (max-width: 767px) {
  .product_info_button ul li a {
    margin-right: 25px;
    font-size: 17px;
  }
}
.product_info_button ul li a.active {
  color: #333333;
}
.product_info_button ul li a:hover {
  color: #333333;
}
.product_info_button ul li:last-child a {
  margin-right: 0;
}

.product_review_form button {
  border: none;
  background: #222222;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 500;
  padding: 5px 15px 3px;
  display: block;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 5px;
  font-size: 13px;
}
.product_review_form button:hover {
  background: #009035;
  color: #ffffff;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .product_review_form form .row {
    flex-direction: row;
  }
}

.product_info_content p {
  line-height: 28px;
}

.product_d_table {
  padding: 10px 0 22px;
}
.product_d_table table {
  border-top: 1px solid #ddd;
  width: 100%;
}
.product_d_table table tbody tr {
  border-bottom: 1px solid #ddd;
}
.product_d_table table tbody tr td {
  padding: 7px 17px;
}
.product_d_table table tbody tr td:first-child {
  border-right: 1px solid #ddd;
  width: 30%;
  font-weight: 700;
}

.product_d_inner {
  padding: 0 30px 30px;
}
@media only screen and (max-width: 767px) {
  .product_d_inner {
    padding: 0 20px 30px;
  }
}

.product_info_inner {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 15px;
}
.product_info_inner .product_ratting {
  margin-bottom: 10px;
}
.product_info_inner .product_ratting p {
  margin-bottom: 5px;
}
.product_info_inner .product_ratting strong {
  margin-top: 10px;
  display: block;
  margin-bottom: 8px;
}

.reviews_wrapper h2 {
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
}
@media only screen and (max-width: 767px) {
  .reviews_wrapper h2 {
    font-size: 15px;
  }
}
.reviews_wrapper .product_rating {
  margin-bottom: 20px;
}
.reviews_wrapper .product_rating h3 {
  font-size: 14px;
  font-weight: 700;
  text-transform: capitalize;
}

.comment_title {
  margin-bottom: 20px;
}

.product_review_form input {
  border: 1px solid #ddd;
  background: none;
  width: 100%;
  height: 40px;
  padding: 0 20px;
}
.product_review_form textarea {
  border: 1px solid #ddd;
  background: none;
  height: 120px;
  resize: none;
  width: 100%;
  margin-bottom: 14px;
  padding: 0 20px;
}
.product_review_form p {
  margin-bottom: 7px;
}

.reviews_comment_box {
  display: flex;
  margin-bottom: 22px;
}
.reviews_comment_box .comment_text {
  width: 100%;
  border: 1px solid #ebebeb;
  position: relative;
  margin-left: 21px;
  padding: 12px;
  border-radius: 3px;
}
.reviews_comment_box .comment_text::before {
  background: #fff;
  border-bottom: 1px solid #ebebeb;
  border-left: 1px solid #ebebeb;
  content: '';
  display: block;
  height: 10px;
  left: -6px;
  position: absolute;
  top: 10px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  width: 10px;
}

.reviews_meta p {
  font-size: 15px;
  margin-bottom: 15px;
}
.reviews_meta p strong {
  text-transform: uppercase;
  font-weight: 500;
  color: #222222;
}
.reviews_meta .product_rating {
  float: right;
}
.reviews_meta .product_rating ul li {
  display: inline-block;
}
.reviews_meta .product_rating ul li a {
  color: #0066c0;
}

.s-tab-zoom.owl-carousel .owl-nav {
  display: block;
}
.s-tab-zoom.owl-carousel .owl-nav div {
  position: absolute;
  background: #f2f2f2;
  border-radius: 3px;
  height: 32px;
  top: 50%;
  transform: translatey(-50%);
  width: 32px;
  text-align: center;
  line-height: 32px;
  left: -7px;
  font-size: 18px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  opacity: 0;
  visibility: hidden;
}
.s-tab-zoom.owl-carousel .owl-nav div:hover {
  background: #009035;
  color: #ffffff;
}
.s-tab-zoom.owl-carousel .owl-nav div.owl-next {
  right: -7px;
  left: auto;
}

@media only screen and (max-width: 767px) {
  .product-details-tab {
    margin-bottom: 56px;
  }
}
.product-details-tab:hover .s-tab-zoom.owl-carousel .owl-nav div {
  opacity: 1;
  visibility: visible;
}

.single-zoom-thumb {
  margin-top: 20px !important;
  width: 90%;
  margin: 0 auto;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .single-zoom-thumb {
    width: 92%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .single-zoom-thumb {
    width: 93%;
  }
}
@media only screen and (max-width: 767px) {
  .single-zoom-thumb {
    width: 101%;
  }
}
.single-zoom-thumb ul li {
  border: 1px solid #ddd;
}
.single-zoom-thumb ul li a {
  width: 100%;
}

/* 12. product grouped css here */
.grouped_form {
  border: 1px solid #ebebeb;
  margin-bottom: 25px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .grouped_form {
    margin-bottom: 20px;
  }
}
@media only screen and (max-width: 767px) {
  .grouped_form {
    margin-bottom: 17px;
  }
}
.grouped_form table {
  width: 100%;
}
.grouped_form table tbody tr {
  border-bottom: 1px solid #ebebeb;
}
.grouped_form table tbody tr td {
  border-right: 1px solid #ddd;
  padding: 11px 5px;
  text-align: center;
}
.grouped_form table tbody tr td input[type="checkbox"] {
  width: 20px;
  height: 21px;
}
.grouped_form table tbody tr td input[type="number"] {
  width: 50px;
  background: inherit;
  border: 1px solid #ebebeb;
  padding: 0 5px;
  height: 40px;
}
.grouped_form table tbody tr td.grouped-product-list.quantity {
  min-width: 80px;
  text-align: center;
  line-height: 12px;
}
.grouped_form table tbody tr td.grouped-product-list.label {
  min-width: 188px;
  font-weight: 500;
  font-size: 14px;
}
.grouped_form table tbody tr td.grouped-product-list.label a:hover {
  color: #009035;
}
.grouped_form table tbody tr td.grouped-product-list.price {
  font-size: 14px;
  font-weight: 500;
  min-width: 190px;
}
.grouped_form table tbody tr td.grouped-product-list.price p {
  font-size: 12px;
  font-weight: 500;
  position: relative;
}
.grouped_form table tbody tr td.grouped-product-list.price p::before {
  color: #0066c0;
  content: '\f058';
  display: inline-block;
  font-family: FontAwesome;
  font-size: 1em;
  position: absolute;
  top: 0;
  left: 40px;
}

.grouped_form table tbody tr td:last-child {
  border-right: 0;
}

.grouped_form table tbody tr:last-child {
  border-bottom: 0;
}

.box_quantity.group button {
  margin-left: 0;
}

/*product grouped css end*/
/*variabla product css here*/
.p_section1.related_product .slick-list {
  padding-bottom: 144px !important;
  margin-bottom: -135px;
}

.variable_product .niceselect_option .list {
  width: 100%;
}

.product_d_meta {
  margin-bottom: 20px;
}
.product_d_meta span {
  display: block;
  line-height: 18px;
  margin-bottom: 17px;
  font-size: 14px;
  font-weight: 400;
}
.product_d_meta span:last-child {
  margin-bottom: 0;
}
.product_d_meta span a:hover {
  color: #009035;
}

/*product sidebar css here*/
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .product_sidebar {
    margin-bottom: 60px;
  }
}
@media only screen and (max-width: 767px) {
  .product_sidebar {
    margin-bottom: 60px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .product_sidebar .row {
    flex-direction: column-reverse;
  }
}
@media only screen and (max-width: 767px) {
  .product_sidebar .row {
    flex-direction: column-reverse;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .product_sidebar .product_section .row {
    flex-direction: row;
  }
}
@media only screen and (max-width: 767px) {
  .product_sidebar .product_section .row {
    flex-direction: row;
  }
}
.product_sidebar .product_desc p {
  width: 100%;
}
.product_sidebar .product_variant.quantity input {
  width: 90px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .product_sidebar .product_variant.quantity input {
    width: 60px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .product_sidebar .product_variant.quantity input {
    width: 60px;
  }
}
@media only screen and (max-width: 767px) {
  .product_sidebar .product_variant.quantity input {
    width: 60px;
  }
}
.product_sidebar .product_variant.quantity button {
  min-width: 200px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .product_sidebar .product_variant.quantity button {
    min-width: 140px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .product_sidebar .product_variant.quantity button {
    min-width: inherit;
  }
}
@media only screen and (max-width: 767px) {
  .product_sidebar .product_variant.quantity button {
    min-width: inherit;
  }
}
@media only screen and (max-width: 767px) {
  .product_sidebar .product-details-tab {
    margin-bottom: 0;
  }
}
.product_sidebar .price_box span.current_price {
  font-size: 16px;
}
.product_sidebar .price_box span.old_price {
  font-size: 15px;
}
.product_sidebar .price_box span.regular_price {
  font-size: 16px;
}
@media only screen and (min-width: 1200px) and (max-width: 1600px) {
  .product_sidebar .add_to_cart a {
    width: 180px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .product_sidebar .add_to_cart a {
    width: 190px;
  }
}

.product_right_sidebar {
  padding: 25px 25px 0;
  margin-bottom: 55px;
}
@media only screen and (max-width: 767px) {
  .product_right_sidebar {
    padding: 25px 20px 0;
  }
}
@media only screen and (max-width: 767px) {
  .product_right_sidebar .product-details-tab {
    margin-bottom: 45px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .product_right_sidebar .row {
    flex-direction: row;
  }
}
@media only screen and (max-width: 767px) {
  .product_right_sidebar .row {
    flex-direction: row;
  }
}
@media only screen and (min-width: 1200px) and (max-width: 1600px) {
  .product_right_sidebar .single-zoom-thumb {
    width: 92%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .product_right_sidebar .single-zoom-thumb {
    width: 92%;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .product_right_sidebar .priduct_social ul li {
    margin-right: 2px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .product_right_sidebar .priduct_social ul li a {
    padding: 0 6px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .product_right_sidebar .product_d_right h3 {
    font-size: 18px;
  }
}

/* 13. cart page css here */
.cart_page_bg {
  background: #F5F5F9;
  padding: 55px 0 133px;
}
@media only screen and (max-width: 767px) {
  .cart_page_bg {
    padding: 55px 0 111px;
  }
}

.shopping_cart_area {
  background: #ffffff;
  padding: 20px;
  border: 1px solid #ebebeb;
}

.header_cart_page {
  border-bottom: 1px solid #ebebeb;
}

.other_bread {
  padding-top: 41px;
  padding-bottom: 41px;
}

.table_desc {
  border: 1px solid #ebebeb;
  margin-bottom: 60px;
}
.table_desc .cart_page table {
  width: 100%;
}
.table_desc .cart_page table thead tr th {
  border-bottom: 3px solid #009035;
  border-right: 1px solid #ebebeb;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
  padding: 10px;
  text-align: center;
}
.table_desc .cart_page table tbody tr td {
  border-bottom: 1px solid #ebebeb;
  border-right: 1px solid #ebebeb;
  text-align: center;
  padding: 10px;
}
.table_desc .cart_page table tbody tr td.product_remove {
  min-width: 100px;
}
.table_desc .cart_page table tbody tr td.product_remove a {
  font-size: 20px;
  color: #222222;
}
.table_desc .cart_page table tbody tr td.product_remove a:hover {
  color: #009035;
}
.table_desc .cart_page table tbody tr td.product_thumb {
  max-width: 180px;
}
.table_desc .cart_page table tbody tr td.product_thumb a img {
  width: 100px;
}
.table_desc .cart_page table tbody tr td.product_name {
  min-width: 180px;
}
.table_desc .cart_page table tbody tr td.product_name a {
  color: #222222;
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 400;
}
.table_desc .cart_page table tbody tr td.product_name a:hover {
  color: #009035;
}
.table_desc .cart_page table tbody tr td.product-price {
  min-width: 130px;
  color: #222222;
  font-size: 16px;
  font-weight: 500;
}
.table_desc .cart_page table tbody tr td.product_quantity {
  min-width: 180px;
}
.table_desc .cart_page table tbody tr td.product_quantity label {
  font-weight: 500;
  margin-right: 5px;
}
.table_desc .cart_page table tbody tr td.product_quantity input {
  width: 60px;
  height: 40px;
  padding: 0 5px 0 10px;
  background: none;
  border: 1px solid #ebebeb;
}
.table_desc .cart_page table tbody tr td .product_total {
  min-width: 120px;
}

.cart_page table thead tr:last-child th, .table_desc table tbody tr td:last-child {
  border-right: 0;
}

.cart_submit {
  text-align: right;
  padding: 12px;
}
@media only screen and (max-width: 767px) {
  .cart_submit {
    text-align: center;
  }
}
.cart_submit button {
  background: #222222;
  border: 0;
  color: #ffffff;
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  height: 38px;
  line-height: 18px;
  padding: 10px 15px;
  text-transform: uppercase;
  cursor: pointer;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  border-radius: 3px;
}
.cart_submit button:hover {
  background: #009035;
}

.coupon_inner {
  padding: 10px 20px 25px;
}
@media only screen and (max-width: 767px) {
  .coupon_inner {
    padding: 10px 14px 25px;
  }
}
.coupon_inner p {
  font-size: 13px;
  margin-bottom: 20px;
}
.coupon_inner button {
  background: #222222;
  border: 0;
  color: #ffffff;
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  height: 38px;
  line-height: 18px;
  padding: 10px 15px;
  text-transform: uppercase;
  cursor: pointer;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  border-radius: 3px;
}
.coupon_inner button:hover {
  background: #009035;
}
.coupon_inner input {
  border: 1px solid #ebebeb;
  height: 42px;
  background: none;
  padding: 0 20px;
  margin-right: 20px;
  font-size: 12px;
  color: #222222;
}
@media only screen and (max-width: 767px) {
  .coupon_inner input {
    margin-bottom: 24px;
    width: 100%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .coupon_inner input {
    margin-bottom: 24px;
    width: 100%;
  }
}
.coupon_inner a {
  display: block;
  text-align: right;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 10px;
  border-radius: 3px;
}
.coupon_inner a:hover {
  color: #009035;
}

.coupon_code {
  border: 1px solid #ebebeb;
}
@media only screen and (max-width: 767px) {
  .coupon_code.left {
    margin-bottom: 50px;
  }
}
.coupon_code h3 {
  color: #ffffff;
  line-height: 36px;
  padding: 5px 15px;
  background: #222222;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
}
@media only screen and (max-width: 767px) {
  .coupon_code h3 {
    line-height: 28px;
    padding: 5px 15px;
    font-size: 15px;
  }
}

.cart_subtotal {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.cart_subtotal p {
  font-weight: 600;
  font-size: 14px;
}
@media only screen and (max-width: 767px) {
  .cart_subtotal p {
    font-size: 13px;
  }
}
.cart_subtotal p.cart_amount {
  font-size: 18px;
  font-weight: 500;
}
@media only screen and (max-width: 767px) {
  .cart_subtotal p.cart_amount {
    font-size: 13px;
  }
}
.cart_subtotal p span {
  margin-right: 30px;
}

.checkout_btn {
  text-align: right;
}
@media only screen and (max-width: 767px) {
  .checkout_btn {
    text-align: center;
  }
}
.checkout_btn a {
  background: #009035;
  color: #ffffff;
  font-size: 15px;
  padding: 3px 14px;
  line-height: 30px;
  font-weight: 500;
  display: inline-block;
  text-transform: capitalize;
  margin-bottom: 0;
}
.checkout_btn a:hover {
  background: #222222;
  color: #ffffff;
}

.footer_widgets.other_widgets .footer_top {
  padding-bottom: 0;
  border-bottom: 0;
}
.footer_widgets.other_widgets .footer_top_inner {
  padding: 55px 0 53px;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .footer_widgets.other_widgets .footer_top_inner {
    padding: 55px 0 59px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .footer_widgets.other_widgets .footer_top_inner {
    padding: 55px 0 40px;
  }
}
@media only screen and (max-width: 767px) {
  .footer_widgets.other_widgets .footer_top_inner {
    padding: 55px 0 35px;
  }
}

/*cart page css end*/
/* 14. checkout page css here */
.checkout_page_bg {
  background: #F5F5F9;
  padding: 60px 0 133px;
}
@media only screen and (max-width: 767px) {
  .checkout_page_bg {
    padding: 60px 0 111px;
  }
}

.checkout_form_left {
  background: #ffffff;
  padding: 20px;
}
@media only screen and (max-width: 767px) {
  .checkout_form_left {
    margin-bottom: 60px;
  }
}

.checkout_form_right {
  background: #ffffff;
  padding: 20px;
}

.user-actions {
  margin-bottom: 20px;
}
.user-actions h3 {
  font-size: 13px;
  font-weight: 400;
  background: #ffffff;
  padding: 15px 10px;
  border-top: 3px solid #009035;
  margin-bottom: 0;
}
.user-actions h3 a {
  color: #009035;
}

.checkout_info {
  border: 1px solid #ebebeb;
  background: #ffffff;
  margin-top: 25px;
  padding: 20px 30px;
}
.checkout_info p {
  margin-bottom: 15px;
}
.checkout_info a {
  color: #009035;
  margin-top: 15px;
  display: block;
}

.form_group {
  margin-bottom: 20px;
}
.form_group label {
  font-size: 14px;
  display: block;
  line-height: 18px;
}
.form_group input {
  border: 1px solid #ebebeb;
  background: none;
  height: 45px;
  width: 350px;
  padding: 0 20px;
}
@media only screen and (max-width: 767px) {
  .form_group input {
    width: 100%;
  }
}
.form_group button {
  display: inline-block;
  width: 80px;
  background: #222222;
  border: 0;
  color: #ffffff;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 13px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  margin-right: 20px;
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  border-radius: 3px;
}
.form_group button:hover {
  background: #009035;
}

.form_group input[type="checkbox"] {
  width: 15px;
  height: 15px;
  margin-right: 10px;
  position: relative;
  top: 3px;
}

.form_group.group_3 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.form_group.group_3 label {
  margin-bottom: 0;
  line-height: 34px;
  cursor: pointer;
}
.form_group.group_3 label:hover {
  color: #009035;
}

#checkout_coupon input {
  background: none;
  border: 1px solid #ebebeb;
  width: 200px;
  height: 45px;
  font-size: 12px;
  padding: 0 20px;
  color: #222222;
}
#checkout_coupon button {
  width: 130px;
  background: #222222;
  color: #ffffff;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 13px;
  cursor: pointer;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  border: 0;
  height: 45px;
  line-height: 45px;
  border-radius: 3px;
  margin-left: 5px;
}
@media only screen and (max-width: 767px) {
  #checkout_coupon button {
    margin-top: 20px;
  }
}
#checkout_coupon button:hover {
  background: #009035;
}

.mb-20 {
  margin-bottom: 20px;
}

.checkout_form h3 {
  font-size: 16px;
  line-height: 30px;
  padding: 5px 10px;
  text-transform: uppercase;
  color: #ffffff;
  background: #222222;
  font-weight: 500;
}
.checkout_form input {
  border: 1px solid #ebebeb;
  background: none;
  height: 40px;
  width: 100%;
  padding: 0 20px;
  color: #222222;
}
.checkout_form .nice-select {
  width: 100%;
}
.checkout_form .nice-select ul.list {
  width: 100%;
  height: 180px;
  overflow: auto;
}
.checkout_form .nice-select::after {
  top: 56%;
}
.checkout_form label {
  font-weight: 500;
}
.checkout_form label span {
  color: #009035;
}
.checkout_form label.righ_0 {
  cursor: pointer;
  font-size: 15px;
  line-height: 27px;
  padding: 5px 10px;
  text-transform: capitalize;
  color: #ffffff;
  background: #222222;
  font-weight: 500;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  margin-bottom: 0;
  border-radius: 5px;
}
@media only screen and (max-width: 767px) {
  .checkout_form label.righ_0 {
    font-size: 13px;
    line-height: 25px;
    padding: 3px 10px;
  }
}
.checkout_form label.righ_0:hover {
  background: #009035;
}

.checkout_form input[type="checkbox"] {
  width: 15px;
  height: 15px;
  position: relative;
  top: 2px;
  margin-right: 10px;
}

.order_button button {
  cursor: pointer;
  font-size: 16px;
  line-height: 30px;
  padding: 5px 10px;
  text-transform: capitalize;
  color: #ffffff;
  background: #009035;
  font-weight: 500;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  margin-bottom: 0;
  border-radius: 5px;
}
@media only screen and (max-width: 767px) {
  .order_button button {
    font-size: 14px;
  }
}
.order_button button:hover {
  background: #222222;
}

.order-notes textarea {
  border: 1px solid #e5e5e5;
  border-radius: 0;
  height: 45px;
  max-width: 100%;
  padding: 0 30px 0 20px;
  background: none;
  font-size: 13px;
  resize: none;
  line-height: 45px;
  width: 100%;
  color: #222222;
}
.order-notes label {
  line-height: 13px;
}

.order_table {
  margin-bottom: 35px;
}
.order_table table {
  width: 100%;
}
.order_table table thead tr th {
  min-width: 50%;
  text-align: center;
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
}
.order_table table tbody tr td {
  min-width: 50%;
  text-align: center;
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
}
.order_table table tfoot tr th {
  min-width: 50%;
  text-align: center;
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
}
.order_table table tfoot tr td {
  min-width: 50%;
  text-align: center;
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
}

.panel-default input[type="radio"] {
  width: 15px;
  height: 15px;
  position: relative;
  top: 2px;
  margin-right: 10px;
}

.panel-default img {
  width: 160px;
}

.order_button button {
  border: 0;
}

.card-body1 {
  margin-bottom: 15px;
}

/*checkout page css end*/
/* 22. wishlist css here */
.wishlist_page_bg {
  background: #F5F5F9;
  padding: 55px 0 133px;
}
@media only screen and (max-width: 767px) {
  .wishlist_page_bg {
    padding: 55px 0 111px;
  }
}

.wishlist_inner {
  background: #ffffff;
  padding: 20px;
  margin-bottom: 60px;
}

.table_desc.wishlist table tbody tr:last-child td {
  border-bottom: 0;
}

.table_desc.wishlist {
  margin-bottom: 0;
}
.table_desc.wishlist table tbody tr td.product_total a {
  background: #009035;
  font-size: 12px;
  font-weight: 500;
  height: 38px;
  line-height: 18px;
  padding: 10px 20px;
  color: #ffffff;
  text-transform: uppercase;
  border-radius: 3px;
}
.table_desc.wishlist table tbody tr td.product_total a:hover {
  background: #222222;
}

.wishlist_share {
  text-align: center;
  padding: 20px 0;
  border: 1px solid #ebebeb;
  background: #ffffff;
}
.wishlist_share h4 {
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
}
.wishlist_share ul li {
  display: inline-block;
}
.wishlist_share ul li a {
  padding: 0 10px;
  display: block;
}
.wishlist_share ul li a:hover {
  color: #009035;
}

/*wishlist css end*/
/* 15. contact page css here */
.contact_page_bg {
  background: #F5F5F9;
  padding: 60px 0 133px;
}
@media only screen and (max-width: 767px) {
  .contact_page_bg {
    padding: 60px 0 111px;
  }
}

.contact_area {
  padding: 20px;
  background: #ffffff;
}

.contact_message h3 {
  font-size: 21px;
  text-transform: capitalize;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 25px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .contact_message h3 {
    margin-bottom: 20px;
  }
}
@media only screen and (max-width: 767px) {
  .contact_message h3 {
    font-size: 20px;
    margin-bottom: 20px;
  }
}
.contact_message p {
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 20px;
}
.contact_message ul li {
  padding: 13px 0;
  border-top: 1px solid #ebebeb;
}
.contact_message ul li:last-child {
  padding-bottom: 0;
}
.contact_message ul li i {
  margin-right: 10px;
}
.contact_message ul li a:hover {
  color: #009035;
}
.contact_message label {
  line-height: 18px;
  font-weight: 500;
  margin-bottom: 10px;
}
.contact_message input {
  border: 1px solid #ebebeb;
  height: 45px;
  background: #ffffff;
  width: 100%;
  padding: 0 20px;
  color: #757575;
}
.contact_message textarea {
  height: 170px;
  border: 1px solid #ebebeb;
  background: #ffffff;
  resize: none;
  margin-bottom: 20px;
  width: 100%;
  padding: 10px 20px;
  color: #222222;
}
.contact_message button {
  font-weight: 400;
  height: 42px;
  line-height: 42px;
  padding: 0 30px;
  text-transform: capitalize;
  border: none;
  background: #222222;
  color: #ffffff;
  cursor: pointer;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  border-radius: 4px;
}
.contact_message button:hover {
  background: #009035;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .contact_message.content {
    margin-bottom: 42px;
  }
}
@media only screen and (max-width: 767px) {
  .contact_message.content {
    margin-bottom: 42px;
  }
}
.contact_message.form p.form-messege {
  margin-bottom: 0;
}

.contact_map {
  margin-bottom: 58px;
}

.map-area #googleMap {
  height: 460px;
  width: 100%;
}

/*contact page css end*/
/* 17. login page css here */
.login_page_bg {
  background: #F5F5F9;
  padding: 60px 0 133px;
}
@media only screen and (max-width: 767px) {
  .login_page_bg {
    padding: 60px 0 110px;
  }
}

.account_form h2 {
  font-size: 28px;
  text-transform: capitalize;
  font-weight: 500;
  line-height: 22px;
  margin-bottom: 30px;
}
@media only screen and (max-width: 767px) {
  .account_form h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
}
.account_form form {
  border: 1px solid #ebebeb;
  padding: 23px 20px 29px;
  border-radius: 5px;
  background: #ffffff;
}
.account_form label {
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
  line-height: 12px;
  margin-bottom: 12px;
}
.account_form label:hover {
  color: #009035;
}
.account_form input {
  border: 1px solid #ebebeb;
  height: 40px;
  max-width: 100%;
  padding: 0 20px;
  background: none;
  width: 100%;
}
.account_form button {
  background: #009035;
  border: 0;
  color: #ffffff;
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  height: 34px;
  line-height: 21px;
  padding: 5px 20px;
  text-transform: uppercase;
  cursor: pointer;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  margin-left: 20px;
  border-radius: 20px;
}
.account_form button:hover {
  background: #222222;
}

.login_submit label input[type="checkbox"] {
  width: 15px;
  height: 13px;
  margin-right: 3px;
}

.login_submit {
  text-align: right;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .login_submit {
    text-align: left;
  }
}
@media only screen and (max-width: 767px) {
  .login_submit {
    text-align: left;
  }
}
.login_submit a {
  font-size: 13px;
  float: left;
  line-height: 39px;
}
.login_submit a:hover {
  color: #009035;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .login_submit a {
    float: none;
    line-height: 18px;
    display: block;
    margin-bottom: 20px;
  }
}
@media only screen and (max-width: 767px) {
  .login_submit a {
    float: none;
    line-height: 18px;
    display: block;
    margin-bottom: 20px;
  }
}

.account_form p {
  margin-bottom: 20px;
}

@media only screen and (max-width: 767px) {
  .account_form.register {
    margin-top: 58px;
  }
}
@media only screen and (max-width: 767px) {
  .account_form.register button {
    margin-left: 0;
  }
}

/*login page css end */
/* 16. faq page css here */
.faq_page_bg {
  background: #F5F5F9;
  padding: 60px 0 133px;
}
@media only screen and (max-width: 767px) {
  .faq_page_bg {
    padding: 60px 0 105px;
  }
}

.faq_content_area {
  padding-bottom: 54px;
}

.accordion_area .card-header {
  background: #009035;
}
.accordion_area .card-header:first-child {
  border-radius: inherit;
}

.card.card_dipult {
  border: none;
  margin-bottom: 10px;
}

.card.card_dipult:last-child {
  margin-bottom: 0;
}

.card-header.card_accor {
  padding: 0;
  border: none;
}
.card-header.card_accor button {
  height: 45px;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  white-space: initial;
}
@media only screen and (max-width: 767px) {
  .card-header.card_accor button {
    height: 60px;
    padding: 5px 27px 5px 7px;
  }
}
.card-header.card_accor button i {
  position: absolute;
  top: 50%;
  -webkit-transform: translatey(-50%);
  transform: translatey(-50%);
  right: 20px;
}
@media only screen and (max-width: 767px) {
  .card-header.card_accor button i {
    right: 10px;
  }
}
.card-header.card_accor button.btn-link {
  border: 1px solid #009035;
  width: 100%;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
}
.card-header.card_accor button.btn-link.collapsed {
  background: #ffffff;
  border: 1px solid #ebebeb;
  width: 100%;
  text-align: left;
  color: #222222;
}

.card-header.card_accor button.btn-link i.fa-plus {
  display: none;
}

.card-header.card_accor button.btn-link.collapsed i.fa-plus {
  display: block;
}

.card-header.card_accor button.btn-link.collapsed i.fa-minus {
  display: none;
}

.faq_content_wrapper h4 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
  line-height: 18px;
}
@media only screen and (max-width: 767px) {
  .faq_content_wrapper h4 {
    font-size: 14px;
    line-height: 24px;
  }
}

/*faq page css end*/
/*  18. my account css here */
.account_page_bg {
  background: #F5F5F9;
  padding: 60px 0 133px;
}
@media only screen and (max-width: 767px) {
  .account_page_bg {
    padding: 60px 0 105px;
  }
}

@media only screen and (max-width: 767px) {
  .dashboard_tab_button {
    margin-bottom: 20px;
  }
}
.dashboard_tab_button ul li {
  margin-bottom: 5px;
}
.dashboard_tab_button ul li a {
  font-size: 14px;
  color: #ffffff;
  font-weight: 500;
  text-transform: capitalize;
  background: #222222;
  border-radius: 3px;
}
.dashboard_tab_button ul li a:hover {
  background: #009035;
  color: #ffffff;
}
.dashboard_tab_button ul li a.active {
  background: #009035;
}

.dashboard_content h3 {
  font-size: 22px;
  text-transform: capitalize;
  font-weight: 500;
  margin-bottom: 15px;
}
.dashboard_content h4 {
  font-size: 20px;
  text-transform: capitalize;
  font-weight: 500;
  margin-bottom: 10px;
  margin-top: 10px;
}
.dashboard_content button {
  font-weight: 500;
  border: 0;
  background: #222222;
  color: #ffffff;
  padding: 0 15px;
  height: 30px;
  line-height: 30px;
  border-radius: 4px;
  margin-top: 12px;
}
.dashboard_content button:hover {
  background: #009035;
}
.dashboard_content p a {
  color: #009035;
  font-weight: 500;
}

.table-responsive table thead {
  background: #ebebeb;
}
.table-responsive table thead tr th {
  text-align: center;
}
.table-responsive table tbody tr td {
  border-right: 1px solid #ebebeb;
  font-weight: 500;
  text-transform: capitalize;
  font-size: 14px;
  text-align: center;
  min-width: 150px;
}
.table-responsive table tbody tr td:last-child a {
  color: #009035;
}
.table-responsive .table {
  border-left: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  border-right: 1px solid #ebebeb;
}

.dashboard_content address {
  font-weight: 500;
}

.input-radio span input[type="radio"], .account_login_form form span input[type="checkbox"] {
  width: 15px;
  height: 15px;
  margin-right: 2px;
  position: relative;
  top: 2px;
}

.input-radio span {
  font-weight: 500;
  padding-right: 10px;
}

.account_login_form form > input {
  border: 1px solid #ddd;
  background: none;
  height: 40px;
  margin-bottom: 20px;
  width: 100%;
  padding: 0 20px;
  color: #222222;
}
.account_login_form form span.custom_checkbox {
  display: flex;
}
.account_login_form form span.custom_checkbox input {
  vertical-align: middle;
  margin-right: 10px;
  top: 5px;
}
.account_login_form form span.custom_checkbox label {
  margin-bottom: 0;
}

/*my account css end*/
/* 10. about page css here */
.about_bg_area {
  background: #F5F5F9;
  padding: 55px 0 133px;
}
@media only screen and (max-width: 767px) {
  .about_bg_area {
    padding: 55px 0 111px;
  }
}

.about_section {
  background: #ffffff;
}

.about_content {
  padding: 26px 30px 30px;
  text-align: center;
}
@media only screen and (max-width: 767px) {
  .about_content {
    padding: 23px 10px 28px;
  }
}
.about_content h1 {
  display: inline-block;
  font-size: 24px;
  line-height: 24px;
  text-transform: capitalize;
  font-weight: 500;
  margin-bottom: 19px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .about_content h1 {
    font-size: 22px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .about_content h1 {
    font-size: 18px;
    margin-bottom: 14px;
  }
}
@media only screen and (max-width: 767px) {
  .about_content h1 {
    font-size: 16px;
    line-height: 25px;
    margin-bottom: 13px;
  }
}
.about_content p {
  font-size: 14px;
  line-height: 26px;
  max-width: 890px;
  margin: 0 auto;
}

.chose_content h3 {
  font-size: 18px;
  text-transform: capitalize;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 19px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .chose_content h3 {
    font-size: 16px;
    argin-bottom: 13px;
  }
}
@media only screen and (max-width: 767px) {
  .chose_content h3 {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 11px;
  }
}

.about_signature {
  margin-top: 25px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .about_signature {
    margin-top: 20px;
  }
}
@media only screen and (max-width: 767px) {
  .about_signature {
    margin-top: 22px;
  }
}

.choseus_area {
  margin-bottom: 60px;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
  padding: 100px 0 96px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .choseus_area {
    padding: 60px 0 55px;
  }
}
@media only screen and (max-width: 767px) {
  .choseus_area {
    padding: 60px 0 28px;
  }
}

.single_chose {
  text-align: center;
}
@media only screen and (max-width: 767px) {
  .single_chose {
    margin-bottom: 25px;
  }
}
.single_chose:hover .chose_icone {
  transform: rotatey(180deg);
}

.chose_icone {
  margin-bottom: 23px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .chose_icone {
    margin-bottom: 20px;
  }
}
@media only screen and (max-width: 767px) {
  .chose_icone {
    margin-bottom: 14px;
  }
}

.single_gallery_section {
  background: #ffffff;
}
@media only screen and (max-width: 767px) {
  .single_gallery_section {
    margin-bottom: 25px;
  }
}

@media only screen and (max-width: 767px) {
  .about_gallery_section {
    margin-bottom: 31px;
  }
}

@media only screen and (max-width: 767px) {
  .gallery_thumb img {
    width: 100%;
  }
}

.about_gallery_content {
  padding: 30px;
}
.about_gallery_content h3 {
  font-size: 18px;
  text-transform: capitalize;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 12px;
}
@media only screen and (max-width: 767px) {
  .about_gallery_content h3 {
    font-size: 16px;
    margin-bottom: 7px;
  }
}
.about_gallery_content p {
  line-height: 26px;
}

.team_container {
  padding-bottom: 45px;
  border-bottom: 1px solid #ebebeb;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .team_container {
    padding-bottom: 15px;
  }
}
@media only screen and (max-width: 767px) {
  .team_container {
    padding-bottom: 15px;
  }
}

.team_member {
  text-align: center;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .team_member {
    margin-bottom: 28px;
  }
}
@media only screen and (max-width: 767px) {
  .team_member {
    margin-bottom: 28px;
  }
}

.team_thumb {
  margin-bottom: 24px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .team_thumb {
    margin-bottom: 18px;
  }
}
@media only screen and (max-width: 767px) {
  .team_thumb {
    margin-bottom: 18px;
  }
}

.team_content h3 {
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 5px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .team_content h3 {
    line-height: 18px;
    margin-bottom: 4px;
  }
}
@media only screen and (max-width: 767px) {
  .team_content h3 {
    line-height: 18px;
    margin-bottom: 4px;
    font-size: 17px;
  }
}
.team_content h5 {
  font-size: 13px;
  line-height: 17px;
  margin-bottom: 12px;
  padding-bottom: 14px;
  position: relative;
  display: inline-block;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .team_content h5 {
    margin-bottom: 11px;
    padding-bottom: 11px;
  }
}
@media only screen and (max-width: 767px) {
  .team_content h5 {
    margin-bottom: 11px;
    padding-bottom: 11px;
  }
}
.team_content h5::before {
  position: absolute;
  content: "";
  width: 37px;
  height: 2px;
  background: #009035;
  bottom: 0;
  left: 50%;
  transform: translatex(-50%);
}
.team_content p {
  font-size: 14px;
  line-height: 25px;
}
.team_content p a:hover {
  color: #009035;
}

/*about page css end*/
/*--
    16. About US css
---------------------------*/
@media only screen and (max-width: 767px) {
  .faq-client-say-area .section_title {
    margin-bottom: 22px;
  }
}

.panel-heading .panel-title {
  margin-bottom: 0;
}
.panel-heading .panel-title a {
  background: #ffffff;
  display: block;
  padding: 14px 20px;
  border-radius: 3px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-decoration: none;
  color: inherit;
  position: relative;
  -webkit-transition: color .2s ease-in-out;
  -o-transition: color .2s ease-in-out;
  transition: color .2s ease-in-out;
  border: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-weight: 500;
}
.panel-heading .panel-title a::before {
  position: absolute;
  content: "\f0d7";
  font-family: 'FontAwesome';
  color: #333;
  font-size: 20px;
  width: 22px;
  height: 22px;
  text-align: center;
  line-height: 25px;
  right: 15px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transition: 0.4s ease-in-out;
  -o-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
  border-radius: 100%;
  z-index: 4;
  margin-top: 0px;
}

.panel-heading .panel-title a[aria-expanded="true"]::before {
  background: #fff;
  color: #009035;
}

.faq-style-wrap .panel-title a[aria-expanded="true"] {
  border-radius: 3px 3px 0 0;
  color: #ffffff;
  background: #009035;
}

.panel.panel-default {
  margin-bottom: 21px;
}
.panel.panel-default:last-child {
  margin-bottom: 0;
}

.panel-body {
  padding: 15px;
  border: 1px solid #ddd;
  background: #ffffff;
}

/*--
    08. Testimonial Css
--------------------------------*/
@media only screen and (max-width: 767px) {
  .testimonials-area {
    margin-top: 57px;
  }
}

.testimonial-two {
  background: #fff;
  border-radius: 7px;
  padding: 55px 25px;
}
@media only screen and (max-width: 767px) {
  .testimonial-two {
    padding: 30px 18px;
  }
}
.testimonial-two .owl-dots {
  width: 100%;
  text-align: center;
  margin-top: 30px;
}
.testimonial-two .owl-dots .owl-dot {
  width: 6px;
  height: 6px;
  background: #009035;
  border-radius: 50%;
  display: inline-block;
  margin: 0 2px;
  transition: .3s;
}
.testimonial-two .owl-dots .owl-dot:hover {
  width: 25px;
  border-radius: 30px;
}
.testimonial-two .owl-dots .owl-dot.active {
  width: 25px;
  border-radius: 30px;
}

.quote-container {
  margin: auto;
  position: relative;
}
.quote-container .quote-image {
  display: inline-block;
  height: 90px;
  margin-right: 10px;
  overflow: hidden;
  vertical-align: middle;
  width: 90px;
  border: 7px solid #f6f5f1;
  border-radius: 100%;
  position: absolute;
  left: 20px;
  top: -45px;
}
.quote-container .testimonials-text {
  position: relative;
  margin-top: 20px;
  padding-bottom: 37px;
}
.quote-container .testimonials-text::before {
  content: "";
  display: inline-block;
  margin-right: 10px;
  width: 23px;
  height: 17px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translatex(-50%);
  background: url(../img/about/quote-icon.png) center center no-repeat;
}
.quote-container .author {
  margin-top: 25px;
}
.quote-container .author h6 {
  font-weight: 500;
  text-transform: uppercase;
  color: #009035;
}

.testimonial-wrap-two .quote-container .quote-image {
  margin-right: 0px;
  position: inherit;
  left: 0px;
  top: 0px;
}

/* 11. blog page css here */
.blog_bg_area {
  background: #F5F5F9;
  padding: 55px 0 133px;
}
@media only screen and (max-width: 767px) {
  .blog_bg_area {
    padding: 55px 0 110px;
  }
}

.blog_wrapper_inner {
  background: #ffffff;
  padding: 20px;
  border: 1px solid #ebebeb;
}

.blog_header {
  margin-bottom: 30px;
  text-align: center;
}
.blog_header h1 {
  font-size: 32px;
  line-height: 28px;
  margin-bottom: 0;
  font-weight: 500;
}
@media only screen and (max-width: 767px) {
  .blog_header h1 {
    font-size: 28px;
    line-height: 28px;
  }
}

.blog_wrapper .single_blog {
  overflow: hidden;
  border-right: 0;
  padding: 0 0 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ebebeb;
}
.blog_wrapper .single_blog:last-child {
  padding: 0;
  margin-bottom: 0;
  border-bottom: 0;
}
@media only screen and (max-width: 767px) {
  .blog_wrapper .single_blog {
    padding: 0 0 25px;
    margin-bottom: 30px;
  }
}
.blog_wrapper .blog_thumb {
  float: left;
  width: 45%;
}
@media only screen and (max-width: 767px) {
  .blog_wrapper .blog_thumb {
    width: 100%;
  }
}
.blog_wrapper .blog_thumb iframe {
  height: 325px;
  width: 100%;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .blog_wrapper .blog_thumb iframe {
    height: 270px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .blog_wrapper .blog_thumb iframe {
    height: 280px;
  }
}
@media only screen and (max-width: 767px) {
  .blog_wrapper .blog_thumb iframe {
    height: 230px;
  }
}
@media only screen and (max-width: 767px) {
  .blog_wrapper .blog_thumb a {
    width: 100%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .blog_wrapper .blog_thumb a img {
    width: 100%;
  }
}
@media only screen and (max-width: 767px) {
  .blog_wrapper .blog_thumb a img {
    width: 100%;
  }
}
.blog_wrapper .blog_content {
  width: 55%;
  float: left;
  text-align: left;
  padding: 15px 15px 0 30px;
}
@media only screen and (max-width: 767px) {
  .blog_wrapper .blog_content {
    padding: 20px 0 0 0;
    width: 100%;
  }
}
.blog_wrapper .blog_content h4 {
  font-size: 20px;
  text-transform: capitalize;
  font-weight: 500;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .blog_wrapper .blog_content h4 {
    font-size: 19px;
    margin-bottom: 11px;
  }
}
@media only screen and (max-width: 767px) {
  .blog_wrapper .blog_content h4 {
    font-size: 17px;
    margin-bottom: 9px;
  }
}
.blog_wrapper .blog_meta {
  margin-bottom: 17px;
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 17px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .blog_wrapper .blog_meta {
    margin-bottom: 12px;
    padding-bottom: 13px;
  }
}
@media only screen and (max-width: 767px) {
  .blog_wrapper .blog_meta {
    margin-bottom: 13px;
    padding-bottom: 13px;
  }
}
.blog_wrapper .blog_meta span {
  font-size: 13px;
  line-height: 24px;
}
.blog_wrapper .blog_meta span a {
  color: #009035;
}
.blog_wrapper .blog_meta span a:hover {
  text-decoration: underline;
}
.blog_wrapper .blog_meta span.author {
  margin-right: 4px;
}
.blog_wrapper .blog_meta span.author a {
  margin-right: 5px;
}
.blog_wrapper .blog_desc {
  margin-bottom: 15px;
}
@media only screen and (max-width: 767px) {
  .blog_wrapper .blog_desc {
    margin-bottom: 12px;
  }
}
.blog_wrapper .blog_desc p {
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 0;
}
.blog_wrapper .btn_more a {
  color: #009035;
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 500;
  line-height: 20px;
  display: inline-block;
}
.blog_wrapper .btn_more a:hover {
  text-decoration: underline;
}

@media only screen and (max-width: 767px) {
  .blog_bidio .blog_content {
    padding-top: 13px;
  }
}

.readmore_button a {
  height: 38px;
  line-height: 40px;
  background: #009035;
  border: 0;
  color: #fff;
  display: block;
  text-align: center;
  padding: 0 20px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
  font-style: normal;
  border-radius: 3px;
  max-width: 170px;
}
.readmore_button a:hover {
  background: #222222;
}
@media only screen and (max-width: 767px) {
  .readmore_button a {
    max-width: 130px;
  }
}

.blog_sidebar_widget {
  padding: 30px 20px 40px 20px;
  background: #ffffff;
  border: 1px solid #ebebeb;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .blog_sidebar_widget {
    margin-top: 60px;
  }
}
@media only screen and (max-width: 767px) {
  .blog_sidebar_widget {
    margin-top: 60px;
  }
}
.blog_sidebar_widget .widget_title {
  position: relative;
  margin-bottom: 20px;
}
.blog_sidebar_widget .widget_title h3 {
  margin-bottom: 0;
  font-size: 14px;
  line-height: 25px;
  padding-top: 0;
  font-weight: 500;
}
.blog_sidebar_widget .widget_list.comments .post_thumb a img {
  border-radius: 50%;
}
.blog_sidebar_widget .widget_list.comments .post_info span a {
  color: #009035;
}
.blog_sidebar_widget .widget_list.comments .post_info a:hover {
  color: #009035;
}
.blog_sidebar_widget .widget_categories .widget_title {
  margin-bottom: 15px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .blog_sidebar_widget .widget_categories {
    margin-bottom: 44px;
  }
}
@media only screen and (max-width: 767px) {
  .blog_sidebar_widget .widget_categories {
    margin-bottom: 46px;
  }
}

.widget_search input {
  height: 35px;
  border: 1px solid #ebebeb;
  background: #fff;
  color: #222222;
  width: 100%;
  margin-bottom: 20px;
  padding: 0 15px;
}
.widget_search button {
  color: #fff;
  display: inline-block;
  background: #242424;
  border: none;
  padding: 0 20px;
  height: 34px;
  line-height: 35px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  -webkit-transition: .3s;
  transition: .3s;
  border-radius: 3px;
}
.widget_search button:hover {
  background: #009035;
}

.tag_widget ul li {
  display: inline-block;
}
.tag_widget ul li a {
  margin: 0 6px 0 0;
  display: block;
  font-size: 12px;
  font-weight: 400;
  border: 1px solid #ebebeb;
  background: #fff;
  padding: 0 15px;
  line-height: 29px;
  border-radius: 3px;
}
.tag_widget ul li a:hover {
  background: #009035;
  border-color: #009035;
  color: #fff;
}

.post_thumb {
  width: 60px;
  float: left;
  margin-right: 10px;
}

.post_wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #ebebeb;
}
.post_wrapper:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: 0;
}

.post_info h4 {
  font-size: 13px;
  font-weight: 500;
  text-transform: capitalize;
  line-height: 14px;
  margin-bottom: 5px;
}
.post_info h4 a:hover {
  color: #009035;
}
.post_info span {
  font-size: 12px;
}

.blog_categories ul li {
  border-top: 1px solid #ddd;
}
.blog_categories ul li a {
  padding: 10px 0;
  text-transform: capitalize;
  display: inline-block;
  margin-left: 0;
}
.blog_categories ul li a:hover {
  color: #009035;
}
.blog_categories ul li:last-child a {
  padding-bottom: 0;
}

.shipping_area.shipping_contact.blog_shipping {
  margin-top: 94px;
}

.blog_pagination .pagination {
  border: 1px solid #ebebeb;
  justify-content: center;
  padding: 10px 0;
  background: #ffffff;
}
@media only screen and (max-width: 767px) {
  .blog_pagination .pagination {
    margin-top: 0;
  }
}

/*blog page css end*/
/*blog fullwidth css here*/
.blog_fullwidth .single_blog {
  border-bottom: 0;
  padding-bottom: 0;
  margin-bottom: 55px;
}
.blog_fullwidth .blog_thumb {
  width: 100%;
  margin-right: 0;
}
.blog_fullwidth .blog_thumb iframe {
  height: 550px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .blog_fullwidth .blog_thumb iframe {
    height: 440px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .blog_fullwidth .blog_thumb iframe {
    height: 440px;
  }
}
@media only screen and (max-width: 767px) {
  .blog_fullwidth .blog_thumb iframe {
    height: 200px;
  }
}
.blog_fullwidth .blog_content {
  width: 100%;
  padding: 20px 0 0;
}

.blog_thumb_active:hover .owl-nav > div {
  left: 20px;
  opacity: 1;
  visibility: visible;
}
.blog_thumb_active:hover .owl-nav > div.owl-next {
  right: 20px;
}
.blog_thumb_active .owl-nav > div {
  position: absolute;
  top: 50%;
  transform: translatey(-50%);
  background: rgba(46, 110, 213, 0.6);
  width: 30px;
  height: 30px;
  line-height: 30px;
  font-size: 20px;
  color: #fff;
  text-align: center;
  border-radius: 50%;
  left: 40px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  opacity: 0;
  visibility: hidden;
}
.blog_thumb_active .owl-nav > div.owl-next {
  right: 40px;
  left: auto;
}

.blog_aduio_icone {
  margin-bottom: 12px;
  margin-top: 22px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .blog_aduio_icone {
    margin-bottom: 6px;
    margin-top: 16px;
  }
}
@media only screen and (max-width: 767px) {
  .blog_aduio_icone {
    margin-bottom: 8px;
    margin-top: 17px;
  }
}
.blog_aduio_icone audio {
  width: 100%;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .blog_reverse .row {
    flex-direction: column-reverse;
  }
}
@media only screen and (max-width: 767px) {
  .blog_reverse .row {
    flex-direction: column-reverse;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .blog_wrapper_sidebar .row {
    flex-direction: row;
  }
}
@media only screen and (max-width: 767px) {
  .blog_wrapper_sidebar .row {
    flex-direction: row;
  }
}

.blog_nosidebar .blog_thumb {
  width: 33%;
}
@media only screen and (max-width: 767px) {
  .blog_nosidebar .blog_thumb {
    width: 100%;
  }
}
.blog_nosidebar .blog_content {
  width: 67%;
}
@media only screen and (max-width: 767px) {
  .blog_nosidebar .blog_content {
    width: 100%;
  }
}

/* 12. blog details css here */
.post_header {
  margin-bottom: 28px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .post_header {
    margin-bottom: 25px;
  }
}
@media only screen and (max-width: 767px) {
  .post_header {
    margin-bottom: 22px;
  }
}
.post_header h3 {
  font-size: 30px;
  line-height: 35px;
  font-weight: 500;
  margin-bottom: 7px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .post_header h3 {
    font-size: 26px;
    line-height: 30px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .post_header h3 {
    font-size: 25px;
    line-height: 25px;
  }
}
@media only screen and (max-width: 767px) {
  .post_header h3 {
    font-size: 17px;
    line-height: 24px;
  }
}

.blog_details {
  padding: 20px;
  background: #ffffff;
  border: 1px solid #ebebeb;
}
.blog_details .single_blog {
  margin-bottom: 0;
  padding: 0;
  border-bottom: 0;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .blog_details .blog_sidebar {
    margin-bottom: 0;
  }
}
@media only screen and (max-width: 767px) {
  .blog_details .blog_sidebar {
    margin-bottom: 0;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .blog_details .blog_wrapper {
    margin-bottom: 60px;
  }
}
@media only screen and (max-width: 767px) {
  .blog_details .blog_wrapper {
    margin-bottom: 60px;
  }
}
.blog_details .blog_meta {
  margin-bottom: 0;
}
.blog_details .blog_thumb {
  width: 100%;
  margin-right: 0;
}
.blog_details .blog_content {
  width: 100%;
  padding-top: 22px;
}
.blog_details .post_content > p {
  line-height: 24px;
  margin-bottom: 10px;
  font-size: 15px;
}
@media only screen and (max-width: 767px) {
  .blog_details .post_content > p {
    font-size: 14px;
  }
}
.blog_details .post_content blockquote {
  margin: 25px 0 25px 40px;
  font-style: italic;
  padding: 30px 45px;
  background: #f6f6f6;
  border: 1px solid #ebebeb;
  border-left: 4px solid #009035;
}
.blog_details .post_content blockquote p {
  font-size: 16px;
}
@media only screen and (max-width: 767px) {
  .blog_details .post_content blockquote p {
    font-size: 15px;
  }
}
@media only screen and (max-width: 767px) {
  .blog_details .post_content blockquote {
    margin: 23px 0 23px 0;
    padding: 20px 12px 15px;
  }
}
.blog_details .social_sharing {
  display: flex;
  align-items: center;
}
.blog_details .social_sharing p {
  font-size: 13px;
  text-transform: capitalize;
  margin-right: 20px;
  margin-bottom: 0;
  line-height: 13px;
  font-weight: 500;
}
@media only screen and (max-width: 767px) {
  .blog_details .social_sharing p {
    font-size: 13px;
    margin-right: 10px;
  }
}
.blog_details .social_sharing ul li {
  display: inline-block;
}
.blog_details .social_sharing ul li a {
  background: #e6e6e6;
  border-radius: 100%;
  display: inline-block;
  font-size: 12px;
  height: 26px;
  line-height: 26px;
  margin-right: 5px;
  text-align: center;
  width: 26px;
}
.blog_details .social_sharing ul li a:hover {
  color: #ffffff;
  background: #009035;
}
@media only screen and (max-width: 767px) {
  .blog_details .social_sharing ul li a {
    margin-right: 0;
    font-size: 11px;
    height: 24px;
    line-height: 24px;
    width: 24px;
  }
}
.blog_details .social_sharing ul li:first-child a {
  padding-left: 0;
  border-left: 0;
}

.entry_content {
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 22px;
}
@media only screen and (max-width: 767px) {
  .entry_content {
    flex-direction: column;
    text-align: left;
    align-items: inherit;
  }
}
.entry_content .post_meta {
  margin-bottom: 0;
}
@media only screen and (max-width: 767px) {
  .entry_content .post_meta {
    margin-bottom: 10px;
  }
}
.entry_content .post_meta span {
  font-weight: 500;
  font-size: 13px;
}
.entry_content .post_meta span a:hover {
  color: #009035;
}

.comments_box {
  margin-bottom: 58px;
}
.comments_box h3 {
  font-size: 14px;
  margin: 0 0 20px;
  font-weight: 500;
  line-height: 18px;
  text-transform: uppercase;
}

.comment_list {
  overflow: hidden;
  margin-bottom: 30px;
}
.comment_list:last-child {
  margin-bottom: 0;
}
.comment_list .comment_thumb {
  display: inline-block;
  float: left;
}
@media only screen and (max-width: 767px) {
  .comment_list .comment_thumb {
    width: 40px;
  }
}
.comment_list .comment_content {
  margin-left: 70px;
  position: relative;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  padding: 15px;
}
@media only screen and (max-width: 767px) {
  .comment_list .comment_content {
    margin-left: 55px;
  }
}
.comment_list .comment_content h5 {
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 5px;
}
.comment_list .comment_content h5 a:hover {
  color: #009035;
}
.comment_list .comment_content span {
  line-height: 18px;
  margin-bottom: 8px;
  font-size: 13px;
  font-style: italic;
  display: inline-block;
}
.comment_list .comment_content p {
  margin-bottom: 0;
  font-size: 14px;
}

.comment_reply {
  position: absolute;
  top: 20px;
  right: 12px;
}
@media only screen and (max-width: 767px) {
  .comment_reply {
    top: 15px;
  }
}
.comment_reply a {
  padding: 2px 10px;
  border-radius: 3px;
  color: #fff;
  background: #222222;
  display: block;
  font-size: 13px;
}
@media only screen and (max-width: 767px) {
  .comment_reply a {
    line-height: 20px;
    font-size: 13px;
  }
}
.comment_reply a:hover {
  background: #009035;
}

.comments_form h3 {
  font-size: 14px;
  margin: 0 0 20px;
  font-weight: 500;
  line-height: 18px;
  text-transform: uppercase;
}
.comments_form p {
  font-size: 13px;
  line-height: 17px;
  margin-bottom: 12px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .comments_form form .row {
    flex-direction: row;
  }
}
.comments_form form label {
  font-size: 13px;
  line-height: 20px;
  font-weight: 500;
  margin-bottom: 10px;
}
.comments_form form textarea {
  width: 100%;
  height: 200px;
  background: #ffffff;
  border: 1px solid #ebebeb;
  margin-bottom: 10px;
  resize: none;
  padding: 10px;
}
.comments_form form input {
  width: 100%;
  height: 40px;
  border: 1px solid #ebebeb;
  margin-bottom: 15px;
  padding: 0 20px;
}
.comments_form form button {
  border: 0;
  line-height: 36px;
  background: #222222;
  font-weight: 500;
}
.comments_form form button:hover {
  background: #009035;
}
@media only screen and (max-width: 767px) {
  .comments_form form button {
    line-height: 38px;
    height: 38px;
    padding: 0 10px;
  }
}

.comment_list.list_two {
  padding-left: 50px;
}
@media only screen and (max-width: 767px) {
  .comment_list.list_two {
    padding-left: 0;
  }
}

.related_posts {
  border-top: 1px solid #ebebeb;
  padding: 57px 0 50px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .related_posts {
    padding: 57px 0 25px;
  }
}
@media only screen and (max-width: 767px) {
  .related_posts {
    padding: 47px 0 17px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .related_posts .row {
    flex-direction: row !important;
  }
}
.related_posts h3 {
  font-size: 14px;
  margin: 0 0 20px;
  font-weight: 500;
  line-height: 18px;
  text-transform: uppercase;
}

.related_thumb {
  margin-bottom: 15px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .related_thumb img {
    width: 100%;
  }
}
@media only screen and (max-width: 767px) {
  .related_thumb img {
    width: 100%;
  }
}

.related_content h4 {
  font-size: 13px;
  font-weight: 500;
  line-height: 13px;
  margin-bottom: 2px;
  text-transform: uppercase;
}
.related_content h4 a {
  color: #222222;
}
.related_content h4 a:hover {
  color: #009035;
}
.related_content span {
  font-size: 13px;
  line-height: 17px;
}
.related_content span i {
  margin-right: 3px;
}
.related_content .blog_meta {
  border-bottom: 0;
  padding-bottom: 0;
}
.related_content .blog_meta span {
  font-size: 12px;
  line-height: 22px;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .single_related {
    margin-bottom: 28px;
  }
}
@media only screen and (max-width: 767px) {
  .single_related {
    margin-bottom: 25px;
  }
}

/*blog details css end*/
/*  24. modal css here */
.modal-dialog.modal-dialog-centered {
  min-width: 1100px;
}
@media only screen and (min-width: 1200px) and (max-width: 1600px) {
  .modal-dialog.modal-dialog-centered {
    min-width: 1000px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .modal-dialog.modal-dialog-centered {
    min-width: 950px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .modal-dialog.modal-dialog-centered {
    min-width: 730px;
  }
}
@media only screen and (max-width: 767px) {
  .modal-dialog.modal-dialog-centered {
    min-width: 90%;
  }
}

.modal_tab_img {
  text-align: center;
  margin-bottom: 10px;
}
.modal_tab_img img {
  margin: 0 auto;
}

.modal_tab_button ul li a {
  padding: 0;
  border: 1px solid #ebebeb;
  margin: 0 2px;
}
.modal_tab_button ul li a img {
  width: 100%;
}

.modal_title h2 {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 14px;
  line-height: 26px;
}

.modal_social h2 {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 15px;
  line-height: 20px;
}
.modal_social ul li {
  display: inline-block;
  margin-right: 3px;
}
.modal_social ul li a {
  text-transform: uppercase;
  display: inline-block;
  width: 38px;
  height: 38px;
  text-align: center;
  line-height: 38px;
  border-radius: 50%;
  font-size: 15px;
  color: #ffffff;
  font-weight: 400;
}
.modal_social ul li.facebook a {
  background: #3c5b9b;
}
.modal_social ul li.facebook a:hover {
  background: #009035;
}
.modal_social ul li.twitter a {
  background: #1DA1F2;
}
.modal_social ul li.twitter a:hover {
  background: #009035;
}
.modal_social ul li.pinterest a {
  background: #BD081B;
}
.modal_social ul li.pinterest a:hover {
  background: #009035;
}
.modal_social ul li.google-plus a {
  background: #DC5043;
}
.modal_social ul li.google-plus a:hover {
  background: #009035;
}
.modal_social ul li.linkedin a {
  background: #010103;
}
.modal_social ul li.linkedin a:hover {
  background: #009035;
}

.modal_price {
  margin-bottom: 12px;
}
.modal_price span {
  font-weight: 600;
  color: #009035;
  font-size: 16px;
}
.modal_price span.old_price {
  color: #222222;
  font-size: 14px;
  font-weight: 400;
  text-decoration: line-through;
  margin-left: 5px;
}

.modal_description p {
  line-height: 24px;
  font-size: 15px;
  margin: 0;
}

.variants_size h2, .variants_color h2 {
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 7px;
  line-height: 20px;
}
.variants_size.mb-15, .mb-15.variants_color {
  margin-bottom: 24px;
}
.variants_size .select_option, .variants_color .select_option {
  width: 100%;
  border-radius: 0;
  margin-bottom: 25px;
}
.variants_size .select_option .list, .variants_color .select_option .list {
  width: 100%;
  border-radius: 0;
}

.modal_add_to_cart {
  margin-bottom: 25px;
}
.modal_add_to_cart form input {
  width: 95px;
  border: 1px solid #ebebeb;
  background: none;
  padding: 0 10px;
  height: 45px;
}
@media only screen and (max-width: 767px) {
  .modal_add_to_cart form input {
    width: 75px;
  }
}
.modal_add_to_cart form button {
  background: none;
  border: 1px solid #222222;
  margin-left: 10px;
  font-size: 12px;
  font-weight: 700;
  height: 45px;
  width: 230px;
  line-height: 18px;
  padding: 10px 15px;
  text-transform: uppercase;
  background: #222222;
  color: #ffffff;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  cursor: pointer;
}
@media only screen and (max-width: 767px) {
  .modal_add_to_cart form button {
    width: 130px;
  }
}
.modal_add_to_cart form button:hover {
  background: #009035;
  color: #ffffff;
  border-color: #009035;
}

.modal_body {
  padding: 29px 6px 38px;
}
@media only screen and (max-width: 767px) {
  .modal_body {
    padding: 42px 6px 38px;
  }
}
@media only screen and (max-width: 767px) {
  .modal_body .modal_tab {
    margin-bottom: 60px;
  }
}

.modal-content {
  border-radius: 0;
}

.modal-content button.close {
  position: absolute;
  left: 94%;
  width: 35px;
  height: 35px;
  line-height: 33px;
  display: block;
  border: 1px solid #ebebeb;
  top: 10px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  z-index: 9;
}
@media only screen and (max-width: 767px) {
  .modal-content button.close {
    left: 83%;
    width: 32px;
    height: 32px;
    line-height: 30px;
    top: 4px;
    margin-bottom: 14px;
  }
}
.modal-content button.close:hover {
  color: #009035;
}

.modal_add_to_cart.mb-15 {
  margin-bottom: 23px;
}

.modal_description.mb-15 {
  margin-bottom: 20px;
}

.product_navactive.owl-carousel:hover .owl-nav div {
  opacity: 1;
  visibility: visible;
}
.product_navactive.owl-carousel .owl-nav {
  display: block;
}
.product_navactive.owl-carousel .owl-nav div {
  position: absolute;
  background: #f2f2f2;
  border-radius: 3px;
  color: #333;
  height: 32px;
  top: 50%;
  transform: translatey(-50%);
  width: 32px;
  text-align: center;
  line-height: 32px;
  left: -7px;
  font-size: 18px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  opacity: 0;
  visibility: hidden;
}
.product_navactive.owl-carousel .owl-nav div:hover {
  background: #009035;
  color: #ffffff;
}
.product_navactive.owl-carousel .owl-nav div.owl-next {
  right: -7px;
  left: auto;
}

/*modal css end*/
/*  23. newsletter popup css here */
.newletter-popup {
  background: #fff;
  top: 50% !important;
  margin-top: -179px;
  position: fixed !important;
  padding: 50px;
  text-align: center;
  display: none;
}
@media only screen and (max-width: 767px) {
  .newletter-popup {
    padding: 30px 20px;
    width: 95%;
  }
}

#boxes .newletter-title h2 {
  font-size: 30px;
  text-transform: uppercase;
  margin: 0 0 30px;
}
@media only screen and (max-width: 767px) {
  #boxes .newletter-title h2 {
    font-size: 22px;
    margin: 0 0 10px;
  }
}

#boxes .box-content label {
  font-weight: 400;
  font-size: 14px;
}

#boxes .box-content .newletter-label {
  width: 70%;
  margin-bottom: 36px;
}
@media only screen and (max-width: 767px) {
  #boxes .box-content .newletter-label {
    width: 100%;
  }
}

#frm_subscribe form {
  width: 340px;
  margin: 0 auto;
  position: relative;
}
@media only screen and (max-width: 767px) {
  #frm_subscribe form {
    width: 100%;
  }
}
#frm_subscribe form input {
  background: #EBEBEB;
  padding: 0 127px 0 20px;
  font-size: 13px;
  height: 45px;
  border: 0;
  width: 100%;
  color: #747474;
  margin-bottom: 0;
}
@media only screen and (max-width: 767px) {
  #frm_subscribe form input {
    padding: 0 104px 0 20px;
  }
}
#frm_subscribe form a.theme-btn-outlined {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 110px;
  background: #222222;
  cursor: pointer;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  line-height: 45px;
}
#frm_subscribe form a.theme-btn-outlined:hover {
  background: #009035;
}
@media only screen and (max-width: 767px) {
  #frm_subscribe form a.theme-btn-outlined {
    width: 90px;
  }
}

#boxes .box-content .subscribe-bottom {
  margin-top: 20px;
}

#boxes .box-content .subscribe-bottom label {
  margin: 0;
  font-size: 13px;
}

#boxes .box-content .subscribe-bottom #newsletter_popup_dont_show_again {
  display: inline-block;
  margin: 0;
  vertical-align: middle;
}

#boxes #frm_subscribe #notification {
  color: #f00;
}

#boxes #frm_subscribe #notification .success {
  color: #67D7BB;
}

#popup2 {
  position: absolute;
  right: 1px;
  top: 1px;
  text-align: center;
  cursor: pointer;
  font-size: 13px;
  text-transform: capitalize;
  padding: 6px 12px;
  background: #222222;
  font-weight: 600;
  line-height: 17px;
  color: #ffffff;
  display: block;
  transition: 0.3s;
}
#popup2:hover {
  background: #009035;
}

/*newsletter popup css end*/
/* 09. error page css heer   */
.error_page_bg {
  background: #F5F5F9;
  padding: 71px 0 153px;
  margin-top: 30px;
}
@media only screen and (max-width: 767px) {
  .error_page_bg {
    padding: 47px 0 108px;
    margin-top: 25px;
  }
}

.header_error {
  border-bottom: 1px solid #ebebeb;
}

.error_form {
  text-align: center;
}
.error_form h1 {
  font-size: 200px;
  font-weight: 700;
  color: #009035;
  letter-spacing: 10px;
  line-height: 160px;
  margin: 0 0 63px;
}
@media only screen and (max-width: 767px) {
  .error_form h1 {
    font-size: 130px;
    line-height: 120px;
    letter-spacing: 4px;
    margin: 0 0 40px;
  }
}
.error_form h2 {
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 20px;
}
@media only screen and (max-width: 767px) {
  .error_form h2 {
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 14px;
  }
}
.error_form p {
  font-size: 17px;
  font-weight: 400;
  line-height: 26px;
  margin-bottom: 30px;
}
@media only screen and (max-width: 767px) {
  .error_form p {
    font-size: 15px;
    margin-bottom: 22px;
    line-height: 21px;
  }
}
.error_form form {
  width: 450px;
  margin: 0 auto;
  position: relative;
}
@media only screen and (max-width: 767px) {
  .error_form form {
    width: 100%;
  }
}
.error_form form input {
  padding: 0 60px 0 30px;
  background: #f8f8f8;
  border: 1px solid #ddd;
  color: #222222;
  height: 40px;
  width: 100%;
  border-radius: 3px;
}
.error_form form button {
  position: absolute;
  right: 0;
  height: 100%;
  border: none;
  background: no-repeat;
  font-size: 20px;
  cursor: pointer;
  -webkit-transition: .3s;
  transition: .3s;
  top: 0;
  text-transform: uppercase;
  padding: 0 15px;
  font-weight: 600;
}
.error_form form button:hover {
  color: #009035;
}
.error_form a {
  color: #fff;
  display: inline-block;
  background: #009035;
  font-size: 12px;
  font-weight: bold;
  height: 40px;
  line-height: 42px;
  padding: 0 30px;
  text-transform: uppercase;
  margin-top: 35px;
  border-radius: 3px;
}
@media only screen and (max-width: 767px) {
  .error_form a {
    padding: 0 20px;
    margin-top: 25px;
  }
}
.error_form a:hover {
  background: #222222;
}

/*404 page css end*/
/*privacy policy css here*/
.privacy_policy_bg {
  background: #F5F5F9;
  padding: 53px 0 113px;
}
@media only screen and (max-width: 767px) {
  .privacy_policy_bg {
    padding: 60px 0 110px;
  }
}

.privacy_policy_header {
  text-align: center;
  margin-bottom: 47px;
}
@media only screen and (max-width: 767px) {
  .privacy_policy_header {
    margin-bottom: 44px;
  }
}
.privacy_policy_header h1 {
  font-size: 42px;
  line-height: 45px;
  font-weight: 500;
  margin-bottom: 0;
}
@media only screen and (max-width: 767px) {
  .privacy_policy_header h1 {
    font-size: 25px;
    line-height: 25px;
  }
}

.privacy_content {
  margin-bottom: 44px;
}
.privacy_content:last-child {
  margin-bottom: 0;
}
@media only screen and (max-width: 767px) {
  .privacy_content {
    margin-bottom: 46px;
  }
}
.privacy_content h2 {
  font-size: 25px;
  line-height: 33px;
  font-weight: 500;
}
@media only screen and (max-width: 767px) {
  .privacy_content h2 {
    font-size: 18px;
    line-height: 26px;
  }
}
.privacy_content h3 {
  font-size: 21px;
  line-height: 28px;
  font-weight: 500;
  margin-bottom: 10px;
}
@media only screen and (max-width: 767px) {
  .privacy_content h3 {
    font-size: 18px;
    line-height: 24px;
  }
}
.privacy_content p {
  font-size: 16px;
  line-height: 29px;
  margin-bottom: 15px;
}
@media only screen and (max-width: 767px) {
  .privacy_content p {
    font-size: 15px;
    line-height: 28px;
  }
}
.privacy_content p a {
  color: #a43d21;
}
.privacy_content p a:hover {
  color: #009035;
}
.privacy_content.section_1 h2 {
  margin-bottom: 14px;
}
@media only screen and (max-width: 767px) {
  .privacy_content.section_1 h2 {
    margin-bottom: 9px;
  }
}
.privacy_content.section_2 h2 {
  margin-bottom: 20px;
}
@media only screen and (max-width: 767px) {
  .privacy_content.section_2 h2 {
    margin-bottom: 16px;
  }
}
.privacy_content.section_3 h2 {
  margin-bottom: 18px;
}
@media only screen and (max-width: 767px) {
  .privacy_content.section_3 h2 {
    margin-bottom: 12px;
  }
}

/*privacy policy css end*/
/*--
     25. compare css here
-----------------------------------------*/
.compaer-page {
  background: #F5F5F9;
  padding: 60px 0 133px;
}
@media only screen and (max-width: 767px) {
  .compaer-page {
    padding: 60px 0 111px;
  }
}

.compaer-page--inner {
  background: #ffffff;
  padding: 20px;
}

.compare-table .table tbody tr:first-child {
  border-top: 1px solid #eeeeee;
}
.compare-table .table tbody tr td {
  text-align: center;
  border: none;
  padding: 25px 30px;
  vertical-align: middle;
  border-bottom: 1px solid #eeeeee;
  border-left: 1px solid #eeeeee;
}
.compare-table .table tbody tr td:last-child {
  border-right: 1px solid #eeeeee;
}
.compare-table .table tbody tr td.first-column {
  min-width: 180px;
  font-size: 17px;
  font-weight: 500;
  margin: 0;
  line-height: 1;
}
.compare-table .table tbody tr td.product-image-title {
  min-width: 305px;
  vertical-align: bottom;
}
.compare-table .table tbody tr td.product-image-title .image {
  clear: both;
  width: 100%;
  margin-bottom: 40px;
}
.compare-table .table tbody tr td.product-image-title .image img {
  max-width: 100%;
}
.compare-table .table tbody tr td.product-image-title .category {
  clear: both;
  color: #454545;
  float: left;
  font-size: 13px;
  letter-spacing: 0.5px;
  line-height: 15px;
  margin-bottom: 7px;
  margin-top: 15px;
  text-transform: capitalize;
}
.compare-table .table tbody tr td.product-image-title .category:hover {
  color: #009035;
}
.compare-table .table tbody tr td.product-image-title .title {
  float: left;
  clear: both;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 10px;
}
.compare-table .table tbody tr td.product-image-title .title:hover {
  color: #009035;
}
.compare-table .table tbody tr td.pro-desc p {
  text-align: left;
  margin: 0;
  font-weight: 400;
}
.compare-table .table tbody tr td.pro-price {
  font-size: 15px;
  font-weight: 500;
}
.compare-table .table tbody tr td.pro-color {
  font-size: 15px;
  font-weight: 500;
}
.compare-table .table tbody tr td.pro-stock {
  font-size: 15px;
  font-weight: 500;
}
.compare-table .table tbody tr td.pro-addtocart .add-to-cart {
  position: relative;
  background: #009035;
  border-radius: 4px;
  display: inline-block;
  width: 170px;
  padding: 10px 6px;
  transition: all 0.7s;
  color: #ffffff;
}
.compare-table .table tbody tr td.pro-addtocart .add-to-cart:hover {
  background: #222222;
}
.compare-table .table tbody tr td.pro-addtocart .add-to-cart span {
  transition: .3s;
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 21px;
  overflow: hidden;
  display: block;
  text-align: center;
}
.compare-table .table tbody tr td.pro-remove button {
  border: none;
  background-color: transparent;
  padding: 0;
}
.compare-table .table tbody tr td.pro-remove button i {
  font-size: 20px;
}
.compare-table .table tbody tr td.pro-remove button:hover {
  color: #009035;
}
.compare-table .table tbody tr td.pro-ratting a {
  font-size: 14px;
  color: #222222;
}
.compare-table .table tbody tr td.pro-ratting a:hover {
  color: #009035;
}

/* 26. coming soon css here */
.coming_soon_area {
  height: 100vh;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
  background-image: url(../img/bg/coming-soon.jpg);
  position: relative;
  display: flex;
  align-items: center;
}
.coming_soon_area::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: #000;
  opacity: 0.15;
}

.coming_soon_title {
  text-align: center;
  margin-bottom: 40px;
}
@media only screen and (max-width: 767px) {
  .coming_soon_title {
    margin-bottom: 36px;
  }
}
.coming_soon_title h2 {
  font-size: 37px;
  text-transform: capitalize;
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 15px;
}
@media only screen and (max-width: 767px) {
  .coming_soon_title h2 {
    font-size: 22px;
    line-height: 22px;
    margin-bottom: 11px;
  }
}
.coming_soon_title p {
  color: #ffffff;
  font-size: 15px;
  max-width: 730px;
  margin: 0 auto;
  line-height: 24px;
}

.coming_soon_timing {
  text-align: center;
  margin: 57px 0 42px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .coming_soon_timing {
    margin: 50px 0 30px;
  }
}
@media only screen and (max-width: 767px) {
  .coming_soon_timing {
    margin: 34px 0 22px;
  }
}
.coming_soon_timing .single_countdown {
  display: inline-block;
  margin-right: 35px;
}
@media only screen and (max-width: 479px) {
  .coming_soon_timing .single_countdown {
    margin-right: 13px;
  }
}
.coming_soon_timing .single_countdown:last-child {
  margin-right: 0;
}
.coming_soon_timing .countdown_number {
  font-size: 26px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 8px;
  width: 60px;
  height: 40px;
  line-height: 38px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: inherit;
}
@media only screen and (max-width: 479px) {
  .coming_soon_timing .countdown_number {
    width: 50px;
    font-size: 18px;
  }
}
.coming_soon_timing .countdown_title {
  font-size: 13px;
  text-transform: capitalize;
  color: #ffffff;
}

.coming_soon_newsletter {
  text-align: center;
}
.coming_soon_newsletter .subscribe_form {
  margin-top: 0;
}
.coming_soon_newsletter .subscribe_form form {
  margin: 0 auto;
  width: 600px;
  background: inherit;
  border: 1px solid #ebebeb;
  border-radius: 50px;
}
@media only screen and (max-width: 767px) {
  .coming_soon_newsletter .subscribe_form form {
    width: 100%;
  }
}
.coming_soon_newsletter .subscribe_form form input::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #ffffff;
}
.coming_soon_newsletter .subscribe_form form input::-moz-placeholder {
  /* Firefox 19+ */
  color: #ffffff;
}
.coming_soon_newsletter .subscribe_form form input:-ms-input-placeholder {
  /* IE 10+ */
  color: #ffffff;
}
.coming_soon_newsletter .subscribe_form form input:-moz-placeholder {
  /* Firefox 18- */
  color: #ffffff;
}
.coming_soon_newsletter .subscribe_form form input {
  color: #ffffff;
  font-size: 14px;
  padding: 0 120px 0 28px;
  background: inherit;
  height: 48px;
  border: 0;
}
.coming_soon_newsletter .subscribe_form form button {
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
  background: inherit;
  color: #ffffff;
}
.coming_soon_newsletter .subscribe_form form button:hover {
  color: #009035;
}
.coming_soon_newsletter .subscribe_form form button::before {
  content: "";
  background: #ffffff;
  width: 2px;
  position: absolute;
  bottom: 8px;
  top: 8px;
  left: 0;
}
@media only screen and (max-width: 767px) {
  .coming_soon_newsletter .subscribe_form form button {
    font-size: 13px;
  }
}
.coming_soon_newsletter h3 {
  font-size: 16px;
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 15px;
  letter-spacing: 2px;
  text-transform: capitalize;
}
.coming_soon_newsletter .mailchimp-error {
  text-align: center;
  color: #ffffff;
}
.coming_soon_newsletter .mailchimp-success {
  text-align: center;
  color: #ffffff;
}

.coming_soon_logo {
  margin-bottom: 52px;
}
@media only screen and (max-width: 479px) {
  .coming_soon_logo {
    margin-bottom: 35px;
  }
}

.coming_soon_link {
  text-align: center;
}
.coming_soon_link ul li {
  display: inline-block;
  margin-right: 20px;
}
.coming_soon_link ul li:last-child {
  margin-right: 0;
}
.coming_soon_link ul li a {
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  height: 40px;
  line-height: 40px;
  padding: 0 50px;
  display: inline-block;
  background: #009035;
  color: #222222;
  border-radius: 5px;
}
.coming_soon_link ul li a:hover {
  background: #222222;
  color: #ffffff;
}
.text-uppercase{
  text-transform: uppercase;
}
img.avatar.img-thumbnail {
  width: 150px
}
.box-attract{
  box-shadow: hsl(0, 0%, 80%) 0 0 16px;
  border-top: 3px solid #009035;
  border-radius: 10px;
}
.products-outer .product_info_button ul li a{
    border-bottom: 2px solid #fff;
    padding-bottom: 10px;
}
.products-outer .product_info_button ul li a.active {
    color: #009035;
    border-bottom: 2px solid;
    padding-bottom: 10px;
}


.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
  box-shadow: hsl(0, 0%, 80%) 0 0 16px;
}

.btn {
  border: 2px solid #009035;
  color: #009035;
  background-color: white;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
}

.upload-btn-wrapper input[type=file] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
/*# sourceMappingURL=style.css.map */