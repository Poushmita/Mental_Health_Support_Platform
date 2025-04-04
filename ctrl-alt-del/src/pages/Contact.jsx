import React from "react";


const Contact = () => {
  return (
    <div className="w-full mx-auto p-8">
      {/* Header Section */}
      <div className="bg-[#F1DDD2] p-2 text-center rounded-lg">
        <img
          src="src/assets/banner_new.png"
          alt="Contact Us Banner"
          className="w-full h-auto max-w-[1600px] max-h-[400px] object-cover rounded-lg"
        />
        {/*<h1 className="text-[#5C4033] text-4xl font-bold mt-4">Contact Us</h1><br />
        <p className="text-[#5C4033]">We’d love to hear from you. Reach out to us anytime!</p>*/}
        <button className="bg-[#E29578] text-white px-4 py-2 rounded-md mt-3 border-none">
          Get in Touch
        </button>
      </div>

      {/* Contact Information */}
      <div className="bg-[#EDF6F9] p-5 mt-5  rounded-lg text-center">
        <h2 className="text-2xl font-bold text-[#5C4033]">Contact Information</h2><br/>
        <p className="flex items-center justify-center gap-2">
          <img src="src/assets/pin.png" alt="Location" width="20" /> 123 Wellness Street
        </p>
        <p className="flex items-center justify-center gap-2">
          <img src="src/assets/telephone.png" alt="Phone" width="20" /> +1 (555) 123-4567
        </p>
        <p className="flex items-center justify-center gap-2">
          <img src="src/assets/gmail.png" alt="Email" width="20" /> support@mentalwellness.com
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-[#F1DDD2] p-2 mt-2  rounded-lg flex flex-col md:flex-row items-center gap-5">
        <form className="w-full">
          <h2 className="text-2xl font-bold text-[#5C4033] text-center mb-3">Send Us a Message</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border-2 border-[#83C5BE] rounded-md mb-4"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border-2 border-[#83C5BE] rounded-md mb-4"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-2 border-2 border-[#83C5BE] rounded-md mb-4"
            required
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-2 border-2 border-[#83C5BE] rounded-md mb-4"
            required
          ></textarea>
          <button type="submit" className="bg-[#006D77] text-white px-4 py-2 rounded-md w-full">
            Submit
          </button>
        </form>
        <img
          src="src/assets/contactImage.png"
          alt="Customer Support"
          className="w-[300px] rounded-lg hidden md:block"
        />
      </div>

      {/* FAQ Section */}
      <div className="bg-[#FAF3E0] p-5 mt-5  rounded-lg text-center">
        <h2 className="text-2xl font-bold text-[#5C4033]">FAQ</h2><br />
        <p>
          <strong>How soon will I receive a response?</strong><br /> Within 24-48 hours.
        </p>
        <p>
          <strong>Can I book a consultation?</strong><br /> Yes, visit our{" "}
          <a href="#" className="text-[#006D77] underline">
            Booking Page
          </a>
          .
        </p>
      </div>

      {/* Social Media Links */}
      <div className="bg-[#EDF6F9] p-5 mt-5   rounded-lg text-center">
        <h2 className="text-2xl font-bold text-[#5C4033]">Follow Us</h2>
        <div className="flex justify-center gap-4 mt-3">
          <a href="#">
            <img src="src/assets/facebook.png" alt="Facebook" width="30" />
          </a>
          <a href="#">
            <img src="src/assets/twitter.png" alt="Twitter" width="30" />
          </a>
          <a href="#">
            <img src="src/assets/instagram.png" alt="Instagram" width="30" />
          </a>
          <a href="#">
            <img src="src/assets/linkedin.png" alt="LinkedIn" width="30" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
