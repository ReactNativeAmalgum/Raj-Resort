import "../css/modal.css";
import { Modal, Button as BootstrapButton } from "react-bootstrap";
import { Input, Form, DatePicker, Button } from "antd";
import $ from "jquery";

function FormModal({ show, handleClose }) {
    const submitForm = (values) => {
        console.log("values", values);

        var body =
            '<!DOCTYPE html><html><head><title>Enquiry Lead</title></head><body><div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background-color:#f2f2f2;padding:20px"><h2 style="color:#dc9d7e">Raj Resort</h2><p>Hello</p><p>Thank you for your interest in our products/services.</p><p>Please check your enquiry which generated from website:</p><table cellpadding="5" style="margin:0"><tr><td style="text-align:left;color:#dc9d7e"><strong>Name:</strong></td><td style="text-align:left">' +
            values.name +
            '</td></tr><tr><td style="text-align:left;color:#dc9d7e"><strong>Email:</strong></td><td style="text-align:left">' +
            values.email +
            '</td></tr><tr><td style="text-align:left;color:#dc9d7e"><strong>Subject:</strong></td><td style="text-align:left">' +
            values.subject +
            '</td></tr><tr><td style="text-align:left;color:#dc9d7e"><strong>Message:</strong></td><td style="text-align:left">' +
            values.message +
            '</td></tr><tr><td style="text-align:left;color:#dc9d7e"><strong>Mobile Number:</strong></td><td style="text-align:left">' +
            values.mobileNo +
            '</td></tr></table><p style="font-weight:700">Best regards,<br>Your Team at Raj Resort</p></div></body></html>';

        $.post(
            "https://skdm.in/server/v1/send_lead_mail.php",
            {
                toEmail: "amansinghthakur354@gmail.com",
                fromEmail: "skdmlead@gmail.com",
                bccMail: "skdmlead@gmail.com",
                mailSubject: "New Customer Lead",
                mailBody: body,
                accountName: "Raj-resort",
                accountLeadSource: "omkarnaturefarm.in",
                accountLeadName: values.name,
                accountLeadEmail: values.email,
                accountLeadPhone: values.mobileNo,
            },
            function (dataa, status) {
                console.log("data :", dataa);
                console.log("status:", status);
            }
        );

        alert("Your Form has Submitted. Our team will contact you soon.");
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Raj Resort</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="php-email-form" layout="vertical" onFinish={submitForm}>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <Form.Item
                                    name="name"
                                    label="Name"
                                    rules={[{ required: true, message: "Please enter your name!" }]}
                                >
                                    <Input placeholder="Enter a name" className="form-control custName custNameValidation" />
                                </Form.Item>
                            </div>
                            <div className="form-group col-md-6">
                                <Form.Item
                                    name="subject"
                                    label="Subject"
                                    rules={[{ required: true, message: "Please enter subject!" }]}
                                >
                                    <Input placeholder="Enter subject" className="form-control custPhone custPhoneValidation" />
                                </Form.Item>
                            </div>
                            <div className="form-group col-lg-6">
                                <Form.Item
                                    name="email"
                                    label="Email"
                                    rules={[{ required: true, message: "Please enter email!" }]}
                                >
                                    <Input placeholder="Enter e-mail id" className="form-control custEmail custEmailValidation" />
                                </Form.Item>
                            </div>
                            <div className="form-group col-lg-6">
                                <Form.Item
                                    name="mobileNo"
                                    label="Mobile Number"
                                    rules={[{ required: true, message: "Please enter mobile number!" }]}
                                >
                                    <Input placeholder="Enter mobile number" className="form-control custEmail custEmailValidation" />
                                </Form.Item>
                            </div>
                            <div className="form-group col-lg-6">
                                <Form.Item
                                    name="adult"
                                    label="Adult"
                                    type="number"
                                    rules={[{ required: true, message: "Please enter the number of adults!" }]}
                                >
                                    <Input placeholder="Enter number of adults" className="form-control custEmail custEmailValidation" />
                                </Form.Item>
                            </div>
                            <div className="form-group col-lg-6">
                                <Form.Item
                                    name="kids"
                                    label="Kids"
                                    rules={[{ required: true, message: "Please enter the number of kids!" }]}
                                >
                                    <Input placeholder="Enter number of kids" className="form-control custEmail custEmailValidation" />
                                </Form.Item>
                            </div>
                            <div className="col-lg-6">
                                <Form.Item
                                    name="checkIn"
                                    label="Check-In"
                                    rules={[{ required: true, message: "Please select a check-in date!" }]}
                                    className="custom-date-picker"
                                >
                                    <DatePicker className="form-control" />
                                </Form.Item>
                            </div>
                            <div className="col-lg-6">
                                <Form.Item
                                    name="checkOut"
                                    label="Check-Out"
                                    rules={[{ required: true, message: "Please select a check-out date!" }]}
                                    className="custom-date-picker"
                                >
                                    <DatePicker className="form-control" />
                                </Form.Item>
                            </div>
                        </div>
                        <div className="form-group">
                            <Form.Item name="message" label="Message" rules={[{ required: true, message: "Please enter your message!" }]}>
                                <Input.TextArea className="form-control custMessage" placeholder="Enter message" />
                            </Form.Item>
                        </div>
                        <div className="text-center cutomSubmit">
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Send Message
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <BootstrapButton variant="secondary" onClick={handleClose}>
                        Close
                    </BootstrapButton>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default FormModal;
