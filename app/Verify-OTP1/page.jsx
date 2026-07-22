import React from "react";

export default function VerifyOTP() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center mb-3 text-gray-800">
          Verify OTP
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Enter the 6-digit code sent to your email.
        </p>

        <div className="flex justify-between gap-3 mb-8">
          <input
            maxLength="1"
            className="w-12 h-12 border rounded-lg text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            maxLength="1"
            className="w-12 h-12 border rounded-lg text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            maxLength="1"
            className="w-12 h-12 border rounded-lg text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            maxLength="1"
            className="w-12 h-12 border rounded-lg text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            maxLength="1"
            className="w-12 h-12 border rounded-lg text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            maxLength="1"
            className="w-12 h-12 border rounded-lg text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Verify OTP
        </button>

        <p className="text-center mt-6 text-gray-500">
          Didn't receive the code?
          <button className="text-blue-600 ml-2 hover:underline cursor-pointer">
            Resend OTP
          </button>
        </p>

      </div>
    </div>
  );

}

  