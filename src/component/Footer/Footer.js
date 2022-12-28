import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div className="contact">
      <div>
        <h1 className="section_title">
          Contact <span>info</span>
        </h1>
      </div>
      <div className="contact_items">
        <div className="contact_item">
          <div className="icon">
            <img
              src="https://img.icons8.com/bubbles/100/000000/phone.png"
              alt="contactImg"
            />
          </div>
          <div className="contact_info">
            <h1>Phone</h1>
            <h2>+1 234 123 1234</h2>
            <h2>+1 234 123 1234</h2>
          </div>
        </div>
        <div className="contact_item">
          <div className="icon">
            <img
              src="https://img.icons8.com/bubbles/100/000000/new-post.png"
              alt="contactImg"
            />
          </div>
          <div className="contact_info">
            <h1>Email</h1>
            <h2>info@gmail.com</h2>
            <h2>abcd@gmail.com</h2>
          </div>
        </div>
        <div className="contact_item">
          <div className="icon">
            <img
              src="https://img.icons8.com/bubbles/100/000000/map-marker.png"
              alt="contactImg"
            />
          </div>
          <div className="contact_info">
            <h1>Address</h1>
            <h2>Fatikchhari, Chittagong, Bangladesh</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
