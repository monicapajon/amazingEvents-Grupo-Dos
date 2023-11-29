import React from "react";
import "./Contact.css";
const Contac = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="title-contact-form">
          <h1>We help you?</h1>
          <br />
          <p>We want to know what we can do for you and help you grow.</p>
          <br />
        </div>
        <div className="form">
          <form
            action="mailto:metrica.agenciamkt@gmail.com"
            method="POST"
            encType="text/plain"
          >
            <input
              name="nombre"
              className="input"
              placeholder="Your name"
              type={"text"}
            />
            <input
              className="input"
              name="email"
              placeholder="Your email"
              type={"email"}
            />
            <input
              className="input"
              name="numero"
              placeholder="Your number"
              type={"number"}
            />
            <input
              className="input"
              name="web"
              placeholder="Tu Web"
              type={"url"}
            />
            <span>
            If your country is not listed, press Enter Country
            </span>
            <textarea
              name="text"
              placeholder="Tell us how we can help you"
            />
            <div className="div-button">
              <button
                className="button-form-contact"
                type="submit"
                value={"submit"}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contac;
