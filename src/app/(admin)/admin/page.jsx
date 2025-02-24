"use client";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import swal from "sweetalert";

//? import service
import { createCourse } from "@/services/couesesServices";

//? import components
import TextFeild from "@/common/TextField";

//? import constants
import { coursesFormData } from "@/constants/coursesFormData";

function page() {
  const [courseData, setCourseData] = useState({});

  const {
    isPending,
    data,
    mutateAsync: mutateCreateCourse,
  } = useMutation({ mutationFn: createCourse });

  const formData = new FormData(); // Assuming the form is the target

  const fileHandler = async (event) => {
    const file = event.target.files[0];
    formData.append("file", file);
  };

  const dataHandler = (event) => {
    const { name, value } = event.target;

    setCourseData({ ...courseData, [name]: value });
  };

  const posterHandler = async (event) => {
    event.preventDefault();
    formData.append("name", courseData?.name);
    formData.append("timeLength", courseData?.timeLength);
    formData.append("status", courseData?.status || 1);
    formData.append("price", courseData?.price);
    formData.append("discount", courseData?.discount);

    // Extract form data or other necessary data from the event

    try {
      // Call the mutation function with the extracted data
      const { message } = await mutateCreateCourse(formData);
      swal({
        title: message,
        text: "با موفقیت ثبت شد",
        icon: "success",
        button: "بازگشت",
      });
    } catch (error) {
      console.error("Error in posterHandler:", error); // Log error
    }
  };

  return (
    <div className="container md:max-w-screen-xl mx-auto my-4">
      <form onSubmit={posterHandler} className="flex flex-col gap-y-4">
        {coursesFormData.map((input) => {
          if (input.type === "select") {
            return (
              <label key={input.id}>
                <span className="text-blue-500 text-xl font-bold mb-2">
                  {input.label}
                </span>
                <select
                  className="form-input w-full rounded-lg bg-gray-50 focus:outline-none p-2 shadow shadow-gray-100 border-0 focus:border focus:border-blue-500"
                  style={{ border: "1px solid rgb(217 217 217)" }}
                  onChange={dataHandler}
                  name={input.name}
                >
                  <option defaultChecked hidden id={1} value={1}>
                    درحال برگذاری
                  </option>
                  {input.items.map((opt) => (
                    <option id={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </label>
            );
          }
          return (
            <TextFeild
              key={input.id}
              label={input.label}
              name={input.name}
              type={input.type}
              value={courseData[input.name]}
              placeHolder={input.placeHolder}
              handler={dataHandler}
            />
          );
        })}
        <div>
          <label className="flex flex-col items-start" htmlFor="file">
            <span className="text-blue-500 text-xl font-bold mb-2">
              عکس دوره
            </span>

            <input type="file" name="file" id="file" onChange={fileHandler} />
          </label>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default page;
