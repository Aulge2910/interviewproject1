"use client";

import { useLogin } from "./useLogin";
import { useLoginForm } from "./useLoginSchema";

const LoginForm = ({ onClose }: { onClose: () => void }) => {
  const { Login, isSubmitting: isRegistering } = useLogin(onClose);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useLoginForm();

  const onSubmit = useLogin;
  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(Login)}
        className="w-full flex flex-col p-4 gap-4 text-center"
      >
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
          {...register("password")}
          type="password"
          placeholder="Password"
          className="p-4 border border-gray-200 rounded-md"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-fit border px-4 py-2 rounded-2xl mx-auto hover:bg-black hover:text-white active:bg-black active:text-white"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
