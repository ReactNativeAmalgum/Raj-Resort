import { useState, React } from "react";
import '../css/Contact.css'
import Footer from './Footer'
import $ from 'jquery';
import Modal from "react-bootstrap/Modal";
import { Button, Form, Input } from "antd";
import pagebanner from "../images/p4.avif";
const Contact = () => {
    const submitForm = (values) => {
        console.log("values", values);

        var body = '<!DOCTYPE html><html><head><title>Enquiry Lead</title></head><body><div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background-color:#f2f2f2;padding:20px"><h2 style="color:#dc9d7e">Omkar Nature Farm</h2><p>Hello</p><p>Thank you for your interest in our products/services.</p><p>Please check your enquiry which generated from website:</p><table cellpadding="5" style="margin:0"><tr><td style="text-align:left;color:#dc9d7e"><strong>Name:</strong></td><td style="text-align:left">' + values.name + '</td></tr><tr><td style="text-align:left;color:#dc9d7e"><strong>Email:</strong></td><td style="text-align:left">' + values.email + '</td></tr><tr><td style="text-align:left;color:#dc9d7e"><strong>Subject:</strong></td><td style="text-align:left">' + values.subject + '</td></tr><tr><td style="text-align:left;color:#dc9d7e"><strong>Message:</strong></td><td style="text-align:left">' + values.message + '</td></tr><tr><td style="text-align:left;color:#dc9d7e"><strong>Mobile Number:</strong></td><td style="text-align:left">' + values.mobileNo + '</td></tr></table><p style="font-weight:700">Best regards,<br>Your Team at Omkar Nature Farm</p></div></body></html>';

        $.post("https://skdm.in/server/v1/send_lead_mail.php", {
            toEmail: "amansinghthakur354@gmail.com",
            fromEmail: "skdmlead@gmail.com",
            bccMail: "skdmlead@gmail.com",
            mailSubject: "New Customer Lead",
            mailBody: body,
            accountName: "Raj Resort",
            accountLeadSource: "omkarnaturefarm.in",
            accountLeadName: values.name,
            accountLeadEmail: values.email,
            accountLeadPhone: values.contact,
        },

            function (dataa, status) {
                console.log('data :' + dataa);
                console.log("name:" + values);

            });

        alert("Your Form has Submitted Our team will contact with You  soon.");
        values.preventDefault()
        return false;
    };


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);
    return (
        <div>
            <div class="page-content ">
                <div
                    className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
                    data-stellar-background-ratio="0.5"

                    style={{ backgroundImage: `url(${pagebanner})`, backgroundPosition: "50% -50px", backgroundAttachment: "fixed" }}


                >
                    <div className="overlay-main bg-black opacity-07" />
                    <div className="container">
                        <div className="wt-bnr-inr-entry">
                            <div className="banner-title-outer">

                                <div className="banner-title-name">
                                    <h2 className="">
                                        Contact
                                    </h2>
                                </div>
                            </div>
                            {/* BREADCRUMB ROW */}
                            <div>
                                <ul className="wt-breadcrumb breadcrumb-style-2">
                                    <li>
                                        <a href="javascript:void(0);">Home</a>
                                    </li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            {/* BREADCRUMB ROW END */}
                        </div>
                    </div>
                </div>


            </div>

            <section className="contact-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact-title">
                                <div className="section-title">
                                    <span>a memorable holliday</span>
                                    <div className="con-head">

                                        <h2>
                                            Contact us for your next visit
                                        </h2>
                                    </div>
                                </div>
                                <a href="#" className="primary-btn button-contect">
                                    Get Directions
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <Form
                                className="php-email-form"
                                layout="vertical"
                                onFinish={submitForm}
                            >
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <Form.Item
                                            name="name"
                                            label="Name"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter your name!',
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder="Enter a name"
                                                className="form-control custName custNameValidation"
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <Form.Item
                                            name="subject"
                                            label="Subject"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter subject!',
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder="Enter subject"
                                                className="form-control custPhone custPhoneValidation"
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <Form.Item
                                            name="email"
                                            label="Email"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter email!',
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder="Enter e-mail id"
                                                className="form-control custEmail custEmailValidation"
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <Form.Item
                                            name="mobileNo"
                                            label="mobileNo"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter mobile:no!',
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder="Enter mobile:no"
                                                className="form-control custEmail custEmailValidation"
                                            />
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <Form.Item
                                        name="message"
                                        label="Message"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please Your message!',
                                            },
                                        ]}
                                    >
                                        <Input.TextArea
                                            className="form-control custMessage"
                                            placeholder="Enter message"
                                        />
                                    </Form.Item>
                                </div>
                                <div className="text-center cutomSubmit">
                                    <Form.Item>
                                        <Button htmlType="submit">Send Message</Button>
                                    </Form.Item>
                                </div>
                            </Form>
                        </div>
                        <div className="col-lg-4">
                            <div className="info-box">
                                <img src="img/contact-logo.png" alt="" />
                                <ul>
                                    <li><i className="fa fa-map-marker"> </i>

                                        Kelwa Rd, Mangelwada, Kelwa Road,
                                        Maharashtra 401401, India
                                    </li>
                                    <li><i className="fa fa-phone"></i>+91 9890165286 </li>
                                    <li><i className="fa fa-phone"></i>+91 9225102497 </li>
                                    <li><i className="fa fa-envelope"></i>rajresortbooknow@gmail.com</li>
                                    <li><i className="fa fa-clock-o"></i>Everyday: 09:00 am to 10:00 pm</li>
                                </ul>
                                <div className="social-links">
                                    <a href="#">
                                        <i className="fa fa-facebook" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-instagram" />
                                    </a>
                                    {/* <a href="#">
                <i className="fa fa-linkedin" />
              </a> */}
                                    {/* <a href="#">
                <i className="fa fa-pinterest" />
              </a> */}
                                    <a href="https://goo.gl/maps/txhuF9TNZfcALHmh7">
                                        <i className="fa fa-google" />
                                    </a>
                                    {/* <a href="#">
                <i className="fa fa-youtube-play" />
              </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Contact