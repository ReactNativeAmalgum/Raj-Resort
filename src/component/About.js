import { useState, React } from "react";
import $ from "jquery";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import "../css/About.css";
import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Footer from "../component/Footer";
import Attraction from "./Attraction";
import { imagePath } from "../images/imagePath";
import { MetaTags } from "react-meta-tags";

const cl2 = imagePath.cl2;
const cl3 = imagePath.cl3;
const cl4 = imagePath.cl4;
const room1 = imagePath.room1;
const room2 = imagePath.room2;
const room3 = imagePath.room3;
const room4 = imagePath.room4;
const room5 = imagePath.room5;
const room6 = imagePath.room6;
const pool1 = imagePath.pool1;
const pool2 = imagePath.pool2;
const pool3 = imagePath.pool3;
const pool4 = imagePath.pool4;
const pool5 = imagePath.pool5;
const wed = imagePath.wed;
const eve1 = imagePath.eventOne;
const eve2 = imagePath.eventOnee;

const eve3 = imagePath.eventOneee;

const eve4 = imagePath.eventOneeee;
const eve5 = imagePath.eventOne;
const bday = imagePath.bday;
const pagebanner = imagePath.pagebanner;
const bann = imagePath.bann;

const About = () => {
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
      '<!DOCTYPE html><html><head><title>Raj</title><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="X-UA-Compatible" content="IE=edge"></head><body style="margin:0!important;padding:0!important;background-color:#eee" bgcolor="#eeeeee"><div style="display:none;font-size:1px;color:#fefefe;line-height:1px;font-family:Open Sans,Helvetica,Arial,sans-serif;max-height:0;max-width:0;opacity:0;overflow:hidden"></div><table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#fff"><tr><td align="center" style="background-color:#eee" bgcolor="#eeeeee"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px"><tr><td align="center" valign="top" style="font-size:0;padding:10px" bgcolor="#e56f35"><div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%"><tr><td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:6px;font-weight:800;line-height:10px" class="mobile-center"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px"><tr><td width="100%" align="center" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:800;line-height:24px;padding:10px"><a href="tel:+91" style="text-decoration:none;color:#fff;font-family:serif;font-size:16px">Leads Generate for Raj</a></td></tr></table></td></tr></table></div></td></tr><tr><td align="center" valign="top" style="font-size:0;padding:15px" bgcolor="#fff"><div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;display:fle;justify-content:center;align-items:center;width:100%"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%"><tr><td align="center" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:36px;font-weight:800;line-height:48px" class="mobile-center"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px"><tr><td width="100%" align="center" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-weight:800"><img style="width:120px;height:120px" src="" alt=""></td></tr></table></td></tr></table></div></td></tr><tr><td align="center" valign="top" style="font-size:0;padding:0" bgcolor="#e56f35"><div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;display:fle;justify-content:center;align-items:center;width:100%"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%"><tr><td width="100%" align="center" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:800;padding:10px 0" class="mobile-center"><h1 style="text-transform:capitalize;font-size:14px;font-weight:500;margin:0;text-align:center;color:#fff">Client Enquiry Details</h1></td></tr></table></div></td></tr><tr><td align="center" height="100%" valign="top" width="100%" style="padding:0 35px 35px 35px;background-color:#fff" bgcolor="#eee"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:660px"><tr><td width="100%" align="center" valign="top" style="font-size:0"><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;text-align:center;width:100%"><table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="max-width:300px"><tr><td width="100%" align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#e56f35">Customer Name:</p><p style="font-size:14px;font-weight:500;color:#111">' +
      custName +
      '</p></td></tr></table></div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"><tr><td width="100%" align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#e56f35">Customer Number:</p><p style="font-size:14px;font-weight:500;color:#111">' +
      custPhone +
      '</p></td></tr></table></div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"><tr><td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#164388">Customer Email:</p><p style="font-size:14px;font-weight:500;color:#111">' +
      custEmail +
      '</p></td></tr></table></div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"><tr><td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#164388">Customer Age:</p><p style="font-size:14px;font-weight:500;color:#111">' +
      custMessage +
      '</p></td></tr></table></div></td></tr></table></td></tr><tr><td width="100%" align="center" bgcolor="#e56f35" style="padding:10px 0"><p style="color:#fff;font-weight:500;font-size:1rem;padding:0;margin:0">© Copyright 2023 Raj</p></td></tr></table></td></tr></table></body></html>';

    $.post(
      "https://skdm.in/server/v1/send_lead_mail.php",
      {
        toEmail: "farmhousesundar@gmail.com",
        fromEmail: "skdmlead@gmail.com",
        bccMail: "skdmlead@gmail.com",
        mailSubject: "New Lead genration",
        mailBody: body,
        accountName: "Raj",
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
      <MetaTags>
        <title>Best Resort in Kelve | Raj Resort</title>
        <meta title="Best Resort in Kelve | Raj Resort" />
        <meta
          name="description"
          content="Resort in Palghar, Best Resort in Kelve, Resort with Rooms in Kelve,  Resort for Events in Palghar, Resort near Kelve Beach"
        />
        <link rel="canonical" href="https://www.raj-resort.in/" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta property="og:title" content="Best Resort in Kelve | Raj Resort" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.raj-resort.in/" />
        <meta
          property="og:description"
          content="Indulge in luxury and relaxation at the Best Resort in Kelve. Experience unmatched comfort, stunning views, and top-notch amenities for your perfect vacation."
        />
        <meta
          property="og:image"
          content="https://kinararesort.in/static/media/logo.146c55d2a549f20e2963.png"
        />
      </MetaTags>
      <div class="page-content ">
        <div
          className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
          data-stellar-background-ratio="0.5"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(10, 9, 9, 0.5), rgb(0, 0, 0, 0.5)),url(${bann})`,
            backgroundPosition: "50% -329px",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="overlay-main bg-black opacity-07" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="">About Us</h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <a href="javascript:void(0);">Home</a>
                  </li>
                  <li>About Us</li>
                </ul>
              </div>
              {/* BREADCRUMB ROW END */}
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------about farms--------------- */}
      <section className="about-us spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-left">
                <div className="section-title">
                  <span>a memorable holliday</span>
                  <h1 className="specialh1">
                  Best Resort in Kelve

                  </h1>
                  <h2>
                    Since 2004 <br />
                    for Service
                  </h2>
                </div>
                <p className="second-text">
                  Established in 2004, Raj Resort has firmly established itself
                  as the best resort in Kelva, offering a serene haven nestled
                  in the heart of Palghar. Our journey began with a simple
                  vision - to provide a sanctuary where weary souls could escape
                  the hustle and bustle of city life and reconnect with nature's
                  tranquility. Situated amidst lush greenery and picturesque
                  landscapes, Raj Resort has flourished into the undisputed best
                  resort in Kelva, cherished by visitors seeking a truly
                  remarkable retreat.
                </p>
                <p>
                  What sets Raj Resort apart as the best resort in Kelva is not
                  just our idyllic location, but our unwavering commitment to
                  creating unforgettable memories for each visitor who walks
                  through our doors. Our roots run deep in the community.
                  Whether you're seeking a peaceful getaway, a romantic escape,
                  or a fun-filled family vacation.
                </p>
                <button className="primary-btn">
                  <Link to="/resort-near-kelve-beach">Make a Reservation</Link>
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-md-7">
                  <div className="about-img">
                    <img src={eve1} alt="Best Resort in Kelve" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-5">
                  <div className="about-img second-img">
                    <img src={eve2} alt="Best Resort in Kelve" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5 col-md-5">
                  <div className="about-img third-img">
                    <img src={eve3} alt="Best Resort in Kelve" />
                  </div>
                </div>
                <div className="col-lg-7 col-md-7">
                  <div className="about-img">
                    <img src={eve4} alt="Best Resort in Kelve" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ----------------------------achievements----------------------- */}
      <section
        className="milestone-counter spad set-bg"
        data-setbg="img/about/milestone-bg.jpg"
        style={{
          backgroundImage: `url(${"https://imgs.search.brave.com/Uf390mcQ5O_Yg3fhaxem2T0DLCQJJT2mQDqap2NnCk4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTEudGhyaWxsb3Bo/aWxpYS5jb20vZmls/ZXN0b3JlLzZncDF1/enExMXowdmg1ZXpx/c3N0eG1tMWVsazhf/c2F2YW5hLWxha2Ut/cmVzb3J0LXN1cnZl/eS1uby0xNTMtYXQt/cG9zdC1kYWhlZ2Fv/bi1uYXNoaWstaG90/ZWxzLW94Zm4yLndl/YnA_dz03NTMmaD00/NTAmZHBy"})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="mc-item">
                <div className="mc-num">
                  <span className="counter">8</span>
                </div>
                <div className="mc-text">
                  <h3>AC Deluxe Rooms</h3>
                  <p>with amenities</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mc-item">
                <div className="mc-num">
                  <span className="counter">35</span>
                  <strong>K</strong>
                </div>
                <div className="mc-text">
                  <h3>Happy Clients</h3>
                  <p>all year long</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mc-item">
                <div className="mc-num">
                  <span className="counter">365</span>
                </div>
                <div className="mc-text">
                  <h3>Days/ Year</h3>
                  <p>Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------our story-------------------------- */}
      <div className="section-full bg-gray p-tb90 ">
        <div className="container">
          {/* TITLE START */}
          <div className="section-head text-center"></div>
          {/* TITLE END */}
          <Attraction />
        </div>
      </div>
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
  );
};

export default About;
