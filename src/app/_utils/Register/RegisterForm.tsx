"use client";

import { useRegister } from "./useRegister";
import { useRegisterForm } from "./useRegisterSchema";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useRegisterForm();

  const onSubmit = useRegister;
  return (
    <div className="w-full ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col p-4 gap-4 text-center"
      >
        <input
          {...register("first_name")}
          type="text"
          placeholder="First Name"
          className="p-4 border border-gray-200 rounded-md"
        />
        {errors.first_name && (
          <p className="text-red-500 text-sm mt-1">
            {errors.first_name.message}
          </p>
        )}
        <input
          {...register("last_name")}
          type="text"
          placeholder="Last Name"
          className="p-4 border border-gray-200 rounded-md"
        />
        {errors.last_name && (
          <p className="text-red-500 text-sm mt-1">
            {errors.last_name.message}
          </p>
        )}
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="p-4 border border-gray-200 rounded-md"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
        <input
          {...register("country")}
          type="text"
          placeholder="Country"
          className="p-4 border border-gray-200 rounded-md"
        />
        {errors.country && (
          <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
        )}
        <input
          {...register("mobile_no")}
          type="text"
          placeholder="Mobile"
          className="p-4 border border-gray-200 rounded-md"
        />
        {errors.mobile_no && (
          <p className="text-red-500 text-sm mt-1">
            {errors.mobile_no.message}
          </p>
        )}
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="p-4 border border-gray-200 rounded-md"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
        <input
          {...register("confirmed_password")}
          type="password"
          placeholder="confirmed_password"
          className="p-4 border border-gray-200 rounded-md"
        />
        {errors.confirmed_password && (
          <p className="text-red-500 text-sm mt-1">
            {errors.confirmed_password.message}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-fit border px-4 py-2 rounded-2xl mx-auto hover:bg-black hover:text-white active:bg-black active:text-white"
        >
          {isSubmitting ? "Registering ..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
