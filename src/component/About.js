// import { useState, React } from "react";
// import $ from 'jquery';
// import Modal from "react-bootstrap/Modal";
// import pagebanner from "../images/p2.jpg";
// import { Link } from "react-router-dom";
// import bann from "../images/Attraction/about-imggg.jpg"
// import eve1 from "../images/Event/lord-ganesha.avif"
// import eve2 from "../images/Event/840f988e-9ac9-4a9c-8322-83b663e71825 (1).avif"
// import eve3 from "../images/Event/lord-ganesha.avif"
// import eve4 from "../images/Event/7bc6009c-bcfc-4663-879a-f24d5fc6afeb.avif"
// import eve5 from "../images/Event/840f988e-9ac9-4a9c-8322-83b663e71825 (1).avif"
// import { Navigation } from 'swiper/modules';

// import cl2 from "../images/editpics/23.jpg";
// import cl3 from "../images/editpics/24.jpg";
// import cl4 from "../images/editpics/25.jpg"
// import mile from "../images/milestone-bg.jpg";

// import room1 from "../images/gallery/deluxe-dormitory.jpg";
// import room2 from "../images/gallery/deluxe-room.jpg";
// import room3 from "../images/editpics/27.jpg";
// import room4 from "../images/editpics/28.jpg";
// import room5 from "../images/gallery/double-bed-room.jpg";
// import room6 from "../images/gallery/single-bedroom.jpg";
// import pool1 from "../images/editpics/19.jpg";
// import pool2 from "../images/editpics/20.jpg";
// import pool3 from "../images/editpics/29.jpg";
// import pool4 from "../images/editpics/30.jpg";
// import pool5 from "../images/editpics/32.jpg";
// import restro from "../images/gallery/reataurant.jpg";
// import wed from "../images/gallery/wedding.jpg";
// import bday from "../images/gallery/birthday.jpg";
// import "../css/About.css";
// import  { useRef } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import Footer from "../component/Footer";
// import Attraction from "./Attraction";
// const About = () => {
//   const formSubmit = () => {
//     var custName;
//     var custEmail;
//     var custPhone;
//     var custAge;
//     var custMessage;

//     if ($("#custName").val() !== "") {
//       custName = $("#custName").val();
//     } else {
//     }
//     if ($("#custPhone").val() !== "") {
//       custPhone = $("#custPhone").val();
//     } else {
//     }
   
//     if ($("#custEmail").val() !== "") {
//       custEmail = $("#custEmail").val();
//     } else {
//     }

//     if ($("#custMessage").val() !== "") {
//       custMessage = $("#custMessage").val();
//     } else {
//     }
    
//     var body =
//       '<!DOCTYPE html><html><head><title>Raj</title><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="X-UA-Compatible" content="IE=edge"></head><body style="margin:0!important;padding:0!important;background-color:#eee" bgcolor="#eeeeee"><div style="display:none;font-size:1px;color:#fefefe;line-height:1px;font-family:Open Sans,Helvetica,Arial,sans-serif;max-height:0;max-width:0;opacity:0;overflow:hidden"></div><table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#fff"><tr><td align="center" style="background-color:#eee" bgcolor="#eeeeee"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px"><tr><td align="center" valign="top" style="font-size:0;padding:10px" bgcolor="#e56f35"><div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%"><tr><td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:6px;font-weight:800;line-height:10px" class="mobile-center"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px"><tr><td width="100%" align="center" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:800;line-height:24px;padding:10px"><a href="tel:+91" style="text-decoration:none;color:#fff;font-family:serif;font-size:16px">Leads Generate for Raj</a></td></tr></table></td></tr></table></div></td></tr><tr><td align="center" valign="top" style="font-size:0;padding:15px" bgcolor="#fff"><div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;display:fle;justify-content:center;align-items:center;width:100%"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%"><tr><td align="center" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:36px;font-weight:800;line-height:48px" class="mobile-center"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px"><tr><td width="100%" align="center" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-weight:800"><img style="width:120px;height:120px" src="" alt=""></td></tr></table></td></tr></table></div></td></tr><tr><td align="center" valign="top" style="font-size:0;padding:0" bgcolor="#e56f35"><div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;display:fle;justify-content:center;align-items:center;width:100%"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%"><tr><td width="100%" align="center" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:800;padding:10px 0" class="mobile-center"><h1 style="text-transform:capitalize;font-size:14px;font-weight:500;margin:0;text-align:center;color:#fff">Client Enquiry Details</h1></td></tr></table></div></td></tr><tr><td align="center" height="100%" valign="top" width="100%" style="padding:0 35px 35px 35px;background-color:#fff" bgcolor="#eee"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:660px"><tr><td width="100%" align="center" valign="top" style="font-size:0"><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;text-align:center;width:100%"><table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="max-width:300px"><tr><td width="100%" align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#e56f35">Customer Name:</p><p style="font-size:14px;font-weight:500;color:#111">' +
//       custName +
//       '</p></td></tr></table></div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"><tr><td width="100%" align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#e56f35">Customer Number:</p><p style="font-size:14px;font-weight:500;color:#111">' +
//       custPhone +
//       '</p></td></tr></table></div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"><tr><td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#164388">Customer Email:</p><p style="font-size:14px;font-weight:500;color:#111">' +
//       custEmail +
//       '</p></td></tr></table></div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"><tr><td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#164388">Customer Age:</p><p style="font-size:14px;font-weight:500;color:#111">' +
//       custMessage +
//       '</p></td></tr></table></div></td></tr></table></td></tr><tr><td width="100%" align="center" bgcolor="#e56f35" style="padding:10px 0"><p style="color:#fff;font-weight:500;font-size:1rem;padding:0;margin:0">© Copyright 2023 Raj</p></td></tr></table></td></tr></table></body></html>';

