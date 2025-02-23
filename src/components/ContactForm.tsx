"use client";

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

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
    <form
      className="row g-3 shadow p-3 rounded-5"
      onSubmit={handleSubmit(sendEmail)}
    >
      <h4>Send me an email :</h4>
      <div className="col-lg-6">
        {/* Name Input */}
        <div className="form-floating mb-3 ">
          <input
            type="text"
            id="form_name"
            className={`form-control ${errors.from_name && "is-invalid"}`}
            placeholder="your name"
            {...register("from_name", { required: "⚠ Name is required" })}
          />
          <label htmlFor="form_name">Name</label>
          {errors.from_name && (
            <div className="alert alert-danger mt-2 p-2" role="alert">
              {errors.from_name.message}
            </div>
          )}
        </div>
      </div>

      {/* Email Input */}
      <div className="col-lg-6">
        <div className="form-floating mb-3">
          <input
            type="email"
            id="form_email"
            className={`form-control ${errors.user_email && "is-invalid"}`}
            placeholder="your email"
            {...register("user_email", {
              required: "⚠ Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "⚠ Invalid email format",
              },
            })}
          />
          <label htmlFor="form_email">Email</label>
          {errors.user_email && (
            <div className="alert alert-danger mt-2 p-2" role="alert">
              {errors.user_email.message}
            </div>
          )}
        </div>
      </div>

      {/* Message Input */}
      <div>
        <div className="form-floating">
          <textarea
            className={`form-control ${errors.message && "is-invalid"}`}
            id="form_message"
            style={{ height: "120px" }}
            {...register("message", {
              required: "⚠ Message cannot be empty",
              validate: (value) =>
                value.trim().length > 0 || "⚠ Message cannot be just spaces!",
            })}
          />
          <label htmlFor="form_message">Message</label>
          {errors.message && (
            <div className="alert alert-danger mt-2 p-2" role="alert">
              {errors.message.message}
            </div>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-dark">
        Send Message
      </button>
    </form>
  );
};
