import React from "react";

//? import components
import Loading from "@/common/Loading";

function SendCode({
  phoneNumber,
  phoneNumberHandler,
  submitHandler,
  isPending,
}) {
  return (
    <div className="bg-white rounded-2xl p-8 w-full">
      <div className="flex items-center mt-2 mb-6">
        <div className="text-gray-800 font-extrabold text-2xl text-center flex-1">
          فرانت لرن
        </div>
      </div>
      <div className="text-gray-800 font-bold mb-4">ورود | ثبت نام</div>
      <div className="py-4">
        <div style={{ opacity: "1", transform: "none" }}>
          <form onSubmit={submitHandler} className="flex flex-col">
            <span className="text-gray-600 mb-2 text-sm">سلام !</span>
            <div className="textField">
              <label htmlFor="phoneNumber" className="text-gray-600 text-sm">
                لطفا ایمیل یا شماره موبایل خود را وارد کنید
              </label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                dir="ltr"
                className="w-full mt-5 rounded-lg border bg-gray-100 hover:border-blue-300 focus:border-blue-300 focus:shadow-lg focus:shadow-blue-200 py-3 px-5 focus:outline-none focus:bg-white transition-all duration-300 outline-none text-gray-600 placeholder:text-sm placeholder:text-right"
                placeholder="مثال   ۰۹۱۲۳۴۵۶۷۸۹"
                value={phoneNumber}
                onChange={phoneNumberHandler}
              />
            </div>
            <div className="mt-10">
              {isPending ? (
                <button
                  className="px-4 py-3 text-white bg-blue-500 rounded-lg w-full shadow-xl hover:bg-blue-600 transition duration-300"
                  tabIndex="0"
                  type="button"
                  disabled
                >
                  <Loading white={true} />
                  <span className="MuiTouchRipple-root muirtl-w0pj6f"></span>
                </button>
              ) : (
                <button
                  className="px-4 py-3 text-white bg-blue-500 rounded-lg w-full shadow-xl hover:bg-blue-600 transition duration-300"
                  tabIndex="0"
                  type="submit"
                >
                  ورود
                  <span className="MuiTouchRipple-root muirtl-w0pj6f"></span>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SendCode;
