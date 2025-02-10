import React from "react";
import { digitsEnToFa } from "@persian-tools/persian-tools";

//? import icons
import { LiaEdit } from "react-icons/lia";

function CheckCode({ data, dataHandler, setStepHandler }) {
  return (
    <div className="bg-white rounded-2xl p-8 w-full">
      <div className="flex items-center mt-2 mb-6">
        <div className="text-gray-800 font-extrabold text-2xl text-center flex-1">
          فرانت لرن
        </div>
      </div>
      <div className="text-gray-500 mb-4 text-xs flex items-center gap-x-1">
        کد تایید ارسال شده به شماره {digitsEnToFa(data?.phoneNumber)} را وارد
        کنید
        <button onClick={() => setStepHandler(0)}>
          <LiaEdit className="w-5 h-5 text-blue-500" />
        </button>
      </div>
      <div className="py-4">
        <div style={{ opacity: "1", transform: "none" }}>
          <form className="flex flex-col">
            <div className="textField">
              <label
                htmlFor="code"
                className="text-gray-600 text-base font-extrabold"
              >
                کد تایید را وارد کنید
              </label>
              <input
                type="text"
                name="code"
                id="code"
                dir="ltr"
                className="w-full mt-5 rounded-lg border bg-gray-100 hover:border-blue-300 focus:border-blue-300 focus:shadow-lg focus:shadow-blue-200 py-3 px-5 focus:outline-none focus:bg-white transition-all duration-300 outline-none text-gray-600 placeholder:text-sm placeholder:text-right"
                placeholder="مثال   ۱۲۳۴"
                value={data.code}
                onChange={dataHandler}
              />
            </div>
            <div className="mt-10">
              <button
                className="px-4 py-3 text-white bg-blue-500 rounded-lg w-full shadow-xl hover:bg-blue-600 transition duration-300 font-bold text-sm"
                tabIndex="0"
                type="submit"
              >
                تایید و ادامه
                <span className="MuiTouchRipple-root muirtl-w0pj6f"></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckCode;
