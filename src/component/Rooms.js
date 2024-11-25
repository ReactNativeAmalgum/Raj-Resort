import { useState, React } from "react";
import { FaToiletPaper } from "react-icons/fa";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { FaWifi } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import ImageListItem from "@mui/material/ImageListItem";
import { Link } from "react-router-dom";
import "../css/Rooms.css";
import Footer from "../component/Footer";
import $ from "jquery";
import Modal from "react-bootstrap/Modal";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { imagePath } from "../images/imagePath";
import { MetaTags } from "react-meta-tags";
const roomwithoutboll = imagePath.room1;
const banner = imagePath.bann;
const room1 = imagePath.bann;
const room2 = imagePath.bann;
const room3 = imagePath.bann;
const bollon = imagePath.room2;

// import "swiper/css/navigation";
// import { Navigation } from "swiper";
const Rooms = () => {
  const formSubmit = () => {
    var custName;
    var custEmail;
    var custPhone;
    var custAge;
    var custMessage;

    if ($("#custName").val() !== "") {
      custName = $("#custName").val();
    } else {
    }
    if ($("#custPhone").val() !== "") {
      custPhone = $("#custPhone").val();
    } else {
    }

    if ($("#custEmail").val() !== "") {
      custEmail = $("#custEmail").val();
    } else {
    }

    if ($("#custMessage").val() !== "") {
      custMessage = $("#custMessage").val();
    } else {
    }

    var body =
      '<!DOCTYPE html><html><head><title>Raj Resort</title><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="X-UA-Compatible" content="IE=edge"></head><body style="margin:0!important;padding:0!important;background-color:#eee" bgcolor="#eeeeee"><div style="display:none;font-size:1px;color:#fefefe;line-height:1px;font-family:Open Sans,Helvetica,Arial,sans-serif;max-height:0;max-width:0;opacity:0;overflow:hidden"></div><table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#fff"><tr><td align="center" style="background-color:#eee" bgcolor="#eeeeee"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px"><tr><td align="center" valign="top" style="font-size:0;padding:10px" bgcolor="#e56f35"><div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%"><tr><td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:6px;font-weight:800;line-height:10px" class="mobile-center"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px"><tr><td width="100%" align="center" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:800;line-height:24px;padding:10px"><a href="tel:+91" style="text-decoration:none;color:#fff;font-family:serif;font-size:16px">Leads Generate for Raj Resort</a></td></tr></table></td></tr></table></div></td></tr><tr><td align="center" valign="top" style="font-size:0;padding:15px" bgcolor="#fff"><div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;display:fle;justify-content:center;align-items:center;width:100%"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%"><tr><td align="center" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:36px;font-weight:800;line-height:48px" class="mobile-center"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px"><tr><td width="100%" align="center" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-weight:800"><img style="width:120px;height:120px" src="" alt=""></td></tr></table></td></tr></table></div></td></tr><tr><td align="center" valign="top" style="font-size:0;padding:0" bgcolor="#e56f35"><div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;display:fle;justify-content:center;align-items:center;width:100%"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%"><tr><td width="100%" align="center" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:800;padding:10px 0" class="mobile-center"><h1 style="text-transform:capitalize;font-size:14px;font-weight:500;margin:0;text-align:center;color:#fff">Client Enquiry Details</h1></td></tr></table></div></td></tr><tr><td align="center" height="100%" valign="top" width="100%" style="padding:0 35px 35px 35px;background-color:#fff" bgcolor="#eee"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:660px"><tr><td width="100%" align="center" valign="top" style="font-size:0"><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;text-align:center;width:100%"><table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="max-width:300px"><tr><td width="100%" align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#e56f35">Customer Name:</p><p style="font-size:14px;font-weight:500;color:#111">' +
      custName +
      '</p></td></tr></table></div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"><tr><td width="100%" align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#e56f35">Customer Number:</p><p style="font-size:14px;font-weight:500;color:#111">' +
      custPhone +
      '</p></td></tr></table></div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"><tr><td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#164388">Customer Email:</p><p style="font-size:14px;font-weight:500;color:#111">' +
      custEmail +
      '</p></td></tr></table></div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"><tr><td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#164388">Customer Age:</p><p style="font-size:14px;font-weight:500;color:#111">' +
      custMessage +
      '</p></td></tr></table></div></td></tr></table></td></tr><tr><td width="100%" align="center" bgcolor="#e56f35" style="padding:10px 0"><p style="color:#fff;font-weight:500;font-size:1rem;padding:0;margin:0">© Copyright 2023 Raj Resort</p></td></tr></table></td></tr></table></body></html>';

    $.post(
      "https://skdm.in/server/v1/send_lead_mail.php",
      {
        toEmail: "amansinghthakur354@gmail.com",
        fromEmail: "skdmlead@gmail.com",
        bccMail: "skdmlead@gmail.com",
        mailSubject: "New Lead genration",
        mailBody: body,
        accountName: "Raj Resort",
        // accountLeadSource: "http://sundarfarms.com/",
        accountLeadName: custName,
        accountLeadPhone: custPhone,
        accountLeadEmail: custEmail,
        accountLeadMsgs: custMessage,
      },

      function (dataa, status) {
        console.log("data :" + dataa);
        console.log("name:" + custName);
      }
    );

    alert("Your Form has Submited Our team will contact with You  soon.");

    window.location.reload();

    return false;
  };

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);

  // const handleShow = () => setShow(true);
  return (
    <>
      <MetaTags>
        <title>Resort with Rooms in Kelve | Raj Resort</title>
        <meta title="Resort with Rooms in Kelve | Raj Resort" />
        <meta
          name="description"
          content="Resort in Palghar, Best Resort in Kelve, Resort with Rooms in Kelve,  Resort for Events in Palghar, Resort near Kelve Beach"
        />
        <link rel="canonical" href="https://www.raj-resort.in/" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta property="og:title" content="Resort with Rooms in Kelve | Raj Resort" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.raj-resort.in/" />
        <meta
          property="og:description"
          content="Escape to serenity with our Resort with Rooms in Kelve. Enjoy cozy accommodations, personalized service & unforgettable experiences amidst the beauty ."
        />
        <meta
          property="og:image"
          content="https://kinararesort.in/static/media/logo.146c55d2a549f20e2963.png"
        />
      </MetaTags>
      <div>
        <div class="page-content ">
          <div
            className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
            data-stellar-background-ratio="0.5"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(10, 9, 9, 0.5), rgb(0, 0, 0, 0.5)),url(${banner})`,
              backgroundPositionY: "-198",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="overlay-main bg-black opacity-07" />
            <div className="container">
              <div className="wt-bnr-inr-entry">
                <div className="banner-title-outer">
                  <div className="banner-title-name">
                    <h2 className="">Rooms</h2>
                  </div>
                </div>
                {/* BREADCRUMB ROW */}
                <div>
                  <ul className="wt-breadcrumb breadcrumb-style-2">
                    <li>
                      <a href="javascript:void(0);">Home</a>
                    </li>
                    <li>Rooms</li>
                  </ul>
                </div>
                {/* BREADCRUMB ROW END */}
              </div>
            </div>
          </div>
        </div>

        <section className="room-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6" id="room1">
                <Swiper
                  // navigation={true}
                  breakpoints={{
                    570: {
                      slidesPerView: 1,
                      spaceBetween: 50,
                    },
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 50,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    },
                  }}
                  // modules={[Navigation]}
                  className="mySwiper1"
                >
                  <SwiperSlide>
                    <div
                      className="single-img set-bg"
                      data-setbg="img/rooms/room-3.jpg"
                      style={{ backgroundImage: `url(${roomwithoutboll})` }}
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="col-lg-6">
                <div className="ri-text">
                  <div className="section-title">
                    <div className="section-title">
                      <span>6 a/c room's</span>
                      <h2>Super Deluxe Room's</h2>
                    </div>
                    <p>
                      Resort with Rooms in Kelve, nestled in the serene Palghar,
                      epitomizes luxury and tranquillity. Our super deluxe
                      accommodations redefine indulgence, blending modern
                      amenities with timeless comfort. Admire breathtaking views
                      of lush greenery from your private balcony, while our
                      attentive staff caters to your every need. Rejuvenate at
                      our onsite spa, savour culinary delights at our fine
                      restaurant, or take a refreshing dip in the sparkling
                      pool. Whether you crave relaxation or adventure, Resort
                      with Rooms in Kelve promises an unforgettable retreat
                      designed to surpass your expectations.
                    </p>
                    <div className="ri-features">
                      <div className="ri-info">
                        <i>
                          <PiTelevisionSimpleBold />
                        </i>
                        <p>Smart TV</p>
                      </div>
                      <div className="ri-info">
                        <i>
                          <FaWifi />
                        </i>
                        <p>High Wi-fii</p>
                      </div>
                      <div className="ri-info">
                        <i>
                          <TbAirConditioning />
                        </i>
                        <p>AC</p>
                      </div>
                      <div className="ri-info">
                        <i>
                          <FaToiletPaper />{" "}
                        </i>
                        <p>Toiletry</p>
                      </div>
                    </div>
                    <button
                      // onClick={handleShow}
                      className="primary-btn"
                    >
                      <Link to="/Contact">Make a Reservation</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 order-lg-2" id="room2">
                <Swiper
                  // navigation={true}
                  breakpoints={{
                    570: {
                      slidesPerView: 1,
                      spaceBetween: 50,
                    },
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 50,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    },
                  }}
                  // modules={[Navigation]}
                  className="mySwiper1"
                >
                  <SwiperSlide>
                    <div
                      className="single-img set-bg"
                      data-setbg="img/rooms/room-3.jpg"
                      style={{ backgroundImage: `url(${bollon})` }}
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="ri-text left-side">
                  <div className="section-title">
                    <div className="section-title">
                      <span>2 A/C room</span>
                      <h2>Deluxe Room</h2>
                    </div>
                    <p>
                      Discover unparalleled luxury at the Resort with Rooms in
                      Kelve, situated near the pristine shores of Kelwa Beach in
                      Palghar. Immerse yourself in the perfect harmony of
                      contemporary conveniences and tranquil coastal allure.
                      Relish in the expansive comfort and awe-inspiring vistas,
                      promising an unforgettable retreat by the sea.
                    </p>
                    <div className="ri-features">
                      <div className="ri-info">
                        <i>
                          <PiTelevisionSimpleBold />
                        </i>
                        <p>Smart TV</p>
                      </div>
                      <div className="ri-info">
                        <i>
                          <FaWifi />
                        </i>
                        <p>High Wi-fii</p>
                      </div>
                      <div className="ri-info">
                        <i>
                          <TbAirConditioning />
                        </i>
                        <p>AC</p>
                      </div>
                      {/* <div className="ri-info">
                <i className="fa fa-car" />
                <p>Parking</p>
              </div> */}
                    </div>
                    <button
                      // onClick={handleShow}
                      className="primary-btn"
                    >
                      <Link to="/Contact">Make a Reservation</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row">
      <div className="col-lg-6" id="room1">
      <Swiper
            navigation={true}
            breakpoints={{
              570: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView:1,
                spaceBetween: 30,
              },
            }}
            modules={[Navigation]}
            className="mySwiper1"
          >
            <SwiperSlide>
            <div
                    className="single-img set-bg"
                    data-setbg="img/rooms/room-3.jpg"
                    style={{ backgroundImage: `url(${room3})` }}
                  />
            </SwiperSlide>
            <SwiperSlide>
            <div
                    className="single-img set-bg"
                    data-setbg="img/rooms/room-3.jpg"
                    style={{ backgroundImage: `url(${room4})` }}
                  />
            </SwiperSlide>
           
          </Swiper>
      </div>
      <div className="col-lg-6" id="room2">
        <div className="ri-text">
          <div className="section-title">
            <div className="section-title">
              <span>a memorable holliday</span>
              <h2>Double BedRoom</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas. Donec in sodales dui, a blandit nunc. Pellentesque id
              eros venenatis, sollicitudin neque sodales, vehicula nibh. Nam
              massa odio, porttitor vitae efficitur non, ultricies volutpat
              tellus.
            </p>
            <div className="ri-features">
              <div className="ri-info">
                <i />
                <p>Smart TV</p>
              </div>
              <div className="ri-info">
                <i className="fa fa-wifi" />
                <p>High Wi-fii</p>
              </div>
              <div className="ri-info">
                <i className="fa fa-snowflake-o" />
                <p>AC</p>
              </div>
              // <div className="ri-info">
              //   <i className="fa fa-car" />
              //   <p>Parking</p>
              // </div>
              
            </div>
            <a href="#" className="primary-btn">
              Make a Reservation
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6 order-lg-2">
      <Swiper
            navigation={true}
            breakpoints={{
              570: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView:1,
                spaceBetween: 30,
              },
            }}
            modules={[Navigation]}
            className="mySwiper1"
          >
            <SwiperSlide>
            <div
                    className="single-img set-bg"
                    data-setbg="img/rooms/room-3.jpg"
                    style={{ backgroundImage: `url(${room5})` }}
                  />
            </SwiperSlide>
            <SwiperSlide>
            <div
                    className="single-img set-bg"
                    data-setbg="img/rooms/room-3.jpg"
                    style={{ backgroundImage: `url(${room6})` }}
                  />
            </SwiperSlide>
           
          </Swiper>
      </div>
      <div className="col-lg-6 order-lg-1">
        <div className="ri-text left-side">
          <div className="section-title">
            <div className="section-title">
              <span>a memorable holliday</span>
              <h2> Event Hall</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas. Donec in sodales dui, a blandit nunc. Pellentesque id
              eros venenatis, sollicitudin neque sodales, vehicula nibh. Nam
              massa odio, porttitor vitae efficitur non, ultricies volutpat
              tellus.
            </p>
            <div className="ri-features">
              <div className="ri-info">
                <i />
                <p>Smart TV</p>
              </div>
              <div className="ri-info">
                <i className="fa fa-wifi" />
                <p>High Wi-fii</p>
              </div>
              <div className="ri-info">
                <i className="fa fa-snowflake-o" />
                <p>AC</p>
              </div>
              // <div className="ri-info">
              //   <i className="fa fa-car" />
              //   <p>Parking</p>
              // </div>
              
            </div>
            <a href="#" className="primary-btn">
              Make a Reservation
            </a>
          </div>
        </div>
      </div>
    </div> */}
          </div>
        </section>
        <section className="room-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6" id="room1">
                <Swiper
                  // navigation={true}
                  breakpoints={{
                    570: {
                      slidesPerView: 1,
                      spaceBetween: 50,
                    },
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 50,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    },
                  }}
                  // modules={[Navigation]}
                  className="mySwiper1"
                >
                  <SwiperSlide>
                    <div
                      className="single-img set-bg"
                      data-setbg="img/rooms/room-3.jpg"
                      style={{ backgroundImage: `url(${roomwithoutboll})` }}
                    />
                  </SwiperSlide>
                  {/* <SwiperSlide>
            <div
                    className="single-img set-bg"
                    data-setbg="img/rooms/room-3.jpg"
                    style={{ backgroundImage: `url(${"https://www.raj-resort.in/images/gallery/resort/12.jpg"})` }}
                  />
            </SwiperSlide> */}
                </Swiper>
              </div>
              <div className="col-lg-6">
                <div className="ri-text">
                  <div className="section-title">
                    <div className="section-title">
                      <span>2 a/c rooms</span>
                      <h2>Standard Room's</h2>
                    </div>
                    <p>
                      Resort with Rooms in Kelve, situated close to Kelwa Beach,
                      provides a tranquil retreat in Palghar. The standard
                      accommodation promises a serene ambience, boasting
                      contemporary amenities and elegant furnishings. Visitors
                      can indulge in a peaceful atmosphere while having
                      convenient beach access, making it the perfect option for
                      a serene escape.
                    </p>
                    <div className="ri-features">
                      <div className="ri-info">
                        <i>
                          <PiTelevisionSimpleBold />{" "}
                        </i>
                        <p>Smart TV</p>
                      </div>
                      <div className="ri-info">
                        <i>
                          <FaWifi />
                        </i>
                        <p>High Wi-fii</p>
                      </div>
                      <div className="ri-info">
                        <i>
                          <TbAirConditioning />
                        </i>
                        <p>AC</p>
                      </div>
                      {/* <div className="ri-info">
                <i className="fa fa-car" />
                <p>Parking</p>
              </div> */}
                    </div>
                    <button
                      // onClick={handleShow}
                      className="primary-btn"
                    >
                      <Link to="/Contact">Make a Reservation</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 order-lg-2" id="room2">
                <Swiper
                  // navigation={true}
                  breakpoints={{
                    570: {
                      slidesPerView: 1,
                      spaceBetween: 50,
                    },
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 50,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    },
                  }}
                  // modules={[Navigation]}
                  className="mySwiper1"
                >
                  <SwiperSlide>
                    <div
                      className="single-img set-bg"
                      data-setbg="img/rooms/room-3.jpg"
                      style={{ backgroundImage: `url(${roomwithoutboll})` }}
                    />
                  </SwiperSlide>
                  {/* <SwiperSlide>
            <div
                    className="single-img set-bg"
                    data-setbg="img/rooms/room-3.jpg"
                    style={{ backgroundImage: `url(${"https://www.raj-resort.in/images/gallery/resort/12.jpg"})` }}
                  />
            </SwiperSlide> */}
                </Swiper>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="ri-text left-side">
                  <div className="section-title">
                    <div className="section-title">
                      <span>2 A/C room (8 to 10 Guest)</span>
                      <h2>Family Room's</h2>
                    </div>
                    <p>
                      Discover the epitome of comfort and space at Resort with
                      Rooms in Kelve. Specifically designed for families seeking
                      relaxation, our spacious family rooms offer modern
                      amenities and cosy decor, ensuring a serene retreat. With
                      the capacity to accommodate over 10 guests,
                    </p>
                    <p>
                      each room provides ample space and a tranquil view of the
                      surrounding landscape, perfect for unwinding and creating
                      cherished memories with your loved ones.{" "}
                    </p>
                    <div className="ri-features">
                      <div className="ri-info">
                        <i>
                          <PiTelevisionSimpleBold />
                        </i>
                        <p>Smart TV</p>
                      </div>
                      <div className="ri-info">
                        <i>
                          <FaWifi />
                        </i>
                        <p>High Wi-fii</p>
                      </div>
                      <div className="ri-info">
                        <i>
                          <TbAirConditioning />
                        </i>
                        <p>AC</p>
                      </div>
                      {/* <div className="ri-info">
                <i className="fa fa-car" />
                <p>Parking</p>
              </div> */}
                    </div>
                    <button
                      // onClick={handleShow}
                      className="primary-btn"
                    >
                      <Link to="/Contact">Make a Reservation</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Modal
          // show={show}
          id="exampleModal"
          backdrop="static"
          keyboard={false}
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          // onHide={handleClose}
        >
          <Modal.Body>
            <div className="partnerProgramForm">
              <div className="formTitleSection">
                <div className="modal-content">
                  <div className="modal-header ml-5">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Enquiry Now
                    </h5>
                    <div
                      className="closeProgram closeProgram1"
                      // onClick={handleClose}
                    >
                      {" "}
                      <i className="fa fa-times" />{" "}
                    </div>
                  </div>
                  <div className="modal-body">
                    <div className="col-lg-12">
                      <form
                        action=""
                        // method="post"
                        // role="form"
                        // className="php-email-form"
                      >
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <input
                              type="text"
                              name="name"
                              className="form-control input1"
                              id="custName"
                              placeholder="Your Name"
                              required=""
                            />
                          </div>
                          <div className="col-md-6 form-group mt-3 mt-md-0">
                            <input
                              type="number"
                              className="form-control input1"
                              name="phone"
                              id="custPhone"
                              placeholder="Your Phone No"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="form-group mt-3">
                          <input
                            type="email"
                            className="form-control input1"
                            name="email"
                            id="custEmail"
                            placeholder="Your Email"
                            required=""
                          />
                        </div>
                        <div className="form-group mt-3">
                          <textarea
                            className="form-control input1"
                            name="message"
                            id="custMessage"
                            rows={6}
                            placeholder="Message"
                            required=""
                            defaultValue={""}
                          />
                        </div>
                        {/* <div className="my-3">
          <div className="loading">Loading</div>
          <div className="error-message" />
          <div className="sent-message">
            Your message has been sent. Thank you!
          </div>
        </div> */}
                        <div className="text-center submitTarget">
                          <button type="submit" onClick={formSubmit}>
                            Send Message
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <Footer />
      </div>
    </>
  );
};

export default Rooms;
