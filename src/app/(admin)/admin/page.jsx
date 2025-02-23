"use client";
import React from "react";
import { useMutation } from "@tanstack/react-query";

//? import service
import { createCourse } from "@/services/couesesServices";

//? import components
import TextFeild from "@/common/TextFeild";

function page() {
  const {
    isPending,
    data,
    mutateAsync: mutateCreateCourse,
  } = useMutation({ mutationFn: createCourse });

  const formData = new FormData(); // Assuming the form is the target

  const inputHandler = async (event) => {
    const file = event.target.files[0];
    formData.append("file", file);
  };

  const posterHandler = async (event) => {
    event.preventDefault();

    // Extract form data or other necessary data from the event

    try {
      // Call the mutation function with the extracted data
      const { message } = await mutateCreateCourse(formData);
      console.log(message); // Log success message
    } catch (error) {
      console.error("Error in posterHandler:", error); // Log error
    }
  };

  return (
    <div className="container md:max-w-screen-xl mx-auto my-4">
      <form onSubmit={posterHandler}>
        <TextFeild
          label="نام دوره"
          name="courseName"
          type="text"
          value=""
          placeHolder="نام دوره مورد نظر"
        />
        {/* <label htmlFor="poster">
          <input id="poster" type="file" onChange={inputHandler} />
        </label> */}
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default page;
