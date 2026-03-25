import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
 
export const loginSchema = z.object({
  email: z
    .string()
    .min(3, { message: "Email is required" })
    .email({ message: "Must be a valid email address" }),

  password: z
    .string()
    .max(255, { message: "Password should not exceed 255 characters" })
    .min(8, { message: "Password must be at least 8 digits." }),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

