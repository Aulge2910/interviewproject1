import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
 
const COUNTRIES = ["Malaysia", "Vietnam", "Thailand", "Other"] as const;
type CountryName = (typeof COUNTRIES)[number];

export const registerSchema = z
  .object({
    first_name: z
      .string()
      .min(1, "First name is required")
      .max(50, { message: "First name should not exceed 50 characters" }),
    last_name: z
      .string()
      .min(1, "Last name is required")
      .max(50, { message: "Last name should not exceed 50 characters" }),
    country: z.enum(COUNTRIES, {
      message: "Please select a valid country",
    }),
    mobile_no: z
      .string()
      .min(5, "Mobile number is too short")
      .max(20, { message: "Mobile Number should not exceed 20 digits" }),
    password: z
      .string()
      .max(255, { message: "Password should not exceed 255 characters" })
      .min(8, { message: "Password must be at least 8 digits." }),
    confirmed_password: z
      .string()
      .min(8, "Confirm password is required")
      .max(255, { message: "Password should not exceed 255 characters" }),
    email: z
      .string()
      .min(3, { message: "Email is required" })
      .email({ message: "Must be a valid email address" }),
  })
  .refine((data) => data.password === data.confirmed_password, {
    message: "Passwords don't match",
    path: ["confirmed_password"],
  });;

export type RegisterFormValues = z.infer<typeof registerSchema>;

export const useRegisterForm = () => {
  return useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      mobile_no: "",
      country: "Malaysia",
      password: "",
      confirmed_password: "",
    },
  });
};
