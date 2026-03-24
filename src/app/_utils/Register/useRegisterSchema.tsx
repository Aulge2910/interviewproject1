"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
 import { registerSchema, RegisterFormValues } from "@/app/api/register/schema";


export const useRegisterForm = () => {
  return useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      mobile_no: "",
      country: undefined,
      password: "",
      confirmed_password: "",
    },
  });
};
