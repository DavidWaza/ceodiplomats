"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../assets/images/ceo-blue.png";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";

const uploader = Uploader({
  apiKey: "free",
});

const options = { 
  multi: true,
  mimeTypes: ["application/pdf"] 
};

const JoinUsNow = () => {
  const handleUploadComplete = (files) => {
    const pdfFiles = files.filter((file) => file.fileUrl.endsWith(".pdf"));
    if (pdfFiles.length !== files.length) {
      alert("Only PDF files are allowed.");
    } else {
    //   alert(pdfFiles.map((x) => x.fileUrl).join("\n"));
    }
  };

  return (
    <>
      <div className="joinus-wrapper">
        <Image
          src={Logo}
          alt="logo"
          width={0}
          height={0}
          className="logo-attr"
        />
        <div className="joinus-container">
          <form className="joinus-form">
            <div className="form-group">
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                placeholder="Full Name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="profession"
                name="profession"
                required
                placeholder="Profession"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                required
                placeholder="Phone Number"
              />
            </div>
            <UploadButton
              uploader={uploader}
              options={options}
              className="upload-button"
              onComplete={handleUploadComplete}
            >
              {({ onClick }) => (
                <button
                  onClick={onClick}
                  style={{
                    marginTop: "-30px",
                    marginBottom: "20px",
                    backgroundColor: "",
                    border: "none",
                    borderRadius: "5px",
                  }}
                >
                  Upload your CV
                </button>
              )}
            </UploadButton>
            <button type="submit" className="form-action-button">
              Join Now
            </button>
            <div className="nav-bar-wrapper">
              <a href="/" className="home-link">
                Go back Home
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default JoinUsNow;