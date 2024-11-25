import { useState, React } from "react";
import "../css/Home.css";
import $ from "jquery";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { PiSwimmingPoolBold } from "react-icons/pi";
import Modal from "react-bootstrap/Modal";
// import bannerbg from "../images/hero-bg.jpg";
import logo from "../images/raj-logo-removebg-preview.c85a7fee59978f7e34ac.png";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
// import OwlCarousel from 'react-owl-carousel';
// import "owl.carousel/dist/assets/owl.carousel.css";
import Attraction from "./Attraction";
import Bar from "./Bar";
import { FaPlay } from "react-icons/fa";
import { imagePath } from "../images/imagePath";
import { Bounce, Fade, Slide, Zoom } from "react-awesome-reveal";
import { MetaTags } from "react-meta-tags";
import Navbar from "./Navbar";

// import "owl.carousel/dist/assets/owl.theme.default.css";
const images24 = imagePath.images24;
const images25 = imagePath.images25;
const eventOne = imagePath.eventOne;
const eventOnee = imagePath.eventOnee;
const eventOneee = imagePath.eventOneee;
const eventOneeee = imagePath.eventOneeee;

const gannn = imagePath.gannn;
const resto = imagePath.resto;
const bg_dot = imagePath.bg_dot;
const aboutbg = imagePath.bg_dot;
const Home = () => {
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
        toEmail: "farmhousesundar@gmail.com",
        fromEmail: "skdmlead@gmail.com",
        bccMail: "skdmlead@gmail.com",
        mailSubject: "New Lead genration",
        mailBody: body,
        accountName: "Raj Resort",
        accountLeadSource: "http://sundarfarms.com/",
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
    <div>
      {/* <!-- Seo Work --> */}
      {/* --------------------google site verification------------------------- */}
      <MetaTags>
        <title>Resort in Palghar | Raj Resort</title>
        <meta title="Resort in Palghar | Raj Resort" />
        <meta
          name="description"
          content="Resort in Palghar, Best Resort in Kelve, Resort with Rooms in Kelve,  Resort for Events in Palghar, Resort near Kelve Beach"
        />
        <link rel="canonical" href="https://www.raj-resort.in/" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta property="og:title" content="Resort in Palghar | Raj Resort" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.raj-resort.in/" />
        <meta
          property="og:description"
          content="Experience unparalleled luxury and serenity at our Resort in Palghar. Nestled amidst lush greenery, our exquisite accommodations offer gourmet dining options."
        />
        <meta
          property="og:image"
          content="https://kinararesort.in/static/media/logo.146c55d2a549f20e2963.png"
        />
      </MetaTags>

      <section
        className="hero-area set-bg"
        data-setbg="img/hero-bg.jpg"
        // style={{ backgroundImage: `url(${bannerbg})` }}
      >
        <div className="container">
          {/* <div className="row">
            <div className="col-lg-12 text-center"> */}

          <div className="hero-text">
            <Slide bottom>
              <div className="logo">
                <Link to="/">{/* <img src={logo} alt="Raj-logo" /> */}</Link>
              </div>
            </Slide>
            <Bounce>
              <h1>Resort in Palghar</h1>
            </Bounce>
          </div>
        </div>
        {/* </div>
        </div> */}
      </section>

      {/* -----------------------about farm------------------- */}
      <section className="intro-section spad">
        <div className="container">
          <div className="row intro-text">
            <div className="col-lg-6">
              <div className="intro-left">
                <div className="section-title">
                  <span>a memorable holliday</span>
                  <Zoom>
                    <h2>
                      A great stay in a<br /> lovely Farm House.
                    </h2>
                  </Zoom>
                </div>
                <p>
                  Experience the epitome of luxury and serenity at Raj Resort in
                  Palghar, where sophistication seamlessly intertwines with
                  nature's beauty. Tucked away in picturesque landscapes, our
                  esteemed resort stands as a beacon of excellence, offering
                  unparalleled hospitality, world-class amenities, and an array
                  of leisure activities for guests of all ages. Indulge in the
                  ultimate retreat, where every aspect of your stay is
                  meticulously curated to ensure absolute comfort and
                  relaxation. From elegantly appointed rooms and suites to
                  captivating views of lush gardens and nearby pristine beaches,
                  Resort in Palghar embodies the essence of tranquility.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="intro-right">
                <p>
                  Discover the allure of the Resort in Palghar, acclaimed as the
                  premier destination for discerning travelers seeking a blend
                  of luxury and natural splendor. With its unmatched charm and
                  unparalleled offerings, our resort sets the standard for
                  excellence in hospitality. Join us and embark on a journey
                  filled with cherished memories and unparalleled experiences.
                </p>
                <button className="primary-btn">
                  <Link to="/Contact">Make a Reservation</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------facilities---------------------- */}

      <section className="facilities-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="facilities-item set-bg"
                data-setbg="img/faci-1.jpg"
                style={{ backgroundImage: `url(${gannn})` }}
              >
                <div className="fi-title">
                  <h2>AC Deluxe Rooms</h2>
                  <p>Double bed</p> <p>8 rooms</p>
                </div>
                <div className="fi-features">
                  <div className="fi-info">
                    <i className="fa fa-television" />
                    <p>Smart TV</p>
                  </div>
                  <div className="fi-info">
                    <i className="fa fa-wifi" />
                    <p>High Wi-fii</p>
                  </div>
                  <div className="fi-info">
                    <i className="fa fa-snowflake-o" />
                    <p>AC</p>
                  </div>
                  <div className="fi-info">
                    <i className="fa fa-car" />
                    <p>Parking</p>
                  </div>
                  <div className="fi-info">
                    <i className="fa fa-bath" />
                    <p>Pool</p>
                  </div>
                </div>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  // onClick={handleShow}
                  className="primary-btn"
                >
                  <Link to="/Contact">Make a Reservation</Link>
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="facilities-item set-bg fi-right  external"
                data-setbg="img/faci-2.jpg"
                // style={{ backgroundImage: `url(${"https://www.raj-resort.in/images/gallery/resort/9.jpg"})` }}
              >
                <div className="fi-title">
                  <h2>Garden</h2>
                  <p>For all our guests</p>
                </div>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  // onClick={handleShow}
                  className="primary-btn"
                >
                  <Link to="/Contact">Make a Reservation</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Bar />
      <section className="abut-farms spad">
        <div className="container">
          {/* <div className="section-content"> */}
          <div className="row">
            <div className="col-lg-6 col-12">
              {/* TITLE START */}

              <div className="row">
                <div className="section-head text-left">
                  <h2 className=" m-b5" data-title="About">
                    Our Restaurant
                  </h2>
                  <div className="wt-separator-outer">
                    <div className="wt-separator bg-primary" />
                  </div>
                </div>
                {/* TITLE END */}
                <h4 className=" m-t0">
                  Nestled in Palghar, the Raj Resort boasts a restaurant
                  offering a delectable culinary journey against the backdrop of
                  Kelwa Beach, emphasized for its proximity thrice. Guests can
                  relish freshly prepared seafood amidst the serene coastal
                  setting, enjoying locally sourced ingredients in dishes served
                  in a blend of rustic charm and modern comfort. Whether it's a
                  leisurely breakfast or a romantic dinner, the restaurant
                  promises an unforgettable dining experience, perfectly
                  complementing the natural beauty of the Resort in Palghar.
                </h4>
                <p>
                  {/* Our full-service facility offers luxury amenities, swimming
                  pool and an on-site restaurant and the highest level of
                  personalized services. To add convenience to your stay without
                  missing special occasion and business meets we can plan a
                  successful party or a business conference with our unmatched
                  services and hospitality in our event hall. */}
                </p>
                <div className="col-lg-6 col-md-6 col-12">
                  <div
                    className="wt-icon-box-wraper left bg-gray p-a20 hover-box-effect v-icon-effect  equal-col"
                    style={{ height: 179 }}
                  >
                    <div className="icon-md m-b20">
                      <span className="icon-cell">
                        <i className="fa fa-cutlery" />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4 className="wt-tilte">Restaurants</h4>
                      <p>Both Veg & Non-veg food available.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div
                    className="wt-icon-box-wraper left bg-gray p-a20 hover-box-effect v-icon-effect  equal-col"
                    style={{ height: 179 }}
                  >
                    <div className="icon-md m-b20">
                      <span className="icon-cell">
                        <i className="">
                          <PiSwimmingPoolBold />
                        </i>
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4 className="wt-tilte ">Swimming Pool</h4>
                      <p>Swimming Pool with rain dance.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div
                    className="wt-icon-box-wraper left bg-gray p-a20 hover-box-effect v-icon-effect  equal-col"
                    style={{ height: 179 }}
                  >
                    <div className="icon-md m-b20">
                      <span className="icon-cell">
                        <i className="fa fa-tree" />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4 className="wt-tilte ">Garden</h4>
                      <p>Games for children and adults.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div
                    className="wt-icon-box-wraper left bg-gray p-a20 hover-box-effect v-icon-effect  equal-col"
                    style={{ height: 179 }}
                  >
                    <div className="icon-md m-b20">
                      <span className="icon-cell">
                        <i className="fa fa-gamepad" />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4 className="wt-tilte ">Game Zone</h4>
                      <p>Outdoor & Indoor games.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <a
            href="javascript:void(0);"
            className="btn-half site-button button-lg m-b30"
          >
            <span>More About</span>
            <em />
          </a> */}
            </div>
            <div className="col-lg-6 col-12">
              <div
                className="home-about-block-outer bg-repeat bg-white"
                style={{ backgroundImage: `url(${aboutbg})` }}
              >
                <div className="home-about-block-inner">
                  <div className="item">
                    <div className="home-about-slider-pic">
                      <img src={resto} alt="Resort in Palghar" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </section>

      {/* -------------------------------video section------------------- */}
      <div className="video-section">
        <div
          className="video-bg set-bg"
          data-setbg="img/video-bg.jpg"
          style={{ backgroundImage: `url(${images24})` }}
        />
        <div className="container">
          <div
            className="video-text set-bg"
            data-setbg="img/video-inside-bg.jpg"
            style={{ backgroundImage: `url(${images25})` }}
          >
            <a
              href="https://youtu.be/Pyi9R7d2IVI"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="pop-up"
            >
              {/* <i className="fa fa-play" /> */}
              <FaPlay className="fa fa-play" />
            </a>
          </div>
        </div>
      </div>

      {/* --------------------------------facilities-------------- */}
      <section className="homepage-about about-us spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-text">
                <div className="section-head text-left">
                  <h2 className=" m-b5" data-title="Love">
                    Events
                  </h2>
                  <div className="wt-separator-outer">
                    <div className="wt-separator bg-primary" />
                  </div>
                </div>
                <p>
                  Experience unforgettable celebrations at Raj Resort in
                  Palghar. From weddings to birthdays, our versatile venue
                  caters to every special occasion. With lush gardens, elegant
                  banquet halls, and personalized service, Raj Resort is the
                  perfect choice for your next event in Palghar.
                </p>
                <p>
                  At Raj Resort in Palghar, we are dedicated to making every
                  event a spectacular success. Contact us today to plan your
                  next celebration at the premier resort for events in Palghar,
                  and let us help you create memories that will last a lifetime.
                  Celebrate your special moments with us, the top resort for
                  events in Palghar.
                </p>
                {/* <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa
                </p> */}
                <button
                  // onClick={handleShow}
                  className="primary-btn"
                >
                  <Link to="/Contact">Make a Reservation</Link>
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-7 col-md-7">
                  <div className="about-img">
                    <img src={eventOneeee} alt="Resort in Palghar" />
                  </div>
                </div>
                <div className="col-lg-5 col-md-5">
                  <div
                    style={{ height: "85%" }}
                    className="about-img second-img"
                  >
                    <img src={eventOneee} alt="Resort in Palghar" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5 col-md-5">
                  <div className="about-img third-img">
                    <img src={eventOnee} alt="Resort in Palghar" />
                  </div>
                </div>
                <div className="col-lg-7 col-md-7">
                  <div className="about-img">
                    <img src={eventOne} alt="Resort in Palghar" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Attraction />
      {/* ------------------------------------testimonial----------------- */}
      <section className="testimonial-section spad">
        <div className="container">
          <div className="row">
            <div className="section-head text-left">
              <h2 className=" m-b5" data-title="Review">
                Testimonial
              </h2>
              <div className="wt-separator-outer">
                <div className="wt-separator bg-primary" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}

                // onSlideChange={() => console.log("slide change")}
                // onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="testimonial-item">
                    <h4>Family</h4>
                    <div className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <p>
                      The place was good, clean and the service was up to mark.
                      I went with my family for a weekend outing..the food for
                      lunch dinner and even next day breakfast was having
                      different menus which my family enjoyed. Keep up the good
                      work Raj resort 👍👍❤️
                    </p>
                    <div className="ti-author">
                      <div className="author-text">
                        <h6>Prerna Sakpal</h6>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial-item">
                    <h4>Holiday ❘ Family</h4>
                    <div className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <p>
                      Good resort with warm hospitality and service, tasty food,
                      clean rooms. Visited 3 days back, Had a good experience.
                      Perfect place if one.wants to spend relaxed, silent and
                      peaceful holida
                    </p>
                    <div className="ti-author">
                      <div className="author-text">
                        <h6>Anushree Mhatre</h6>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial-item">
                    <h4>Holiday</h4>
                    <div className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <p>
                      We had gone there with our group of 26 ppl. The food &
                      amenities were great. The room were of decent size. The
                      owner was very hospitable & kind.
                    </p>
                    <div className="ti-author">
                      <div className="author-text">
                        <h6>Manish Shahanim</h6>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="testimonial-item">
                    {/* <div className="ti-time">02 / 02 / 2019</div> */}
                    <h4>The dinner was really very awesome </h4>
                    <div className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <p>
                      The location of the resort is best, just 2 kms (15 Mins)
                      walk from kelva beach. rooms were spacious and clean, the
                      is an indoor pools where we enjoyed a lot, spent most of
                      the evening on beach, stayed 2 nights here, and the
                      accommodation was good. the seafood was awesom
                    </p>
                    <div className="ti-author">
                      <div className="author-text">
                        <h6>Ajinkya T</h6>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial-item">
                    <h4>They have huge lawn with village like decoration</h4>
                    <div className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <p>
                      The place seems very decent for your family to take along.
                      Safe environment...stags are generally discouraged to
                      ensure unruly incidences don't happen. The owner, Rohit is
                      proactive. Can definitely improve upon the basic amenities
                      in the rooms.
                    </p>
                    <div className="ti-author">
                      <div className="author-text">
                        <h6>jeet sawant</h6>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial-item">
                    <h4> Nice and clean resort</h4>
                    <div className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <p>
                      Great place to go for short break. Good food, nice
                      ambience. This place also has pool so it's fun with family
                      and friends. Also beach is just 5 minutes away. I feel
                      it's quite fair value for money.
                    </p>
                    <div className="ti-author">
                      {/* <div className="author-pic">
                        <img src="img/author-1.png" alt="" />
                      </div> */}
                      <div className="author-text">
                        <h6>Prathamesh singh</h6>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <Modal
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
                  <div className="closeProgram closeProgram1">
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
  );
};

export default Home;