//     $.post(
//       "https://skdm.in/server/v1/send_lead_mail.php",
//       {
//         toEmail: "farmhousesundar@gmail.com",
//         fromEmail: "skdmlead@gmail.com",
//         bccMail: "skdmlead@gmail.com",
//         mailSubject: "New Lead genration",
//         mailBody: body,
//         accountName: "Raj",
//         accountLeadSource: "http://sundarfarms.com/",
//         accountLeadName: custName,
//         accountLeadPhone: custPhone,
//         accountLeadEmail: custEmail,
//         accountLeadMsgs: custMessage,
//       },

//       function (dataa, status) {
//         console.log("data :" + dataa);
//         console.log("name:" + custName);
//       }
//     );

//     alert("Your Form has Submited Our team will contact with You  soon.");

//     window.location.reload();

//     return false;
//   };

//   // const [show, setShow] = useState(false);
//   // const handleClose = () => setShow(false);

//   // const handleShow = () => setShow(true);
//   return (
//     <div>

//   {/* <!-- Seo Work --> */}
//       {/* --------------------google site verification------------------------- */}

//       <meta
//         name="google-site-verification"
//         content="MrpHCzqBxBXYiTl0n8_uyepq4h2ZM0Xt3YuJDXZuLY4"
//       />
//       {/* --------------------google site verification------------------------- */}

//       <meta title="Best Resort In Palghar For Couples |Sundar Farm Resort Palghar" />
//       <meta
//         name="description"
//         content="Experience the ultimate romantic getaway at Best Resort In Palghar For Couples. Enjoy breathtaking views and unforgettable moments together. "
//       />

//       <meta
//         name="title"
//         content="Best Resort In Palghar For Couples |Sundar Farm Resort Palghar"
//       />
//       <meta
//         name="keywords"
//         content="resorts in Palghar near station,
// resort near Palghar station,
// best resort in Palghar,
// best resort in Palghar for family,
// best resort in Palghar for couples,
// couple friendly resort in Palghar,
// best resort in Palghar with swimming pool,
// best resorts to stay in Palghar,
// sunder farm resort Palghar"
//       />
//       <link rel="canonical" href="https://www.sundarfarms.com/" />
//       <meta http-equiv="cache-control" content="no-cache" />
//       <meta http-equiv="expires" content="0" />
//       <meta http-equiv="pragma" content="no-cache" />
//       <meta
//         property="og:title"
//         content="Best Resort In Palghar For Couples |Sundar Farm Resort Palghar"
//       />
//       <meta property="og:locale" content="en_US" />
//       <meta property="og:type" content="website" />
//       <meta property="og:url" content="https://www.sundarfarms.com/" />
//       <meta
//         property="og:title"
//         content="Best Resort In Palghar For Couples |Sundar Farm Resort Palghar"
//       />
//       <meta
//         property="og:description"
//         content="Experience the ultimate romantic getaway at Best Resort In Palghar For Couples. Enjoy breathtaking views and unforgettable moments together. "
//       />
//       <meta property="article:tag" content="resorts in Palghar near station" />
//       <meta property="article:tag" content="resort near Palghar station" />
//       <meta property="article:tag" content="best resort in Palghar" />
//       <meta property="article:tag" content="best resort in Palghar for family" />
//       <meta
//         property="article:tag"
//         content="best resort in Palghar for couples"
//       />
//       <meta property="article:tag" content="couple friendly resort in Palghar" />
//       <meta property="article:tag" content="sunder farm resort Palghar" />
//       <meta property="article:tag" content="best resorts to stay in Palghar" />

