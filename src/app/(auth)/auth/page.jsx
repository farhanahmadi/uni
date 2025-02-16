"use client";

import React, { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

//? import services
import { checkOtp, createUser } from "@/services/usersServices";

//? import mui
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

//? import components
import SendCode from "@/app/(auth)/auth/SendCode";
import CheckCode from "@/app/(auth)/auth/CheckCode";

const steps = ["احراز هویت", "تکمیل اطلاعات", "ثبت سفارش"];
const RESEND_TIME = 90;

function page() {
  const router = useRouter();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState(0);
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);

  // create user mutation
  const { isPending: getOtpIsPending, mutateAsync: mutateGetOtp } = useMutation(
    {
      mutationFn: createUser,
    }
  );

  // check otp mutation
  const {
    isPending: checkOtpIsPending,
    data,
    mutateAsync: mutateCheckOtp,
  } = useMutation({
    mutationFn: checkOtp,
  });

  const phoneNumberHandler = (event) => {
    setPhoneNumber(event.target.value);
  };

  const setStepHandler = (status) => {
    setStep(status);
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  //send phoneNumber to db
  const getOtpSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const { message } = await mutateGetOtp({ phoneNumber });
      toast.success(message);
      setTime(RESEND_TIME);
      setStep(1);
      setOtp("");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  //check otp code
  const checkOtpSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const { message } = await mutateCheckOtp({ phoneNumber, otp });
      toast.success(message);
      router.push("/");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderSteps = () => {
    switch (step) {
      case 0:
        return (
          <SendCode
            data={data}
            phoneNumberHandler={phoneNumberHandler}
            submitHandler={getOtpSubmitHandler}
            isPending={getOtpIsPending}
          />
        );
      case 1:
        return (
          <CheckCode
            data={data}
            phoneNumber={phoneNumber}
            submitHandler={checkOtpSubmitHandler}
            time={time}
            setOtp={setOtp}
            value={otp}
            isPending={checkOtpIsPending}
          />
        );
      default:
        break;
    }
  };
  return (
    <div className="flex h-screen">
      <div className="h-full w-full lg:w-[30%] lg:bg-gray-100 bg-white flex items-center justify-center lg:justify-end">
        <div className="w-full max-w-sm lg:ml-[-200px] z-20 relative">
          {renderSteps()}
        </div>
      </div>
      <div className="bg-blue-600 rounded-r-3xl lg:w-[70%]">
        <div className="flex items-center justify-center h-full w-full">
          <div className="max-w-lg flex flex-col items-center justify-center">
            <div className="hidden lg:flex mb-6 w-full">
              {/* <div className="MuiStepper-root MuiStepper-horizontal MuiStepper-alternativeLabel muirtl-1nfr674">
                <div className="MuiStep-root MuiStep-horizontal MuiStep-alternativeLabel muirtl-mk57kv">
                  <span className="MuiStepLabel-root MuiStepLabel-horizontal MuiStepLabel-alternativeLabel muirtl-1abj2s5">
                    <span className="MuiStepLabel-iconContainer Mui-active MuiStepLabel-alternativeLabel muirtl-a5nipc">
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiStepIcon-root Mui-active muirtl-b3o3yp"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="12"></circle>
                        <text
                          className="MuiStepIcon-text muirtl-yi5re8"
                          x="12"
                          y="12"
                          textAnchor="middle"
                          dominantBaseline="central"
                        >
                          1
                        </text>
                      </svg>
                    </span>
                    <span className="MuiStepLabel-labelContainer MuiStepLabel-alternativeLabel muirtl-h2cmlr">
                      <span className="MuiStepLabel-label Mui-active MuiStepLabel-alternativeLabel muirtl-16orvjf">
                        احراز هویت
                      </span>
                    </span>
                  </span>
                </div>
                <div className="MuiStep-root MuiStep-horizontal MuiStep-alternativeLabel muirtl-mk57kv">
                  <div className="MuiStepConnector-root MuiStepConnector-horizontal MuiStepConnector-alternativeLabel Mui-disabled muirtl-15oeqyl">
                    <span className="MuiStepConnector-line MuiStepConnector-lineHorizontal muirtl-95m0ql"></span>
                  </div>
                  <span className="MuiStepLabel-root MuiStepLabel-horizontal Mui-disabled MuiStepLabel-alternativeLabel muirtl-1abj2s5">
                    <span className="MuiStepLabel-iconContainer Mui-disabled MuiStepLabel-alternativeLabel muirtl-a5nipc">
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiStepIcon-root muirtl-b3o3yp"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="12"></circle>
                        <text
                          className="MuiStepIcon-text muirtl-yi5re8"
                          x="12"
                          y="12"
                          textAnchor="middle"
                          dominantBaseline="central"
                        >
                          2
                        </text>
                      </svg>
                    </span>
                    <span className="MuiStepLabel-labelContainer MuiStepLabel-alternativeLabel muirtl-h2cmlr">
                      <span className="MuiStepLabel-label Mui-disabled MuiStepLabel-alternativeLabel muirtl-16orvjf">
                        تکمیل اطلاعات
                      </span>
                    </span>
                  </span>
                </div>
                <div className="MuiStep-root MuiStep-horizontal MuiStep-alternativeLabel muirtl-mk57kv">
                  <div className="MuiStepConnector-root MuiStepConnector-horizontal MuiStepConnector-alternativeLabel Mui-disabled muirtl-15oeqyl">
                    <span className="MuiStepConnector-line MuiStepConnector-lineHorizontal muirtl-95m0ql"></span>
                  </div>
                  <span className="MuiStepLabel-root MuiStepLabel-horizontal Mui-disabled MuiStepLabel-alternativeLabel muirtl-1abj2s5">
                    <span className="MuiStepLabel-iconContainer Mui-disabled MuiStepLabel-alternativeLabel muirtl-a5nipc">
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiStepIcon-root muirtl-b3o3yp"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="12"></circle>
                        <text
                          className="MuiStepIcon-text muirtl-yi5re8"
                          x="12"
                          y="12"
                          textAnchor="middle"
                          dominantBaseline="central"
                        >
                          3
                        </text>
                      </svg>
                    </span>
                    <span className="MuiStepLabel-labelContainer MuiStepLabel-alternativeLabel muirtl-h2cmlr">
                      <span className="MuiStepLabel-label Mui-disabled MuiStepLabel-alternativeLabel muirtl-16orvjf">
                        ثبت سفارش
                      </span>
                    </span>
                  </span>
                </div>
              </div> */}
              <Box sx={{ width: "100%" }}>
                <Stepper activeStep={1} alternativeLabel>
                  {steps.map((label) => (
                    <Step
                      key={label}
                      sx={{
                        "& .MuiStepLabel-root .Mui-completed": {
                          color: "white", // circle color (COMPLETED)
                        },
                        "& .MuiStepIcon-text": {
                          color: "white",
                          fontSize: "12px",
                          backgroundColor: "#173D92!important", // circle color (COMPLETED)
                        },
                        "& .MuiStepLabel-root .Mui-active": {
                          color: "#173D92!important", // circle color (COMPLETED)
                        },
                        "& .MuiStepLabel-label": {
                          fontFamily: "var(--estedad-font)", // circle color (ACTIVE)
                        },
                      }}
                    >
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </div>
            <img
              alt="وبسایت آموزش برنامه نویسی |فرانت هوکس"
              srcSet="/assets/img/cash.webp 256w, /assets/img/cash.webp 640w"
              src="/assets/img/cash.webp 640w"
              width="200"
              height="200"
              decoding="async"
              data-nimg="1"
              className=""
              loading="lazy"
              style={{ color: "transparent" }}
            />
            <h2 className="text-2xl font-extraBlack text-white">
              یادگیری مهارت برنامه نویسی
            </h2>
            <p className="text-white text-center mt-2 text-opacity-80 text-sm leading-7 max-w-sm">
              برنامه نویسی مهارتیه که نیاز همیشگی جامعه است و هیچ ریسکی نداره.
              شما روی خودتان سرمایه گذاری می کنید تا رشد کنید و آینده بهترهی را
              رقم بزنید.
            </p>
            <a href="/learning-path">
              <button
                className="flex items-center gap-x-2 mt-4 rounded-3xl px-5 py-3 text-white border-2 border-white border-opacity-50 text-sm muirtl-ww0lte"
                tabIndex="0"
                type="button"
                style={{
                  background:
                    "linear-gradient(100deg, rgba(255, 255, 255, 0.2) -6.84%, rgba(255, 255, 255, 0) 100%)",
                }}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6"
                  >
                    <path
                      fill="currentColor"
                      d="m3.353 14.812.73-.175-.73.175Zm0-5.979.73.175-.73-.175Zm17.294 0-.73.175.73-.175Zm0 5.979-.73-.175.73.175Zm-5.597 5.487-.168-.731.168.73Zm-6.1 0-.168.73.168-.73Zm0-16.953.168.73-.168-.73Zm6.1 0-.168.73.168-.73ZM4.082 14.637a12.089 12.089 0 0 1 0-5.63l-1.459-.349a13.589 13.589 0 0 0 0 6.328l1.46-.349Zm15.836-5.63a12.087 12.087 0 0 1 0 5.63l1.459.35a13.588 13.588 0 0 0 0-6.329l-1.46.35Zm-5.036 10.56a12.868 12.868 0 0 1-5.764 0l-.336 1.463c2.117.486 4.32.486 6.436 0l-.336-1.462ZM9.117 4.078a12.865 12.865 0 0 1 5.764 0l.336-1.462a14.365 14.365 0 0 0-6.436 0l.336 1.462Zm0 15.49c-2.506-.575-4.452-2.49-5.036-4.93l-1.459.35c.72 3.005 3.11 5.342 6.16 6.043l.335-1.462Zm6.1 1.463c3.048-.701 5.44-3.038 6.159-6.044l-1.46-.349c-.583 2.44-2.53 4.355-5.036 4.93l.337 1.463Zm-.336-16.953c2.506.576 4.452 2.491 5.036 4.93l1.459-.349c-.72-3.005-3.11-5.342-6.16-6.043l-.335 1.462Zm-6.1-1.462c-3.048.701-5.44 3.038-6.159 6.043l1.46.35c.583-2.44 2.53-4.355 5.035-4.931l-.336-1.462ZM14.831 21c0-1.464.001-2.485.107-3.255.102-.747.29-1.146.582-1.432l-1.05-1.071c-.623.61-.892 1.38-1.018 2.3-.123.895-.121 2.037-.121 3.458h1.5Zm5.491-6.868c-1.45 0-2.612-.002-3.522.118-.93.123-1.71.384-2.33.992l1.05 1.071c.293-.288.706-.474 1.476-.576.79-.104 1.834-.105 3.326-.105v-1.5Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokwidth="1.5"
                      d="M9 9h3m-3 3h5"
                    ></path>
                  </svg>
                </span>
                نقشه راه یادگیری به برنامه نویسی
                <span className="MuiTouchRipple-root muirtl-w0pj6f"></span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
