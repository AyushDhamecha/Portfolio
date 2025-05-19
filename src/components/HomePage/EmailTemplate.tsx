import React from "react";

interface EmailTemplateProps {
  name: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ name }) => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f4",
        margin: 0,
        padding: "10px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "#e5e5e5",
          margin: "20px auto",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          border: "2px solid #000000",
        }}
      >
        {/* Header */}
        <div
          style={{
            background:
              "url('https://d4e0ab99-542d-4b18-90f6-78fe712e99f3.b-cdn.net/e/9ecc74fc-b8c0-4a14-ae64-b4ec238396e1/05584b56-d4ce-4e28-90da-0b8b07230c9d.png') no-repeat top",
            backgroundSize: "cover",
            padding: "20px 20px",
            display: "flex",
            justifyContent: "start",
          }}
        >
          <img
            src="https://res.cloudinary.com/dlkk03hhl/image/upload/v1740560631/applicationFormImage_67bed891d9d7b9368adea41d_logo.png.png"
            alt="Email Icon"
            style={{ width: "100px" }}
          />
        </div>

        {/* Content */}
        <div
          style={{
            backgroundColor: "#ffe8c5",
            padding: "15px",
            margin: "10px",
            borderRadius: "10px",
            border: "2px solid #000000",
            textAlign: "start",
            fontSize: "16px",
          }}
        >
          <strong>
            <span style={{ fontSize: "18pt" }}>
              Hi {name},
              <br />
              <br />
            </span>
          </strong>
          <span style={{ fontSize: "12pt" }}>
            Thank you for taking the time to get in touch with me! I truly
            appreciate your interest and the effort you put into filling out the
            contact form.
            <br />
            <br />
            I’ve received your message and will review the details you’ve
            provided. I’ll get back to you as soon as possible—typically within
            24–48 hours.
            <br />
            <br />
            If you have any additional information or questions in the meantime,
            feel free to reply to this email.
            <br />
            <br />
            Looking forward to connecting with you!
            <br />
          </span>
        </div>

        {/* Card */}
        <div
          style={{
            display: "flex",
            alignItems: "start",
            gap: "10px",
            padding: "10px",
            background: "#fdb462",
            margin: "10px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            border: "2px solid #000000",
          }}
        >
          <img
            src="https://res.cloudinary.com/dlkk03hhl/image/upload/v1740561033/applicationFormImage_67bed891d9d7b9368adea41d_1736313245177-01-01-01.jpeg.jpg"
            alt="Profile Picture"
            style={{
              width: "33%",
              height: "100%",
              marginRight: "5px",
              borderRadius: "10px",
              border: "2px solid #000000",
            }}
          />
          <div style={{ color: "#333" }}>
            <h2
              style={{
                margin: "0 0",
                fontSize: "1.7rem",
                marginBottom: "5px",
                whiteSpace: "nowrap",
              }}
            >
              Fi Amanillah
            </h2>
            <h3 style={{ margin: "0 0", marginBottom: "2px", fontSize: "1.1rem" }}>
              Web Developer
            </h3>
            <a
              href="mailto:fi@amanillah.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#333", fontWeight: 600 }}
            >
              <p style={{ margin: "2px 0", fontSize: "14px" }}>
                📧 fi@amanillah.com
              </p>
            </a>
            <a
              href="http://fi.amanillah.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#333", fontWeight: 600 }}
            >
              <p style={{ margin: "2px 0", fontSize: "14px" }}>
                🌐 fi.amanillah.com
              </p>
            </a>
            <a
              href="https://wa.link/tghi4g"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#333", fontWeight: 600 }}
            >
              <p style={{ margin: "2px 0", fontSize: "14px" }}>
                📞 +8801608505647
              </p>
            </a>
            <a
              href="https://maps.app.goo.gl/vSubR8RK9AuENcEf8"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#333", fontWeight: 600 }}
            >
              <p style={{ margin: "2px 0", fontSize: "14px" }}>
                📍 Mirpur 1, Dhaka -1216, Bangladesh
              </p>
            </a>
            <div style={{ marginTop: "3px" }}>
              <a
                href="https://www.facebook.com/fiamanillah.b2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dlkk03hhl/image/upload/v1740561904/applicationFormImage_67bed891d9d7b9368adea41d_ph--facebook-logo-bold.png.png"
                  alt="Facebook"
                  style={{ width: "30px", height: "30px", marginRight: "8px" }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/fi-amanillah/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dlkk03hhl/image/upload/v1740561991/applicationFormImage_67bed891d9d7b9368adea41d_jam--linkedin-circle.png.png"
                  alt="LinkedIn"
                  style={{ width: "30px", height: "30px", marginRight: "8px" }}
                />
              </a>
              <a
                href="https://github.com/AyushDhamecha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dlkk03hhl/image/upload/v1740562051/applicationFormImage_67bed891d9d7b9368adea41d_raphael--githubalt.png.png"
                  alt="Github"
                  style={{ width: "30px", height: "30px", marginRight: "8px" }}
                />
              </a>
              <a
                href="http://fi.amanillah.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dlkk03hhl/image/upload/v1740562102/applicationFormImage_67bed891d9d7b9368adea41d_mdi--web.png.png"
                  alt="Website"
                  style={{ width: "30px", height: "30px", marginRight: "8px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

