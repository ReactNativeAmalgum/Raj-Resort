import { useState, React } from "react";
// import pagebanner from "../images/about_bg.jpg";
import $ from "jquery";
import Modal from "react-bootstrap/Modal";
import "../css/Service.css";

import { Link } from "react-router-dom";
// import pool from "../images/pic5.jpg";
import Footer from "../component/Footer";
import EventTapPanel from "./EventTapPanel";
import { imagePath } from "../images/imagePath";
import { MetaTags } from "react-meta-tags";

const eventbg = imagePath.eventbg;
const Services = () => {
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

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);
  return (
    <>
      <MetaTags>
        <title>Resort for Events in Palghar | Raj Resort</title>
        <meta title="Resort for Events in Palghar | Raj Resort" />
        <meta
          name="description"
          content="Resort in Palghar, Best Resort in Kelve, Resort with Rooms in Kelve,  Resort for Events in Palghar, Resort near Kelve Beach"
        />
        <link rel="canonical" href="https://www.raj-resort.in/" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta property="og:title" content="Resort for Events in Palghar | Raj Resort" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.raj-resort.in/" />
        <meta
          property="og:description"
          content="Raj Resort is the Best Resort for Events in Palghar. Our resort offers scenic views, modern amenities, and exceptional services. Book now !!"
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
              backgroundImage: `linear-gradient(to right, rgba(10, 9, 9, 0.5), rgb(0, 0, 0, 0.5)),url(${eventbg})`,
              backgroundPosition: "50% -160px",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="overlay-main bg-black opacity-07" />
            <div className="container">
              <div className="wt-bnr-inr-entry">
                <div className="banner-title-outer">
                  <div className="banner-title-name">
                    <h2 className="">Events</h2>
                  </div>
                </div>
                {/* BREADCRUMB ROW */}
                <div>
                  <ul className="wt-breadcrumb breadcrumb-style-2">
                    <li>
                      <a href="javascript:void(0);">Home</a>
                    </li>
                    <li>Amenities</li>
                  </ul>
                </div>
                {/* BREADCRUMB ROW END */}
              </div>
            </div>
          </div>
        </div>

        <EventTapPanel />
        {/* -----------------------------kids section---------------- */}
        {/* <section className="kids-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="kid-pic">
                <img src={cow} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="kid-text">
                <div className="section-title">
                  <span>Attraction Point</span>
                  <h2>Animals Figurines</h2>
                </div>
                <p>
                At sunder farm,  we have got the collection of super realistic wildlife animal figurines from across the world. Our garden of animal figurines gives you a whole zoo's worth of wild favorites to play with.
                </p>
                <button data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={handleShow} className="primary-btn">
                  Make a Reservation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

        <div className="section-full pt-lg-5 pt-2 ">
          <div className="container">
            {/* TITLE START */}
            <div className="section-head text-left">
              <h2 className=" m-b5" data-title="Facilities">
                We Provide Services
              </h2>
              <div className="wt-separator-outer">
                <div className="wt-separator bg-primary" />
              </div>
            </div>
            {/* TITLE END */}
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <div className="wt-icon-box-wraper center bdr-1 bdr-gray-light bdr-solid m-b30 p-a20 hover-box-effect  v-icon-effect">
                  <div className="icon-md m-b20">
                    <span className="icon-cell">
                      <i className="fa fa-wifi" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className="wt-tilte ">Under CCTV Survellience</h4>
                    <p>We offer a CCTV surveillance for your safety.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="wt-icon-box-wraper center bdr-1 bdr-gray-light bdr-solid m-b30 p-a20 hover-box-effect  v-icon-effect">
                  <div className="icon-md m-b20">
                    <span className="icon-cell">
                      <i className="fa fa-handshake-o" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className="wt-tilte ">Meetings &amp; Special Events</h4>
                    <p>
                      We are the venue of countless corporate seminars
                      conventions and event.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="wt-icon-box-wraper center bdr-1 bdr-gray-light bdr-solid m-b30 p-a20 hover-box-effect  v-icon-effect">
                  <div className="icon-md m-b20">
                    <span className="icon-cell">
                      <i className="fa fa-car" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className="wt-tilte ">Easy Parking</h4>
                    <p>
                      We accommodated special parking area for your convenience{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="wt-icon-box-wraper center bdr-1 bdr-gray-light bdr-solid m-b30 p-a20 hover-box-effect  v-icon-effect">
                  <div className="icon-md m-b20">
                    <span className="icon-cell">
                      <i className="fa fa-thumbs-up" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className="wt-tilte ">Best Price Guarantee</h4>
                    <p>
                      The resort in your budget that you won't find anywhere
                      else.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="wt-icon-box-wraper center bdr-1 bdr-gray-light bdr-solid m-b30 p-a20 hover-box-effect  v-icon-effect">
                  <div className="icon-md m-b20">
                    <span className="icon-cell">
                      <i className="fa fa-file" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className="wt-tilte ">Easy Booking Process</h4>
                    <p>Get Hassle free booking and instant confirmation.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="wt-icon-box-wraper center bdr-1 bdr-gray-light bdr-solid m-b30 p-a20 hover-box-effect  v-icon-effect">
                  <div className="icon-md m-b20">
                    <span className="icon-cell">
                      <i className="fa fa-check" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className="wt-tilte ">Late Check-out on Request</h4>
                    <p>On a special call we consider late checkout.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --------------------book reservation------------ */}
        <section className="callto-section">
          <div className="container">
            <div className="callto-text">
              <h2>Book your stay with us now!</h2>
            </div>
            <button
              // onClick={handleShow}
              className="primary-btn"
            >
              <Link to="/resort-near-kelve-beach">Make a Reservation</Link>
            </button>
          </div>
        </section>
        <Modal
          show={show}
          id="exampleModal"
          backdrop="static"
          keyboard={false}
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          onHide={handleClose}
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
                      onClick={handleClose}
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

export default Services;
