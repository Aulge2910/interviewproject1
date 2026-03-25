import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema,LoginFormValues } from "@/app/api/login/schema";
 
export const useLoginForm = () => {
  return useForm<LoginFormValues>({
    
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  });
};
