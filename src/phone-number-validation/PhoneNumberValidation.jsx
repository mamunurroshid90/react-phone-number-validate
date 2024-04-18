import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneNumberValidation = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);

  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <div className=" h-screen flex justify-center items-center bg-slate-200">
      <div className=" py-6 px-5 shadow-md rounded bg-white">
        <h2 className=" text-lg font-bold text-center capitalize">
          Phone number validation example
        </h2>
        <label className=" font-medium text-sm mt-5 capitalize">
          Phone Number:
          <PhoneInput
            className=" border-2"
            country={"bangladesh"}
            value={phoneNumber}
            onChange={handleChange}
            inputProps={{ required: true }}
          />
        </label>
        {!valid && (
          <p className=" text-red-500 text-xs mt-2 font-semibold">
            Please enter a valid phone number
          </p>
        )}
      </div>
    </div>
  );
};

export default PhoneNumberValidation;
