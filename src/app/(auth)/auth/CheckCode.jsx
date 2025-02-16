import React from "react";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import OTPInput from "react-otp-input";

//? import icons
import { LiaEdit } from "react-icons/lia";
import { IoRefreshSharp } from "react-icons/io5";

function CheckCode({
  phoneNumber,
  submitHandler,
  value,
  loading,
  time,
  setOtp,
}) {
  return (
    <div className="bg-white rounded-2xl p-8 w-full">
      <div className="flex items-center mt-2 mb-6">
        <div className="text-gray-800 font-extrabold text-2xl text-center flex-1">
          فرانت لرن
        </div>
      </div>
      <div className="text-gray-500 mb-4 text-xs flex items-center gap-x-1">
        کد تایید ارسال شده به شماره {digitsEnToFa(phoneNumber)} را وارد کنید
        <button onClick={() => setStepHandler(0)}>
          <LiaEdit className="w-5 h-5 text-blue-500" />
        </button>
      </div>
      <div className="py-4">
        <div style={{ opacity: "1", transform: "none" }}>
          <form onSubmit={submitHandler} className="flex flex-col">
            <div className="textField" dir="ltr">
              <OTPInput
                value={value}
                onChange={setOtp}
                numInputs={5}
                shouldAutoFocus
                renderSeparator={<span>-</span>}
                inputStyle="form-input border border-white-two rounded-xl font-bold focus:outline-none focus:border-green-blue !focus:shadow-greenShaow !w-10 text-gray-700 !p-2"
                containerStyle="containerStyle flex gap-x-2 justify-between"
                renderInput={(props) => (
                  <div className="flex gap-x-2 justify-center items-center w-full">
                    <input type="number" {...props} />
                  </div>
                )}
              />
            </div>
            <div className="mt-10">
              <button
                className="px-4 py-3 text-white bg-blue-500 rounded-lg w-full shadow-xl hover:bg-blue-600 transition duration-300 font-bold text-sm disabled:bg-gray-500"
                tabIndex="0"
                type="submit"
                disabled={!(value.length === 5)}
              >
                تایید و ادامه
                <span className="MuiTouchRipple-root muirtl-w0pj6f"></span>
              </button>
            </div>
            <div className="mt-5">
              <button
                className="text-xs text-center text-blue-700 disabled:text-gray-500 w-full"
                tabIndex="0"
                type="submit"
                disabled={time > 0}
              >
                {time > 0 ? (
                  ` ${time} ثانیه تا ارسال مجدد کد`
                ) : (
                  <span className="text-xs flex justify-center items-center gap-x-1 flex-row-reverse">
                    <IoRefreshSharp className="text-blue-700 w-4 h-4" />
                    ارسال مجدد کد
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckCode;