//       <meta
//         name="description"
//         content="Experience the ultimate romantic getaway at Best Resort In Palghar For Couples. Enjoy breathtaking views and unforgettable moments together. "
//       />
//       <meta
//         name="keywords"
//         content="resorts in Palghar near station,
// resort near Palghar station,
// best resort in Palghar,
// best resort in Palghar for family,
// best resort in Palghar for couples,
// couple friendly resort in Palghar,
// best resort in Palghar with swimming pool,
// best resorts to stay in Palghar,
// sunder farm resort Palghar"
//       >
//         {/* <!-- Seo End -->' */}
//       </meta>


//       <div class="page-content ">
//         <div
//           className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
//           data-stellar-background-ratio="0.5"
//           style={{
//             backgroundImage: `linear-gradient(to right, rgba(10, 9, 9, 0.5), rgb(0, 0, 0, 0.5)),url(${bann})`,
//             backgroundPosition: "50% -329px",
//             backgroundAttachment: "fixed",
//           }}
//         >
//           <div className="overlay-main bg-black opacity-07" />
//           <div className="container">
//             <div className="wt-bnr-inr-entry">
//               <div className="banner-title-outer">
             
//                 <div className="banner-title-name">

//                   <h2 className="">About Us</h2>
//                 </div>
//               </div>
//               {/* BREADCRUMB ROW */}
//               <div>
//                 <ul className="wt-breadcrumb breadcrumb-style-2">
//                   <li>
//                     <a href="javascript:void(0);">Home</a>
//                   </li>
//                   <li>About Us</li>
//                 </ul>
//               </div>
//               {/* BREADCRUMB ROW END */}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ---------------------------about farms--------------- */}
//       <section className="about-us spad">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6">
//               <div className="about-left">
//                 <div className="section-title">
//                   <span>a memorable holliday</span>
//                   <h2>
//                     Since 2004 <br />
//                     for Service
//                   </h2>
//                 </div>
//                 <p className="second-text">
//                 Established in 2004, Raj Resort has firmly established itself as the best resort in Kelva, offering a serene haven nestled in the heart of Palghar. Our journey began with a simple vision - to provide a sanctuary where weary souls could escape the hustle and bustle of city life and reconnect with nature's tranquility. Situated amidst lush greenery and picturesque landscapes, Raj Resort has flourished into the undisputed best resort in Kelva, cherished by visitors seeking a truly remarkable retreat.
//                 </p>
//                 <p>
//                 What sets Raj Resort apart as the best resort in Kelva is not just our idyllic location, but our unwavering commitment to creating unforgettable memories for each visitor who walks through our doors. Our roots run deep in the community. Whether you're seeking a peaceful getaway, a romantic escape, or a fun-filled family vacation.
//                 </p>
//                 <button
                 
//                   className="primary-btn"
//                 >
//                      <Link to="/Contact">
                  
