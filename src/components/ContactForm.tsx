"use client";

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Button } from "./Button";
import { IoIosSend } from "react-icons/io";
import { motion } from "framer-motion";

interface FormData {
  from_name: string;
  user_email: string;
  message: string;
}

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const sendEmail = (data: FormData) => {
    emailjs
      .send(
        "service_p6n8lpm",
        "template_jpksnsa",
        {
          from_name: data.from_name,
          email_id: data.user_email,
          message: data.message,
        },
        "Bciyw3TNyNzr7ShGT"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          reset();
        },
        (error) => {
          toast.error("Error Sending the message", error);
        }
      );
  };
  return (
    <motion.form
      className="border py-3 xl:p-6 mt-5 border-light_gray rounded-lg"
      onSubmit={handleSubmit(sendEmail)}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 80,
        delay: 0.1,
      }}
    >
      <div className="container flex flex-col gap-5">
        <h3 className="text-xl">Send me an email :</h3>
        {/* Name Input */}
        <div className="relative">
          <input
            type="text"
            id="form_name"
            className={`block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-black peer ${
              errors.from_name && "focus:border-red-600"
            }`}
            placeholder=" "
            {...register("from_name", { required: "⚠ Name is required" })}
          />
          <label
            htmlFor="form_name"
            className="absolute text-sm text-light_gray duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Name
          </label>
        </div>
        {errors.from_name && (
          <div
            id="alert-border-2"
            className="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-500 bg-red-100"
            role="alert"
          >
            <div className="ms-3 text-sm font-medium">
              {errors.from_name.message}
            </div>
          </div>
        )}

        {/* Email Input */}
        <div className="relative">
          <input
            type="email"
            id="form_email"
            className={`block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-black peer ${
              errors.user_email && "focus:border-red-600"
            }`}
            placeholder=" "
            {...register("user_email", {
              required: "⚠ Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "⚠ Invalid email format",
              },
            })}
          />
          <label
            htmlFor="form_email"
            className="absolute text-sm text-light_gray duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Email
          </label>
        </div>
        {errors.user_email && (
          <div
            id="alert-border-2"
            className="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-500 bg-red-100"
            role="alert"
          >
            <div className="ms-3 text-sm font-medium">
              {errors.user_email.message}
            </div>
          </div>
        )}

        {/* Message Input */}
        <textarea
          id="form_message"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:border-black/80 ring-0 outline-none"
          placeholder="Message ..."
          defaultValue={""}
          {...register("message", {
            required: "⚠ Message cannot be empty",
            validate: (value) =>
              value.trim().length > 0 || "⚠ Message cannot be just spaces!",
          })}
        />
        {errors.message && (
          <div
            id="alert-border-2"
            className="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-500 bg-red-100"
            role="alert"
          >
            <div className="ms-3 text-sm font-medium">
              {errors.message.message}
            </div>
          </div>
        )}

        {/* Submit Button */}
        <Button type="submit">
          Send Message <IoIosSend className="inline-block text-xl ms-2" />
        </Button>
      </div>
    </motion.form>
  );
};
