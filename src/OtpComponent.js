import React, { useState } from "react";
import { auth } from "./firebase";
import firebase from "firebase/compat/app";
const OtpComponent = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  const requestOtp = () => {
    const recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
      size: "invisible",
    });

    auth.signInWithPhoneNumber(phone, recaptchaVerifier)
      .then((result) => {
        setConfirmationResult(result);
        alert("OTP sent!");
      })
      .catch((error) => console.error("Error sending OTP:", error));
  };

  const verifyOtp = () => {
    confirmationResult
      .confirm(otp)
      .then((result) => {
        alert("OTP verified successfully!");
        console.log(result.user);
        // Pass user details to the backend here if needed.
      })
      .catch((error) => console.error("Invalid OTP:", error));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={requestOtp}>Send OTP</button>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={verifyOtp}>Verify OTP</button>
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default OtpComponent;
