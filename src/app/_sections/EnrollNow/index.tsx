"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
const countries = ["Malaysia", "Singapore", "Vietnam", "Thailand"] as const;
const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, "Full name is required")
    .max(50, "Name too long")
    .regex(/^[a-zA-Z\s]*$/, "Name should only contain letters"),
  mobile: z
    .string()
    .min(8, "Mobile number too short")
    .max(15, "Mobile number too long")
    .regex(/^\d+$/, "Mobile number must contain only digits"),

  email: z.string().email("Invalid email format").toLowerCase().trim(),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us at least 10 characters")
    .max(100, "You reached the max."),

  country: z.enum(countries, {
    message: "Please select a valid country from the list",
  }),
});

type FormData = z.infer<typeof contactFormSchema>;

const EnrollNow = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: FormData) => {
    console.log("Submit to API:", data);
    await fetch("https://formspree.io/f/mbdzebdg", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { Accept: "application/json" },
    });
    alert("Message Sent.");
  };

  return (
    <section className="w-full h-full text-center mx-auto max-w-380">
      {/* top title of section */}

      {/* parent wrapper here */}
      <div
        className={`w-full relative flex flex-col justify-end items-center 
        h-180 sm:h-165 xl:h-185 overflow-hidden 
        bg-[url('/images/bg-3.png')] bg-no-repeat bg-size-[160%] bg-top`}
      >

        {/* title */}
        <h3 className=" text-3xl text-light-blue font-semibold">Enquire Now</h3>

        {/* enquiry form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full grid grid-cols-12 gap-4 py-8  px-10 sm:px-20  min-h-112"
        >
          <div className="w-full col-span-12 sm:col-span-6">
            <input
              {...register("name")}
              placeholder="Name"
              className="border border-yellow-200 p-4 focus:border-yellow-400 w-full rounded-md"
            />
            {errors.name && (
              <span className="text-red-500 text-xs">
                {errors.name.message}
              </span>
            )}
          </div>{" "}
          <div className="w-full col-span-12 sm:col-span-6">
            <input
              {...register("email")}
              placeholder="Email"
              className="border border-yellow-200 p-4 focus:border-yellow-400 w-full"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="w-full col-span-12 sm:col-span-6">
            <input
              {...register("mobile")}
              placeholder="Mobile No"
              className="border border-yellow-200 p-4 focus:border-yellow-400 w-full rounded-md"
            />
            {errors.mobile && (
              <span className="text-red-500 text-xs">
                {errors.mobile.message}
              </span>
            )}
          </div>{" "}
          <div className="w-full col-span-12 sm:col-span-6">
            <input
              {...register("country")}
              placeholder="Country of Residence"
              className="border border-yellow-200 p-4 focus:border-yellow-400 w-full rounded-md"
            />{" "}
            {errors.country && (
              <span className="text-red-500 text-xs">
                {errors.country.message}
              </span>
            )}
          </div>
          <div className="w-full col-span-12">
            <textarea
              {...register("message")}
              placeholder="Enter your message here"
              rows={4}
              className="border border-yellow-200 p-4 focus:border-yellow-400 w-full rounded-md h-full"
            />
            {errors.message && (
              <span className="text-red-500 text-xs">
                {errors.message.message}
              </span>
            )}
          </div>
          <div className="col-span-12 flex items-center justify-center">
            <button
              disabled={isSubmitting}
              className="text-white bg-orange-400 py-2 px-4 rounded-md font-bold hover:bg-amber-500 transition-all"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EnrollNow;