//                   Make a Reservation
//                   </Link>
//                 </button>
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <div className="row">
//                 <div className="col-lg-6 col-md-7">
//                   <div className="about-img">
//                     <img src={eve1} alt="" />
//                   </div>
//                 </div>
//                 <div className="col-lg-6 col-md-5">
//                   <div className="about-img second-img">
//                     <img src={eve2} alt="" />
//                   </div>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-lg-5 col-md-5">
//                   <div className="about-img third-img">
//                     <img src={eve3} alt="" />
//                   </div>
//                 </div>
//                 <div className="col-lg-7 col-md-7">
//                   <div className="about-img">
//                     <img src={eve4} alt="" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* ----------------------------achievements----------------------- */}
//       <section
//         className="milestone-counter spad set-bg"
//         data-setbg="img/about/milestone-bg.jpg"
//         style={{ backgroundImage: `url(${"https://imgs.search.brave.com/Uf390mcQ5O_Yg3fhaxem2T0DLCQJJT2mQDqap2NnCk4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTEudGhyaWxsb3Bo/aWxpYS5jb20vZmls/ZXN0b3JlLzZncDF1/enExMXowdmg1ZXpx/c3N0eG1tMWVsazhf/c2F2YW5hLWxha2Ut/cmVzb3J0LXN1cnZl/eS1uby0xNTMtYXQt/cG9zdC1kYWhlZ2Fv/bi1uYXNoaWstaG90/ZWxzLW94Zm4yLndl/YnA_dz03NTMmaD00/NTAmZHBy"})` }}
//       >
//         <div className="container">
//           <div className="row">
//             <div className="col-md-4">
//               <div className="mc-item">
//                 <div className="mc-num">
//                   <span className="counter">8</span>
//                 </div>
//                 <div className="mc-text">
//                   <h3>AC Deluxe Rooms</h3>
//                   <p>with amenities</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="mc-item">
//                 <div className="mc-num">
//                   <span className="counter">35</span>
//                   <strong>K</strong>
//                 </div>
//                 <div className="mc-text">
//                   <h3>Happy Clients</h3>
//                   <p>all year long</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="mc-item">
//                 <div className="mc-num">
//                   <span className="counter">365</span>
//                 </div>
//                 <div className="mc-text">
//                   <h3>Days/ Year</h3>
//                   <p>Available</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* -------------------------------our story-------------------------- */}
//       <div className="section-full bg-gray p-tb90 ">
//         <div className="container">
//           {/* TITLE START */}
//           <div className="section-head text-center">
            
//           </div>
//           {/* TITLE END */}
//           <Attraction/>
//         </div>
//       </div>
//       <Modal
//         // show={show}
//         id="exampleModal"
//         backdrop="static"
//         keyboard={false}
//         tabIndex={-1}
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//         // onHide={handleClose}
//       >
//         <Modal.Body>
//           <div className="partnerProgramForm">
//             <div className="formTitleSection">
//               <div className="modal-content">
//                 <div className="modal-header ml-5">
//                   <h5 className="modal-title" id="exampleModalLabel">
//                     Enquiry Now
//                   </h5>
//                   <div
//                     className="closeProgram closeProgram1"
//                     // onClick={handleClose}
//                   >
//                     {" "}
//                     <i className="fa fa-times" />{" "}
//                   </div>
//                 </div>
//                 <div className="modal-body">
//                   <div className="col-lg-12">
//                     <form
//                       action=""
//                       // method="post"
//                       // role="form"
//                       // className="php-email-form"
//                     >
//                       <div className="row">
//                         <div className="col-md-6 form-group">
//                           <input
//                             type="text"
//                             name="name"
//                             className="form-control input1"
//                             id="custName"
//                             placeholder="Your Name"
//                             required=""
//                           />
//                         </div>
//                         <div className="col-md-6 form-group mt-3 mt-md-0">
//                           <input
//                             type="number"
//                             className="form-control input1"
//                             name="phone"
//                             id="custPhone"
//                             placeholder="Your Phone No"
//                             required=""
//                           />
//                         </div>
//                       </div>
//                       <div className="form-group mt-3">
//                         <input
//                           type="email"
//                           className="form-control input1"
//                           name="email"
//                           id="custEmail"
//                           placeholder="Your Email"
//                           required=""
//                         />
//                       </div>
//                       <div className="form-group mt-3">
//                         <textarea
//                           className="form-control input1"
//                           name="message"
//                           id="custMessage"
//                           rows={6}
//                           placeholder="Message"
//                           required=""
//                           defaultValue={""}
//                         />
//                       </div>
//                       {/* <div className="my-3">
//           <div className="loading">Loading</div>
//           <div className="error-message" />
//           <div className="sent-message">
//             Your message has been sent. Thank you!
//           </div>
//         </div> */}
//                       <div className="text-center submitTarget">
//                         <button type="submit" onClick={formSubmit}>
//                           Send Message
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Modal.Body>
//       </Modal>
//       <Footer />
//     </div>
//   );
// };

// export default About;


import React from 'react'

export default function About() {
  return (
    <div>About</div>
  )
}
